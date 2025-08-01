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
     <div className="flex items-center justify-end ">
        <div className="flex items-center gap-3 pt-10 fixed">
            <ThemeToggle />
            {/* {!shouldHideNavbar && <button onClick={signOut} className="flex items-center gap-1 cursor-pointer p-2 rounded-xl group">Logout <IconLogout className="group-hover:translate-x-0.5 transition-transform duration-300"/></button>} */}
        </div>
     </div>
   )
}