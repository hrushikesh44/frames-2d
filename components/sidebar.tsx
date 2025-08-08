'use client'

import { IconArrowRight, IconHistoryToggle, IconHome, IconLayoutSidebar, IconLogout, IconVideo } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

export default function Sidebar(){
    const [open, setOpen] = React.useState<boolean>(false);
    const closeSidebar = () => setOpen(false);
    
    return (
        <motion.div
        initial={{width: 80}}
        animate={{width: open ? 288 : 80}}
        transition={{
            duration: 0.3,
            ease: 'easeInOut'
        }}
        className={`h-screen border-r border-neutral-500 p-2 fixed z-50 backdrop-blur-2xl truncate `}>
            <div className={`flex items-center w-full gap-5 ${open ? "justify-between" : "justify-center"}`}>
                {open ? <div className="rounded-lg w-fit cursor-pointer">
                    <p className="p-1">Frames 2D</p>
                </div> : 
                <div className="rounded-lg items-center hover:bg-neutral-400/30  w-fit cursor-pointer" onClick={() => setOpen(true)}>
                    <IconArrowRight className="m-1"/>
                </div>
                }
                {open && <div className="p-1 rounded-lg hover:bg-neutral-400/30"  onClick={closeSidebar}>
                    <IconLayoutSidebar />
                </div>}
            </div>
            <div className="flex flex-col h-[90vh] justify-between">
                <div className="w-full pt-5 ">
                    <Link href={'/'} className={`flex p-1 text-lg font-light rounded-lg hover:scale-105 transition-transform duration-150 gap-3 w-full items-center hover:bg-neutral-400/20 mt-5 ${open ? " " : "justify-center"}`}>{open ? <span className="flex justify-around gap-3"><IconHome/>Home</span> : <IconHome/>}</Link>
                    <Link href={'/videos'} className={`flex p-1 text-lg font-light rounded-lg hover:scale-105 transition-transform duration-150 gap-3 w-full items-center hover:bg-neutral-400/20 mt-5 ${open ? " " : "justify-center"}`}>{open ? <span className="flex justify-around gap-3"><IconVideo/>Videos</span> : <IconVideo/>}</Link>
                    <Link href={'/history'} className={`flex p-1 text-lg font-light rounded-lg hover:scale-105 transition-transform duration-150 gap-3 w-full items-center hover:bg-neutral-400/20 mt-5 ${open ? " " : "justify-center"}`}>{open ? <span className="flex justify-around gap-3"><IconHistoryToggle/>Videos</span> : <IconHistoryToggle/>}</Link>
                </div>
                <div>
                    <Link href={'/login'} className={`flex p-1 text-lg font-light rounded-lg hover:scale-105 transition-transform duration-150 gap-3 w-full items-center hover:bg-neutral-400/20 mt-5 ${open ? " " : "justify-center"}`}>{open ? <span className="flex justify-around gap-3"><IconLogout/>Logout</span> : <IconLogout/>}</Link>
                </div>
            </div>
        </motion.div>
    )
}