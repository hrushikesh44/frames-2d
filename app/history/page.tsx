'use client'

import Sidebar from "@/components/sidebar";
import { cleanCode } from "@/lib/cleancode";
import { IconHistory, IconHistoryToggle, IconPlus } from "@tabler/icons-react";
import React from "react";
import toast from "react-hot-toast";

export default function Home(){
    const [history, setHistory] = React.useState<[]>([])
    const [selected, setSelected] = React.useState<number | null>()

    React.useEffect(() => {
         fetchHistory()
    }, [])

    function handleAccordian(QuesId : number){
    setSelected(QuesId === selected ? null : QuesId)
  }

    const fetchHistory = async() => {
        try{
            const response = await fetch('/api/history', {
                method: "GET",
                credentials: "include"
            })
            const data = await response.json();
            setHistory(data.reverse())
        } catch(error) {
            toast('error while fetching history')
        }
    }
    return(
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col gap-2 mt-20 ml-40">
                <p className="text-xl text-start font-bold flex items-center gap-2">Your Recent Search<IconHistoryToggle /></p>
                {history.map((u: any) => (
                    <div key={u.id} className="w-[50vw] border rounded-xl p-2">
                        <span onClick={() => handleAccordian(u.id)} className={`flex items-center justify-between`}>{u.prompt} <IconPlus size={20}/></span>
                        {selected === u.id ? <pre style={{ whiteSpace: 'pre-wrap' }} className="p-8 rounded-xl">
                            <code>{cleanCode(u.chat)}</code>
                        </pre> : <div></div> }
                    </div>
                ))}
            </div>
        </div>
    )
}