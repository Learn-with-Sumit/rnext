import React from 'react'
import {motion} from 'framer-motion';


const Box = ({text}) => {
    return(
        <motion.div
            className='w-32 h-32 border rounded-sm bg-pink-300 text-black m-4 text-center'
            initial={{opacity: 0, x: -50}}
            whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                    }
                }}
           viewport={{once: false}}

            >{text}</motion.div>
    )
}

const ScrollReveal = () => {
    const greetings = ["Hello", "Holla", "Welcome", "Namaste", "Come In"];
  return (
    <div>

        {
            greetings.map((greeting, index) => (
                <Box key={index}  text={greeting} />
            ))
        }

    </div>
  )
}

export default ScrollReveal