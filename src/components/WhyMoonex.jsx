import React from 'react'
import uniswapLogo from "../assets/images/uniswap-logo.png"
import uniswapTextLogo from "../assets/images/uniswap-text.png"
import moonexLogo from "../assets/images/moonex-logo.png"
import moonexTextLogo from "../assets/images/moonex-text-logo.png"
import likeIcon from "../assets/images/like-icon.png"
import yesIcon from "../assets/images/yes-icon.png"
import corssIcon from "../assets/images/cross-icon.png"

const WhyMoonex = () => {
  return (
    <div className='why-moonex w-full bg-[#071624] text-white py-16 sm:pt-44 px-10 md:px-28 font-raleway '>
      <div className='absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-yellow-500 rounded-full blur-[200px] '></div>
      <h2 className='text-[2rem] font-semibold pb-6'>Why <span className='text-yellow-500'>MoonEX</span>?</h2>
      <div className='w-full flex items-center justify-center bg-[#f7f7f70e] p-5 rounded-2xl overflow-hidden '>
        <div className='flex-1 flex flex-col items-start justify-center border-r-[1px] border-[#404040] '>
          <div className='w-full text-center text-[1.5rem] font-semibold px-2 py-6 border-b-[1px] border-[#404040] flex flex-row-reverse items-center justify-center gap-4 max-h-[5rem]'>
            <h2 className='w-[7rem] hidden lg:block'>Comparision</h2>
            <img src={likeIcon} alt="uniswap-logo" className='max-w-[1.5rem] md:max-w-[2rem]' />
          </div>
          <CompareText text={"1. Points no onw"} />
          <CompareText text={"2. Point no one one one"} />
          <CompareText text={"3. Point no one one one"} />
          <CompareText text={"4. Point no one one one"} />
          <CompareText text={"5. Point no one one one"} />
        </div>
        <div className='flex-2 flex flex-col items-start justify-center border-r-[1px] border-[#404040] '>
          <div className='w-full text-center text-[1.5rem] font-semibold px-2 lg:px-10 py-6 border-b-[1px] border-[#404040] flex items-center justify-center gap-2 max-h-[5rem]'>
            <img src={moonexLogo} alt="uniswap-logo" className='max-h-[1.5rem] md:max-h-[2rem]' />
            <img src={moonexTextLogo} alt="uniswap-logo" className='w-[7rem] hidden lg:block' />
          </div>
          <YesComponent />
          <YesComponent />
          <YesComponent />
          <YesComponent />
          <YesComponent />
        </div>
        <div className='flex-2 flex flex-col items-start justify-center '>
          <div className='w-full text-center text-[1.5rem] font-semibold px-2 lg:px-10 py-6 border-b-[1px] border-[#404040] flex items-center justify-center gap-2 max-h-[5rem]'>
            <img src={uniswapLogo} alt="uniswap-logo" className='max-h-[1.5rem] md:max-h-[2rem]' />
            <img src={uniswapTextLogo} alt="uniswap-logo" className='w-[7rem] hidden lg:block' />
          </div>
          <CrossComponent />
          <CrossComponent />
          <CrossComponent />
          <CrossComponent />
          <CrossComponent />
        </div>
      </div>
    </div>
  )
}

function YesComponent() {
  return (
    <div className='w-full text-center border-b-[1px] border-[#404040] px-6 py-6 pt-6 flex items-center justify-center h-[8rem] sm:h-fit'>
      <img src={yesIcon} alt="icon" className='w-[1rem] sm:w-[1.5rem]' />
    </div>
  )
}

function CrossComponent() {
  return (
    <div className='w-full text-center border-b-[1px] border-[#404040] px-6 py-6 pt-6 flex items-center justify-center h-[8rem] sm:h-fit'>
      <img src={corssIcon} alt="icon" className='w-[1rem] sm:w-[1.5rem]' />
    </div>
  )
}

function CompareText({ text }) {
  return (
    <h1 className='w-full border-b-[1px] border-[#404040] px-8 py-6 pt-6 h-[8rem] sm:h-fit text-gray-400'>{text} </h1>
  )
}

export default WhyMoonex