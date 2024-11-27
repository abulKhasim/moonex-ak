import React from 'react'

const Elipse = ({ xValue, size }) => {

    return (
        <div className='w-fit overflow-hidden'>
            <div className="w-fit h-fit relative">
                <svg className={`w-fit rotate-3 transition 300ms ease-linear translate-x-[${xValue}%] translate-y-[-20%]`} fill="transparent" viewBox="47 20 260 60" width={`${size}vw`} height={"170vh"} stroke="#404040" strokeWidth={0.08} xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="105" cy="35" rx="50" ry="25" style={{ transform: "rotate(10deg)" }} />
                </svg>
            </div>
        </div>
    )
}

export default Elipse