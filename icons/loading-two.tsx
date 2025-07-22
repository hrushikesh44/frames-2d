'use client'
import { easeInOut, motion } from "motion/react"

export function LoadingTwo(){
    return (
        <motion.svg
        xmlns="http://www.w3.org/2000/svg"  
        width="24"  
        height="24"  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        strokeWidth="1"  
        strokeLinecap="round"  
        strokeLinejoin="round"  
        className="h-20 w-20">
            <motion.path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <motion.path
            initial={{pathLength: 0 }}
            animate={{pathLength: 1 }}
            transition={{duration: 2, ease: easeInOut, repeat: Infinity, repeatType: "reverse"}}
             d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
        </motion.svg>
    )
}

export function LoadingThree(){
    return (
        <motion.svg
        xmlns="http://www.w3.org/2000/svg"  
        width="24"  
        height="24"  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        strokeWidth="1"  
        strokeLinecap="round"  
        strokeLinejoin="round"  
        className="h-20 w-20">
            <motion.path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <motion.path 
            initial={{pathLength: 0}}
            animate={{pathLength: 1}}
            transition={{duration: 2, ease: easeInOut, repeat: Infinity, repeatType: "mirror"}}
            d="M14 3v4a1 1 0 0 0 1 1h4" />
            <motion.path
            initial={{pathLength: 0}}
            animate={{pathLength: 1}}
            transition={{duration: 2, ease: easeInOut, repeat: Infinity, repeatType: "mirror"}}
             d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        </motion.svg>
    )
}