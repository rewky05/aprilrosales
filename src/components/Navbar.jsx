import React, { useState } from "react";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";
import April from "../assets/resume/april-resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-300 text-black select-none">
      <div>
        <h1 className="text-3xl font-bold">A.</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="after:content-[''] after:absolute after:w-[42px] after:h-[3px] after:bg-[#114084] after:rounded after:right-[320px] after:bottom-6 after:scale-x-0 after:transition-transform duration-1000 after:origin-right hover:after:scale-x-100 hover:after:origin-left">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[45px] after:h-[3px] after:bg-[#114084] after:rounded after:right-[247px] after:bottom-6 after:scale-x-0 after:transition-transform duration-1000 after:origin-right hover:after:scale-x-100 hover:after:origin-left">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[40px] after:h-[3px] after:bg-[#114084] after:rounded after:right-[179px] after:bottom-6 after:scale-x-0 after:transition-transform duration-1000 after:origin-right hover:after:scale-x-100 hover:after:origin-left">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[37px] after:h-[3px] after:bg-[#114084] after:rounded after:right-[112px] after:bottom-6 after:scale-x-0 after:transition-transform duration-1000 after:origin-right hover:after:scale-x-100 hover:after:origin-left">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="after:content-[''] after:absolute after:w-[52px] after:h-[3px] after:bg-[#114084] after:rounded after:right-[30px] after:bottom-6 after:scale-x-0 after:transition-transform duration-1000 after:origin-right hover:after:scale-x-100 hover:after:origin-left">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-300 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${
          nav ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#114084] text-gray-300">
            <a
              className="mx-auto"
              href="https://www.linkedin.com/in/aprilr05/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <FaLinkedin size={30} />
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] text-gray-300">
            <a
              className="mx-auto"
              href="https://github.com/rewky05"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <FaGithub size={30} />
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3466AA] text-gray-300">
            <a
              className="mx-auto"
              href="https://mail.google.com/mail/u/0/?fs=1&to=rosales.april65@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <HiOutlineMail size={30} />
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] text-gray-300">
            <a
              className="mx-auto"
              href={April}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <BsFillPersonLinesFill size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
