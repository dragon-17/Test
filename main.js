/** @param {String} sel   @returns {HTMLElement}*/
function $(sel){return document.querySelector(sel);}

let date_str=new Date().toLocaleTimeString()
console.log("𖠀🐉🐉🐉",date_str)
$("div").innerHTML+=" it is: "+date_str;