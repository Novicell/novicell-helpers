var t=function(){var t=document.querySelectorAll("a > .button");if(t&&!(t.length<=0))for(var e=0;e<t.length;e++){t[e].parentNode.classList.add("button-with-link")}},e=function(t,e){if(null!=t)for(;(t=t.parentElement)&&!t.classList.contains(e);)return t},n=function(t,e){if(t.classList)t.classList.toggle(e);else{var n=t.className.split(" "),i=n.indexOf(e);i>=0?n.splice(i,1):n.push(e),t.className=n.join(" ")}},i=function(t,e){return!!t.classList.contains(e)},o=function(t){var e=t.getBoundingClientRect(),n=document.documentElement;return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||n.clientHeight)&&e.right<=(window.innerWidth||n.clientWidth)},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-accordion",n=t.parentElement;n.classList.toggle("accordion--active");var i=n.querySelector(e);if(null!=i){var o,s=i.offsetHeight,l=n.dataset.height;void 0===l?(o=n.offsetHeight+s,n.dataset.height=n.offsetHeight):o=l<n.offsetHeight?l:n.offsetHeight+s,n.style.height=o+"px"}};export{t as buttonsWithLink,e as findAncestor,n as toggleClass,i as hasClass,o as isVisible,s as accordionAnimate};