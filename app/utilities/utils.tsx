export const languagesSupported = [
    {
        name: "JavaScript",
        icon: "icons/javascript.svg"
    },
    {
        name: "Java",
        icon: "icons/java.svg"
    },
    {
        name: "Python",
        icon: "icons/python.svg"
    },
    {
        name: "Go",
        icon: "icons/golang.svg"
    },
    {
        name: "CPP",
        icon: "icons/cpp.svg"
    },
    {
        name: "TypeScript",
        icon: "icons/typescript.svg"
    },
    {
        name: "HTML",
        icon: "icons/html.svg"
    },
    {
        name: "CSS",
        icon: "icons/css.svg"
    },
    {
        name: "SCSS",
        icon: "icons/scss.svg"
    },
    {
        name: "JSON",
        icon: "icons/json.svg"
    },
];


export const codeColors = [
    "monokai",
    "github",
    "github_dark",
    "crimson_editor",
    "eclipse",
    "solarized_dark",
    "terminal",
    "clouds_midnight"
]


export const backgrounds = [
    "linear-gradient(354deg,#ff75b5,#ffb86c)",
    "linear-gradient(90deg,#93f9b9,#1d976c)",
    "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
    "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    "#000",
    "linear-gradient(337deg,#654ea3,#da98b4)",
    "linear-gradient(270deg,#fc6767,#ec008c)",
    "#fff",
    "linear-gradient(270deg,#514a9d,#24c6dc)",
    "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
];


export const paddings  = ["1rem", "2rem", "3rem", "4rem"];


export const bootCode = `
3  - 1  // -> 2
3  + 1  // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
[] + [] // -> ''
{} + [] // -> 0
[] + {} // -> '[object Object]'
{} + {} // -> '[object Object][object Object]'

'222' - - '111' // -> 333

[4] * [4]       // -> 16
[] * []         // -> 0
[4, 4] * [4, 4] // NaN
` ;