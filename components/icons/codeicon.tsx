'use client'
import { motion } from 'motion/react';

export function CodeIcon(){
    return(
        <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <motion.path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2}
            fontSize={20}
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" 
            initial={{pathLength: 0}} 
            animate={{pathLength: 1}} 
            transition={{duration: 1, ease: 'easeInOut' , repeat: Infinity, repeatType: 'reverse'}}
            className="text-[#fe7877] size-10 font-semibold"
            />
        </motion.svg>

    )
}