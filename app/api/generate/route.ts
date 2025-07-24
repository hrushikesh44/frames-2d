
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const generatedPrompt = `You are an expert in Manim, the mathematical animation library. Generate clean, runnable Python code that uses Manim's Scene or MovingCameraScene classes to create a visual animation.

- The output should be a valid .py file.
- Use from manim import * at the top.
- Define a single scene class that inherits from Scene or MovingCameraScene.
- Keep the class name simple and PascalCase (e.g., CreateCircle, GraphSineWave, etc.).
- Always include a construct(self) method.
- Avoid external dependencies. Use only Manim's built-in features.
- Do not include any execution instructions (e.g., no command-line usage).
- The code must be self-contained and ready to render with manim -pql input.py SceneClassName.

Only return the Python code. No explanations. with ${prompt}`

  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  const result = await model.generateContentStream(generatedPrompt);
  const response = await result.response;
  const text = response.text();

  return NextResponse.json({ text });
}
