import React from 'react'
import { motion } from "framer-motion";

const shapeVariants = {
  initial: {
    opacity: 0,
    y: '-100vh'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
}

const childVariants = {
  initial: {
    scale: 1
  },
  animate: {
   scale: 2,
   transition: {duration: 2}
  }
}



const Variants = () => {
  return (
    <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className='bg-green-700 w-32 h-32 rounded border m-4'>
          <motion.div
            className='bg-red-500 w-12 h-12 rounded-full border m-2'
            variants={childVariants} />
    </motion.div>
  )
}

export default Variants