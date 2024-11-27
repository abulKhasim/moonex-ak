import React, { useState } from 'react'
import moonexLogo from "../assets/images/moonex-logo.png"
import moonexTextLogo from "../assets/images/moonex-text-logo.png"
import menuIcon from "../assets/images/menu-icon.png"
import twitter from "../assets/images/twitter.png"
import reddit from "../assets/images/reddit.png"
import telegram from "../assets/images/telegram.png"

const Header = () => {
    const [menu, setMenu] = useState(false);

    const menuToggle = () => {
        setMenu(!menu)
    }

    return (
        <div className='relative font-raleway w-full py-6 flex items-center justify-between px-10 sm:px-16 text-[1.2rem] font-semibold text-white'>
            <a href="#">
                <div className='flex items-center gap-1'>
                    <img src={moonexLogo} alt="logo" className="w-[70px] sm:w-[80px]" />
                    <img src={moonexTextLogo} alt="logo" className="w-[70px] sm:w-[80px]" />
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
                <div onClick={menuToggle} className='block xl:hidden cursor-pointer'>
                    <img src={menuIcon} alt="menu" className='w-[50px]' />
                </div>
            </div>

            <div className={`w-[70%] sm:w-[30rem] h-screen p-10  bg-[#050f18] flex flex-col items-start justify-between gap-16 fixed top-0 left-0 z-30 xl:hidden transition-all ease-linear ${menu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='flex flex-col items-start gap-16'>
                    <div className='flex items-center justify-center gap-1'>
                        <img src={moonexLogo} alt="logo" className="w-[50px] sm:w-[60px]" />
                        <img src={moonexTextLogo} alt="logo" className="w-[70px] sm:w-[80px]" />
                    </div>
                    <div className='flex flex-col items-start gap-6 sm:text-[1.2rem]'>
                        <a href="#"> <h2>Home</h2></a>
                        <a href="#"><h2>About Us</h2></a>
                        <a href="#"><h2>Roadmap</h2></a>
                        <a href="#"> <h2>FAQs</h2></a>
                        <a href="#"><h2>Contact Us</h2></a>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mb-16'>
                    <a href="#"><h2 className='text-[1.5rem]'>Contact <span className='text-yellow-500'>Us</span></h2></a>
                    <div className='flex items-center gap-6'>
                        <h2 className='cursor-pointer'><img src={twitter} alt="twitter" /></h2>
                        <h2 className='cursor-pointer'><img src={reddit} alt="reddit" /></h2>
                        <h2 className='cursor-pointer'><img src={telegram} alt="telegram" /></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header