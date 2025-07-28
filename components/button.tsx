interface ButtonProps{
    onClick: () => Promise<string | void>;
    text: string;
}
export default function Button({onClick, text}: ButtonProps){
    return (
            <button onClick={onClick} 
                    className="p-2 m-2 rounded-xl w-fit text-white/70 dark:text-black/80  border bg-neutral-900 dark:bg-neutral-300 border-black/10 dark:border-white/10 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-105 duration-300 hover:text-neutral-200 dark:hover:text-neutral-800">
                        {text}
            </button>
    )
}