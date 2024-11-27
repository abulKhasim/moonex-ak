import React, { useState } from 'react'
import Elipse from './Elipse'
import Header from './Header'
import WhyMoonex from './WhyMoonex'
import OurFeatures from './OurFeatures'
import Faqs from './Faqs'
import Footer from './Footer'
import starImg from "../assets/images/star-img.png"
import starImg1 from "../assets/images/star-img-1.png"
import Hero from './Hero'

const Home = () => {
    return (
        <div className='relative max-w-[100em] mx-auto'>
            <div className='w-full bg-[#071624] overflow-hidden'>
                <div className='absolute top-0 left-[-25%]'>
                    <Elipse xValue={-3} size={350} />
                </div>
                <div className='absolute top-0 left-[-5%]'>
                    <Elipse xValue={5} size={220} />
                </div>
                <div className='absolute bottom-[%] left-[7%]'>
                    <Elipse xValue={5} size={150} />
                </div>

                <div className='moon w-[8rem] h-[8rem] sm:w-[12rem] sm:h-[12rem]  rounded-full absolute top-32 lg:top-44 right-14 lg:right-32 bg-gradient-to-br from-yellow-100 to-yellow-500'>
                </div>

                <div className='absolute top-[2%] left-[5%] w-[200px] h-[200px] bg-yellow-500 rounded-full blur-[200px]'></div>
                <div className='absolute top-[15%] right-[5%] w-[200px] h-[200px] bg-yellow-500 rounded-full blur-[200px]'></div>

                <img src={starImg} alt="star" className='absolute top-[3%] sm:top-[5%] left-[10%] w-[30px]' />
                <img src={starImg} alt="star" className='absolute top-[15%] sm:top-[18%] right-[10%] w-[50px]' />
                <img src={starImg1} alt="star" className='absolute top-[2%] sm:top-[4%] right-[10%] w-[50px]' />

                <Header />

                <Hero />
            </div>

            <WhyMoonex />

            <OurFeatures />

            <Faqs />

            <Footer />
        </div>
    )
}


export default Home