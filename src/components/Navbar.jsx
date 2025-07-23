import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

    // to display mobile menu
     const [showMobileMenu, setshowMobileMenu] = useState(false)

    // when showMobileMenu
    useEffect(()=>{
        if(showMobileMenu){
            // prevent from scrolling
            document.body.style.overflow = 'hidden'
        }
        else{
            // allow scrolling
            document.body.style.overflow = 'auto'
        }

        return (()=>{
            document.body.style.overflow = 'auto'
        });
    }),[showMobileMenu]
  
    return (
    <div className='absolute top-0 left-0 w-full z-10'>
       <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
            {/* menu item */}
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Project</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonial</a>
            </ul>

            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
            
            {/* --------mobile hidden menu--------- */}
            
            {/* only show mobil menu when menu symbol is true */}
            <img onClick={()=>setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            
            {/* hidden the menu when screen lg */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
    
                    {/* cross symbol */}   
                    {/* when false, the menu will be hidden  */}
                    <div className='flex justify-end p-6 cursor-pointer'>
                        <img onClick={()=>setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
                    </div>

                    {/* mobile menu */}
                    {/* when click one of the menu, menu will be hidden */}
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <a href="#Header" onClick={()=>setshowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</a>
                        <a href="#About" onClick={()=>setshowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>About</a>
                        <a href="#Project" onClick={()=>setshowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Project</a>
                        <a href="#Testimonial" onClick={()=>setshowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Testimonial</a>
                    </ul>
                
            </div>
        </div> 

    </div>
  )
}

export default Navbar
