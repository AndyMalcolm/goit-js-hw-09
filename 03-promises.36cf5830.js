document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault(),function(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}(0,0).then((e=>{console.log("Promise resolved:",e)})).catch((e=>{console.error("Promise rejected:",e)}))}));
//# sourceMappingURL=03-promises.36cf5830.js.map
