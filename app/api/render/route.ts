import { NextRequest, NextResponse } from 'next/server';
import { writeFile, existsSync, mkdirSync, readFileSync } from 'fs';
import { exec } from 'child_process';
import path from 'path';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const code: string = body.code;

  const inputPath = path.join(process.cwd(), 'docker', 'input.py');
  const videoOutPath = path.join(process.cwd(), 'docker', 'media/videos/input/480p15.mp4');
  const publicVideoPath = path.join(process.cwd(), 'public', 'videos', 'output.mp4');

  writeFile(inputPath, code, async (err) => {
    if (err) {
      console.error('Failed to write input.py:', err);
    }
  });

  const runDocker = () =>
    new Promise<void>((resolve, reject) => {
      exec(
        `docker run --rm -v ${path.join(process.cwd(), 'docker')}:/code manim-exec`,
        (error, stdout, stderr) => {
          if (error) {
            console.error('Docker Error:', stderr);
            reject(error);
          } else {
            console.log('Docker Output:', stdout);
            resolve();
          }
        }
      );
    });

  try {
    await runDocker();

    if (!existsSync(videoOutPath)) {
      return NextResponse.json({ error: 'Video not found' }, { status: 500 });
    }

    if (!existsSync(path.dirname(publicVideoPath))) {
      mkdirSync(path.dirname(publicVideoPath), { recursive: true });
    }

    const buffer = readFileSync(videoOutPath);
    writeFile(publicVideoPath, buffer, (err) => {
      if (err) console.error('Error copying to public/videos:', err);
    });

    return NextResponse.json({ video: '/videos/output.mp4' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to render video' }, { status: 500 });
  }
}
