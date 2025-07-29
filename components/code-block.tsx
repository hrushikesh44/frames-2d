import Loading from "@/components/icons/loading"
import Button from "./button"

interface Codeprops{
    response: string,
    loading?: boolean,
    onClick: () => Promise<string | undefined>
}

export default function Code({response, loading, onClick} : Codeprops){
    return(
        <div className=" flex flex-col items-center w-screen rounded-xl p-4">
                 
                <div className="w-[80vw] sm:w-[60vw] lg:w-[40vw]">
                    <pre style={{ whiteSpace: 'pre-wrap' }} className="p-8 rounded-xl">
                        <code>{response}</code>
                    </pre>
                    {loading ?<Loading/>: <Button text="Get Video" onClick={() => onClick()}/>}
                </div> 
        </div>
    )
}