import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className='flex flex-row items-center space-x-3'>
            <SocialIcon url="https://twitter.com/mus0161" fgColor="transparent" bgColor="#7de3ff" className="hover:bg-gray-600 rounded-full"/>
            <SocialIcon url="https://instagram.com/musssss19" fgColor="transparent" bgColor="#7de3ff" className="hover:bg-gray-600 rounded-full"/>
            
        </motion.div>

        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}
            className="flex flex-row items-center cursor-pointer space-x-3">
            <SocialIcon url="https://linkedin.com/in/musaab-uppal" fgColor="transparent" bgColor="#7de3ff" className="hover:bg-gray-600 rounded-full"/>
            <SocialIcon url="https://github/musaab03" fgColor="transparent" bgColor="#7de3ff" className="hover:bg-gray-600 rounded-full"/> 
        </motion.div>
    </header>
  )
}

export default Header