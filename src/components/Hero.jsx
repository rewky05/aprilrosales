import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#114084]">
          April Rosales
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#3466AA]">
          Future Full Stack Developer.
        </h2>
        <p className="text-[#3466AA] py-4 max-w-[700px]">
          I'm an aspiring full-stack developer with a passion for crafting
          exceptional digital experiences. Currently, my focus is on building
          responsive full-stack web applications.
        </p>
        <div>
          <button className="border-2 px-6 py-3 my-2 outline-none hover:bg-gray-400 duration-300">
            <Link className="group flex items-center" to="work" smooth={true} duration={500}>
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
