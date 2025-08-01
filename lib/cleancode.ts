
export function cleanCode(raw: string): string {
  return raw
    .replace(/^```(?:python)?\s*/i, "")
    .replace(/```$/, "") 
    .trim();
}