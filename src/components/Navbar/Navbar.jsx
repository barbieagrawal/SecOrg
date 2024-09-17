import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="flex text-white items-center gap-4 font-bold text-2xl">
                    <img src={Logo} alt="" className='w-12'/>
                    <span className='font-blackopsone'>SECORG</span>
                </div>
                <div className='text-white font-montserrat'>
                    <ul className='flex items-center gap-10 text-l py-4'>
                        <li>
                            <a href="#">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#">OUR MISSION</a>
                        </li>
                        <li>
                            <a href="#">TOOLS</a>
                        </li>
                        <li>
                            <a href="#">REACH OUT</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='text-white border-2 font-montserrat border-indigo-900 text-l px-3 py-1 transition duration-200 ease-in-out hover:bg-gray-800 hover:backdrop-blur-md'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar