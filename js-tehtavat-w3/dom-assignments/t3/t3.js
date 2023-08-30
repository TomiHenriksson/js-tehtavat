
const target = document.getElementById("target");


const browserName = navigator.appName;
const browserVersion = navigator.userAgent


let OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux";


let screenWidth = window.screen.width;
let screenHeight = window.screen.height;


let availWidth = window.screen.availWidth;
let availHeight = window.screen.availHeight;


let date = new Date();
let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
let formattedDate = new Intl.DateTimeFormat('fi-FI', options).format(date);


target.innerHTML = `
    <p>Browser Name and Version: ${browserName}, ${browserVersion}</p>
    <p>Operating System: ${OSName}</p>
    <p>Screen Width and Height: ${screenWidth} x ${screenHeight}</p>
    <p>Available Screen Space: ${availWidth} x ${availHeight}</p>
    <p>Date and Time: ${formattedDate}</p>
`;
