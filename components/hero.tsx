'use client'

import Code from "@/components/code-block";
import Loading from "@/components/icons/loading";
import { IconArrowUp, IconBan } from "@tabler/icons-react";
import { useCallback, useState } from "react"
import { toast} from "react-hot-toast";
import VideoPlayer from "./video";
import { cleanCode } from "@/lib/cleancode";

export default function Hero(){
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
        setLoading(false);
        setRendered(false)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>){
        if(event.key === "Enter"){
            event.preventDefault();
            handleSubmit()
        }
    }

    const runCode = useCallback(async(code: string) => {
        console.log('clicked now')
        if(videoLoading) return toast.error('Please wait')
        if(rendered) return toast.error('Video is rendered and wont render same video again.' )
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
        
        try{
            setVideoUrl(data.video.url)
            setRendered(true)
            toast.success("video rendered successfully")
        } catch(error) {
            toast.error("error while generating video")
            setVideoLoading(false)
        }
        
        setVideoLoading(false)
    }, [videoLoading, rendered])

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-40px)]">
            <div className="flex flex-col overflow-hidden">
                    <div className="flex flex-col items-center">
                    <div className="sm:w-[60vw] lg:w-[40vw] flex flex-col pb-10 items-end gap-4">
                        {chat && <p className="text-xl text-end mt-10 p-2 border border-neutral-400 dark:border-neutral-600 rounded-xl">{chat}</p>}
                        {loading && <Loading />}
                    </div>
                    </div>
                {response && <Code response={response} onClick={() => runCode(response)} loading={videoLoading}/>}
                <div className="flex flex-col items-center justify-around">
                    {videoUrl && <VideoPlayer url={videoUrl}/>}
                </div>
            </div>
            <div className={`w-fit relative transition-all duration-300 ${ response || loading ? " mb-4" : " "}`}>
                {!response && !loading && <div>
                <p className="text-3xl font-bold text-center mb-5">Frames 2D</p>
                </div> }
                <div className={`${!response || !loading ?  " " : " sticky bottom-0"}`}>
                    <div className={`flex flex-col items-end shadow-lg border dark:border-neutral-400 h-fit p-2 rounded-2xl focus-within:border-2`}>
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-[80vw] 
                        sm:w-[60vw] lg:w-[40vw] resize-none overflow-hidden outline-none p-2 focus:outline-none transition-transform duration-200 placeholder:text-neutral-700 dark:placeholder:text-neutral-400  "
                        rows={1}
                        placeholder="Your idea into a video..."
                    />
                    <div className='p-1 border border-neutral-400 dark:border-neutral-600 h-fit w-fit rounded-full cursor-pointer justify-center'>
                        {value ? <IconArrowUp onClick={handleSubmit}/> : <IconBan className="cursor-not-allowed"/>}
                    </div>
                     </div>
                    <p className="text-sm text-center text-neutral-500 ">This version can not make cubes and 3d animations. Trying to fix this very soon.</p>
                </div>
            </div>
        </div>
    )
}