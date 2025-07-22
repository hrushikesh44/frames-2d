
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const generatedPrompt = `You are an expert Python developer specializing in the Manim animation library. You generate clean, correct, and minimal Manim code (for ManimCE version ≥ 0.17). All code must be wrapped inside a Scene class with a construct method. Your output should be ready to run as a standalone Python script. Do not include explanations, markdown formatting, or text outside of the code block. Only return the Python code needed to produce the animation. Now Write code for this: ${prompt}`

  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  const result = await model.generateContentStream(generatedPrompt);
  const response = await result.response;
  const text = response.text();

  return NextResponse.json({ text });
}
