"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[3083],{92789:function(e,s,n){n(72791);var i=n(54778),r=n.n(i),a=n(81694),t=n.n(a),d=n(96517),l=n(5443),c=n(80184),o=function(e){var s=e.children,n=e.className,i=e.code,a=e.language;return s?(0,c.jsxs)(d.ZP,{shadow:"none",borderSize:1,className:t()("rounded-2",n),children:[(0,c.jsx)(d.eW,{children:s}),(0,c.jsx)(l.Z,{className:"my-0 rounded-bottom",code:i||r()(s,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:a,rounded:0})]}):(0,c.jsx)(l.Z,{className:t()("my-0",n),code:i||r()(s,{functionNameOnly:!0,useFunctionCode:!0,shortBooleanSyntax:!0}),language:a})};o.defaultProps={children:null,className:void 0,code:void 0,language:"jsx"},s.Z=o},5081:function(e,s,n){n.d(s,{g:function(){return o}});var i=n(72791),r=n(81694),a=n.n(r),t=n(11087),d=n(16843),l=n(63542),c=n(80184),o=function(e){var s=e.children,n=e.ariaLabel,r=e.className,l=e.tag,o=e.to,h=e.isActive,p=e.divider;return(0,c.jsxs)(d.Z,{tag:l,className:a()("breadcrumb-item",{active:h},r),"aria-current":h?"page":null,"aria-label":n||s,children:[p&&"string"!==typeof p&&(0,i.cloneElement)(p,{className:a()("breadcrumb-icon",p.props.className)}),h?s:(0,c.jsx)(t.OL,{to:o,"aria-label":n,children:s})]})};o.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var s=e.children,n=e.list,r=e.tag,a=e.listTag,t=e.itemTag,l=e.ariaLabel,h=e.autoActive,p=e.isToHome,g=e.divider,x="string"!==g&&g;return(0,c.jsx)(d.Z,{tag:r,"aria-label":l,style:g?{"--bs-breadcrumb-divider":"string"===typeof g?"'".concat(g,"'"):"none"}:null,children:(0,c.jsxs)(d.Z,{tag:a,className:"breadcrumb",children:[p&&(0,c.jsx)(o,{to:"/",ariaLabel:"Home",children:p}),n?n.map((function(e,s){return(0,c.jsx)(o,{tag:e.tag||t,to:e.to,isActive:h&&n.length===s+1,divider:x,children:e.title},e.title)})):i.Children.map(s,(function(e,n){return(0,i.cloneElement)(e,{tag:e.props.tag||t,isActive:h&&s.length===n+1,divider:e.props.divider||x})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(l.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(l.Z,{icon:"ChevronRight"})},s.Z=h},83083:function(e,s,n){n.r(s);n(72791);var i=n(63495),r=n(15224),a=n(5081),t=n(47930),d=n(38493),l=n(96517),c=n(92789),o=n(7134),h=n(80184);s.default=function(){return(0,h.jsxs)(d.Z,{title:o.XZ.utilities.subMenu.spacing.text,children:[(0,h.jsx)(r.ZP,{children:(0,h.jsx)(r.Vv,{children:(0,h.jsx)(a.Z,{list:[{title:"Utilities",to:"/utilities"},{title:"Spacing",to:"/utilities/spacing"}]})})}),(0,h.jsx)(t.Z,{children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-12 my-4",children:[(0,h.jsx)("h1",{children:"Spacing"}),(0,h.jsx)("p",{className:"lead",children:"Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element\u2019s appearance."})]}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(l.ZP,{id:"margin-and-padding",className:"scroll-margin",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{tag:"h3",children:"Margin and padding"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)("p",{children:["Assign responsive-friendly ",(0,h.jsx)("code",{children:"margin"})," or"," ",(0,h.jsx)("code",{children:"padding"})," values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from ",(0,h.jsx)("code",{children:".25rem"})," to ",(0,h.jsx)("code",{children:"3rem"}),"."]}),(0,h.jsxs)("p",{children:["Using the CSS Grid layout module? Consider using"," ",(0,h.jsx)(i.fO,{to:"#gap",children:"the gap utility"}),"."]}),(0,h.jsxs)(l.ZP,{id:"notation",className:"scroll-margin rounded-2",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{children:"Notation"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)("p",{children:["Spacing utilities that apply to all breakpoints, from"," ",(0,h.jsx)("code",{children:"xs"})," to ",(0,h.jsx)("code",{children:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",(0,h.jsx)("code",{children:"min-width: 0"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."]}),(0,h.jsxs)("p",{children:["The classes are named using the format"," ",(0,h.jsx)("code",{children:"{property}{sides}-{size}"})," for"," ",(0,h.jsx)("code",{children:"xs"})," and"," ",(0,h.jsx)("code",{children:"{property}{sides}-{breakpoint}-{size}"})," ","for ",(0,h.jsx)("code",{children:"sm"}),", ",(0,h.jsx)("code",{children:"md"}),", ",(0,h.jsx)("code",{children:"lg"}),","," ",(0,h.jsx)("code",{children:"xl"}),", and ",(0,h.jsx)("code",{children:"xxl"}),"."]}),(0,h.jsxs)("p",{children:["Where ",(0,h.jsx)("em",{children:"property"})," is one of:"]}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"m"})," - for classes that set"," ",(0,h.jsx)("code",{children:"margin"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"p"})," - for classes that set"," ",(0,h.jsx)("code",{children:"padding"})]})]}),(0,h.jsxs)("p",{children:["Where ",(0,h.jsx)("em",{children:"sides"})," is one of:"]}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"t"})," - for classes that set"," ",(0,h.jsx)("code",{children:"margin-top"})," or ",(0,h.jsx)("code",{children:"padding-top"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"b"})," - for classes that set"," ",(0,h.jsx)("code",{children:"margin-bottom"})," or"," ",(0,h.jsx)("code",{children:"padding-bottom"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"s"})," - for classes that set"," ",(0,h.jsx)("code",{children:"margin-left"})," or"," ",(0,h.jsx)("code",{children:"padding-left"})," in LTR,"," ",(0,h.jsx)("code",{children:"margin-right"})," or"," ",(0,h.jsx)("code",{children:"padding-right"})," in RTL"]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"e"})," - for classes that set"," ",(0,h.jsx)("code",{children:"margin-right"})," or"," ",(0,h.jsx)("code",{children:"padding-right"})," in LTR,"," ",(0,h.jsx)("code",{children:"margin-left"})," or"," ",(0,h.jsx)("code",{children:"padding-left"})," in RTL"]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"x"})," - for classes that set both"," ",(0,h.jsx)("code",{children:"*-left"})," and ",(0,h.jsx)("code",{children:"*-right"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"y"})," - for classes that set both"," ",(0,h.jsx)("code",{children:"*-top"})," and ",(0,h.jsx)("code",{children:"*-bottom"})]}),(0,h.jsxs)("li",{children:["blank - for classes that set a ",(0,h.jsx)("code",{children:"margin"})," ","or ",(0,h.jsx)("code",{children:"padding"})," on all 4 sides of the element"]})]}),(0,h.jsxs)("p",{children:["Where ",(0,h.jsx)("em",{children:"size"})," is one of:"]}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"0"})," - for classes that eliminate the"," ",(0,h.jsx)("code",{children:"margin"})," or ",(0,h.jsx)("code",{children:"padding"})," by setting it to ",(0,h.jsx)("code",{children:"0"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"1"})," - (by default) for classes that set the ",(0,h.jsx)("code",{children:"margin"})," or ",(0,h.jsx)("code",{children:"padding"})," to"," ",(0,h.jsx)("code",{children:"$spacer * .25"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"2"})," - (by default) for classes that set the ",(0,h.jsx)("code",{children:"margin"})," or ",(0,h.jsx)("code",{children:"padding"})," to"," ",(0,h.jsx)("code",{children:"$spacer * .5"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"3"})," - (by default) for classes that set the ",(0,h.jsx)("code",{children:"margin"})," or ",(0,h.jsx)("code",{children:"padding"})," to"," ",(0,h.jsx)("code",{children:"$spacer"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"4"})," - (by default) for classes that set the ",(0,h.jsx)("code",{children:"margin"})," or ",(0,h.jsx)("code",{children:"padding"})," to"," ",(0,h.jsx)("code",{children:"$spacer * 1.5"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"5"})," - (by default) for classes that set the ",(0,h.jsx)("code",{children:"margin"})," or ",(0,h.jsx)("code",{children:"padding"})," to"," ",(0,h.jsx)("code",{children:"$spacer * 3"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("code",{children:"auto"})," - for classes that set the"," ",(0,h.jsx)("code",{children:"margin"})," to auto"]})]}),(0,h.jsxs)("p",{children:["(You can add more sizes by adding entries to the"," ",(0,h.jsx)("code",{children:"$spacers"})," Sass map variable.)"]})]})]}),(0,h.jsxs)(l.ZP,{id:"examples",className:"scroll-margin rounded-2",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{children:"Examples"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsx)("p",{children:"Here are some representative examples of these classes:"}),(0,h.jsx)(c.Z,{code:".mt-0 {\n  margin-top: 0 !important;\n}\n\n.ms-1 {\n  margin-left: ($spacer * .25) !important;\n}\n\n.px-2 {\n  padding-left: ($spacer * .5) !important;\n  padding-right: ($spacer * .5) !important;\n}\n\n.p-3 {\n  padding: $spacer !important;\n}",language:"scss"})]})]}),(0,h.jsxs)(l.ZP,{id:"horizontal-centering",className:"scroll-margin rounded-2",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{children:"Horizontal centering"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)("p",{children:["Additionally, Bootstrap also includes an"," ",(0,h.jsx)("code",{children:".mx-auto"})," class for horizontally centering fixed-width block level content\u2014that is, content that has ",(0,h.jsx)("code",{children:"display: block"})," and a ",(0,h.jsx)("code",{children:"width"})," ","set\u2014by setting the horizontal margins to"," ",(0,h.jsx)("code",{children:"auto"}),"."]}),(0,h.jsx)(c.Z,{code:"\n<div className='mx-auto' style={{ width: 200, backgroundColor: 'rgba(86, 61, 124, 0.15)' }}>\n\tCentered element\n</div>",children:(0,h.jsx)("div",{className:"mx-auto",style:{width:200,backgroundColor:"rgba(86, 61, 124, 0.15)"},children:"Centered element"})})]})]})]})]})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(l.ZP,{id:"negative-margin",className:"scroll-margin",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{tag:"h3",children:"Negative margin"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)("p",{children:["In CSS, ",(0,h.jsx)("code",{children:"margin"})," properties can utilize negative values (",(0,h.jsx)("code",{children:"padding"})," cannot). These negative margins are"," ",(0,h.jsx)("strong",{children:"disabled by default"}),", but can be enabled in Sass by setting ",(0,h.jsx)("code",{children:"$enable-negative-margins: true"}),"."]}),(0,h.jsxs)("p",{children:["The syntax is nearly the same as the default, positive margin utilities, but with the addition of ",(0,h.jsx)("code",{children:"n"})," before the requested size. Here\u2019s an example class that\u2019s the opposite of"," ",(0,h.jsx)("code",{children:".mt-1"}),":"]}),(0,h.jsx)(c.Z,{code:"\n.mt-n1 {\n\tmargin-top: -0.25rem !important;\n}",language:"scss"})]})]})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(l.ZP,{id:"gap",className:"scroll-margin",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{tag:"h3",children:"Gap"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)("p",{children:["When using ",(0,h.jsx)("code",{children:"display: grid"}),", you can make use of"," ",(0,h.jsx)("code",{children:"gap"})," utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a ",(0,h.jsx)("code",{children:"display: grid"})," container). Gap utilities are responsive by default, and are generated via our utilities API, based on the ",(0,h.jsx)("code",{children:"$spacers"})," Sass map."]}),(0,h.jsx)(c.Z,{code:"\n<div className='d-grid gap-3'>\n\t<div className='p-2 bg-light border'>Grid item 1</div>\n\t<div className='p-2 bg-light border'>Grid item 2</div>\n\t<div className='p-2 bg-light border'>Grid item 3</div>\n</div>",children:(0,h.jsxs)("div",{className:"d-grid gap-3",children:[(0,h.jsx)("div",{className:"p-2 bg-light border",children:"Grid item 1"}),(0,h.jsx)("div",{className:"p-2 bg-light border",children:"Grid item 2"}),(0,h.jsx)("div",{className:"p-2 bg-light border",children:"Grid item 3"})]})}),(0,h.jsxs)("p",{children:["Support includes responsive options for all of Bootstrap\u2019s grid breakpoints, as well as six sizes from the ",(0,h.jsx)("code",{children:"$spacers"})," ","map (",(0,h.jsx)("code",{children:"0"}),"\u2013",(0,h.jsx)("code",{children:"5"}),"). There is no"," ",(0,h.jsx)("code",{children:".gap-auto"})," utility class as it\u2019s effectively the same as ",(0,h.jsx)("code",{children:".gap-0"}),"."]})]})]})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)(l.ZP,{id:"sass",className:"scroll-margin",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{tag:"h3",children:"Sass"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)(l.ZP,{id:"map",className:"scroll-margin rounded-2",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{children:"Map"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsx)("p",{children:"Spacing utilities are declared via Sass map and then generated with our utilities API."}),(0,h.jsx)(c.Z,{code:"\n$spacer: 1rem;\n$spacers: (\n  \t0: 0,\n  \t1: $spacer / 4,\n  \t2: $spacer / 2,\n  \t3: $spacer,\n  \t4: $spacer * 1.5,\n  \t5: $spacer * 3,\n);\n\n$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null);",language:"scss"})]})]}),(0,h.jsxs)(l.ZP,{id:"utilities-api",className:"scroll-margin rounded-2",children:[(0,h.jsx)(l.Ol,{children:(0,h.jsx)(l.oL,{children:(0,h.jsx)(l.ll,{children:"Utilities API"})})}),(0,h.jsxs)(l.eW,{children:[(0,h.jsxs)("p",{children:["Sizing utilities are declared in our utilities API in"," ",(0,h.jsx)("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",(0,h.jsx)(i.fO,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),(0,h.jsx)(c.Z,{code:'\n"margin": (\n  \tresponsive: true,\n  \tproperty: margin,\n  \tclass: m,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n"margin-x": (\n  \tresponsive: true,\n  \tproperty: margin-right margin-left,\n  \tclass: mx,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n"margin-y": (\n  \tresponsive: true,\n  \tproperty: margin-top margin-bottom,\n  \tclass: my,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n"margin-top": (\n  \tresponsive: true,\n  \tproperty: margin-top,\n  \tclass: mt,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n"margin-end": (\n  \tresponsive: true,\n  \tproperty: margin-right,\n  \tclass: me,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n"margin-bottom": (\n  \tresponsive: true,\n  \tproperty: margin-bottom,\n  \tclass: mb,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n"margin-start": (\n  \tresponsive: true,\n  \tproperty: margin-left,\n  \tclass: ms,\n  \tvalues: map-merge($spacers, (auto: auto))\n),\n// Negative margin utilities\n"negative-margin": (\n  \tresponsive: true,\n  \tproperty: margin,\n  \tclass: m,\n  \tvalues: $negative-spacers\n),\n"negative-margin-x": (\n  \tresponsive: true,\n  \tproperty: margin-right margin-left,\n  \tclass: mx,\n  \tvalues: $negative-spacers\n),\n"negative-margin-y": (\n  \tresponsive: true,\n  \tproperty: margin-top margin-bottom,\n  \tclass: my,\n  \tvalues: $negative-spacers\n),\n"negative-margin-top": (\n  \tresponsive: true,\n  \tproperty: margin-top,\n  \tclass: mt,\n  \tvalues: $negative-spacers\n),\n"negative-margin-end": (\n  \tresponsive: true,\n  \tproperty: margin-right,\n  \tclass: me,\n  \tvalues: $negative-spacers\n),\n"negative-margin-bottom": (\n  \tresponsive: true,\n  \tproperty: margin-bottom,\n  \tclass: mb,\n  \tvalues: $negative-spacers\n),\n"negative-margin-start": (\n  \tresponsive: true,\n  \tproperty: margin-left,\n  \tclass: ms,\n  \tvalues: $negative-spacers\n),\n// Padding utilities\n"padding": (\n  \tresponsive: true,\n  \tproperty: padding,\n  \tclass: p,\n  \tvalues: $spacers\n),\n"padding-x": (\n  \tresponsive: true,\n  \tproperty: padding-right padding-left,\n  \tclass: px,\n  \tvalues: $spacers\n),\n"padding-y": (\n  \tresponsive: true,\n  \tproperty: padding-top padding-bottom,\n  \tclass: py,\n  \tvalues: $spacers\n),\n"padding-top": (\n  \tresponsive: true,\n  \tproperty: padding-top,\n  \tclass: pt,\n  \tvalues: $spacers\n),\n"padding-end": (\n  \tresponsive: true,\n  \tproperty: padding-right,\n  \tclass: pe,\n  \tvalues: $spacers\n),\n"padding-bottom": (\n  \tresponsive: true,\n  \tproperty: padding-bottom,\n  \tclass: pb,\n  \tvalues: $spacers\n),\n"padding-start": (\n  \tresponsive: true,\n  \tproperty: padding-left,\n  \tclass: ps,\n  \tvalues: $spacers\n),',language:"scss"})]})]})]})]})})]})})]})}}}]);
//# sourceMappingURL=3083.1e869397.chunk.js.map