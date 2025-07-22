import Loading from "@/icons/loading"

interface Codeprops{
    response: string,
    loading: boolean
}

export default function Code({response, loading} : Codeprops){
    return(
        <div className="w-[50vw] mt-20 rounded-xl overflow-auto pb-30 p-4 mr-20">
                {loading ? <Loading /> : 
                <pre style={{whiteSpace: 'pre-wrap'}} className="p-8 border border-white/10 rounded-xl">
                    <code>{response}</code>
                </pre> }
        </div>
    )
}