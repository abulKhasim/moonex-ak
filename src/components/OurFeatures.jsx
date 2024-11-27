import React from 'react'
import optionsIcon from "../assets/images/options-icon.png"
import phoneIcon from "../assets/images/phone-icon.png"
import shieldCheckIcon from "../assets/images/shield-check-icon.png"
import dollarIcon from "../assets/images/dollar-icon.png"

const OurFeatures = () => {
    const arr = [
        {
            title: "Cheapeast TXs",
            para: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
            icon: dollarIcon
        },
        {
            title: "CerTIK",
            para: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
            icon: shieldCheckIcon
        },
        {
            title: "No Contact Sells",
            para: "No Contact Sells to fund the marketing wallets",
            icon: phoneIcon
        },
        {
            title: "CrossDex Support",
            para: "Exchange popular digital currencies at the cheapest possible transaction price",
            icon: optionsIcon
        },

    ]

    return (
        <div className='w-full bg-[#071624] text-white py-16 px-10 md:px-28 font-sans'>
            <h2 className='text-[2rem] text-center font-semibold pb-14'>Our <span className='text-yellow-500'>Features</span></h2>
            <div className='flex flex-wrap items-center justify-start gap-6'>
                {
                    arr.map((i) => {
                        return <FeaturesComponent key={i.title} title={i.title} para={i.para} icon={i.icon} />
                    })
                }

            </div>
        </div>
    )
}




function FeaturesComponent({ title, para, icon }) {
    return (
        <div className='flex-1 min-w-[250px] h-[250px] flex flex-col items-start justify-start gap-6 p-6 bg-[#ffffff0a] rounded-2xl border-[1px] border-[#4444446c]'>
            <div className="w-fit p-4 rounded-full bg-[#ffffff1c]">
                <img src={icon} alt="icon" />
            </div>
            <div className='flex flex-col items-start justify-start gap-2'>
                <h2 className='text-[1.2rem]'>{title}</h2>
                <p className='text-[#a7a7a7]'>{para}</p>
            </div>
        </div>
    )
}

export default OurFeatures