
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { auth } from '@/lib/auth';
import toast from 'react-hot-toast';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const session = await auth.api.getSession({
    headers: req.headers
  })

  if(!session?.user.id){
    return NextResponse.json({error: "SESSION EXPIRED"}, {status: 404})
  }

  const { prompt } = await req.json();

  const generatedPrompt = `You are an expert in Manim, the mathematical animation library. Generate clean, runnable Python code that uses Manim's Scene or MovingCameraScene classes to create a visual animation.

- The output should be a valid .py file.
- Use from manim import * at the top.
- Define a single scene class that inherits from Scene or MovingCameraScene.
- Do not add animations unless specified.
- Keep the class name simple and PascalCase (e.g., CreateCircle, GraphSineWave, etc.).
- Always include a construct(self) method.
- Avoid external dependencies. Use only Manim's built-in features.
- Do not include any execution instructions (e.g., no command-line usage).
- Always allow the elements inside the video to be in the middle unless mentioned in the ${prompt}.
- Dont ever overlap any element on one another either it be a shape or arrow or text.
- Always fit the entire scene inside the view and do not go outside the viewport.
- Do not give any comments on the code , just only give code.
- Always try to explain using shapes and very limited usage of texts.
- Do not allow shapes, arrows and text to overlap on one another.
- Also always keep the text size inside the element or outside the element and but never allow text to overflow the shapes.
- The code must be self-contained and ready to render with manim -pql input.py SceneClassName.

Only return the Python code. No explanations. with ${prompt}`

  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  const result = await model.generateContentStream(generatedPrompt);
  const response = await result.response;
  const text = response.text();
  const recent  = await db.insert(chats).values({
    id: crypto.randomUUID(),
    prompt: prompt,
    chat: text,
    userId: session.user.id
  })


  return NextResponse.json({ text, recent });
}
