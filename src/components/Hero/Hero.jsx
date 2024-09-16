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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
                  dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
                  tempora similique dignissimos repellat aperiam veniam culpa
                  consequatur repudiandae asperiores saepe.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
  );
};

export default Hero;