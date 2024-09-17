import React from 'react'
import bgVideo from './assets/cybersec-bg.mp4'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tools from './components/Tools/Tools'

const App = () => {
  return (
    <div className='bg-black'>
      <div className='h-[700px] relative'>
        <video
          autoPlay
          loop 
          muted 
          className='fixed right-0 top-0 h-[700px] w-full object-cover z-0'
        >
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <Navbar />
        <Hero />
      </div>
      {/* Tools Card Section */}
      <div className="relative z-10 bg-black">
      <Tools />
      </div>
    </div>
  )
}

export default App