"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5684],{675684:function(e,t,r){r.d(t,{Z:function(){return z}});var o=r(263366),l=r(487462),n=r(667294),i=r(490512),s=r(794780),a=r(382056),c=r(282963),u=r(690948),d=r(128628),f=r(202734),b=r(157144);let h;function v(){if(h)return h;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),h="reverse",e.scrollLeft>0?h="default":(e.scrollLeft=1,0===e.scrollLeft&&(h="negative")),document.body.removeChild(e),h}function p(e,t){const r=e.scrollLeft;if("rtl"!==t)return r;switch(v()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var S=r(258974),w=r(905340),g=r(785893);const x=["onChange"],C={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var Z=r(72643),B=r(502068),y=r(290852),E=r(508038);const M=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],I=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,N=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,L=(e,t,r)=>{let o=!1,l=r(e,t);for(;l;){if(l===e.firstChild){if(o)return;o=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=r(e,l)}},k=(0,u.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${y.Z.scrollButtons}`]:t.scrollButtons},{[`& .${y.Z.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${y.Z.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),W=(0,u.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),P=(0,u.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})((({ownerState:e})=>(0,l.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),R=(0,u.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),T=(0,u.ZP)((function(e){const{onChange:t}=e,r=(0,o.Z)(e,x),i=n.useRef(),s=n.useRef(null),a=()=>{i.current=s.current.offsetHeight-s.current.clientHeight};return(0,S.Z)((()=>{const e=(0,b.Z)((()=>{const e=i.current;a(),e!==i.current&&t(i.current)})),r=(0,w.Z)(s.current);return r.addEventListener("resize",e),()=>{e.clear(),r.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{a(),t(i.current)}),[t]),(0,g.jsx)("div",(0,l.Z)({style:C},r,{ref:s}))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),A={};var z=n.forwardRef((function(e,t){const r=(0,d.i)({props:e,name:"MuiTabs"}),u=(0,f.Z)(),h=(0,a.V)(),{"aria-label":S,"aria-labelledby":x,action:C,centered:z=!1,children:X,className:H,component:F="div",allowScrollButtonsMobile:Y=!1,indicatorColor:j="primary",onChange:D,orientation:O="horizontal",ScrollButtonComponent:V=Z.Z,scrollButtons:_="auto",selectionFollowsFocus:q,slots:$={},slotProps:K={},TabIndicatorProps:U={},TabScrollButtonProps:G={},textColor:J="primary",value:Q,variant:ee="standard",visibleScrollbar:te=!1}=r,re=(0,o.Z)(r,M),oe="scrollable"===ee,le="vertical"===O,ne=le?"scrollTop":"scrollLeft",ie=le?"top":"left",se=le?"bottom":"right",ae=le?"clientHeight":"clientWidth",ce=le?"height":"width",ue=(0,l.Z)({},r,{component:F,allowScrollButtonsMobile:Y,indicatorColor:j,orientation:O,vertical:le,scrollButtons:_,textColor:J,variant:ee,visibleScrollbar:te,fixed:!oe,hideScrollbar:oe&&!te,scrollableX:oe&&!le,scrollableY:oe&&le,centered:z&&!oe,scrollButtonsHideMobile:!Y}),de=(e=>{const{vertical:t,fixed:r,hideScrollbar:o,scrollableX:l,scrollableY:n,centered:i,scrollButtonsHideMobile:a,classes:c}=e,u={root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",o&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[o&&"hideScrollbar"]};return(0,s.Z)(u,y.m,c)})(ue),fe=(0,c.Z)({elementType:$.StartScrollButtonIcon,externalSlotProps:K.startScrollButtonIcon,ownerState:ue}),be=(0,c.Z)({elementType:$.EndScrollButtonIcon,externalSlotProps:K.endScrollButtonIcon,ownerState:ue});const[he,ve]=n.useState(!1),[pe,me]=n.useState(A),[Se,we]=n.useState(!1),[ge,xe]=n.useState(!1),[Ce,Ze]=n.useState(!1),[Be,ye]=n.useState({overflow:"hidden",scrollbarWidth:0}),Ee=new Map,Me=n.useRef(null),Ie=n.useRef(null),Ne=()=>{const e=Me.current;let t,r;if(e){const r=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:p(e,h?"rtl":"ltr"),scrollWidth:e.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(e&&!1!==Q){const e=Ie.current.children;if(e.length>0){const t=e[Ee.get(Q)];0,r=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:r}},Le=(0,B.Z)((()=>{const{tabsMeta:e,tabMeta:t}=Ne();let r,o=0;if(le)r="top",t&&e&&(o=t.top-e.top+e.scrollTop);else if(r=h?"right":"left",t&&e){const l=h?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;o=(h?-1:1)*(t[r]-e[r]+l)}const l={[r]:o,[ce]:t?t[ce]:0};if(isNaN(pe[r])||isNaN(pe[ce]))me(l);else{const e=Math.abs(pe[r]-l[r]),t=Math.abs(pe[ce]-l[ce]);(e>=1||t>=1)&&me(l)}})),ke=(e,{animation:t=!0}={})=>{t?function(e,t,r,o={},l=(()=>{})){const{ease:n=m,duration:i=300}=o;let s=null;const a=t[e];let c=!1;const u=()=>{c=!0},d=o=>{if(c)return void l(new Error("Animation cancelled"));null===s&&(s=o);const u=Math.min(1,(o-s)/i);t[e]=n(u)*(r-a)+a,u>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(d)};a===r?l(new Error("Element already at target position")):requestAnimationFrame(d)}(ne,Me.current,e,{duration:u.transitions.duration.standard}):Me.current[ne]=e},We=e=>{let t=Me.current[ne];le?t+=e:(t+=e*(h?-1:1),t*=h&&"reverse"===v()?-1:1),ke(t)},Pe=()=>{const e=Me.current[ae];let t=0;const r=Array.from(Ie.current.children);for(let o=0;o<r.length;o+=1){const l=r[o];if(t+l[ae]>e){0===o&&(t=e);break}t+=l[ae]}return t},Re=()=>{We(-1*Pe())},Te=()=>{We(Pe())},Ae=n.useCallback((e=>{ye({overflow:null,scrollbarWidth:e})}),[]),ze=(0,B.Z)((e=>{const{tabsMeta:t,tabMeta:r}=Ne();if(r&&t)if(r[ie]<t[ie]){const o=t[ne]+(r[ie]-t[ie]);ke(o,{animation:e})}else if(r[se]>t[se]){const o=t[ne]+(r[se]-t[se]);ke(o,{animation:e})}})),Xe=(0,B.Z)((()=>{oe&&!1!==_&&Ze(!Ce)}));n.useEffect((()=>{const e=(0,b.Z)((()=>{Me.current&&Le()}));let t;const r=r=>{r.forEach((e=>{e.removedNodes.forEach((e=>{var r;null==(r=t)||r.unobserve(e)})),e.addedNodes.forEach((e=>{var r;null==(r=t)||r.observe(e)}))})),e(),Xe()},o=(0,w.Z)(Me.current);let l;return o.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(Ie.current.children).forEach((e=>{t.observe(e)}))),"undefined"!==typeof MutationObserver&&(l=new MutationObserver(r),l.observe(Ie.current,{childList:!0})),()=>{var r,n;e.clear(),o.removeEventListener("resize",e),null==(r=l)||r.disconnect(),null==(n=t)||n.disconnect()}}),[Le,Xe]),n.useEffect((()=>{const e=Array.from(Ie.current.children),t=e.length;if("undefined"!==typeof IntersectionObserver&&t>0&&oe&&!1!==_){const r=e[0],o=e[t-1],l={root:Me.current,threshold:.99},n=new IntersectionObserver((e=>{we(!e[0].isIntersecting)}),l);n.observe(r);const i=new IntersectionObserver((e=>{xe(!e[0].isIntersecting)}),l);return i.observe(o),()=>{n.disconnect(),i.disconnect()}}}),[oe,_,Ce,null==X?void 0:X.length]),n.useEffect((()=>{ve(!0)}),[]),n.useEffect((()=>{Le()})),n.useEffect((()=>{ze(A!==pe)}),[ze,pe]),n.useImperativeHandle(C,(()=>({updateIndicator:Le,updateScrollButtons:Xe})),[Le,Xe]);const He=(0,g.jsx)(R,(0,l.Z)({},U,{className:(0,i.Z)(de.indicator,U.className),ownerState:ue,style:(0,l.Z)({},pe,U.style)}));let Fe=0;const Ye=n.Children.map(X,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Fe:e.props.value;Ee.set(t,Fe);const r=t===Q;return Fe+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===ee,indicator:r&&!he&&He,selected:r,selectionFollowsFocus:q,onChange:D,textColor:J,value:t},1!==Fe||!1!==Q||e.props.tabIndex?{}:{tabIndex:0}))})),je=(()=>{const e={};e.scrollbarSizeListener=oe?(0,g.jsx)(T,{onChange:Ae,className:(0,i.Z)(de.scrollableX,de.hideScrollbar)}):null;const t=oe&&("auto"===_&&(Se||ge)||!0===_);return e.scrollButtonStart=t?(0,g.jsx)(V,(0,l.Z)({slots:{StartScrollButtonIcon:$.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:fe},orientation:O,direction:h?"right":"left",onClick:Re,disabled:!Se},G,{className:(0,i.Z)(de.scrollButtons,G.className)})):null,e.scrollButtonEnd=t?(0,g.jsx)(V,(0,l.Z)({slots:{EndScrollButtonIcon:$.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:be},orientation:O,direction:h?"left":"right",onClick:Te,disabled:!ge},G,{className:(0,i.Z)(de.scrollButtons,G.className)})):null,e})();return(0,g.jsxs)(k,(0,l.Z)({className:(0,i.Z)(de.root,H),ownerState:ue,ref:t,as:F},re,{children:[je.scrollButtonStart,je.scrollbarSizeListener,(0,g.jsxs)(W,{className:de.scroller,ownerState:ue,style:{overflow:Be.overflow,[le?"margin"+(h?"Left":"Right"):"marginBottom"]:te?void 0:-Be.scrollbarWidth},ref:Me,children:[(0,g.jsx)(P,{"aria-label":S,"aria-labelledby":x,"aria-orientation":"vertical"===O?"vertical":null,className:de.flexContainer,ownerState:ue,onKeyDown:e=>{const t=Ie.current,r=(0,E.Z)(t).activeElement;if("tab"!==r.getAttribute("role"))return;let o="horizontal"===O?"ArrowLeft":"ArrowUp",l="horizontal"===O?"ArrowRight":"ArrowDown";switch("horizontal"===O&&h&&(o="ArrowRight",l="ArrowLeft"),e.key){case o:e.preventDefault(),L(t,r,N);break;case l:e.preventDefault(),L(t,r,I);break;case"Home":e.preventDefault(),L(t,null,I);break;case"End":e.preventDefault(),L(t,null,N)}},ref:Ie,role:"tablist",children:Ye}),he&&He]}),je.scrollButtonEnd]}))}))},290852:function(e,t,r){r.d(t,{m:function(){return n}});var o=r(1588),l=r(34867);function n(e){return(0,l.ZP)("MuiTabs",e)}const i=(0,o.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);t.Z=i}}]);