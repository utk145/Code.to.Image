"use client"

import { useRef, useState } from "react";
import BgThemeDropdown from "./components/BgThemeDropdown";
import CodeArea from "./components/CodeArea";
import CodeColorDropdown from "./components/CodeColorDropdown";
import Footer from "./components/Footer";
import LanguageDropdown from "./components/LanguageDropdown";
import PaddingSelector from "./components/PaddingSelector";
import { codeColors, languagesSupported, backgrounds, paddings } from "./utilities/utils";
import html2canvas from "html2canvas";


export default function Home() {

  const editorRef = useRef<HTMLDivElement | null>(null);

  const [language, setLanguage] = useState(languagesSupported[0]?.name)
  const [languageIcon, setLanguageIcon] = useState(languagesSupported[0]?.icon)
  const [theme, settheme] = useState(codeColors[0]);
  const [bg, setBg] = useState(backgrounds[0])
  const [padding, setPadding] = useState(paddings);
  const [currentPadding, setCurrentPadding] = useState(padding[2]);

  const exportImageFunction = async () => {
    const editorElement = editorRef.current;

    if (editorElement) {
      const canvas = await html2canvas(editorElement);
      const img = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream")

      const link = document.createElement("a");
      link.download = 'snapshot.png';
      link.href = img;
      link.click();
    }


  }


  return (
    <main className="h-screen flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px]  p-5 fixed top-0 left-1/2 -translate-x-1/2 z-10 bg-[#191919] rounded-xl shadow-md border border-[#3c3c3c] flex flex-row gap-6">
        <LanguageDropdown language={language} setLanguage={setLanguage} setActiveIcon={setLanguageIcon} />
        <CodeColorDropdown color={theme} setColor={settheme} />
        <BgThemeDropdown background={bg} setBackground={setBg} />
        <PaddingSelector padding={padding} currentPadding={currentPadding} setCurrentPadding={setCurrentPadding} />
        <div className="self-center ml-auto">
          <button
            onClick={exportImageFunction}
            className="py-2 px-3 rounded-md text-sm font-medium text-blue-500 flex flex-col items-center gap-1 bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300 hover:bg-[#F46363] border border-1">
            Export as PNG
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image-down"><circle cx="9" cy="9" r="2" /><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /><path d="m14 19.5 3 3v-6" /><path d="m17 22.5 3-3" /></svg>
          </button>
        </div>
      </header>
      <div className="mt-[10rem]" ref={editorRef  as React.MutableRefObject<HTMLDivElement | null>}>
        <CodeArea language={language} icon={languageIcon} theme={theme} background={bg} currentPadding={currentPadding} />
      </div>
      <Footer />
    </main>
  )
}
