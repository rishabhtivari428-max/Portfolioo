import React from 'react'

const About = () => {
  return (
    <div className='text-center mt-30 text-white px-4'>
        <h1 className='text-5xl md:text-6xl font-bold text-lime-400'>
          About Me
        </h1>
        <div className='flex justify-center mt-4'>
            <div className='w-32 h-[3px] bg-lime-400 rounded-full'></div>
        </div>
        <p className='text-3xl md:text-4xl mt-8'>
          Hi! I Am Rishabh Sharma
        </p>
        <h1 className='mt-4 text-xl'>
          Judges a book by its <span className='text-lime-400'>cover...</span>
        </h1>
        <p className='opacity-80'>
          Because if the cover does not impress you what else can?
        </p>
        <h1 className='mt-6 text-2xl font-semibold'>
          I'm a Software Developer
        </h1>
        <p className='mt-2 text-lg opacity-90'>
          Frontend Developer focused on building clean, responsive, and user-friendly web experiences.
        </p>
        <p className='mt-4 max-w-3xl mx-auto opacity-80 leading-relaxed'>
          I’m a passionate frontend developer who enjoys turning ideas into interactive and
          visually appealing interfaces. I focus on writing clean code and creating responsive
          designs that deliver a smooth and meaningful user experience across all devices.
        </p>

    </div>
  )
}

export default About