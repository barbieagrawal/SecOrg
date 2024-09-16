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
                <div className='text-white font-anonymouspro'>
                    <ul className='flex items-center gap-10 text-xl py-4'>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Our Mission</a>
                        </li>
                        <li>
                            <a href="#">Tools</a>
                        </li>
                        <li>
                            <a href="#">Reach Out</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='text-white border-2 font-anonymouspro border-indigo-900 text-xl px-3 py-1 transition duration-200 ease-in-out hover:bg-gray-800 hover:backdrop-blur-md'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar