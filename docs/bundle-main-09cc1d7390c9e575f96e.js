var Demo=function(e){function t(t){for(var n,o,l=t[0],c=t[1],s=t[2],f=0,h=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);h.length;)h.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={0:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonpDemo=window.webpackJsonpDemo||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;return i.push([15,2]),r()}({13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),i=r(0),o=r.n(i),l=r(4),c=r.n(l),s=r(1),u=r.n(s);r(13);function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=Math.sqrt,d=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=r}var t,r,n;return t=e,(r=[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t,r){return t instanceof e?(this.x+=t.x,this.y+=t.y):(this.x+=t,this.y+=r),this}},{key:"subtract",value:function(t,r){return t instanceof e?(this.x-=t.x,this.y-=t.y):(this.x-=t,this.y-=r),this}},{key:"scale",value:function(e){return this.x*=e,this.y*=e,this}},{key:"length",value:function(){var e=this.x,t=this.y;return h(e*e+t*t)}},{key:"norm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.scale(e/this.length())}},{key:"rotateClockwise",value:function(){var e=this.x,t=this.y;return this.x=t,this.y=-e,this}},{key:"rotateCounterClockwise",value:function(){var e=this.x,t=this.y;return this.x=-t,this.y=e,this}}])&&f(t.prototype,r),n&&f(t,n),e}(),g=r(17),v=r(5),y=r.n(v);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){var r;switch(t.type){case"SET_FIELD":var n=x(x({},e),{},(E(r={},t.name,t.value),E(r,"errors",x(x({},e.errors),{},E({},t.name,""))),r));return n.recreate(n),n;case"SET_ERROR":return x(x({},e),{},{errors:x(x({},e.errors),{},E({},t.name,t.error))})}}var P,S,M=function(e){var t=e.label,r=e.name,n=e.config,a=e.dispatch,i=e.placeholder,l=e.validate,c=e.disabled,s=e.error,u=n.errors&&n.errors[r],f=p(Object(g.a)((function(e){l&&(e=l(e)),a(null!==e?{type:"SET_FIELD",name:r,value:e}:{type:"SET_ERROR",name:r,error:s})}),350),2),h=f[0];f[1];return o.a.createElement("div",null,o.a.createElement("label",null,t,o.a.createElement("input",{className:y()(!!u&&"error"),type:"text",defaultValue:n[r],placeholder:i,title:i,size:4,disabled:c,onChange:function(e){var t=e.target.value;h(t)}})),u&&o.a.createElement("div",{className:"error"},u))},k=function(e){var t=e.label,r=e.name,n=e.config,a=e.dispatch,i=e.disabled;return o.a.createElement("div",null,o.a.createElement("label",null,t,o.a.createElement("input",{type:"checkbox",defaultChecked:n[r],size:4,disabled:i,onChange:function(e){var t=e.target.checked;a({type:"SET_FIELD",name:r,value:t})}})))},L=function(e){var t=e.min,r=e.max,n=b(e,["min","max"]);return o.a.createElement(M,m({},n,{placeholder:t+" to "+r,error:"Must be number from "+t+" to "+r,validate:function(e){var n=+e;return!isNaN(n)&&n>=t&&n<=r?n:null}}))},R=function(e){var t=e.config,r=p(Object(i.useReducer)(j,t),2),n=r[0],a=r[1];return console.log("Render",n),o.a.createElement("div",null,o.a.createElement(L,{label:"Number of Rings",name:"numberOfRings",config:n,dispatch:a,min:1,max:20}),o.a.createElement(L,{label:"Easing-Iterations",name:"iterations",config:n,dispatch:a,min:0,disabled:n.animatedEasing,max:2e3}),o.a.createElement(k,{label:"Animated Easing",name:"animatedEasing",config:n,dispatch:a}),o.a.createElement(L,{label:"Percent of edges to remove",name:"removeEdges",config:n,dispatch:a,min:0,max:100}),o.a.createElement("button",{type:"button",onClick:function(){return n.recreate(n)}},"Redraw"))},A=(Math.sqrt(5),2*Math.PI),I=A/6;var D={width:0,height:0,edgeLength:80,numberOfRings:10,iterations:80,removeEdges:50,animatedEasing:!0};function T(e,t,r,n,a,i,o){for(var l=0;l<e.length;l+=10)if(l!==i){var c=e[l+8];if(e[l]===n&&e[l+1]===a&&e[l+2]===t&&e[l+3]===r)return o.index=l,void(o.edge=0);if(e[l+2]===n&&e[l+3]===a&&e[l+4]===t&&e[l+5]===r)return o.index=l,void(o.edge=1);if(3===c){if(e[l+4]===n&&e[l+5]===a&&e[l]===t&&e[l+1]===r)return o.index=l,void(o.edge=2)}else{if(e[l+4]===n&&e[l+5]===a&&e[l+6]===t&&e[l+7]===r)return o.index=l,void(o.edge=2);if(e[l+6]===n&&e[l+7]===a&&e[l]===t&&e[l]===r)return o.index=l,void(o.edge=3)}}o.index=-1}var C={index:-1,edge:0};var _;function F(e,t){for(var r=function(e){for(var t=0,r=0,n=0;n<D.firstPassLen;n+=10){var a=e[n+8];3===a?t++:4===a&&r++}return console.log({quads:r,tris:t}),9*r+7*t}(t),n=new Float64Array(10*r),a=0,i=function(e,t,r){e|=0,t|=0;for(var i=0;i<a;i+=10)if(Math.abs(n[i]-e)<2&&Math.abs(n[i+1]-t)<2)return r&&!n[i+2]&&(n[i+2]=1),i;var o=a;return n[a]=e,n[a+1]=t,n[a+2]=r?1:0,n[a+3]=0,n[a+4]=-1,n[a+5]=-1,n[a+6]=-1,n[a+7]=-1,a+=10,o},o=function(e,t){for(var r=n[e+3],a=!1,i=0;i<r;i++){if(n[e+4+i]===t){a=!0;break}}if(!a){if(r>=6)throw new Error("At most 6 edges per node");n[e+4+r++]=t,n[e+3]=r}},l=function(e,t){o(e,t),o(t,e)},c=0;c<e.firstPassLen;c+=10){var s=t[c+8];if(0!==s){var u=t[c],f=t[c+1],h=t[c+2],d=t[c+3],g=t[c+4],v=t[c+5],y=t[c+9],m=1===y,b=2===y;if(3===s){var p=(u+h)/2,w=(f+d)/2,O=(h+g)/2,x=(d+v)/2,E=(g+u)/2,j=(v+f)/2,P=(u+h+g)/3,S=(f+d+v)/3,M=i(u,f),k=i(p,w),L=i(h,d,m),R=i(O,x,m),A=i(g,v,m),I=i(E,j),T=i(P,S);l(M,k),l(k,T),l(T,I),l(I,M),l(k,L),l(L,R),l(R,T),l(T,k),l(I,T),l(T,R),l(R,A),l(A,I)}else{var C=t[c+6],_=t[c+7],F=(u+h)/2,N=(f+d)/2,q=(h+g)/2,H=(d+v)/2,z=(g+C)/2,B=(v+_)/2,G=(C+u)/2,J=(_+f)/2,U=(u+h+g+C)/4,V=(f+d+v+_)/4,W=i(u,f),Z=i(F,N),$=i(h,d,m),K=i(q,H,m),Q=i(g,v,m||b),X=i(z,B,b),Y=i(C,_,b),ee=i(G,J),te=i(U,V);l(W,Z),l(Z,$),l($,K),l(K,Q),l(Q,X),l(X,Y),l(Y,ee),l(ee,W),l(te,K),l(te,X),l(te,ee),l(te,Z)}}}var re=a/10/r;return console.log("SUBDIVIDED: limit = ",r,", fill rate = ",re),n.slice(0,a)}function N(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t.length,a=0;a<r;a++)for(var i=0;i<n;i+=10)if(!t[i+2]){for(var o=t[i],l=t[i+1],c=t[i+3],s=0,u=0,f=0,h=0;h<c;h++){var d=t[i+4+h],g=t[d],v=t[d+1],y=g-o,m=v-l,b=Math.sqrt(y*y+m*m);s+=g*b,u+=v*b,f+=b}t[i]=s/f,t[i+1]=u/f}}function q(e){!function(e){var t;e.numFaces=6*((t=e.numberOfRings)+1)*(t+1),e.firstPassLen=10*e.numFaces,e.firstPassNumEdges=3*e.numFaces,e.edgeLength=e.height/(2*e.numberOfRings+2)|0,e.recreate=function(t){Object.assign(e,t),z()}}(e),console.log("CREATE GRAPH",e);var t=function(e){var t=e.numberOfRings;console.log("createHexagonalTiles",t);var r=[new d(Math.cos(0)*e.edgeLength,Math.sin(0)*e.edgeLength),new d(Math.cos(I)*e.edgeLength,Math.sin(I)*e.edgeLength),new d(Math.cos(2*I)*e.edgeLength,Math.sin(2*I)*e.edgeLength),new d(Math.cos(3*I)*e.edgeLength,Math.sin(3*I)*e.edgeLength),new d(Math.cos(4*I)*e.edgeLength,Math.sin(4*I)*e.edgeLength),new d(Math.cos(5*I)*e.edgeLength,Math.sin(5*I)*e.edgeLength)],n=new Float64Array(e.firstPassLen),a=0,i=0,o=1;do{for(var l=0;l<6;l++)for(var c=r[l],s=r[(l+1)%6],u=r[(l+2)%6],f=c.copy().scale(i),h=0;h<o;h++)if(1&h)n[a++]=0|f.x,n[a++]=0|f.y,n[a++]=f.x+s.x|0,n[a++]=f.y+s.y|0,n[a++]=f.x+u.x|0,n[a++]=f.y+u.y|0,a+=2,n[a++]=3,n[a++]=-1,f.add(u);else{n[a++]=0|f.x,n[a++]=0|f.y,n[a++]=f.x+c.x|0,n[a++]=f.y+c.y|0,n[a++]=f.x+s.x|0,n[a++]=f.y+s.y|0,a+=2,n[a++]=3;var g=i===t;n[a++]=g?1:-1}o+=2}while(i++<t);return n}(e);t,function(e,t){var r=e.firstPassNumEdges*e.removeEdges/100;console.log("remove attempts",r);var n=0;function a(e,t,r){var n=e[t+8];return e[t+2*r]+","+e[t+2*r+1]+","+(r===n-1?e[t]:e[t+2*(r+1)])+","+(r===n-1?e[t+1]:e[t+2*(r+1)+1])}for(var i=0;i<r;i++){var o=10*(Math.random()*e.numFaces|0);if(3===t[o+8]){var l=t[o+9]>=0,c=3*Math.random()|0;if(!l)if(T(t,t[o+2*c],t[o+2*c+1],2===c?t[o]:t[o+2*(c+1)],2===c?t[o+1]:t[o+2*(c+1)+1],o,C),C.index>=0&&3===t[C.index+8]){var s=C.index,u=C.edge,f=0===c?t[o+4]:t[o+2*(c-1)],h=0===c?t[o+4+1]:t[o+2*(c-1)+1],d=t[s+9],g=d>=0,v=a(t,s,d);switch(t[s+8]=4,u){case 2:t[s+6]=f,t[s+7]=h;break;case 1:t[s+6]=t[s+4],t[s+7]=t[s+5],t[s+4]=f,t[s+5]=h;break;case 0:t[s+6]=t[s+4],t[s+7]=t[s+5],t[s+4]=t[s+2],t[s+5]=t[s+3],t[s+2]=f,t[s+3]=h,g&&(t[s+9]=2)}t[o+8]=0;var y=a(t,s,t[s+9]);g&&v!==y&&console.log("Mismatch: before",v,"after",y,"CASE "+u),n++}}}console.log("Success:",n,"out of",r)}(e,t);var r=F(e,t);return e.animatedEasing||N(e,r,e.iterations),console.log("GRAPH SIZE",r.length/10,r),r}function H(){P.save();var e=D.width/2,t=D.height/2;P.translate(e,t);var r=_.length;function n(e,t,r){var n=_[r],a=_[r+1];P.beginPath(),P.moveTo(e,t),P.lineTo(n,a),P.stroke()}P.fillStyle="#000",P.fillRect(-e,-t,D.width,D.height),P.strokeStyle="#fff",P.fillStyle="#f0f",P.lineWidth=1;for(var a=0;a<r;a+=10)for(var i=_[a],o=_[a+1],l=_[a+3],c=0;c<l;c++)n(i,o,_[a+4+c]);P.restore(),D.animatedEasing&&(N(D,_),u()(H))}function z(){var e=.85*window.innerWidth|0,t=0|window.innerHeight;D.width=e,D.height=t,S.width=e,S.height=t,_=q(D),u()(H)}a()((function(){S=document.getElementById("screen"),(P=S.getContext("2d")).fillStyle="#888",P.strokeStyle="#f00",z(),c.a.render(o.a.createElement(R,{config:D}),document.getElementById("ui")),window.addEventListener("resize",z,!0)}))}});
//# sourceMappingURL=bundle-main-09cc1d7390c9e575f96e.js.map