import React from 'react'
import { GoHeartFill } from 'react-icons/go';
import { RiInstagramLine,RiLinkedinLine, RiGithubLine, RiWhatsappLine, RiTwitterXLine } from "react-icons/ri";
import { RiHeart2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 py-6 text-lime-400 flex-wrap mt-5">
      <div className="flex items-center gap-6">
        <a href="https://www.instagram.com/rishabh_sharma14____?igsh=aGhmZzMxZXp0ZzV6"><RiInstagramLine className="hover:text-pink-500 transition text-2xl cursor-pointer" /></a>
         <a href="https://www.linkedin.com/in/rishabh-sharma-77b899397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><RiLinkedinLine className="hover:text-blue-600 transition text-2xl cursor-pointer" /></a>
        <a href="https://github.com/rishabhtivari428-max/rishabhtivari428-max"><RiGithubLine className="hover:text-gray-400 transition text-2xl cursor-pointer" /></a>
        <a href="https://web.whatsapp.com/"><RiWhatsappLine className="hover:text-green-500 transition text-2xl cursor-pointer" /></a>
        <RiTwitterXLine className="hover:text-blue-400 transition text-2xl cursor-pointer" />
      </div>
      <p className="flex items-center gap-1 mt-2 md:mt-0 text-white text-xl">
        Made with <GoHeartFill className='text-lime-400' /> by Rishabh
      </p>
    </footer>
  )
}

export default Footer;