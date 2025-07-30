'use client'
import { authClient } from "@/lib/auth-client";
import { ThemeToggle } from "./toggle-theme";
import { redirect, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const signOut = async() => {
    await authClient.signOut()
    toast('Logged Out')
    redirect('/login')
}

export default function Navbar(){
    const pathname = usePathname()
    const shouldHideNavbar = ['/login'].includes(pathname)

   return(
     <div className="flex items-end justify-between p-2 ">
        <div>
            <span className="text-2xl font-bold">Frames 2D</span>
        </div>
       <div className="flex items-center gap-3">
         {!shouldHideNavbar && <button onClick={signOut} className="p-2 border dark:border-neutral-400 rounded-xl">Logout</button>}
        <ThemeToggle />
       </div>
    </div>
   )
}