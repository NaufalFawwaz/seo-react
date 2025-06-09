import React, { useState } from 'react';
import { logo } from '../assets';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navItem = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    nav: '#about'
  },
  {
    name: 'Facility',
    nav: '#facility'
  },
  {
    name: 'Book+',
    url: '/booking'
  },
  {
    name: 'Games',
    url: '/games'
  }
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          const offset = 80;
          const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) {
        const offset = 80;
        const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full p-4 bg-primary1 flex items-center justify-between sticky top-0 z-50'>
      <NavLink to={'/'}>
        <img src={logo} alt="logo" className='h-[30px] w-[160px] ml-4' />
      </NavLink>
      
      <button 
        className='md:hidden text-white p-2'
        onClick={toggleMenu}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <div className='hidden md:flex flex-grow justify-end pr-10'>
        <div className='flex flex-row gap-10 font-semibold text-lg text-white'>
          {navItem.map(data => (
            <div className='relative group' key={data.name}>
              {data.name === 'Home' ? (
                <button
                  onClick={handleHomeClick}
                  className='transition-colors duration-300 ease-in-out text-white/90 hover:text-white'
                >
                  {data.name}
                </button>
              ) : data.nav ? (
                <button
                  onClick={() => handleScroll(data.nav)}
                  className='transition-colors duration-300 ease-in-out text-white/90 hover:text-white'
                >
                  {data.name}
                </button>
              ) : (
                <NavLink
                  to={data.url}
                  className='transition-colors duration-300 ease-in-out text-white/90 hover:text-white'
                >
                  {data.name}
                </NavLink>
              )}
              <div className='absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 ease-in-out group-hover:w-full rounded-lg'></div>
            </div>
          ))}
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-primary1 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className='flex flex-col items-center gap-4 py-4'>
          {navItem.map(data => (
            <div className='relative group w-full text-center' key={data.name}>
              {data.name === 'Home' ? (
                <button
                  onClick={handleHomeClick}
                  className='transition-colors duration-300 ease-in-out text-white/90 hover:text-white text-lg font-semibold'
                >
                  {data.name}
                </button>
              ) : data.nav ? (
                <button
                  onClick={() => handleScroll(data.nav)}
                  className='transition-colors duration-300 ease-in-out text-white/90 hover:text-white text-lg font-semibold'
                >
                  {data.name}
                </button>
              ) : (
                <NavLink
                  to={data.url}
                  onClick={() => setIsOpen(false)}
                  className='transition-colors duration-300 ease-in-out text-white/90 hover:text-white text-lg font-semibold'
                >
                  {data.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;