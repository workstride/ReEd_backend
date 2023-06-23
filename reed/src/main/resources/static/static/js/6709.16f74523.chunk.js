"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[6709],{92789:function(e,i,s){s(72791);var l=s(54778),a=s.n(l),n=s(81694),t=s.n(n),o=s(96517),d=s(5443),r=s(80184),c=function(e){var i=e.children,s=e.className,l=e.code,n=e.language;return i?(0,r.jsxs)(o.ZP,{shadow:"none",borderSize:1,className:t()("rounded-2",s),children:[(0,r.jsx)(o.eW,{children:i}),(0,r.jsx)(d.Z,{className:"my-0 rounded-bottom",code:l||a()(i,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:n,rounded:0})]}):(0,r.jsx)(d.Z,{className:t()("my-0",s),code:l||a()(i,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:n})};c.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"},i.Z=c},5081:function(e,i,s){s.d(i,{g:function(){return c}});var l=s(72791),a=s(81694),n=s.n(a),t=s(11087),o=s(16843),d=s(63542),r=s(80184),c=function(e){var i=e.children,s=e.ariaLabel,a=e.className,d=e.tag,c=e.to,h=e.isActive,m=e.divider;return(0,r.jsxs)(o.Z,{tag:d,className:n()("breadcrumb-item",{active:h},a),"aria-current":h?"page":null,"aria-label":s||i,children:[m&&"string"!==typeof m&&(0,l.cloneElement)(m,{className:n()("breadcrumb-icon",m.props.className)}),h?i:(0,r.jsx)(t.OL,{to:c,"aria-label":s,children:i})]})};c.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var i=e.children,s=e.list,a=e.tag,n=e.listTag,t=e.itemTag,d=e.ariaLabel,h=e.autoActive,m=e.isToHome,u=e.divider,v="string"!==u&&u;return(0,r.jsx)(o.Z,{tag:a,"aria-label":d,style:u?{"--bs-breadcrumb-divider":"string"===typeof u?"'".concat(u,"'"):"none"}:null,children:(0,r.jsxs)(o.Z,{tag:n,className:"breadcrumb",children:[m&&(0,r.jsx)(c,{to:"/",ariaLabel:"Home",children:m}),s?s.map((function(e,i){return(0,r.jsx)(c,{tag:e.tag||t,to:e.to,isActive:h&&s.length===i+1,divider:v,children:e.title},e.title)})):l.Children.map(i,(function(e,s){return(0,l.cloneElement)(e,{tag:e.props.tag||t,isActive:h&&i.length===s+1,divider:e.props.divider||v})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,r.jsx)(d.Z,{icon:"HolidayVillage"}),divider:(0,r.jsx)(d.Z,{icon:"ChevronRight"})},i.Z=h},66709:function(e,i,s){s.r(i);s(72791);var l=s(63495),a=s(15224),n=s(5081),t=s(47930),o=s(38493),d=s(96517),r=s(92789),c=s(7134),h=s(80184);i.default=function(){return(0,h.jsxs)(o.Z,{title:c.XZ.utilities.subMenu.overflow.text,children:[(0,h.jsx)(a.ZP,{children:(0,h.jsx)(a.Vv,{children:(0,h.jsx)(n.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Overflow",to:"/utilities/overflow"}]})})}),(0,h.jsx)(t.Z,{children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-12 my-4",children:[(0,h.jsx)("h1",{children:"Overflow"}),(0,h.jsx)("p",{className:"lead",children:"Use these shorthand utilities for quickly configuring how content overflows an element."})]}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(d.ZP,{children:(0,h.jsxs)(d.eW,{children:[(0,h.jsxs)("p",{children:["Adjust the ",(0,h.jsx)("code",{children:"overflow"})," property on the fly with four default values and classes. These classes are not responsive by default."]}),(0,h.jsx)(r.Z,{code:"\n<div className='overflow-auto'>...</div>\n<div className='overflow-hidden'>...</div>\n<div className='overflow-visible'>...</div>\n<div className='overflow-scroll'>...</div>",children:(0,h.jsxs)("div",{className:"d-md-flex",children:[(0,h.jsxs)("div",{className:"overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light",style:{maxWidth:260,maxHeight:80},children:["This is an example of using ",(0,h.jsx)("code",{children:".overflow-auto"})," ","on an element with set width and height dimensions. By design, this content will vertically scroll."]}),(0,h.jsxs)("div",{className:"overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-light",style:{maxWidth:260,maxHeight:80},children:["This is an example of using"," ",(0,h.jsx)("code",{children:".overflow-hidden"})," on an element with set width and height dimensions."]}),(0,h.jsxs)("div",{className:"overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-light",style:{maxWidth:260,maxHeight:80},children:["This is an example of using"," ",(0,h.jsx)("code",{children:".overflow-visible"})," on an element with set width and height dimensions."]}),(0,h.jsxs)("div",{className:"overflow-scroll p-3 bg-light",style:{maxWidth:260,maxHeight:80},children:["This is an example of using"," ",(0,h.jsx)("code",{children:".overflow-scroll"})," on an element with set width and height dimensions."]})]})}),(0,h.jsxs)("p",{children:["Using Sass variables, you may customize the overflow utilities by changing the ",(0,h.jsx)("code",{children:"$overflows"})," variable in"," ",(0,h.jsx)("code",{children:"node_modules/bootstrap/scss/_variables.scss"}),"."]})]})})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(d.ZP,{id:"sass",className:"scroll-margin",children:[(0,h.jsx)(d.Ol,{children:(0,h.jsx)(d.oL,{children:(0,h.jsx)(d.ll,{tag:"h3",children:"Sass"})})}),(0,h.jsx)(d.eW,{children:(0,h.jsxs)(d.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[(0,h.jsx)(d.Ol,{children:(0,h.jsx)(d.oL,{children:(0,h.jsx)(d.ll,{children:"Utilities API"})})}),(0,h.jsxs)(d.eW,{children:[(0,h.jsxs)("p",{children:["Overflow utilities are declared in our utilities API in"," ",(0,h.jsx)("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",(0,h.jsx)(l.fO,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),(0,h.jsx)(r.Z,{code:'\n"overflow": (\n \tproperty: overflow,\n\tvalues: auto hidden visible scroll,\n),',language:"scss"})]})]})})]})})]})})]})}}}]);
//# sourceMappingURL=6709.16f74523.chunk.js.map