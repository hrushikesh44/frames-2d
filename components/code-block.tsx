import Loading from "@/components/icons/loading"

interface Codeprops{
    response: string,
    loading?: boolean,
    onClick?:() => void| Promise<void>
}

export default function Code({response, loading, onClick} : Codeprops){
    return(
        <div className=" flex flex-col items-center w-screen rounded-xl p-4">
                {loading ? <Loading /> : 
                <div className="w-[40vw]"><pre style={{ whiteSpace: 'pre-wrap' }} className="p-8 rounded-xl">
                    <code>{response}</code>
                </pre><button onClick={onClick} 
                    className="p-2 m-2 rounded-xl text-white/70 dark:text-black/80  border bg-neutral-900 dark:bg-neutral-300 border-black/10 dark:border-white/10 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-105 duration-300 hover:text-neutral-200 dark:hover:text-neutral-800">Get Video</button></div> }
        </div>
    )
}