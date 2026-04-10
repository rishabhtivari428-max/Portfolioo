import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { SiAdobeillustrator, SiAdobelightroom, SiAdobephotoshop, SiAdobepremierepro, SiAib, SiCanva, SiCss3, SiEditorconfig, SiFigma, SiGithub, SiHtml5, SiJavascript, SiLaragon, SiMongodb, SiNodedotjs, SiPrdotco, SiPrimevideo, SiReact, SiTailwindcss, SiThreedotjs, SiV, SiViadeo } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='text-white flex flex-col px-6 sm:px-16 ml-0'>
        <h1 className='hero-ares text-5xl sm:text-7xl lg:text-8xl font-bold font-[Bison]'><span className='text-lime-400 font-extrabold'>AREAS</span> WHERE I EXCEL</h1>
        <h3 className='text-2xl sm:text-4xl font-bold mt-6'>Development Skills</h3>
        <div className='w-full sm:w-82 h-[3px] bg-lime-400 rounded-full mt-2'></div>
        <div className='flex flex-wrap gap-6 mt-5'>
        <div className='text-6xl mt-5 text-blue-500 bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiReact /></div>
        <div className='text-6xl mt-5 text-green-500 bg-black w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiMongodb /></div>
        <div className='text-6xl mt-5 text-black bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiGithub /></div>
        <div className='text-6xl mt-5 text-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiThreedotjs /></div>
        <div className='text-6xl mt-5 text-orange-500 bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiHtml5 /></div>
        <div className='text-6xl mt-5 text-blue-500 bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiCss3 /></div>
        <div className='text-6xl mt-5 text-blue-500 bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiTailwindcss  /></div>
        <div className='text-6xl mt-5 text-green-600 bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiNodedotjs /></div>
        <div className='text-6xl mt-5 text-yellow-300 bg-black w-fit  cursor-pointer hover:scale-105 transform transition duration-300'><SiJavascript /></div>
        </div>
        <div>
            <h3 className='text-2xl sm:text-4xl font-bold mt-6'>Designing Skills</h3>
            <div className='w-full sm:w-69 h-[3px] bg-lime-400 mt-2 rounded-full'></div>
            <div className='flex flex-wrap gap-6 mt-5'>
            <div className='text-6xl mt-5 text-[#2A89DA] bg-white w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiCanva /></div>
             <div className='text-6xl mt-5 text-[#061866] bg-blue-300 w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiAdobephotoshop /></div>
             <div className='text-6xl mt-5 text-amber-900 bg-amber-400 w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiAdobeillustrator /></div>
             <div className='text-6xl mt-5 text-[#061866] bg-blue-300 w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiAdobelightroom /></div>
             <div className='text-6xl mt-5 text-[#0601a2] bg-blue-300 w-fit rounded-xl cursor-pointer hover:scale-105 transform transition duration-300'><SiAdobepremierepro /></div>
            </div>
        </div>
    </div>
  )
}

export default Skills