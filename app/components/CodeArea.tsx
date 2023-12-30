"use client"
import React, { useEffect, useState } from 'react'
import { Resizable } from 're-resizable';
import AceEditor from "react-ace";

// Themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-clouds_midnight";


// Language Syntax highlighting
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-scss";
import { bootCode } from '../utilities/utils';

type CodeAreaProps = {
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPadding?: string;
}

const CodeArea: React.FC<CodeAreaProps> = ({ language, theme, icon, background, currentPadding }) => {


    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState<number | null>(500)

    // @ts-ignore
    const handleResize = (event, direction, ref, position) => {
        const newHeight = ref.style.height;
        setHeight(parseInt(newHeight, 10));

    }

    const updateSize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize);
        updateSize(); // to get the current width of the window on initial render
        return () => window.removeEventListener("resize", updateSize);
    }, [])


    const [title, setTitle] = useState("");
    const [codeVal, setCodeVal] = useState(bootCode);

    const handleCodeChange = (newCode: string) => {
        setCodeVal(newCode);
    };


    return (

        <Resizable
            minHeight={470}
            minWidth={510}
            maxWidth={1000}
            defaultSize={{ width: width, height: height || 500 }}
            onResize={handleResize}
            className="resizable_container relative"
            style={{ background: background }}
        >
            <div className='' style={{ padding: currentPadding }} >
                <div className=' h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80  rounded-xl'>

                    <div className='flex gap-1 items-center'>
                        <div className='w-3 h-3 rounded-full bg-[#FF5656]'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-300'></div>
                        <div className='w-3 h-3 rounded-full bg-green-300'></div>
                    </div>

                    <div className='w-full rounded-tr-lg rounded-tl-lg'>
                        <input type="text" placeholder={"Untitled"} value={title} onChange={(e) => setTitle(e.target.value)} className='w-full  text-[hsla(0,0%,100%,.6)] bg-transparent border-none outline-none font-medium text-center'
                            style={{
                                lineHeight: "1.8rem",
                            }}
                        />
                    </div>

                    <div className='flex items-center justify-center p-[3px]  bg-black bg-opacity-30 rounded-md'>
                        <div className='w-[20px] h-[20px] flex items-center justify-center'>
                            <img src={icon} alt="lang_icon" className='w-[38px]  max-h-fit ' />
                            {/* https://www.svgrepo.com/svg/224788/coding-programming-language */}
                        </div>
                    </div>

                </div>
                <AceEditor
                    placeholder="Code goes here"
                    mode={language.toLocaleLowerCase()}
                    theme={theme}
                    name="meraeditor"
                    fontSize={18}
                    wrapEnabled={true}
                    showPrintMargin={false}
                    showGutter={false}
                    height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
                    highlightActiveLine={false}
                    editorProps={{ $blockScrolling: true }}
                    value={codeVal}
                    onChange={handleCodeChange}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                    className="aceEditor_container rounded-xl"
                />

            </div>
        </Resizable>
    )
}

export default CodeArea