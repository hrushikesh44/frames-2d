interface VideoPlayerProps{
    url: string
}

export default function VideoPlayer({url}: VideoPlayerProps){
    return(
        <video controls width={500} height={500} src={url} className="mt-10 mb-30 rounded-xl border border-neutral-400/30" />
    )
}