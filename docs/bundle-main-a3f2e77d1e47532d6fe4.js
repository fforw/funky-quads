var Demo=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){var r,o,i,u,a;t.exports=(o=[],i=document,u=i.documentElement.doScroll,(a=(u?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState))||i.addEventListener("DOMContentLoaded",r=function(){for(i.removeEventListener("DOMContentLoaded",r),a=1;r=o.shift();)r()}),function(t){a?setTimeout(t,0):o.push(t)})},function(t,e,n){(function(e){for(var r=n(3),o="undefined"==typeof window?e:window,i=["moz","webkit"],u="AnimationFrame",a=o["request"+u],c=o["cancel"+u]||o["cancelRequest"+u],l=0;!a&&l<i.length;l++)a=o[i[l]+"Request"+u],c=o[i[l]+"Cancel"+u]||o[i[l]+"CancelRequest"+u];if(!a||!c){var s=0,f=0,h=[];a=function(t){if(0===h.length){var e=r(),n=Math.max(0,1e3/60-(e-s));s=n+e,setTimeout((function(){var t=h.slice(0);h.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(s)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return h.push({handle:++f,callback:t,cancelled:!1}),f},c=function(t){for(var e=0;e<h.length;e++)h[e].handle===t&&(h[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){c.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=c}}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){(function(){var n,r,o,i,u,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-u)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),a=1e9*e.uptime(),u=i-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(4))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var c,l=[],s=!1,f=-1;function h(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&y())}function y(){if(!s){var t=a(h);s=!0;for(var e=l.length;e;){for(c=l,l=[];++f<e;)c&&c[f].run();f=-1,e=l.length}c=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||s||a(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),u=n.n(i);n(5);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c,l,s,f=Math.sqrt,h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n,r;return e=t,(n=[{key:"copy",value:function(){return new t(this.x,this.y)}},{key:"add",value:function(e,n){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=n),this}},{key:"subtract",value:function(e,n){return e instanceof t?(this.x-=e.x,this.y-=e.y):(this.x-=e,this.y-=n),this}},{key:"scale",value:function(t){return this.x*=t,this.y*=t,this}},{key:"length",value:function(){var t=this.x,e=this.y;return f(t*t+e*e)}},{key:"norm",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.scale(t/this.length())}},{key:"rotateClockwise",value:function(){var t=this.x,e=this.y;return this.x=e,this.y=-t,this}},{key:"rotateCounterClockwise",value:function(){var t=this.x,e=this.y;return this.x=-e,this.y=t,this}}])&&a(e.prototype,n),r&&a(e,r),t}(),y=(Math.sqrt(5),2*Math.PI),d={width:0,height:0},p=y/6,v=[new h(40*Math.cos(0),40*Math.sin(0)),new h(40*Math.cos(p),40*Math.sin(p)),new h(40*Math.cos(2*p),40*Math.sin(2*p)),new h(40*Math.cos(3*p),40*Math.sin(3*p)),new h(40*Math.cos(4*p),40*Math.sin(4*p)),new h(40*Math.cos(5*p),40*Math.sin(5*p))],m=6*((s=4)+1)*(s+1),w=10*m,x=3*m;var g=function(t){var e=new Float32Array(w),n=0,r=0,o=1;do{for(var i=0;i<6;i++)for(var u=v[i],a=v[(i+1)%6],c=v[(i+2)%6],l=u.copy().scale(r),s=0;s<o;s++)1&s?(e[n++]=l.x,e[n++]=l.y,e[n++]=l.x+a.x,e[n++]=l.y+a.y,e[n++]=l.x+c.x,e[n++]=l.y+c.y,n+=2,e[n++]=3,e[n++]=1,l.add(c)):(e[n++]=l.x,e[n++]=l.y,e[n++]=l.x+u.x,e[n++]=l.y+u.y,e[n++]=l.x+a.x,e[n++]=l.y+a.y,n+=2,e[n++]=3,e[n++]=r===t?2:0);o+=2}while(r++<t);return console.log({length:w,off:n,NUM_EDGES:x}),e}(4);function b(){for(var t=0;t<w;t+=10){var e=g[t+8],n=g[t+9],r=!!(2&n);c.strokeStyle=r?"#0f0":"#800",c.beginPath(),c.moveTo(g[t],g[t+1]);for(var o=1;o<e;o++)c.lineTo(g[t+2*o],g[t+2*o+1]);c.closePath(),c.stroke()}}o()((function(){l=document.getElementById("screen"),c=l.getContext("2d");var t=0|window.innerWidth,e=0|window.innerHeight;d.width=t,d.height=e,l.width=t,l.height=e,c.fillStyle="#000",c.strokeStyle="#f00",c.fillRect(0,0,t,e),c.fillStyle="#888",c.strokeStyle="#f00",c.translate(t>>1,e>>1),u()(b)}))}]);
//# sourceMappingURL=bundle-main-a3f2e77d1e47532d6fe4.js.map