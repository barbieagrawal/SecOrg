import React from 'react'
import aboutUsImg from "../../assets/aboutUsImg.jpg"

const AboutUs = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className='flex justify-end px-10'>
                    <img src={aboutUsImg} alt="" className='w-full h-full'/>
                </div>
                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-indigo-800'>
                    <p className='text-indigo-800 uppercase font-montserrat'>About Us</p>
                    <h1 className='uppercase text-4xl font-montserrat'>Who Are We?</h1>
                    <p className='font-anonymouspro'>
                    We are a team of final-year B.Tech students specializing in Computer Science and Engineering, passionate about cybersecurity and its role in protecting the digital landscape. Through our project, Secorg, we aim to offer organizations an advanced toolkit for tackling key security challenges, with a primary focus on risk assessment and secure credential management. Our mission is to help businesses improve their security posture by providing practical, effective solutions.
                    <br />
                    <br />
                    Our website is a reflection of our commitment to building secure, user-friendly tools tailored to real-world needs. With a clear focus on addressing current security risks, we have designed Secorg to empower organizations to better safeguard their data and infrastructure.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs