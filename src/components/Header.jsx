import React, {useEffect, useState} from 'react'
import { FaHeart, FaShoppingCart, FaSearch, FaMapMarkerAlt } from 'react-icons/fa'
import {IoPerson} from 'react-icons/io5'
import {FaXmark, FaBars, FaPhoneVolume} from 'react-icons/fa6' 
import { MdEmail } from 'react-icons/md'
import {Link} from 'react-scroll'
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 500,
        easing: "ease-in-out",
      });
    AOS.refresh();
},[])
  
  const [menuOpen, setmenuOpen] = useState(false);
  const menuToggle = () => {
    setmenuOpen(!menuOpen);
  }
  const closeMenu = () => {
    setmenuOpen(false);
  }
  const navItem = [
    {link: "Home",path:'home'},
    {link: "About",path:'contactfrom'},
    {link: "Products",path:'products'},
    {link: "Testimonials",path:'testimonials'},
    {link: "Services",path: 'services'}
  ]
  return (
    <header>
      <nav className='w-full bg-gray-100 flex items-center justify-between
      sticky lg:px-16 px-6 py-5 top-0 z-50'>
       <h1 className='text-themepurple font-bold lg:text-[30px]
       text-2xl'>ElectronixShop</h1>
       <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItem.map(({link, path}) => (
          <Link key={path} className='text-xl text-black font-semibold rounded-xl
          cursor-pointer px-4 py-2 hover:bg-themepurple hover:text-white'
          to={path} spy={true} offset={-100} smooth={true}>{link}

          </Link>
        ))}
       </ul>
       {/* mobile view */}
       <div className='flex items-center justify-center lg:hidden mt-3'
       onClick={menuToggle}>
         <div>
           {menuOpen ? <FaXmark className='text-themepurple text-2xl cursor-pointer'/> : 
           <FaBars className='text-themepurple text-2xl cursor-pointer'/>}
         </div>
       </div>
       <div className={`${menuOpen ? 'flex ': 'hidden'} w-full
       h-fit bg-themepurple p-4 absolute top-[80px] left-0`}onClick={closeMenu}>
         <ul className='flex flex-col justify-center items-center gap-2 w-full'>
        {navItem.map(({link, path}) => (
          <Link key={path} className='text-xl text-white font-semibold rounded-lg p-3
          cursor-pointer hover:bg-themeyellow hover:text-black w-full text-center'
          to={path} spy={true} offset={-100} smooth={true}>{link}

          </Link>
        ))}
       </ul>
       </div>
      </nav>
    </header>
  )
}

export default Header

