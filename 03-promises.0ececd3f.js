const e=document.querySelector("form");e.addEventListener("submit",(function(t){t.preventDefault();const o=e.elements.delay.value,r=e.elements.step.value;createPromise(r,o).then((e=>{console.log("Promise resolved:",e)})).catch((e=>{console.error("Promise rejected:",e)}))}));
//# sourceMappingURL=03-promises.0ececd3f.js.map
