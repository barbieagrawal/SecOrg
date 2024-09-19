import React from 'react'
import aboutUsImg from "../../assets/ourMissionImg.jpg"

const OurMission = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-indigo-800'>
                    <p data-aos="fade-up" className='text-indigo-800 uppercase font-montserrat'>Our Mission</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-4xl font-montserrat'>What do we aim for?</h1>
                    <p data-aos="fade-up" data-aos-delay="500" className='font-anonymouspro'>
                    At Secorg, our mission is to provide organizations with the tools and resources they need to proactively address security risks and enhance their defenses. We strive to simplify the complex process of risk management and secure credential handling, making it accessible and effective for organizations of all sizes. By focusing on key areas of cybersecurity, we aim to build solutions that not only respond to current threats but also anticipate future challenges.
                    <br />
                    <br />
                    Looking ahead, we are dedicated to evolving our platform to meet the growing demands of the cybersecurity landscape. Our goal is to continually innovate and expand Secorg's capabilities, ensuring that organizations can stay ahead of emerging security threats and maintain the highest levels of protection for their critical assets.
                    </p>
                </div>
                <div data-aos="zoom-in" className='flex justify-start px-10'>
                    <img src={aboutUsImg} alt="" className='w-full sm:w-[90%] mx-auto max-h-[400px] object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurMission