'use client'
import { easeInOut, motion } from 'motion/react'

export default function Loading(){
    return (
        <motion.svg  
            xmlns="http://www.w3.org/2000/svg"  
            width="24"  
            height="24"  
            viewBox="0 0 24 24"
            fill="none"  
            stroke="currentColor"  
            strokeWidth="2"  
            strokeLinecap="round"  
            strokeLinejoin="round"  
            className="h-10 w-10 ">
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M12 6l0 -3" color="cyan"/>
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M16.25 7.75l2.15 -2.15" color="cyan"/>
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M18 12l3 0" color="cyan" />
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M16.25 16.25l2.15 2.15" color="cyan" />
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M12 18l0 3" color="cyan" />
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M7.75 16.25l-2.15 2.15" color="cyan"/>
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M6 12l-3 0" color="cyan"/>
                <motion.path 
                initial={{pathLength: 0}} 
                animate={{pathLength: 1}} 
                transition={{duration: 0.9, ease: easeInOut , repeat: Infinity, repeatType: 'reverse'}} 
                d="M7.75 7.75l-2.15 -2.15" color="cyan" />
        </motion.svg>
    )
}