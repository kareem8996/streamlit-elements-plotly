"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6926],{726926:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var o=t(487462),s=t(263366),r=t(667294),i=t.t(r,2),l=t(420539),a=t(202734),d=t(258974),p=t(573546),c=t(734168);function u(n,e,t,o,s){const[i,l]=r.useState((()=>s&&t?t(n).matches:o?o(n).matches:e));return(0,p.Z)((()=>{let e=!0;if(!t)return;const o=t(n),s=()=>{e&&l(o.matches)};return s(),o.addListener(s),()=>{e=!1,o.removeListener(s)}}),[n,t]),i}const m=i.useSyncExternalStore;function w(n,e,t,o,s){const i=r.useCallback((()=>e),[e]),l=r.useMemo((()=>{if(s&&t)return()=>t(n).matches;if(null!==o){const{matches:e}=o(n);return()=>e}return i}),[i,n,o,s,t]),[a,d]=r.useMemo((()=>{if(null===t)return[i,()=>()=>{}];const e=t(n);return[()=>e.matches,n=>(e.addListener(n),()=>{e.removeListener(n)})]}),[i,t,n]);return m(d,a,l)}var h=t(785893);const f=["initialWidth","width"],x=["xs","sm","md","lg","xl"],k=(n,e,t=!0)=>t?x.indexOf(n)<=x.indexOf(e):x.indexOf(n)<x.indexOf(e),y=(n,e,t=!1)=>t?x.indexOf(e)<=x.indexOf(n):x.indexOf(e)<x.indexOf(n);var U=((n={})=>e=>{const{withTheme:t=!1,noSSR:i=!1,initialWidth:p}=n;return function(n){const x=(0,a.Z)(),k=n.theme||x,y=(0,l.Z)({theme:k,name:"MuiWithWidth",props:n}),{initialWidth:U,width:D}=y,Z=(0,s.Z)(y,f),[b,g]=r.useState(!1);(0,d.Z)((()=>{g(!0)}),[]);const v=k.breakpoints.keys.slice().reverse().reduce(((n,e)=>{const t=function(n,e={}){const t=(0,c.Z)(),o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:s=!1,matchMedia:r=(o?window.matchMedia:null),ssrMatchMedia:i=null,noSsr:a=!1}=(0,l.Z)({name:"MuiUseMediaQuery",props:e,theme:t});let d="function"===typeof n?n(t):n;return d=d.replace(/^@media( ?)/m,""),(void 0!==m?w:u)(d,s,r,i,a)}(k.breakpoints.up(e));return!n&&t?e:n}),null),M=(0,o.Z)({width:D||(b||i?v:void 0)||U||p},t?{theme:k}:{},Z);return void 0===M.width?null:(0,h.jsx)(e,(0,o.Z)({},M))}})()((function(n){const{children:e,only:t,width:o}=n,s=(0,a.Z)();let i=!0;if(t)if(Array.isArray(t))for(let r=0;r<t.length;r+=1){if(o===t[r]){i=!1;break}}else t&&o===t&&(i=!1);if(i)for(let r=0;r<s.breakpoints.keys.length;r+=1){const e=s.breakpoints.keys[r],t=n[`${e}Up`],l=n[`${e}Down`];if(t&&k(e,o)||l&&y(e,o)){i=!1;break}}return i?(0,h.jsx)(r.Fragment,{children:e}):null})),D=t(490512),Z=t(794780),b=t(998216),g=t(690948),v=t(1588),M=t(34867);function S(n){return(0,M.ZP)("PrivateHiddenCss",n)}(0,v.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const O=["children","className","only"],j=(0,g.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:n,ownerState:e})=>{const t={display:"none"};return(0,o.Z)({},e.breakpoints.map((({breakpoint:e,dir:o})=>"only"===o?{[n.breakpoints.only(e)]:t}:"up"===o?{[n.breakpoints.up(e)]:t}:{[n.breakpoints.down(e)]:t})).reduce(((n,e)=>(Object.keys(e).forEach((t=>{n[t]=e[t]})),n)),{}))}));var $=function(n){const{children:e,className:t,only:r}=n,i=(0,s.Z)(n,O),l=(0,a.Z)(),d=[];for(let o=0;o<l.breakpoints.keys.length;o+=1){const n=l.breakpoints.keys[o],e=i[`${n}Up`],t=i[`${n}Down`];e&&d.push({breakpoint:n,dir:"up"}),t&&d.push({breakpoint:n,dir:"down"})}if(r){(Array.isArray(r)?r:[r]).forEach((n=>{d.push({breakpoint:n,dir:"only"})}))}const p=(0,o.Z)({},n,{breakpoints:d}),c=(n=>{const{classes:e,breakpoints:t}=n,o={root:["root",...t.map((({breakpoint:n,dir:e})=>"only"===e?`${e}${(0,b.Z)(n)}`:`${n}${(0,b.Z)(e)}`))]};return(0,Z.Z)(o,S,e)})(p);return(0,h.jsx)(j,{className:(0,D.Z)(c.root,t),ownerState:p,children:e})};const C=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var E=function(n){const{implementation:e="js",lgDown:t=!1,lgUp:r=!1,mdDown:i=!1,mdUp:l=!1,smDown:a=!1,smUp:d=!1,xlDown:p=!1,xlUp:c=!1,xsDown:u=!1,xsUp:m=!1}=n,w=(0,s.Z)(n,C);return"js"===e?(0,h.jsx)(U,(0,o.Z)({lgDown:t,lgUp:r,mdDown:i,mdUp:l,smDown:a,smUp:d,xlDown:p,xlUp:c,xsDown:u,xsUp:m},w)):(0,h.jsx)($,(0,o.Z)({lgDown:t,lgUp:r,mdDown:i,mdUp:l,smDown:a,smUp:d,xlDown:p,xlUp:c,xsDown:u,xsUp:m},w))}}}]);