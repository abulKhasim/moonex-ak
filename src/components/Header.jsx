import React from 'react'
import moonexLogo from "../assets/images/moonex-logo.png"
import moonexTextLogo from "../assets/images/moonex-text-logo.png"
import menuIcon from "../assets/images/menu-icon.png"

const Header = () => {
    return (
        <div className='relative font-raleway w-full py-6 flex items-center justify-between px-10 sm:px-16 text-[1.2rem] font-semibold text-white'>
            <a href="#">
                <div className='flex items-center gap-1'>
                    <img src={moonexLogo} alt="logo" className="w-[70px] sm:w-[80px]"/>
                    <img src={moonexTextLogo} alt="logo" className="w-[70px] sm:w-[80px]"/>
                </div>
            </a>
            <div className='hidden xl:flex items-center gap-14'>
                <a href="#"> <h2>Home</h2></a>
                <a href="#"><h2>About Us</h2></a>
                <a href="#"><h2>Roadmap</h2></a>
                <a href="#"> <h2>FAQs</h2></a>
                <a href="#"><h2>Contact Us</h2></a>
            </div>
            <div className='flex items-center gap-5'>
                <div className='hidden md:block'>
                    <button className='px-7 py-3 rounded-full bg-yellow-500 text-black'>Connect Wallet</button>
                </div>
                <div className='block xl:hidden cursor-pointer'>
                    <img src={menuIcon} alt="menu" className='w-[50px]' />
                </div>
            </div>
        </div>
    )
}

export default Header