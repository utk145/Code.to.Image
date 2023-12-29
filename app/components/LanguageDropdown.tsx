"use client"
import React, { useState } from 'react'
import { languagesSupported } from '../utilities/utils';


type LanguageDropdownProps = {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ language, setLanguage, setActiveIcon }) => {

  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  // console.log("showDropdownMenu", showDropdownMenu);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIconLanguage = languagesSupported.find((lang) => lang.name === newLanguage);
    if (newActiveIconLanguage) {
      setActiveIcon(newActiveIconLanguage.icon);
    }
  }


  return (
    <div onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
      <span className='py-[5px] text-sm font-medium'>Language</span>
      <div className="capitalize w-[120px] mt-2 dropdown_lang">
        <span className='text-emerald-700'>{language}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down "><path d="m6 9 6 6 6-6"></path></svg>
      </div>
      {showDropdownMenu && (
        <>
          <div className='absolute mt-1 transition-all border-[2px] w-[120px] border-[#3c3c3c] rounded-md'>
            {languagesSupported.map((lang, indx) => (
              <div key={indx} className=' px-2 py-1  bg-[#191919]  shadow-md'>
                <p className='cursor-pointer hover:text-gray-50 ' onClick={() => handleLanguageChange(lang.name)}>{lang.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageDropdown