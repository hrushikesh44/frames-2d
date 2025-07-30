'use client'
import Sidebar from "@/components/sidebar";
import VideoPlayer from "@/components/video";
import React from "react"

export default function Home(){
    const [videos, setVideos] = React.useState<string[] | undefined>()

    React.useEffect(() => {
        fetchVideos();
    }, [])
    const fetchVideos = async() => {
        try{
            const response = await fetch('/api/videos', {
                method: "GET",
                credentials: "include"
            })

            const data = await response.json()
            console.log(data)
            const url = data.userVideos
            //@ts-ignore
            const videoUrl = url.map(u => u.url)
            console.log(videoUrl)
            setVideos(videoUrl)
        } catch(error) {
            console.log('error fetching videos')
        }
    }
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-wrap items-center justify-center gap-5 pt-20">
            {videos?.map((url: string, idx: number ) => (
                <VideoPlayer url={url} key={idx}/>
            ))}
            </div>
        </div>
    )
}