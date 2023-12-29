"use client"
import React from 'react'

type PaddingSelectorProps = {
    padding: string[];
    currentPadding: string;
    setCurrentPadding: (padding: string) => void;
}



const PaddingSelector: React.FC<PaddingSelectorProps> = ({ padding, currentPadding, setCurrentPadding }) => {

    const changePadding = (newPadd: string) => {
        setCurrentPadding(newPadd)
    }
    return (
        <div>
            <p className='py-[5px] text-sm font-medium'>Padding</p>
            <div className='flex gap-4'>
                {padding.map((item, indx) => (
                    <button key={indx}
                        onClick={() => changePadding(item)}
                        className={`h-[37px]  flex items-center justify-center text-sm px-2 cursor-pointer
                                        ${currentPadding === item &&
                            "bg-[#3C3C3C] text-white rounded-md"
                            } hover:text-white ease-linear transition-all duration-300
                                  `}
                    >{item}</button>
                ))}
            </div>
        </div>
    )
}

export default PaddingSelector