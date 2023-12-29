"use client"

import { useState } from "react";
import BgThemeDropdown from "./components/BgThemeDropdown";
import CodeArea from "./components/CodeArea";
import CodeColorDropdown from "./components/CodeColorDropdown";
import LanguageDropdown from "./components/LanguageDropdown";
import { codeColors, languagesSupported, backgrounds } from "./utilities/utils";

export default function Home() {

  const [language, setLanguage] = useState(languagesSupported[0]?.name)
  const [languageIcon, setLanguageIcon] = useState(languagesSupported[0]?.icon)
  const [theme, settheme] = useState(codeColors[0]);
  const [bg, setBg] = useState(backgrounds[0])


  return (
    <main className="h-screen flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px]  p-5 fixed top-0 left-1/2 -translate-x-1/2 z-10 bg-[#191919] rounded shadow-md border border-[#3c3c3c] flex flex-row gap-6">
        <LanguageDropdown language={language} setLanguage={setLanguage} setActiveIcon={setLanguageIcon} />
        <CodeColorDropdown color={theme} setColor={settheme} />
        <BgThemeDropdown background={bg} setBackground={setBg} />
      </header>
      <div className="code-editing-space mt-[10rem]">
        <CodeArea language={language} icon={languageIcon} theme={theme}  background={bg}/>
      </div>
    </main>
  )
}
