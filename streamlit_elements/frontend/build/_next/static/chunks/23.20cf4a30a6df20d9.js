"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{572852:function(e,t,a){var o=a(263366),r=a(487462),i=a(667294),s=a(490512),n=a(794780),c=a(502101),l=a(998216),d=a(421964),h=a(690948),p=a(128628),u=a(629632),m=a(785893);const g=["className","color","edge","size","sx"],v=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,l.Z)(a.edge)}`],t[`size${(0,l.Z)(a.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${u.Z.thumb}`]:{width:16,height:16},[`& .${u.Z.switchBase}`]:{padding:4,[`&.${u.Z.checked}`]:{transform:"translateX(16px)"}}}}]}),w=(0,h.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{[`& .${u.Z.input}`]:t.input},"default"!==a.color&&t[`color${(0,l.Z)(a.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${u.Z.checked}`]:{transform:"translateX(20px)"},[`&.${u.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${u.Z.checked} + .${u.Z.track}`]:{opacity:.5},[`&.${u.Z.disabled} + .${u.Z.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${u.Z.input}`]:{left:"-100%",width:"300%"}})),(({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter((([,e])=>e.main&&e.light)).map((([t])=>({props:{color:t},style:{[`&.${u.Z.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${"light"===e.palette.mode?(0,c.$n)(e.palette[t].main,.62):(0,c._j)(e.palette[t].main,.55)}`}},[`&.${u.Z.checked} + .${u.Z.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}})))]}))),Z=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),b=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),k=i.forwardRef((function(e,t){const a=(0,p.i)({props:e,name:"MuiSwitch"}),{className:i,color:c="primary",edge:d=!1,size:h="medium",sx:k}=a,$=(0,o.Z)(a,g),f=(0,r.Z)({},a,{color:c,edge:d,size:h}),S=(e=>{const{classes:t,edge:a,size:o,color:i,checked:s,disabled:c}=e,d={root:["root",a&&`edge${(0,l.Z)(a)}`,`size${(0,l.Z)(o)}`],switchBase:["switchBase",`color${(0,l.Z)(i)}`,s&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,n.Z)(d,u.H,t);return(0,r.Z)({},t,h)})(f),y=(0,m.jsx)(b,{className:S.thumb,ownerState:f});return(0,m.jsxs)(v,{className:(0,s.Z)(S.root,i),sx:k,ownerState:f,children:[(0,m.jsx)(w,(0,r.Z)({type:"checkbox",icon:y,checkedIcon:y,ref:t,ownerState:f},$,{classes:(0,r.Z)({},S,{root:S.switchBase})})),(0,m.jsx)(Z,{className:S.track,ownerState:f})]})}));t.Z=k},160023:function(e,t,a){a.r(t),a.d(t,{default:function(){return o.Z},switchClasses:function(){return r.Z},getSwitchUtilityClass:function(){return r.H}});var o=a(572852),r=a(629632)},629632:function(e,t,a){a.d(t,{H:function(){return i}});var o=a(1588),r=a(34867);function i(e){return(0,r.ZP)("MuiSwitch",e)}const s=(0,o.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.Z=s}}]);