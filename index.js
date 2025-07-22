 import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({ apiKey: "AIzaSyDMiKm_OfMi0ec4v-NVB_WFBhc_B5u8uCw" });

const response = await ai.models.generateContentStream({
  model: "gemini-2.0-flash",
  contents: "You are an expert in writing manim code and you only give code when asked about.write code using manim to create a circle with redcolor and blue color both connected by a arrow",
});
let text = "";
for await (const chunk of response) {
  console.log(chunk.text);
  text += chunk.text;
}