"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[2882],{92789:function(e,s,l){l(72791);var i=l(54778),t=l.n(i),a=l(81694),r=l.n(a),n=l(96517),o=l(5443),d=l(80184),c=function(e){var s=e.children,l=e.className,i=e.code,a=e.language;return s?(0,d.jsxs)(n.ZP,{shadow:"none",borderSize:1,className:r()("rounded-2",l),children:[(0,d.jsx)(n.eW,{children:s}),(0,d.jsx)(o.Z,{className:"my-0 rounded-bottom",code:i||t()(s,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:a,rounded:0})]}):(0,d.jsx)(o.Z,{className:r()("my-0",l),code:i||t()(s,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:a})};c.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"},s.Z=c},5081:function(e,s,l){l.d(s,{g:function(){return c}});var i=l(72791),t=l(81694),a=l.n(t),r=l(11087),n=l(16843),o=l(63542),d=l(80184),c=function(e){var s=e.children,l=e.ariaLabel,t=e.className,o=e.tag,c=e.to,h=e.isActive,x=e.divider;return(0,d.jsxs)(n.Z,{tag:o,className:a()("breadcrumb-item",{active:h},t),"aria-current":h?"page":null,"aria-label":l||s,children:[x&&"string"!==typeof x&&(0,i.cloneElement)(x,{className:a()("breadcrumb-icon",x.props.className)}),h?s:(0,d.jsx)(r.OL,{to:c,"aria-label":l,children:s})]})};c.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var s=e.children,l=e.list,t=e.tag,a=e.listTag,r=e.itemTag,o=e.ariaLabel,h=e.autoActive,x=e.isToHome,j=e.divider,v="string"!==j&&j;return(0,d.jsx)(n.Z,{tag:t,"aria-label":o,style:j?{"--bs-breadcrumb-divider":"string"===typeof j?"'".concat(j,"'"):"none"}:null,children:(0,d.jsxs)(n.Z,{tag:a,className:"breadcrumb",children:[x&&(0,d.jsx)(c,{to:"/",ariaLabel:"Home",children:x}),l?l.map((function(e,s){return(0,d.jsx)(c,{tag:e.tag||r,to:e.to,isActive:h&&l.length===s+1,divider:v,children:e.title},e.title)})):i.Children.map(s,(function(e,l){return(0,i.cloneElement)(e,{tag:e.props.tag||r,isActive:h&&s.length===l+1,divider:e.props.divider||v})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,d.jsx)(o.Z,{icon:"HolidayVillage"}),divider:(0,d.jsx)(o.Z,{icon:"ChevronRight"})},s.Z=h},12882:function(e,s,l){l.r(s);l(72791);var i=l(63495),t=l(15224),a=l(5081),r=l(47930),n=l(38493),o=l(96517),d=l(92789),c=l(7134),h=l(80184);s.default=function(){return(0,h.jsxs)(n.Z,{title:c.XZ.utilities.subMenu.float.text,children:[(0,h.jsx)(t.ZP,{children:(0,h.jsx)(t.Vv,{children:(0,h.jsx)(a.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Float",to:"/utilities/float"}]})})}),(0,h.jsx)(r.Z,{children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-12 my-4",children:[(0,h.jsx)("h1",{children:"Float"}),(0,h.jsx)("p",{className:"lead",children:"Toggle floats on any element, across any breakpoint, using our responsive float utilities."})]}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(o.ZP,{id:"overview",className:"scroll-margin",children:[(0,h.jsx)(o.Ol,{children:(0,h.jsx)(o.oL,{children:(0,h.jsx)(o.ll,{tag:"h3",children:"Overview"})})}),(0,h.jsxs)(o.eW,{children:[(0,h.jsxs)("p",{children:["These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the"," ",(0,h.jsxs)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",target:"_blank",rel:"noreferrer",children:["CSS ",(0,h.jsx)("code",{children:"float"})," property"]}),". ",(0,h.jsx)("code",{children:"!important"})," is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no effect on flex items."]}),(0,h.jsxs)(d.Z,{code:"\n<div className='float-start'>Float start on all viewport sizes</div><br />\n<div className='float-end'>Float end on all viewport sizes</div><br />\n<div className='float-none'>Don't float on all viewport sizes</div>",children:[(0,h.jsx)("div",{className:"float-start",children:"Float start on all viewport sizes"}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"float-end",children:"Float end on all viewport sizes"}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"float-none",children:"Don't float on all viewport sizes"})]})]})]})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(o.ZP,{id:"responsive",className:"scroll-margin",children:[(0,h.jsx)(o.Ol,{children:(0,h.jsx)(o.oL,{children:(0,h.jsx)(o.ll,{tag:"h3",children:"Responsive"})})}),(0,h.jsxs)(o.eW,{children:[(0,h.jsxs)("p",{children:["Responsive variations also exist for each ",(0,h.jsx)("code",{children:"float"})," ","value."]}),(0,h.jsxs)(d.Z,{code:"\n<div className='float-sm-start'>Float start on viewports sized SM (small) or wider</div><br />\n<div className='float-md-start'>Float start on viewports sized MD (medium) or wider</div><br />\n<div className='float-lg-start'>Float start on viewports sized LG (large) or wider</div><br />\n<div className='float-xl-start'>Float start on viewports sized XL (extra-large) or wider</div><br />",children:[(0,h.jsx)("div",{className:"float-sm-start",children:"Float start on viewports sized SM (small) or wider"}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"float-md-start",children:"Float start on viewports sized MD (medium) or wider"}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"float-lg-start",children:"Float start on viewports sized LG (large) or wider"}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"float-xl-start",children:"Float start on viewports sized XL (extra-large) or wider"}),(0,h.jsx)("br",{})]}),(0,h.jsx)("p",{children:"Here are all the support classes:"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-start"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-end"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-none"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-sm-start"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-sm-end"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-sm-none"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-md-start"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-md-end"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-md-none"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-lg-start"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-lg-end"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-lg-none"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-xl-start"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-xl-end"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-xl-none"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-xxl-start"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-xxl-end"})}),(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:".float-xxl-none"})})]})]})]})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(o.ZP,{id:"sass",className:"scroll-margin",children:[(0,h.jsx)(o.Ol,{children:(0,h.jsx)(o.oL,{children:(0,h.jsx)(o.ll,{tag:"h3",children:"Sass"})})}),(0,h.jsx)(o.eW,{children:(0,h.jsxs)(o.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[(0,h.jsx)(o.Ol,{children:(0,h.jsx)(o.oL,{children:(0,h.jsx)(o.ll,{children:"Utilities API"})})}),(0,h.jsxs)(o.eW,{children:[(0,h.jsxs)("p",{children:["Float utilities are declared in our utilities API in"," ",(0,h.jsx)("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",(0,h.jsx)(i.fO,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),(0,h.jsx)(d.Z,{code:'\n"float": (\n  \tresponsive: true,\n  \tproperty: float,\n  \tvalues: (\n\t\tstart: left,\n\t\tend: right,\n\t\tnone: none,\n  \t)\n),',language:"scss"})]})]})})]})})]})})]})}}}]);
//# sourceMappingURL=2882.8d50fbdc.chunk.js.map