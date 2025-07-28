import Loading from "@/components/icons/loading"

interface Codeprops{
    response: string,
    loading?: boolean,
}

export default function Code({response, loading} : Codeprops){
    return(
        <div className=" flex flex-col items-center w-screen rounded-xl p-4">
                {loading ? <Loading /> : 
                <div className="w-[40vw]">
                    <pre style={{ whiteSpace: 'pre-wrap' }} className="p-8 rounded-xl">
                        <code>{response}</code>
                    </pre>
                </div> }
        </div>
    )
}