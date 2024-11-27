import React from 'react'

const Hero = () => {
    return (
        <div className='w-full items-start justify-center py-28 sm:py-28 px-10 md:px-28 flex flex-col gap-3 text-white font-raleway relative z-10'>
            <div className='hidden sm:flex flex-col gap-1 sm:gap-0'>
                <h1 className=' sm:text-[6vw] lg:text-[3.5rem] font-bold leading-none'>Trusted Multi-Chain</h1>
                <h1 className=' sm:text-[6vw] lg:text-[3.5rem] font-bold leading-none'><span className='text-yellow-300'>DEX</span> Platfrom</h1>
            </div>
            <div className='flex sm:hidden flex-col gap-1 sm:gap-0 mt-10'>
                <h1 className='text-[3rem] font-bold leading-none'>Trusted </h1>
                <h1 className='text-[3rem] font-bold leading-none'>Multi-Chain</h1>
                <h1 className='text-[3rem] font-bold leading-none'><span className='text-yellow-500'>DEX</span> Platfrom</h1>
            </div>
            <p className='font-normal text-[#bebebe]'>Trade, earn, and own crypto in the all-in-one multi-chain DEX</p>
            <div className='flex flex-wrap flex-row items-center gap-6 mt-5 font-semibold'>
                <Button text={"Connect Wallet"} textColor={"black"} borderColor={"bg-yellow-500"} bgColor={"bg-yellow-300"} />
                <Button text={"Trade Cypto"} textColor={"yellow-500"} borderColor={"bg-yellow-500"} />
            </div>
        </div>
    )
}

function Button({ text, textColor, bgColor, borderColor }) {
    return (
        <button className={`text-[0.8rem] sm:text-[1.5vw] md:text-[1rem] px-7 py-3 rounded-full ${bgColor ? "bg-yellow-500" : "bg-transparent"} ${borderColor === "bg-yellow-300" ? "border-[2px] border-yellow-300" : "border-[2px] border-yellow-300"} ${textColor ? `text-${textColor}` : "text-white"}`}>{text}</button>
    )
}

export default Hero