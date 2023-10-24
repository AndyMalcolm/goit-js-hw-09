const e=document.querySelector("form");e.addEventListener("submit",(function(t){t.preventDefault();const o=e.elements.delay.value,r=e.elements.step.value,n=e.elements.amount.value;for(let e=0;e<n;e++)createPromise(r,o).then((e=>{console.log("Promise resolved:",e)})).catch((e=>{console.error("Promise rejected:",e)})),o=Number(o)+Number(r)}));
//# sourceMappingURL=03-promises.c82b53ee.js.map
