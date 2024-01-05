import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-300 text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#114084]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm April, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg">
              I'm passionate about improving my software development skills and
              creating meaningful solutions for various needs. While I've
              completed just one academic project in web development, my
              enthusiasm drives me to expand my capabilities. What would you do
              if you had a dedicated software developer available at your
              fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
