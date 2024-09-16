import React from 'react'
import wave from "../../assets/wave Gif.gif";
import { FaReact} from 'react-icons/fa'
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "OWASP RISK CALCULATOR",
    description:
      "This is an OWASP Risk Calculator which follows the OWASP Risk Rating Methodology to calculate risk likelihood and impact.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "PERSONALIZED PASSWORD MANAGER",
    description:
      "This is a password manager tool where you can store all your passwords from different websites in an encrypted form.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "tbd...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates placeat, deleniti nisi repudiandae exercitationem",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
]
const Tools = () => {
  return (
    <section className="bg-black">
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