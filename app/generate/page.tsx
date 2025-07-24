'use client'

import Code from "@/components/code-block";
import { IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useState } from "react"

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
    const [videoUrl, setVideoUrl] = useState('')
    const [videoLoading, setVideoLoading] = useState(false)
    const [rendered, setRendered] = useState(false)

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

    const runCode = async(code: string) => {
        console.log('clicked now')
        if(videoLoading || rendered) return
        setVideoLoading(true)
        setVideoUrl('');

        const res = await fetch('/api/render', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                code: code
            })
        })

        const data = await res.json();
        console.log(data)
        
        if(data.videoUrl){
            setVideoUrl(data.videoUrl)
        } else if(data.error == "Failed to render video") {
            console.log('error while rendering')
            return
        } else if (data.error == "Video not found" ){
            console.log('Video path not found')
            return
        }
        
        setVideoLoading(false)
        setRendered(true)
    }
    // , [videoLoading, rendered])

    return (
        <div className="flex flex-col items-center h-full">
            {response && <Code response={response} loading={loading} onClick={() =>runCode(response)}/>}
            {videoUrl && <div className="mt-6">
                        <video controls width={600} src={videoUrl} />
                     </div> }
            <div className="fixed bottom-0 bg-[#0a0a0a] pb-10 flex">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Enter your message" className="h-full rounded-xl border border-white/10 w-[52vw] p-3 focus:outline-none "/>
                <Link href={''} className="p-2.5 rounded-full cursor-pointer hover:bg-neutral-300 hover:text-black hover:shadow-lg shadow-cyan-500  border border-white/10 ml-5" onClick={handleSubmit}><IconArrowUp className=""/></Link>
            </div>
        </div>
    )
}