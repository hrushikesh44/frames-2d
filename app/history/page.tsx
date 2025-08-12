'use client'

import React from "react";
import Sidebar from "@/components/sidebar";
import toast from "react-hot-toast";
import { cleanCode } from "@/lib/cleancode";
import { IconHistoryToggle, IconPlus } from "@tabler/icons-react";

export default function Home(){
    type HistoryItem = { id: number; prompt: string; chat: string };

    const [history, setHistory] = React.useState<HistoryItem[]>([])
    const [selected, setSelected] = React.useState<number | null>(null)

    React.useEffect(() => {
        const loadHistory = async () => {
            try{
                const response = await fetch('/api/history', {
                    method: "GET",
                    credentials: "include"
                })
                const data: HistoryItem[] = await response.json();
                setHistory(data.reverse())
            } catch(error) {
                toast('error while fetching history')
                return error;
            }
        }
        void loadHistory();
    }, [])

    function handleAccordion(QuesId : number){
    setSelected(QuesId === selected ? null : QuesId)
  }

    
    return(
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col gap-2 mt-20 ml-40 min-h-screen">
                <p className="text-xl text-start font-bold flex items-center gap-2">Your Recent Search<IconHistoryToggle /></p>
                {history.map((u: HistoryItem) => (
                    <div key={u.id} className="w-[50vw] border rounded-xl p-2">
                        <button type="button" onClick={() => handleAccordion(u.id)} className={`flex items-center justify-between w-full text-left`}>
                            {u.prompt} <IconPlus size={20}/>
                        </button>
                        {selected === u.id ? <pre style={{ whiteSpace: 'pre-wrap' }} className="p-8 rounded-xl">
                            <code>{cleanCode(u.chat)}</code>
                        </pre> : <div></div> }
                    </div>
                ))}
            </div>
        </div>
    )
}