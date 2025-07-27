'use client'

import Code from "@/components/code-block";
import Loading from "@/components/icons/loading";
import {  IconAccessPointOff, IconArrowUp } from "@tabler/icons-react";
import { useState } from "react"

function cleanCode(raw: string): string {
  return raw
    .replace(/^```(?:python)?\s*/i, "")
    .replace(/```$/, "") 
    .trim();
}

export default function Home(){
    const [value, setValue] = useState<string>('')
    const [response, setResponse] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')
    const [videoLoading, setVideoLoading] = useState(false)
    const [rendered, setRendered] = useState(false)
    const [chat, setChat] = useState('')

    async function handleSubmit(){
        setChat(value);
        setValue('');
        setLoading(true);
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({prompt : value})
        })

        const data = await res.json();
        const code = cleanCode(data.text);
        setResponse(code);
        setLoading(false)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>){
        if(event.key === "Enter"){
            event.preventDefault();
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
        
        if(data.video){
            setVideoUrl(data.video)
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
        <div className="flex flex-col justify-center items-center min-h-screen overflow-auto">
            <div className="flex flex-col overflow-hidden">
                 <div className="flex flex-col items-center">
                    <div className="md:w-[40vw] lg:w-[40vw] flex flex-col pb-10 items-end gap-4">
                        <p className="text-xl text-end ">{chat}</p>
                        {loading && <Loading />}
                    </div>
                 </div>
                {response && <Code response={response} onClick={() =>runCode(response)}/>}
                    <div className="flex items-center justify-center">
                        {videoUrl && <video controls width={500} height={500} src={videoUrl} className="mt-10 mb-30" />}
                    </div>
            </div>
            <div className={`flex flex-col gap-3 ${!response || !loading && " mb-20"}`}>
                {!response && !loading && <div>
                <p className="text-3xl font-bold text-black/10 dark:text-[#fefefe] text-center">AI 2D VIDEO GENERATOR</p>
                </div> }
                <div className={`flex flex-col items-end bg-[#e4e4e4] dark:bg-neutral-800 border border-black/10 dark:border-white/10 h-fit p-2 rounded-2xl ${ response || loading ? " bottom-0" : " "}`}>
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-[40vw] resize-none overflow-hidden outline-none p-2 focus:outline-none transition-transform duration-200 placeholder:text-neutral-400 "
                    rows={1}
                    placeholder="Your idea into a video..."
                />
                <div className='p-1 bg-neutral-900 dark:bg-white hover:bg-neutral-700 dark:hover:bg-white/80 text-white dark:text-black h-fit w-fit rounded-full cursor-pointer justify-center'>
                    {value ? <IconArrowUp onClick={handleSubmit}/> : <IconAccessPointOff className="cursor-not-allowed"/>}
                </div>
             </div>
            </div>
        </div>
    )
}