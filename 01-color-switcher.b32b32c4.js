const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");let a=null;const l=()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,a=setInterval(l,1e3)})),t.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1,t.disabled=!0})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.b32b32c4.js.map
