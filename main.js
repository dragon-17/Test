/** @param {String} sel   @returns {HTMLElement}*/
function $(sel){return document.querySelector.bind(document);}

console.log("🐉🐉🐉")

$("div").innerHTML+=new Date().toLocaleDateString()