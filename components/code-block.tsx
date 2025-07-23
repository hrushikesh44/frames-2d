import Loading from "@/components/icons/loading"

interface Codeprops{
    response: string,
    loading: boolean,
    onClick?:() => void| Promise<void>
}

export default function Code({response, loading, onClick} : Codeprops){
    return(
        <div className="w-[50vw] mt-20 rounded-xl overflow-auto pb-30 p-4 mr-20">
                {loading ? <Loading /> : 
                <><pre style={{ whiteSpace: 'pre-wrap' }} className="p-8 border border-white/10 rounded-xl">
                    <code>{response}</code>
                </pre><button onClick={onClick} 
                    className="p-2 m-2 rounded-xl border border-white/10 hover:bg-cyan-300 hover:scale-105 duration-300 hover:text-black">Get Video</button></> }
        </div>
    )
}