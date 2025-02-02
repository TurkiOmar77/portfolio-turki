"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed bg-zinc-900 text-white top-0 left-0 w-full shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-logo">Portfolio</h1>
        <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-2xl " /> : <FaBars className="text-2xl" />}
        </div>
        <ul className={`md:flex space-x-6 mx-auto md:static fixed top-16 left-0 w-full bg-zinc-900 text-center md:w-auto md:bg-transparent transition-all ${isOpen ? 'block ' : 'hidden'}`}>
          <li className="py-2 md:py-0 text-center">
            <Link href="#home" className="hover:text-gray-400 duration-300" >Home</Link>
          </li>
          <li className="py-2 md:py-0 text-center">
            <Link href="#about" className="hover:text-gray-400 duration-300">About Me</Link>
          </li>
          <li className="py-2 md:py-0 text-center">
            <Link href="#skills" className="hover:text-gray-400 duration-300">Skills</Link>
          </li>
          <li className="py-2 md:py-0 text-center">
            <Link href="#myproject" className="hover:text-gray-400 duration-300">My project</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;