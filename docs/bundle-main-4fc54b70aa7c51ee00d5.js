var Demo=function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],f=0,h=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);h.length;)h.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={0:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonpDemo=window.webpackJsonpDemo||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;return o.push([15,2]),r()}({13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t),r.d(t,"MAX_POWER",(function(){return C}));var n=r(2),a=r.n(n),o=r(0),i=r.n(o),u=r(3),c=r.n(u),s=r(4),l=r.n(s);r(13);function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=Math.sqrt,v=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=r}var t,r,n;return t=e,(r=[{key:"copy",value:function(){return new e(this.x,this.y)}},{key:"add",value:function(t,r){return t instanceof e?(this.x+=t.x,this.y+=t.y):(this.x+=t,this.y+=r),this}},{key:"subtract",value:function(t,r){return t instanceof e?(this.x-=t.x,this.y-=t.y):(this.x-=t,this.y-=r),this}},{key:"scale",value:function(e){return this.x*=e,this.y*=e,this}},{key:"length",value:function(){var e=this.x,t=this.y;return h(e*e+t*t)}},{key:"norm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.scale(e/this.length())}},{key:"rotateClockwise",value:function(){var e=this.x,t=this.y;return this.x=t,this.y=-e,this}},{key:"rotateCounterClockwise",value:function(){var e=this.x,t=this.y;return this.x=-t,this.y=e,this}}])&&f(t.prototype,r),n&&f(t,n),e}(),d=r(17),g=r(5),y=r.n(g);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){var r;switch(t.type){case"SET_FIELD":var n=x(x({},e),{},(E(r={},t.name,t.value),E(r,"errors",x(x({},e.errors),{},E({},t.name,""))),r));return n.recreate(n),n;case"SET_ERROR":return x(x({},e),{},{errors:x(x({},e.errors),{},E({},t.name,t.error))})}}var P,M,S=function(e){var t=e.label,r=e.name,n=e.config,a=e.dispatch,o=e.placeholder,u=e.validate,c=e.error,s=n.errors&&n.errors[r],l=b(Object(d.a)((function(e){u&&(e=u(e)),a(null!==e?{type:"SET_FIELD",name:r,value:e}:{type:"SET_ERROR",name:r,error:c})}),350),2),f=l[0];l[1];return i.a.createElement("div",null,i.a.createElement("label",null,t,i.a.createElement("input",{className:y()(!!s&&"error"),type:"text",defaultValue:n[r],placeholder:o,title:o,size:4,onChange:function(e){var t=e.target.value;f(t)}})),s&&i.a.createElement("div",{className:"error"},s))},L=function(e){var t=e.min,r=e.max,n=p(e,["min","max"]);return i.a.createElement(S,m({},n,{placeholder:t+" to "+r,error:"Must be number from "+t+" to "+r,validate:function(e){var n=+e;return!isNaN(n)&&n>=t&&n<=r?n:null}}))},k=function(e){var t=e.config,r=b(Object(o.useReducer)(j,t),2),n=r[0],a=r[1];return console.log("Render",n),i.a.createElement("div",null,i.a.createElement(L,{label:"Number of Rings",name:"numberOfRings",config:n,dispatch:a,min:1,max:10}),i.a.createElement(L,{label:"Easing-Iterations",name:"iterations",config:n,dispatch:a,min:0,max:2e3}),i.a.createElement(L,{label:"Percent of edges to remove",name:"removeEdges",config:n,dispatch:a,min:0,max:100}),i.a.createElement("button",{type:"button",onClick:function(){return n.recreate(n)}},"Redraw"))},R=(Math.sqrt(5),2*Math.PI),I=R/6;var A={width:0,height:0,edgeLength:80,numberOfRings:5,iterations:500,removeEdges:90};function D(e,t,r,n,a,o,i){for(var u=0;u<e.length;u+=10)if(u!==o){var c=e[u+8];if(e[u]===n&&e[u+1]===a&&e[u+2]===t&&e[u+3]===r)return i.index=u,void(i.edge=0);if(e[u+2]===n&&e[u+3]===a&&e[u+4]===t&&e[u+5]===r)return i.index=u,void(i.edge=1);if(3===c){if(e[u+4]===n&&e[u+5]===a&&e[u]===t&&e[u+1]===r)return i.index=u,void(i.edge=2)}else{if(e[u+4]===n&&e[u+5]===a&&e[u+6]===t&&e[u+7]===r)return i.index=u,void(i.edge=2);if(e[u+6]===n&&e[u+7]===a&&e[u]===t&&e[u]===r)return i.index=u,void(i.edge=3)}}i.index=-1}var T={index:-1,edge:0};function _(e,t){for(var r=function(e){for(var t=0,r=0,n=0;n<A.firstPassLen;n+=10){var a=e[n+8];3===a?t++:4===a&&r++}return console.log({quads:r,tris:t}),9*r+7*t}(t),n=new Float64Array(6*r),a=0,o=function(e,t){e|=0,t|=0;for(var r=0;r<a;r+=6)if(Math.abs(n[r]-e)<2&&Math.abs(n[r+1]-t)<2)return r;var o=a;return n[a]=e,n[a+1]=t,n[a+2+0]=-1,n[a+2+1]=-1,n[a+2+2]=-1,n[a+2+3]=-1,a+=6,o},i=function(e,t,r){n[e+2+r]=t,n[t+2+(r+2&3)]=e},u=0;u<e.firstPassLen;u+=10){var c=t[u+8];if(0!==c){var s=t[u],l=t[u+1],f=t[u+2],h=t[u+3],v=t[u+4],d=t[u+5];if(3===c){var g=(s+f)/2,y=(l+h)/2,m=(f+v)/2,p=(h+d)/2,b=(v+s)/2,O=(d+l)/2,w=(s+f+v)/3,x=(l+h+d)/3,E=o(s,l),j=o(g,y),P=o(f,h),M=o(m,p),S=o(v,d),L=o(b,O),k=o(w,x);i(E,j,0),i(j,k,1),i(k,L,2),i(L,E,3),i(j,P,0),i(P,M,1),i(M,k,2),i(k,j,3),i(L,k,0),i(k,M,1),i(M,S,2),i(S,L,3)}else{var R=t[u+6],I=t[u+7],D=(s+f)/2,T=(l+h)/2,_=(f+v)/2,C=(h+d)/2,F=(v+R)/2,N=(d+I)/2,q=(R+s)/2,H=(I+l)/2,B=(s+f+v+R)/4,W=(l+h+d+I)/4,z=o(s,l),G=o(D,T),J=o(f,h),U=o(_,C),V=o(v,d),X=o(F,N),Z=o(R,I),$=o(q,H),K=o(B,W);i(z,G,0),i(G,J,0),i(J,U,1),i(U,V,1),i(V,X,2),i(X,Z,2),i(Z,$,3),i($,z,3),i(K,U,0),i(K,X,1),i(K,$,2),i(K,G,3)}}}return console.log("SUBDIVIDED: limit = ",r,", fill rate = ",a/6/r),n.slice(0,a)}var C=1e4;function F(e){return e<C?e:C}var N,q=Math.sqrt(2);function H(e){!function(e){var t;e.numFaces=6*((t=e.numberOfRings)+1)*(t+1),e.firstPassLen=10*e.numFaces,e.firstPassNumEdges=3*e.numFaces,e.edgeLength=e.height/(2*e.numberOfRings+1)|0,e.recreate=function(t){Object.assign(e,t),W()}}(e),console.log("CREATE GRAPH",e);var t=function(e){var t=e.numberOfRings;console.log("createHexagonalTiles",t);var r=[new v(Math.cos(0)*e.edgeLength,Math.sin(0)*e.edgeLength),new v(Math.cos(I)*e.edgeLength,Math.sin(I)*e.edgeLength),new v(Math.cos(2*I)*e.edgeLength,Math.sin(2*I)*e.edgeLength),new v(Math.cos(3*I)*e.edgeLength,Math.sin(3*I)*e.edgeLength),new v(Math.cos(4*I)*e.edgeLength,Math.sin(4*I)*e.edgeLength),new v(Math.cos(5*I)*e.edgeLength,Math.sin(5*I)*e.edgeLength)],n=new Float64Array(e.firstPassLen),a=0,o=0,i=1;do{for(var u=0;u<6;u++)for(var c=r[u],s=r[(u+1)%6],l=r[(u+2)%6],f=c.copy().scale(o),h=0;h<i;h++)1&h?(n[a++]=0|f.x,n[a++]=0|f.y,n[a++]=f.x+s.x|0,n[a++]=f.y+s.y|0,n[a++]=f.x+l.x|0,n[a++]=f.y+l.y|0,a+=2,n[a++]=3,n[a++]=1,f.add(l)):(n[a++]=0|f.x,n[a++]=0|f.y,n[a++]=f.x+c.x|0,n[a++]=f.y+c.y|0,n[a++]=f.x+s.x|0,n[a++]=f.y+s.y|0,a+=2,n[a++]=3,n[a++]=o===t?2:0);i+=2}while(o++<t);return n}(e);!function(e,t){var r=e.firstPassNumEdges*e.removeEdges/100;console.log("remove attempts",r);for(var n=0,a=0;a<r;a++){var o=10*(Math.random()*e.numFaces|0);if(3===t[o+8]){var i=t[o+9],u=!!(2&i),c=3*Math.random()|0;if(!u||1!==c)if(D(t,t[o+2*c],t[o+2*c+1],2===c?t[o]:t[o+2*(c+1)],2===c?t[o+1]:t[o+2*(c+1)+1],o,T),T.index>=0&&3===t[T.index+8]){var s=T.index,l=T.edge,f=0===c?t[o+4]:t[o+2*(c-1)],h=0===c?t[o+4+1]:t[o+2*(c-1)+1];switch(t[s+8]=4,l){case 2:t[s+6]=f,t[s+7]=h;break;case 1:t[s+6]=t[s+4],t[s+7]=t[s+5],t[s+4]=f,t[s+5]=h;break;case 0:t[s+6]=t[s+4],t[s+7]=t[s+5],t[s+4]=t[s+2],t[s+5]=t[s+3],t[s+2]=f,t[s+3]=h}t[o+8]=0,n++}}}console.log("Success:",n,"out of",r)}(e,t);var r=_(e,t);return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e.edgeLength/4,a=t.length,o=n*q;function i(e,r,n,a){if(n>=0){var o=t[n]-e,i=t[n+1]-r,u=Math.sqrt(o*o+i*i);if(u>a){var c=.1*(u-a)/a,s=F(c*c);if(0===u)return;var l=s/u;o*=l,i*=l,t[n]-=o,t[n+1]-=i}}}function u(e,r,n){var a=t[n]-e,i=t[n+1]-r,u=Math.sqrt(a*a+i*i);if(u<o){var c=.1*(o-u)/o,s=F(c*c)/u;a*=s,i*=s,t[n]+=a,t[n+1]+=i}}for(var c=0;c<r;c++){for(var s=0;s<a;s+=6){var l=t[s],f=t[s+1],h=t[s+2],v=t[s+3],d=t[s+4],g=t[s+5];if(i(l,f,h,n),i(l,f,v,n),i(l,f,d,n),i(l,f,g,n),h>=0&&v>=0){var y=t[h],m=t[h+1];i(y,m,v,n*q)}if(d>=0&&v>=0){var p=t[v],b=t[v+1];i(p,b,d,n*q)}if(d>=0&&g>=0){var O=t[d],w=t[d+1];i(O,w,g,n*q)}if(h>=0&&g>=0){var x=t[g],E=t[g+1];i(x,E,h,n*q)}}for(var j=0;j<a;j+=6)for(var P=a-6;P>j;P-=6){var M=t[j],S=t[j+1];u(M,S,P)}}}(e,r,e.iterations),console.log("GRAPH SIZE",r.length/6,r),r}function B(){P.save();var e=A.width/2,t=A.height/2;P.translate(e,t),P.strokeStyle="#080",P.lineWidth=1;var r=N.length;function n(e,t,r){if(r>=0){var n=N[r],a=N[r+1];P.beginPath(),P.moveTo(e,t),P.lineTo(n,a),P.stroke()}}P.fillStyle="#000",P.fillRect(-e,-t,A.width,A.height);for(var a=0;a<r;a+=6){var o=N[a],i=N[a+1],u=N[a+2],c=N[a+3],s=N[a+4],l=N[a+5];n(o,i,u),n(o,i,c),n(o,i,s),n(o,i,l)}P.restore()}function W(){var e=.85*window.innerWidth|0,t=0|window.innerHeight;A.width=e,A.height=t,M.width=e,M.height=t,N=H(A),l()(B)}a()((function(){M=document.getElementById("screen"),(P=M.getContext("2d")).fillStyle="#888",P.strokeStyle="#f00",W(),c.a.render(i.a.createElement(k,{config:A}),document.getElementById("ui")),window.addEventListener("resize",W,!0)}))}});
//# sourceMappingURL=bundle-main-4fc54b70aa7c51ee00d5.js.map