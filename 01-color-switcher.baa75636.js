function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("body"),r=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let n=null;r.addEventListener("click",(function(){e.style.backgroundColor=t(),n=setInterval((()=>{e.style.backgroundColor=t()}),1e3),r.setAttribute("disabled",!0),o.removeAttribute("disabled")})),o.addEventListener("click",(function(){clearInterval(n),o.setAttribute("disabled",!0),r.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.baa75636.js.map
