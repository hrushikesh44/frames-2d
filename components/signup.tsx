'use client'

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Google } from "./icons/google";

export const handleLoginWithGoogle = async() => {
    toast('Logging In')
    await authClient.signIn.social({
        provider: "google"
    })
}

export default function Signin(){
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="h-fit p-3 border rounded-xl w-[30vw]">
                <p className="text-xl font-semibold text-center pb-10">Signin to Frames 2D</p>
                <div className="border p-2 rounded-xl flex items-center gap-3 justify-center cursor-pointer text-lg" onClick={handleLoginWithGoogle}>
                   <Google/> Signin with Google
                </div>
            </div>
        </div>
    )
}