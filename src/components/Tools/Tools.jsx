import React from 'react'
import wave from "../../assets/wave Gif.gif";
import { FaCalculator} from 'react-icons/fa'
import { FaGears, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "OWASP RISK CALCULATOR",
    description:
      "This is an OWASP Risk Calculator which follows the OWASP Risk Rating Methodology to calculate risk factors.",
    icon: <FaCalculator className="text-7xl" />,
    aosDelay: "300",
    button: "Visit",
    link: "https://barbieagrawal.github.io/OWASP-RISK-CALC/",
  },
  {
    title: "PERSONALIZED PASSWORD MANAGER",
    description:
      "This is a password manager tool where you can store all your passwords from different websites in an encrypted form.",
    icon: <FaGears className="text-7xl" />,
    aosDelay: "500",
    button: "Visit",
    link: "#",
  },
  {
    title: "TO BE DECIDED...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates placeat, deleniti nisi repudiandae exercitationem",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
    button: "Visit",
    link: "#",
  },
]
const Tools = () => {
  return (
    <section className="bg-black relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
              {ServiceData.map((data, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-indigo-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                  >
                    {data.icon}
                    <h1>{data.title}</h1>
                    <p>{data.content}</p>
                    <p className="text-sm">{data.description}</p>
                    <div className='py-3'></div>
                    <a href={data.link}>
                      <button className='text-white border-2 font-montserrat border-white text-lg px-5 py-1 transition duration-200 ease-in-out hover:bg-gray-800 hover:backdrop-blur-md'>
                          {data.button}
                      </button>
                    </a>
                  </div>
                );
              })}
            </div>
            <img
              src={wave}
              alt=""
              className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
            />
          </div>
        </div>
      </div>
  </section>
  )
}

export default Tools