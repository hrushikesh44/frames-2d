interface ButtonProps{
    onClick: () => Promise<string | void>;
    text: string;
}
export default function Button({onClick, text}: ButtonProps){
    return (
            <button onClick={onClick} 
                    className="p-2 m-2 rounded-xl w-fit border border-neutral-400 dark:border-neutral-600 hover:bg-neutral-600 hover:text-white ">
                        {text}
            </button>
    )
}