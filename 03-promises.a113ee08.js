const e=document.querySelector("form");e.addEventListener("submit",(function(t){t.preventDefault();const n=e.elements.delay.value,o=e.elements.step.value;e.elements.amount.value,function(e,t){return new Promise(((n,o)=>{const s=Math.random()>.3;setTimeout((()=>{s?n({step:e,delay:t}):o({step:e,delay:t})}),t)}))}(o,n).then((e=>{console.log("Promise resolved:",e)})).catch((e=>{console.error("Promise rejected:",e)}))}));
//# sourceMappingURL=03-promises.a113ee08.js.map
