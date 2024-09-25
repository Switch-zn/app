import React, {useState} from 'react'
import {FaBars, FaTimes}  from 'react-icons/fa'
import logo from '../assests/logo1.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
<img src="../../src/assests/logo1.png" alt="image logo" style={{width: '50px'}} />
    </div>

    {/* menu */}
    <div className=' hidden md:flex justify-center items-center'>
        <ul className=' hidden md:flex gap-6 '>
            <li className='bg-gray-600 hover:text-yellow-500 p-2 m-2 rounded-2xl max-w-25'>Home</li>
            <li className='bg-gray-600 hover:text-yellow-500 p-2 m-2 rounded-2xl max-w-25'>About</li>
            <li className='bg-gray-600 hover:text-yellow-500 p-2 m-2 rounded-2xl max-w-25'>Skills</li>
            <li className='bg-gray-600 hover:text-yellow-500 p-2 m-2 rounded-2xl max-w-25'>Work</li>
            <li className='bg-gray-600 hover:text-yellow-500 p-2 m-2 rounded-2xl max-w-25'>Contact</li>
        </ul>
    </div>

{/* Hanbuger */}
<div onClick={handleClick} className=' md:hidden -z-10'>
{!nav ? <FaBars /> : <FaTimes />} 
</div>

{/* Mobile menu */}
{/* <ul className='  '>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
</ul> */}


{/* social icons */}
<div className=' hidden '></div>



    </div>
  )
}

export default Navbar