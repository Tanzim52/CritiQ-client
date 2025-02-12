import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function Layout() {
  return (
    <div>

    <div className=' w-full  mx-auto bg-[#3D405B] fixed top-0 left-0 right-0 z-50'>


    <header className='w-full  mx-auto    '>
      {/* this is navbar */}
    <Navbar />
      </header>

    </div>


    <div className='w-11/12 mx-auto my-10'>
      {/* all components render or dynamically change this router */}
      <Outlet />
    </div>
  
      <footer className='mt-20'>
        {/* statically all components can be shared */}
        <Footer />
      </footer>

    </div>
  )
}
