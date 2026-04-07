import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import linkedin from '@/assets/linkedin.svg';
import twitter from '@/assets/twitter.svg';
import logoImage from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#E4EEF84F] pt-10 pb-5">
      <div className="container space-y-8">

        <div className="flex justify-between flex-wrap gap-12">

          <div className="col max-w-80 flex flex-col gap-5">
            <Link to='/' className="invert opacity-80">
              <img src={logoImage} className='h-9' alt="logo" />
            </Link>
            <p className="text-[#6B7280] text-xs font-medium">
              Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
            </p>
            <ul className="flex items-center gap-2">
              <li>
                <Link to='/'>
                  <img src={instagram} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src={twitter} alt="twitter" />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col space-y-3">
            <h3 className="text-[#6B7280] text-lg font-playFair"> COMPANY </h3>
            <ul className="space-y-3">
              <li className="text-[#6B7280] text-xs font-medium">
                <Link to='/'> About </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Careers </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Press </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Blog </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Partners </Link>
              </li>
            </ul>
          </div>

          <div className="col space-y-3">
            <h3 className="text-[#6B7280] text-lg font-playFair"> SUPPORT </h3>
            <ul className="space-y-3">
              <li className="text-[#6B7280] text-xs font-medium">
                <Link to='/'> Help Center </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Safety Information </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Cancellation Options </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Contact Us </Link>
              </li>
              <li className="text-[#6B7280] text-xs font-medium"> 
                <Link to='/'> Accessibility </Link>
              </li>
            </ul>
          </div>

          <div className="col max-w-80 space-y-3">
            <h3 className="text-[#6B7280] text-lg font-playFair"> STAY UPDATED </h3>
            <p className="text-[#6B7280] text-sm font-medium">
              Subscribe to our newsletter for travel inspiration and special offers.
            </p>
            <div className="flex">
              <input type="email" className="p-2 border border-[#D9D9D9] outline-none rounded-s-sm" placeholder="your email" />
              <button className="bg-black text-white p-2 rounded-e-sm">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>

        <hr className="border-[#6B728033]" />

        <div className="flex flex-col sm:flex-row justify-between items-center">

          <p className="text-[#6B7280] text-sm font-medium">
            © 2026 QuickStay. All rights reserved.
          </p>

          <ul className="flex items-center gap-2">
            <li>
              <Link to='/' className="text-[#6B7280] font-medium text-sm"> Privacy </Link>
            </li>
            <li>
              <Link to='/' className="text-[#6B7280] font-medium text-sm"> Terms </Link>
            </li>
            <li>
              <Link to='/' className="text-[#6B7280] font-medium text-sm"> Sitemap </Link>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  )
}

export default Footer;
