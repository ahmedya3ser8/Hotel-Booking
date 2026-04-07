import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Lock, LogOut, User } from 'lucide-react';

import avatarImage from '@/assets/avatar.jpg';
import logoImage from '@/assets/logo.svg';

import { navLinks } from '@/constants/navLinks';
import { ChangePasswordModal, ProfileModal } from '@/components';
import { useAuthStore } from '@/store/authStore';

const Header = () => {
  const { isAuthenticated, logout, user, updateUser, loading, updateProfile, isUpdateProfile, updatePassword } = useAuthStore();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
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
    <>

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

            {isAuthenticated ? (
              <div className='relative'>
                <div onClick={() => setOpenMenu(prev => !prev)} className='size-10 bg-[#A1AEBF] overflow-hidden rounded-full cursor-pointer'>
                  <img src={user?.profileImage || avatarImage} className='w-full h-full' alt="avatar-Image" />
                </div>
                {openMenu && (
                  <ul className='bg-gray-50 w-50 text-gray-700 rounded-md drop-shadow-md absolute right-0 mt-5'>
                    <li onClick={() => { setOpenMenu(prev => !prev); setProfileModal(prev => !prev)}} className='flex items-center gap-2 p-3 transition duration-300 hover:bg-gray-200 cursor-pointer'>
                      <User size={16} />
                      Profile
                    </li>
                    <li onClick={() => { setOpenMenu(prev => !prev); setChangePasswordModal(prev => !prev)}} className='flex items-center gap-2 p-3 transition duration-300 hover:bg-gray-200 cursor-pointer'>
                      <Lock size={16} />
                      Change Password
                    </li>
                    <li>
                      <Link onClick={() => { setOpenMenu(prev => !prev); logout(navigate) }} to='/login' className='flex items-center gap-2 p-3 transition duration-300 hover:bg-gray-200 cursor-pointer'>
                        <LogOut size={16} />
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
            <Link to='/login'  className='w-24 h-10 rounded-full bg-[#18181B] font-medium text-white text-sm cursor-pointer flex justify-center items-center'>
              Login
            </Link>
            )}

          </div>
        </div>
      </header>

      {changePasswordModal && (
        <ChangePasswordModal 
          setChangePasswordModal={setChangePasswordModal} 
          updatePassword={updatePassword}
          loading={loading}
        />
      )}

      {profileModal && (
        <ProfileModal 
          setProfileModal={setProfileModal} 
          user={user!} 
          updateUser={updateUser} 
          loading={loading} 
          isUpdateProfile={isUpdateProfile}
          updateProfile={updateProfile}
        />
      )}

    </>
  )
}

export default Header;
