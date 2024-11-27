import React, { useState } from 'react'

const Faqs = () => {
    const faqArray = [
        {
            question: "How do i get a refferel code?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam finibus, venenatis est a, hendrerit mi. Morbi vestibulum est est."
        },
        {
            question: "Do i recieve a tokens or ETH when i refer buyers?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam finibus, venenatis est a, hendrerit mi. Morbi vestibulum est est."
        },
        {
            question: "How do i get a refferel code1?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam finibus, venenatis est a, hendrerit mi. Morbi vestibulum est est."
        },
    ]
    return (
        <div className="w-full bg-[#071624] text-white py-16 pb-44 px-10 md:px-28 font-sans flex items-center justify-center relative">
            <div className='absolute bottom-[10%] left-[0%] w-[200px] h-[200px] bg-yellow-500 rounded-full blur-[200px]'></div>
            <div className='absolute top-[10%] right-[0%] w-[200px] h-[200px] bg-yellow-500 rounded-full blur-[200px]'></div>

            <div className='w-[1000px] p-4 py-10 bg-[#ffffff0a] rounded-2xl border-[1px] border-[#7c7c7c41]'>
                <div className="absolute inset-0 bg-gradient-to-br from-[#E7F4FA] to-[#C8E9F6] blur-md -z-10"></div>
                <h2 className='w-full border-b-[1px] border-[#404040] pb-4 text-center text-[2rem] font-semibold text-yellow-500'>FAQs</h2>
                <div className="faq-container w-full flex flex-col items-center">
                    {faqArray.map((i) => {
                        return <FaqComponent key={i.question} question={i.question} answer={i.answer} />
                    })}
                </div>
            </div>
        </div>
    )
}


function FaqComponent({ question, answer }) {
    const [expand, setExpand] = useState(false);

    function expandHandler() {
        setExpand(!expand);
    }
    return (
        <div className={`w-full px-2 sm:px-6 py-6  border-b-[1px] border-[#86868654]`} >
            <div onClick={expandHandler} className="flex w-full justify-between items-center">
                <h2 className="w-[90%] text-[1rem] mb-1 pr-4">{question}</h2>
                <div onClick={expandHandler} className='w-[1.5rem] sm:w-[2.5rem] h-[1.5rem] sm:h-[2.5rem] relative rounded-full bg-[#ffffff1c] cursor-pointer flex items-center justify-center sm:text-[1.3rem] font-bold' >
                    +
                </div>
            </div>
            <div className={`w-[90%] overflow-hidden ${expand ? "max-h-96" : "max-h-0"}`} style={{ transition: 'max-height 0.2s ease-in-out' }}>
                <h3 className="text-gray-500">{answer}</h3>
            </div>
        </div>
    )
}

export default Faqs