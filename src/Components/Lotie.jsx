import React from 'react'
import one from '../assets/Animation - 1739359357875.json'
import Lottie from "lottie-react";
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
export default function Lotie() {
  return (
    <div className="hero bg-gray-50 rounded-xl min-h-scree my-10">
    <div className="hero-content flex-col lg:flex-row">
      {/* <img
        src={one}
        className="max-w-sm rounded-lg shadow-2xl" /> */}
        <Lottie className='w-[70%]' animationData={one}></Lottie>
      <div className='md:ml-14'>
        <motion.h1 
          animate={{
            x: [0, 10], // Moves from left (0) to right (100px)
            color: ["#ff0000", "#0000ff"], // Animates from red to blue
          }}
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut", // Smooth easing
            repeat: Infinity, // Loop the animation
            repeatType: "reverse", // Reverse the animation
          }}
          className="text-5xl font-bold">CritiQ Server – Powering Reliable Reviews</motion.h1>
        <p className="py-6 text-gray-600">The CritiQ Server is designed to deliver a seamless and efficient experience, handling user authentication, service management, and reviews with speed and security. Built with Node.js, Express, MongoDB, and JWT authentication, it ensures a scalable and reliable backend that keeps CritiQ running smoothly. 
        </p>
        <Link to='/service'><button className="btn bg-lime-400 text-white">See More</button></Link>
      </div>
    </div>
  </div>
  )
}


