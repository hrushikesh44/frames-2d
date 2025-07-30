import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { db } from '@/lib/db';
import { videos } from '@/lib/db/schema';
import { auth } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers
  })

  if(!session?.user.id){
    return NextResponse.json(
        { error: 'Unauthorized - Please log in' },
        { status: 401 }
      );
  }
  const body = await req.json();
  const code: string = body.code;

  const dockerDir = path.join(process.cwd(), 'docker');
  const inputPath = path.join(dockerDir, 'input.py');

  if (!existsSync(dockerDir)) {
    mkdirSync(dockerDir, { recursive: true });
  }

  try {
    writeFileSync(inputPath, code);
  } catch (err) {
    console.error('Error writing input.py:', err);
    return NextResponse.json({ error: 'Failed to write input.py' }, { status: 500 });
  }

  const runDocker = () =>
  new Promise<string>((resolve, reject) => {
    exec(
      `docker run --rm --env-file .env -v ${dockerDir}:/code manim-exec:new`,
      (error, stdout, stderr) => {
        if (error) {
          console.error("Docker error:", stderr);
          reject(error);
        } else {
          console.log("Docker output:", stdout);
          const match = stdout.match(/VIDEO_URL::(https:\/\/[^\s]+)/);
          if (match) {
            resolve(match[1]); 
          } else {
            reject("No video URL found in output");
          }
        }
      }
    );
  });

  try {
    const videoUrl = await runDocker();
     const [newVideo] = await db.insert(videos).values({
      id: crypto.randomUUID(),
      url: videoUrl,
      userId: session.user.id,
    }).returning();

    return NextResponse.json({
      success: true,
      video: newVideo
    });
  } catch (err) {
    console.error('Error running container:', err);
    return NextResponse.json({ error: 'Failed to render and upload video' }, { status: 500 });
  }
}
