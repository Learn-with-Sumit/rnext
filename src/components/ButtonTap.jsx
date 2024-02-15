import React from 'react'
import {motion} from 'framer-motion';

const ButtonTap = () => {
  return (
    <div>
        <motion.button
            className='bg-black text-white p-1 border m-2 rounded-md'
            whileTap={{scale: 0.5}}
            whileHover={{
                scale: 1.4,
            }}>
            Tap Me
        </motion.button>

        <motion.button
            className='bg-black text-white p-1 border m-2 rounded-md'
            whileTap={{scale: 0.5}}
            whileHover={{
                scale: 1.4,
                transition: { yoyo: Infinity },
            }}>
            Tap Me
        </motion.button>
    </div>
  )
}

export default ButtonTap