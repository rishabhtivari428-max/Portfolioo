import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16 py-5 text-white font-semibold gap-4'>
        <h4 className='hover:text-lime-400 font-[Bison] text-2xl sm:text-3xl'>{props.Name}</h4>
        <ul className='flex justify-between gap-4 sm:gap-8 font-[Bison] text-lg sm:text-2xl'>
            <Link to='/' className='hover:text-lime-400'>Home</Link>
            <Link to='about' className='hover:text-lime-400'>About</Link>
            <Link to='projects' className='hover:text-lime-400'>Projects</Link>
            <Link to='contact' className='hover:text-lime-400'>Contact</Link>
        </ul>
    </div>
  )
}

export default Navbar