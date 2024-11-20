import React, { useState } from 'react'
import bgVideo from './assets/cybersec-bg.mp4'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tools from './components/Tools/Tools'
import AboutUs from './components/AboutUs/AboutUs'
import OurMission from './components/OurMission/OurMission'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <Login 
        onLogin={handleLogin}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    );
  }

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
        <Navbar 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Hero />
      </div>
      <Tools />
      <AboutUs />
      <OurMission />
      <Footer />
    </div>
  )
}

export default App