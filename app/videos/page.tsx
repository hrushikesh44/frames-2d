'use client'

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import React from "react";
import Sidebar from "@/components/sidebar";
import VideoPlayer from "@/components/video";

export default function Home(){
    type VideoItem = { id: string; url: string; userId: string };

    const [videos, setVideos] = React.useState<VideoItem[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 9;

    React.useEffect(() => {
        const fetchVideos = async() => {
            try{
                const response = await fetch('/api/videos', {
                    method: "GET",
                    credentials: "include"
                })

                const data: VideoItem[] = await response.json()
                setVideos(data.reverse())
            } catch(error) {
                console.log('error fetching videos', error)
            }
        }
        fetchVideos()
    }, [])

    const totalPages = Math.ceil((videos?.length || 0)  / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = videos?.slice(startIndex, startIndex + itemsPerPage);
    
    return(
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col pt-20">
                <p className="text-start text-2xl font-bold pl-32">Recent Videos</p>
            {currentData?.length === 0 ? (
                <p className="text-gray-500 text-center">Loading...</p>
                ) : (
                <>
                    <div className="flex flex-wrap gap-5 pl-32 min-h-screen ">
                        {currentData?.map((video: VideoItem) => (
                        <div key={video.id} className=" gap-5 ">
                        <VideoPlayer url={video.url} key={video.id}/>
                        </div>
                        ))}
                    </div>

                    {videos && <div className=" bottom-0 pt-4 w-screen flex justify-center items-center gap-2 border-t border-neutral-400/30">
                        <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border cursor-pointer hover:bg-black hover:text-white rounded-full disabled:opacity-50" type="button"
                        >
                        <IconArrowLeft />
                        </button>

                        <span className="px-3 py-1">{currentPage} / {totalPages || 1}</span>

                        <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="p-2 border cursor-pointer hover:bg-black hover:text-white rounded-full disabled:opacity-50" type="button"
                        >
                        <IconArrowRight/>
                        </button>
                    </div>}
                </>
            )}
            </div>
        </div>
    )
}


  