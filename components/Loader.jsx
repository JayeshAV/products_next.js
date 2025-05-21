"use client"

import { motion } from "framer-motion"

function Loader() {
    const dotVariants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: 0.2 }}
            className="container"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}

function StyleSheet() {
    return (
        <style jsx global>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                height: 100px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #ff0088;
                will-change: transform;
            }
        `}</style>
    )
}

export default  Loader
