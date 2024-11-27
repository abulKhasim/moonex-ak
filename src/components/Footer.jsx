import React from 'react'
import moonexLogo from "../assets/images/moonex-logo.png"
import moonexTextLogo from "../assets/images/moonex-text-logo.png"
import twitter from "../assets/images/twitter.png"
import reddit from "../assets/images/reddit.png"
import telegram from "../assets/images/telegram.png"

const Footer = () => {
    return (
        <div className='w-full bg-[#050f18] text-white py-24 px-10 md:px-28 font-sans z-10 relative'>
            <div className='w-full flex flex-col gap-14 md:flex-row items-center justify-between'>
                <a href="#">
                    <div className='flex flex-col items-center justify-center'>
                        <img src={moonexLogo} alt="logo" className='w-[5rem]' />
                        <img src={moonexTextLogo} alt="logo" className='w-[5rem]' />
                    </div>
                </a>
                <div className='flex flex-col lg:flex-row items-center gap-3 lg:gap-14'>
                    <a href="#"><h2>About Us</h2></a>
                    <a href="#"><h2>Roadmap</h2></a>
                    <a href="#"> <h2>FAQs</h2></a>
                    <a href="#"><h2>Contact Us</h2></a>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
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

export default Footer