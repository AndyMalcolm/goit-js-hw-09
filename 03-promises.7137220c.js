!function(){var e=document.querySelector("form");e.addEventListener("submit",(function(t){t.preventDefault();var n=e.elements.delay.value,o=e.elements.step.value;createPromise(o,n).then((function(e){console.log("Promise resolved:",e)})).catch((function(e){console.error("Promise rejected:",e)}))}))}();
//# sourceMappingURL=03-promises.7137220c.js.map
