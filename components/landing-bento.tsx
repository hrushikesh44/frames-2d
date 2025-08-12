import { IconArrowRight, IconCode, IconRobotFace, IconTopologyComplex, IconVideo } from "@tabler/icons-react";
import Image from "next/image";

export function Bento(){
    return(
        <div className="flex flex-col items-center w-4xl h-[80vh] justify-center p-4">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wide mb-10 text-[#fe7877]">Video Generation made easy</h1>
            <div className="grid h-full w-full grid-cols-6 grid-rows-4 gap-4">
                <div className="col-span-3 row-span-3 shadow-lg rounded-xl border border-neutral-400/30 transition-colors duration-300 group">
                    <div className="flex flex-col p-5">
                        <span><IconRobotFace stroke={1.5} className="text-[#fe7877] size-8"/><p className="font-bold text-xl pt-2">AI Generated</p></span>
                        <p className="text-sm text-neutral-500 pt-2">Generate 2D videos for educational purposes. Generate videos like shown below just with a prompt.</p>
                        <video src="/example.mp4" controls={false} loop autoPlay muted playsInline height={400} width={400} className="mt-5 rounded-xl"/>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 shadow-lg rounded-xl border border-neutral-400/30 transition-colors duration-300">
                    <div className="flex flex-col p-4">
                        <IconVideo stroke={1.5} className="text-[#fe7877] size-8"/>
                        <p className="font-bold text-xl pt-2">Free Download</p>
                        <p className="text-sm text-neutral-500 pt-2">Download videos for free and use them anywhere</p>
                    </div>
                </div>
                <div className="col-span-3 row-span-2 shadow-lg rounded-xl border border-neutral-400/30 transition-colors duration-300">
                    <div className="flex flex-col p-4">
                        <IconCode stroke={1.5} className="text-[#fe7877] size-8"/>
                        <p className="font-bold text-xl pt-2">Code Generation</p>
                        <p className="text-sm text-neutral-500 pt-2">The code that generates your video is available. Just copy the code and make any changes you need and use locally.</p>
                        <Image src={'/code.png'} width={500} height={800} alt="code snippet" className="mt-5 rounded-xl"/>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 shadow-lg rounded-xl border border-neutral-400/30 transition-colors duration-300">
                    <div className="flex flex-col p-4">
                        <IconTopologyComplex stroke={1.5} className="text-[#fe7877] size-8"/>
                        <p className="font-bold text-xl pt-2">Complex Topics</p>
                        <p className="text-sm text-neutral-500 pt-2">Ask AI to explain any complex topics in a very simple manner through visual explainations.</p>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 shadow-lg rounded-xl border border-neutral-400/30 transition-colors duration-300">
                    <div className="flex flex-col p-4">
                        <IconVideo stroke={1.5} className="text-[#fe7787] size-8"/>
                        <p className="font-bold text-[16px]">Start using now...</p>
                        <button className="text-white bg-[#fe7787] px-2 py-1 flex items-center justify-center mt-4 rounded-md group">Try it now{' '} <IconArrowRight className="group-hover:translate-x-1 transition-transform duration-200"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}