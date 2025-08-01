'use client'

import Sidebar from "@/components/sidebar";
import VideoPlayer from "@/components/video";
import { IconArrowLeft, IconArrowRight, IconLoader2 } from "@tabler/icons-react";
import React from "react";

export default function Home(){
    const [videos, setVideos] = React.useState<string[]>();
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 9;

    React.useEffect(() => {
        const fetchVideos = async() => {
            try{
                const response = await fetch('/api/videos', {
                    method: "GET",
                    credentials: "include"
                })

                const data = await response.json()
                setVideos(data.reverse())
            } catch(error) {
                console.log('error fetching videos')
            }
        }
        fetchVideos()
    }, [])

    const totalPages = Math.ceil(videos?.length!  / itemsPerPage);
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
                    <div className="flex flex-wrap items-center gap-5 pl-32">
                        {currentData?.map((video: any) => (
                        <div key={video.id} className=" gap-5 ">
                        <VideoPlayer url={video.url} key={video.id}/>
                        </div>
                        ))}
                    </div>

                    {videos && <div className="mt-4 flex justify-center gap-2 mb-20 ">
                        <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border cursor-pointer hover:bg-black hover:text-white rounded-full disabled:opacity-50"
                        >
                        <IconArrowLeft />
                        </button>

                        <span className="px-3 py-1">{currentPage} / {totalPages || 1}</span>

                        <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="p-2 border cursor-pointer hover:bg-black hover:text-white rounded-full disabled:opacity-50"
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


  