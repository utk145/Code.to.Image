"use client"
import React, { useState } from 'react'
import { backgrounds } from '../utilities/utils';
import OutsideClickHandler from "react-outside-click-handler";


type BgThemeDropdownProps = {
  background: string;
  setBackground: (background: string) => void;
}


const BgThemeDropdown: React.FC<BgThemeDropdownProps> = ({ background, setBackground }) => {

  const [showDropdownMenu, setShowDropdownMenu] = useState(false);


  const handleColourChange = (newBg: string) => {
    setBackground(newBg);
  }


  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdownMenu(false)}>
      <div onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
        <span className='py-[5px] text-sm font-medium'>Bg Colour</span>
        <div className="w-[62px] mt-2 dropdown_lang">
          <div
            className="rounded-full w-[20px] h-[20px]"
            style={{
              background: background,
            }}
          ></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down "><path d="m6 9 6 6 6-6"></path></svg>
        </div>
        {showDropdownMenu && (
          <>
            <div className='absolute mt-1 transition-all border-[2px] w-[62px]  border-[#3c3c3c] rounded-md'>
              {backgrounds.map((color, indx) => (
                <div key={indx} className=' px-2 py-1  bg-[#191919]  shadow-md'>
                  <div key={indx}
                    onClick={() => handleColourChange(color)}
                    className="w-[20px] h-[20px] rounded-full cursor-pointer"
                    style={{ background: color }}
                  ></div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </OutsideClickHandler>
  )
}

export default BgThemeDropdown