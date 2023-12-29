"use client"
import React, { useState } from 'react'
import { codeColors } from '../utilities/utils';
import OutsideClickHandler from "react-outside-click-handler";


type CodeColorDropdownProps = {
  color: string;
  setColor: (color: string) => void;
}

const CodeColorDropdown: React.FC<CodeColorDropdownProps> = ({ color, setColor }) => {

  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  // console.log("showDropdownMenu", showDropdownMenu);

  const handleColourChange = (newColor: string) => {
    setColor(newColor);
  }


  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdownMenu(false)}>
      <div onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
        <span className='py-[5px] text-sm font-medium'>Colour</span>
        <div className="capitalize w-[120px] mt-2 dropdown_lang">
          <span className='text-emerald-700'>{color}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down "><path d="m6 9 6 6 6-6"></path></svg>
        </div>
        {showDropdownMenu && (
          <>
            <div className='absolute mt-1 transition-all border-[2px] w-[140px]    border-[#3c3c3c] rounded-md'>
              {codeColors.map((color, indx) => (
                <div key={indx} className=' px-2 py-1  bg-[#191919]  shadow-md'>
                  <p className='cursor-pointer hover:text-gray-50 ' onClick={() => handleColourChange(color)}>{color}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </OutsideClickHandler>
  )
}

export default CodeColorDropdown