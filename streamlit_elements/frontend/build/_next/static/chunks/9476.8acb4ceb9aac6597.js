"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9476],{57479:function(r,t,n){n.d(t,{Z:function(){return O}});var a=n(487462),o=n(263366),e=n(667294),i=n(490512),l=n(544287),s=n(794780),c=n(282963);var g=function(r){const{badgeContent:t,invisible:n=!1,max:a=99,showZero:o=!1}=r,e=(0,l.Z)({badgeContent:t,max:a});let i=n;!1!==n||0!==t||o||(i=!0);const{badgeContent:s,max:c=a}=i?e:r;return{badgeContent:s,invisible:i,max:c,displayValue:s&&Number(s)>c?`${c}+`:s}},p=n(690948),h=n(128628),u=n(998216),v=n(341288),d=n(785893);const m=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],f=(0,p.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,p.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,t)=>{const{ownerState:n}=r;return[t.badge,t[n.variant],t[`anchorOrigin${(0,u.Z)(n.anchorOrigin.vertical)}${(0,u.Z)(n.anchorOrigin.horizontal)}${(0,u.Z)(n.overlap)}`],"default"!==n.color&&t[`color${(0,u.Z)(n.color)}`],n.invisible&&t.invisible]}})((({theme:r})=>{var t;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.keys((null!=(t=r.vars)?t:r).palette).filter((t=>{var n,a;return(null!=(n=r.vars)?n:r).palette[t].main&&(null!=(a=r.vars)?a:r).palette[t].contrastText})).map((t=>({props:{color:t},style:{backgroundColor:(r.vars||r).palette[t].main,color:(r.vars||r).palette[t].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${v.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}}));var O=e.forwardRef((function(r,t){var n,e,p,O,Z,y;const x=(0,h.i)({props:r,name:"MuiBadge"}),{anchorOrigin:w={vertical:"top",horizontal:"right"},className:C,component:S,components:$={},componentsProps:R={},children:z,overlap:B="rectangular",color:P="default",invisible:T=!1,max:N=99,badgeContent:I,slots:k,slotProps:L,showZero:M=!1,variant:W="standard"}=x,j=(0,o.Z)(x,m),{badgeContent:_,invisible:E,max:F,displayValue:V}=g({max:N,invisible:T,badgeContent:I,showZero:M}),A=(0,l.Z)({anchorOrigin:w,color:P,overlap:B,variant:W,badgeContent:I}),D=E||null==_&&"dot"!==W,{color:H=P,overlap:U=B,anchorOrigin:q=w,variant:G=W}=D?A:x,J="dot"!==G?V:void 0,K=(0,a.Z)({},x,{badgeContent:_,invisible:D,max:F,displayValue:J,showZero:M,anchorOrigin:q,color:H,overlap:U,variant:G}),Q=(r=>{const{color:t,anchorOrigin:n,invisible:a,overlap:o,variant:e,classes:i={}}=r,l={root:["root"],badge:["badge",e,a&&"invisible",`anchorOrigin${(0,u.Z)(n.vertical)}${(0,u.Z)(n.horizontal)}`,`anchorOrigin${(0,u.Z)(n.vertical)}${(0,u.Z)(n.horizontal)}${(0,u.Z)(o)}`,`overlap${(0,u.Z)(o)}`,"default"!==t&&`color${(0,u.Z)(t)}`]};return(0,s.Z)(l,v.I,i)})(K),X=null!=(n=null!=(e=null==k?void 0:k.root)?e:$.Root)?n:f,Y=null!=(p=null!=(O=null==k?void 0:k.badge)?O:$.Badge)?p:b,rr=null!=(Z=null==L?void 0:L.root)?Z:R.root,tr=null!=(y=null==L?void 0:L.badge)?y:R.badge,nr=(0,c.Z)({elementType:X,externalSlotProps:rr,externalForwardedProps:j,additionalProps:{ref:t,as:S},ownerState:K,className:(0,i.Z)(null==rr?void 0:rr.className,Q.root,C)}),ar=(0,c.Z)({elementType:Y,externalSlotProps:tr,ownerState:K,className:(0,i.Z)(Q.badge,null==tr?void 0:tr.className)});return(0,d.jsxs)(X,(0,a.Z)({},nr,{children:[z,(0,d.jsx)(Y,(0,a.Z)({},ar,{children:J}))]}))}))},341288:function(r,t,n){n.d(t,{I:function(){return e}});var a=n(1588),o=n(34867);function e(r){return(0,o.ZP)("MuiBadge",r)}const i=(0,a.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);t.Z=i},669476:function(r,t,n){n.r(t),n.d(t,{default:function(){return a.Z},badgeClasses:function(){return o.Z},getBadgeUtilityClass:function(){return o.I}});var a=n(57479),o=n(341288)}}]);