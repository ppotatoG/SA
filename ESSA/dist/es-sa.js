!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ESSA=void 0,exports.ESSA={saNodes:[],threshold:.1,setThreshold:function(e){if("string"==typeof e){if(""===(e=e.trim()))return console.warn("threshold value is empty, using default value 0.1"),.1;if(!isFinite(Number(e)))return console.warn(`invalid threshold value "${e}", using default value 0.1`),.1;e=Number(e)}return"number"!=typeof e?(console.warn(`invalid threshold value "${e}", using default value 0.1`),.1):(e>1&&(console.warn(`threshold value "${e}" cannot be greater than 1, using maximum value 1`),e=1),e)},intersection:function(){if(exports.ESSA.saNodes&&exports.ESSA.saNodes.length)for(const s of exports.ESSA.saNodes)e.observe(s)},init:function(e){void 0!==e&&(exports.ESSA.threshold=exports.ESSA.setThreshold(e)),exports.ESSA.intersection()}};const e=new IntersectionObserver((s=>{s.forEach((s=>{const t=s.target;if(!(t instanceof HTMLDivElement))return!1;"false"===t.dataset.saOnce?s.isIntersecting?t.classList.add("saShow"):!s.isIntersecting&&t.classList.contains("saShow")&&t.classList.remove("saShow"):s.isIntersecting&&(t.classList.add("saShow"),e.unobserve(t))}))}),{threshold:exports.ESSA.threshold})}();