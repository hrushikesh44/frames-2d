interface messageProps{
    message: string
}
export default function Message({message}: messageProps){
    return (
        <div className="w-fit h-fit bg-neutral-800 rounded-xl">
            <div>
                <p>{message}</p>
            </div>
        </div>
    )
}