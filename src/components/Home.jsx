import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='m-4'>
        <ul className='bg-gray-100 p-2 rounded'>
            <li className='text-2xl flex flex-col'>
                <Link className='mx-2 my-2 underline' to="/simple">Simple Animation</Link>
                <Link className='mx-2 my-2 underline' to="/keyframe">Keyframe Animation</Link>
                <Link className='mx-2 my-2 underline' to="/button-tap">Button Tap Animation</Link>
                <Link className='mx-2 my-2 underline' to="/text-motion">Text Motion Animation</Link>
                <Link className='mx-2 my-2 underline' to="/transition">Transition Type Animation</Link>
                <Link className='mx-2 my-2 underline' to="/counter">Counter Animation</Link>
                <Link className='mx-2 my-2 underline' to="/scroll">Scroll Reveal Animation</Link>
                <Link className='mx-2 my-2 underline' to="/variants">Variants</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home