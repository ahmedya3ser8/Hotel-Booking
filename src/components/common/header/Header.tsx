import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Search } from 'lucide-react';
import logoImage from '@assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 10);
    }
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <header className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4' : 'bg-transparent py-4 md:py-6' }`}>
      <div className="container">
        <div className="flex items-center justify-between">

          <Link to='/' className={`h-9 w-42 ${isScrolled && 'invert opacity-80' }`}>
            <img src={logoImage} className='w-full h-full' alt="logo" />
          </Link>

          <ul className={`flex gap-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <li>
              <Link to="/" className='font-medium text-sm lg:text-base group'>
                Home
                <span className='block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link to="/" className='font-medium text-sm lg:text-base group'> 
                Hotels 
                <span className='block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link to="/" className='font-medium text-sm lg:text-base group'> 
                Experiences 
                <span className='block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link to="/" className='font-medium text-sm lg:text-base group'> 
                About 
                <span className='block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link to="/" className='font-medium text-sm lg:text-base group'> 
                Dashboard 
                <span className='block h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Search size={16} className={`${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            <button className='w-24 h-10 rounded-full bg-[#18181B] font-medium text-white text-sm cursor-pointer'> Login </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
