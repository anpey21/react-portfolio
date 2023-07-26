import React, { useState } from 'react';
import {
  faBars,
  faTimes,
  faGithub,
  faLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/AnnaLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width: '200px'}} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='portfolio' smooth={true} duration={500}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <faBars /> : <faTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
        >
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
              PORTFOLIO
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml[-10px] duration-300 bg-blue-600">
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
            >
              LinkedIn <faLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml[-10px] duration-300 bg-blue-600">
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='/' 
            >
              GitHub <faGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml[-10px] duration-300 bg-blue-600">
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml[-10px] duration-300 bg-blue-600">
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
            >
              Resume < BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>  
    </div>
  );
};

export default Navbar;