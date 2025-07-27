'use client'
import { IconLayoutSidebar, IconVideo } from "@tabler/icons-react";
import React from "react";

export default function Sidebar(){
    const [open, setOpen] = React.useState<boolean>(true);
    
    return (
        <div className="h-screen border-r border-black/10 dark:border-white/10 w-fit p-2">
            <div className="flex items-center justify-between w-fit gap-5 ">
                {open ? <div className="rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700  w-fit cursor-pointer">
                    <p className="p-1">Video generator</p>
                </div> : 
                <div className="rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700  w-fit cursor-pointer" onClick={() => setOpen(true)}>
                    <IconVideo />
                </div>
                }
                {open && <div className="p-1 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700"  onClick={() => setOpen(false)}>
                    <IconLayoutSidebar />
                </div>}
            </div>
            <div>
                Sections
            </div>
        </div>
    )
}