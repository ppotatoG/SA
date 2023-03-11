!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ESSA=void 0,exports.ESSA={ESSANodes:null,threshold:.1,setThreshold:function(e){if("string"==typeof e){if(""===(e=e.trim()))return console.warn("threshold value is empty, using default value 0.1"),.1;if(isNaN(Number(e)))return console.warn(`invalid threshold value "${e}", using default value 0.1`),.1;e=Number(e)}return"number"!=typeof e?(console.warn(`invalid threshold value "${e}", using default value 0.1`),.1):(e>1&&(console.warn(`threshold value "${e}" cannot be greater than 1, using maximum value 1`),e=1),e)},intersection:function(){this.ESSANodes&&this.ESSANodes.length&&this.ESSANodes.forEach((t=>e.observe(t)))},init:function(e){const t=document.querySelectorAll("[data-EsSa]");if(!t||0===t.length)throw new Error("No matching elements found");this.ESSANodes=t,void 0!==e&&(this.threshold=this.setThreshold(e)),this.intersection()}};const e=new IntersectionObserver((t=>{t.forEach((t=>{const s=t.target;if(!(s instanceof HTMLDivElement))return!1;"false"===s.dataset.ESSAOnce?t.isIntersecting?s.classList.add("ESSAShow"):!t.isIntersecting&&s.classList.contains("ESSAShow")&&s.classList.remove("ESSAShow"):t.isIntersecting&&(s.classList.add("ESSAShow"),e.unobserve(s))}))}),{threshold:exports.ESSA.threshold})}();
