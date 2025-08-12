'use client'

import Link from "next/link";
import { Bento } from "@/components/landing-bento";
import { ClipIcon } from "@/components/icons/clip";
import { IconArrowRight, IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/toggle-theme";

export default function Home(){
    return(
        <div className="flex flex-col items-center justify-center relative">
            <motion.section 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5, ease: "linear"}}
            id="main" className="fixed top-0 z-50 backdrop-blur-3xl flex items-center justify-around w-full px-5 py-3 h-16">
                <Link href={'/'} className="font-bold text-lg tracking-tight ">
                    Frames 2D
                </Link>
                <div className="flex items-center gap-4">
                    <Link href={'https://github.com/hrushikesh44/frames-2d'} target="_blank" className="p-2 hover:bg-neutral-400/30 rounded-full"><IconBrandGithub /></Link>
                    <Link href={'https://x.com/hrushikesh_44'} target="_blank" className="p-2 hover:bg-neutral-400/30 rounded-full"><IconBrandX /></Link>
                    <ThemeToggle />
                </div>
            </motion.section>
            <motion.section 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5, ease: "easeInOut"}}
            id="video-section" className="flex flex-col items-center mt-40">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">Generate 2D videos</h1>
                <p className="text-lg font-light mb-6 text-neutral-500 text-center max-w-3xl">Frames 2D is a tool that allows you to generate 2D videos with just a prompt. Videos generated in this application are by using  <a href="https://github.com/3b1b/manim">manim</a> library.</p>
                <Link href={'/generate'} className="flex group border border-neutral-400/40 shadow-lg px-2 py-1 rounded-md hover:bg-[#fe7877] hover:text-white" type="button">Get Started <IconArrowRight className="group-hover:translate-x-1 transition-transform duration-200"/></Link>
                <p className="mt-10 text-[16px] text-neutral-500 font-light">Generate videos like below just with a prompt.</p>
                <video controls={false} width={600} height={600} autoPlay muted loop playsInline src="/rabbitdemo.mp4" className="mt-5 rounded-lg border border-neutral-400/30"/>
            </motion.section>
            <motion.section 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5, ease: "easeInOut"}}
            id="feature-section" className="mt-20 flex flex-col items-center">
                <Bento/>
                <div className="mt-20 h-72 md:w-4xl w-full rounded-lg border border-neutral-400/30 shadow-lg flex items-center justify-around">
                    <div className="p-12 w-1/2">
                        <p className="text-3xl ">Start now, <br/> change how you learn</p>
                        <p className="text-neutral-500 mt-2">Ask AI to explain a topic with videos. Start now for free just login required</p>
                        <span className="flex group rounded-lg px-4 py-2 items-center justify-center text-white mt-4 bg-[#fe7787]">Start now{' '} <IconArrowRight className="group-hover:translate-x-1 transition-transform duration-200"/></span>
                    </div>
                    <div>
                        <ClipIcon />
                    </div>
                </div>
            </motion.section>
        </div>
    )
}