import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { exec } from 'child_process';

export async function POST(req: NextRequest) {

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
    return NextResponse.json({ video: videoUrl });
  } catch (err) {
    console.error('Error running container:', err);
    return NextResponse.json({ error: 'Failed to render and upload video' }, { status: 500 });
  }
}
