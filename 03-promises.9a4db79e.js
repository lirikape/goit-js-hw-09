const e={body:document.querySelector("body"),form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function o(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.body.style.backgroundColor="#f7eff4",e.form.addEventListener("click",(function(t){t.preventDefault();const n=Number(e.delay.value);let l=Number(e.step.value);const r=Number(e.amount.value);for(let e=1;e<=r;e+=1){o(e,n+l*(e-1)).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.9a4db79e.js.map