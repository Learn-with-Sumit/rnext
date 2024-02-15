import React from 'react'
import {motion} from 'framer-motion';

const Simple = () => {
  return (
    <motion.div
        className="bg-red-500 border w-32 h-32 rounded-full"
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        exit = {{
          x: '-100vw',
          transition: {
              ease: 'easeInOut',
              duration: 1,
          },
        }}
    />
  )
}

export default Simple