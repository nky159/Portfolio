import React, { useState } from "react";
import { FiYoutube } from "react-icons/fi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";

import { FaGithubSquare } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <nav
        className="fixed top-0 z-10 flex w-full items-center
    justify-between border-b border-b-gray-700 bg-black/70
    px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
      >
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-500 to-pink-500
    bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all
    duration-300 hover:opacity-100"
        >
          Nikhil Yadav
        </a>

        <ul className="hidden md:flex gap-10">
          <a
            href="#home"
            className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
          >
            <li>Home</li>
          </a>

          <a
            href="#tech"
            className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
          >
            <li>Tech</li>
          </a>

          <a
            href="#projects"
            className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
          >
            <li>Projects</li>
          </a>

          <a
            href="#contact"
            className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
          >
            <li>Contacts</li>
          </a>
        </ul>

        <ul className="hidden md:flex gap-5">
         

          <li
            className="cursor-pointer text-2xl
            opacity-70 transition-all duration-300 hover:text-blue-300
            hover:opacity-100 hover:scale-105"
          >
            <a href="https://www.linkedin.com/in/nikhil-yadav-225107b7/" target="_blank">
            <RiLinkedinBoxFill />
            </a>

          </li>

          <li
            className="cursor-pointer text-2xl
            opacity-70 transition-all duration-300 hover:text-brown-500
            hover:opacity-100 hover:scale-105"
          >
            <a href="https://github.com/nky159"
             target="blank"> <FaGithubSquare /></a>
           
          </li>

          <li
          
            className="cursor-pointer text-2xl
            opacity-70 transition-all duration-300 hover:text-red-500
            hover:opacity-100 hover:scale-105"
          >
            <a href="mailto:cse.nikhil159@gmail.com"> <BiLogoGmail /></a>
           

          </li>

          <li
            className="cursor-pointer text-2xl
            opacity-70 transition-all duration-300 hover:text-orange-300
            hover:opacity-100 hover:scale-110"
          >
            <FaFileAlt />
          </li>
        </ul>


        {isOpen ? (
          <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
          <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
        )}



        {isOpen && (
          <div
            className={`fixed right-0 top-[84px] flex h-screen
        w-1/2 flex-col items-start justify-start gap-10
        border-1 border-gray-800 bg-black/90 p-12
        ${isOpen ? "block" : "hidden"}`}
          >


            <ul className="flex flex-col gap-8">
              <a
                href="#home"
                className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
              >
                <li>Home</li>
              </a>

              <a
                href="#tech"
                className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
              >
                <li>Tech</li>
              </a>

              <a
                href="#projects"
                className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
              >
                <li>Projects</li>
              </a>

              <a
                href="#contact"
                className="cursor-pointer opacity-70 
       transition-all duration-300 hover:opacity-100"
              >
                <li>Contacts</li>
              </a>
            </ul>


            <ul className="flex flex-wrap gap-5">
              <li
                className="cursor-pointer text-xl
opacity-70 transition-all duration-300 hover:text-red-500
hover:opacity-100"
              >
                <FiYoutube />
              </li>

              <li
                className="cursor-pointer text-xl
opacity-70 transition-all duration-300 hover:text-blue-500
hover:opacity-100"
              >
                <RiLinkedinBoxFill />
              </li>

              <li
                className="cursor-pointer text-xl
opacity-70 transition-all duration-300 hover:text-red-500
hover:opacity-100"
              >
                <FaGithubSquare />
              </li>

              <li
                className="cursor-pointer text-xl
opacity-70 transition-all duration-300 hover:text-blue-500
hover:opacity-100"
              >
                <FaFileAlt />
              </li>
            </ul>


          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;
