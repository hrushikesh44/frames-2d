'use client'
import { motion } from "motion/react"

export function ClipIcon(){
    return(
        <motion.svg 
        xmlns="http://www.w3.org/2000/svg" width="300px" height="300px" viewBox="0 0 24 24" fill="none">
            <path d="M11.0833 12.0001L1 19.3334L1 4.66675L11.0833 12.0001Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <motion.path 
            d="M7.41669 19.3334L17.5 12.0001L7.41669 4.66675" 
            stroke="#777777" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut',}}
            />
            <motion.path 
            d="M12.9167 19.3334L23 12.0001L12.9167 4.66675" 
            stroke="#e2e2e2" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
            />
        </motion.svg>
    )
}