import { motion } from "framer-motion";
import React from "react";

type FloatingCloudProps = {
    initialX: number,
    finalX: number,
    initialY: number,
    finalY: number,
    duration: number,
    className?: string
}

export default function FloatingCloud({initialX, finalX, initialY, finalY, duration, className}: FloatingCloudProps ){
    return(
            <motion.div
                initial={{ x: initialX, y: initialY }}
                animate={{ x: finalX, y: finalY }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    repeatType: 'reverse', 
                }}
                className={`${className}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-24 h-24 text-gray-300">
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                            strokeWidth={1}
                            stroke="currentColor"
                            initial={{ pathLength: 0, opacity: 0, fill: 'transparent' }} 
                            animate={{ pathLength: 1, opacity: 1, fill: '#f0f4f0' }} 
                            transition={{ duration: 2 }} 
                        />
                    </svg>
            </motion.div>
    );
};