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
      delay: 1,
      duration: 1,
      type: 'spring'
    }
  }
}

const Variants = () => {
  return (
    <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className='bg-green-700 w-32 h-32 rounded border m-4'
     />
  )
}

export default Variants