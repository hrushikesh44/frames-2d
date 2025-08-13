'use client'

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { Google } from "./icons/google";
import { motion } from "motion/react";

export const handleLoginWithGoogle = async() => {
    toast('Logging In')
    await authClient.signIn.social({
        provider: "google"
    })
}

export default function Signin(){
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
        className="flex flex-col w-96 h-fit rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8 py-10 border border-neutral-400/40">
            <div className="mt-2">
                <h2 className="font-bold text-xl text-center">Login to Frames 2D</h2>
            </div>
            <div className="flex flex-1 flex-col mt-8 gap-4">
                <button onClick={handleLoginWithGoogle} className="flex items-center justify-center w-full px-2 py-1 rounded-lg shadow-[0_0.5px_1px_rgb(0,0,0,0.2)] border border-neutral-400/40 inset-shadow-2xs cursor-pointer gap-3">Login with Google<Google/></button>
            </div>
        </motion.div>
    )
}