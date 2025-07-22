'use client'

import Code from "@/components/code-block";
import Message from "@/components/message";
import Prompt from "@/components/message";
import Loading from "@/icons/loading";
import { IconArrowAutofitUp, IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react"

function cleanCode(raw: string): string {
  return raw
    .replace(/^```(?:python)?\s*/i, "")
    .replace(/```$/, "") 
    .trim();
}

export default function Home(){
    const [input, setInput] = useState<string>('')
    const [response, setResponse] = useState<string>('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(){
        setInput('');
        setLoading(true);
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({prompt : input})
        })

        const data = await res.json();
        const code = cleanCode(data.text);
        setResponse(code);
        setLoading(false)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
        if(event.key === "Enter"){
            handleSubmit()
        }
    }

    return (
        <div className="flex flex-col items-center h-full">
             <Code response={response} loading={loading}/>
            <div className="fixed bottom-0 bg-[#0a0a0a] pb-10 flex">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Enter your message" className="h-full rounded-xl border border-white/10 w-[52vw] p-3 focus:outline-none "/>
                <Link href={''} className="p-2.5 rounded-full cursor-pointer hover:bg-neutral-300 hover:text-black hover:shadow-lg shadow-cyan-500  border border-white/10 ml-5" onClick={handleSubmit}><IconArrowUp className=""/></Link>
            </div>
        </div>
    )
}