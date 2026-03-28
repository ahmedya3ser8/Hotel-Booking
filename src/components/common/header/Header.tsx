import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Search } from 'lucide-react';
import logoImage from '@assets/logo.svg';
import { navLinks } from '@constants/navLinks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const homePath = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = homePath && window.scrollY > 10;
      setIsScrolled(prev => (prev !== shouldScroll ? shouldScroll : prev));
    };
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    }
  }, [homePath, location.pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${!homePath && 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4' } ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4' : 'py-4 md:py-6' }`}>
      <div className="container">
        <div className="flex items-center justify-between">

          <Link to='/' className={`h-9 w-42 ${!homePath && 'invert opacity-80'} ${isScrolled && 'invert opacity-80' }`}>
            <img src={logoImage} className='w-full h-full' alt="logo" />
          </Link>

          <ul className={`flex gap-6 ${!homePath && 'text-gray-700!'} ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.pathName} className='font-medium text-sm lg:text-base group'>
                  {link.label}
                  <span className={`block h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'} ${!homePath && 'bg-gray-700!'}`}></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Search size={20} className={`${!homePath && 'text-gray-700!'} ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            <button className='w-24 h-10 rounded-full bg-[#18181B] font-medium text-white text-sm cursor-pointer'> Login </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
