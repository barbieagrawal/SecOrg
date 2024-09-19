import React from 'react'

const Hero = () => {
    return (
        <div className="h-full bg-black/20 text-white relative">
          <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-white space-y-4 lg:pr-36">
                <h1 data-aos="fade-up" className="text-5xl font-bold font-montserrat">
                  SECURE YOUR ORGANISATION
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className='font-anonymouspro'>
                Secorg is a powerful toolkit designed to help organizations safeguard their digital assets and mitigate security risks. With a focus on risk assessment and secure credential management, Secorg provides comprehensive tools to strengthen your organization’s defenses and ensure robust security practices. Take control of your security needs with solutions tailored to today’s evolving threats.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
  );
};

export default Hero;