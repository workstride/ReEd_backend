"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[7007],{37003:function(e,i,s){s(72791);var t=s(81694),l=s.n(t),o=s(50022),r=s(80184),n=function(e){var i=e.children,s=e.className,t=e.color;return(0,r.jsx)(o.ZP,{color:t,isLight:!0,shadow:"md",borderWidth:0,icon:"Info",className:l()("flex-nowrap","w-100","mb-0",s),children:i})};n.defaultProps={className:void 0,color:"warning"},i.Z=n},57e3:function(e,i,s){s(72791);var t=s(66867),l=s(50022),o=s(5443),r=s(80184),n=(0,t.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),a=function(e){var i=e.children,s=e.isPrism,t=n();return(0,r.jsx)(l.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:s?(0,r.jsx)(o.Z,{code:i,language:"jsx",className:t.prism}):(0,r.jsx)("code",{children:i})})};a.defaultProps={isPrism:!1},i.Z=a},31024:function(e,i,s){var t=s(1413),l=s(45987),o=(s(72791),s(11592)),r=s(80184),n=["to"];i.Z=function(e){var i=e.to,s=(0,l.Z)(e,n);return(0,r.jsx)(o.Z,(0,t.Z)((0,t.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_STORYBOOK_URL).concat(i)},s),{},{children:"Storybook"}))}},5081:function(e,i,s){s.d(i,{g:function(){return d}});var t=s(72791),l=s(81694),o=s.n(l),r=s(11087),n=s(16843),a=s(63542),c=s(80184),d=function(e){var i=e.children,s=e.ariaLabel,l=e.className,a=e.tag,d=e.to,h=e.isActive,p=e.divider;return(0,c.jsxs)(n.Z,{tag:a,className:o()("breadcrumb-item",{active:h},l),"aria-current":h?"page":null,"aria-label":s||i,children:[p&&"string"!==typeof p&&(0,t.cloneElement)(p,{className:o()("breadcrumb-icon",p.props.className)}),h?i:(0,c.jsx)(r.OL,{to:d,"aria-label":s,children:i})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(e){var i=e.children,s=e.list,l=e.tag,o=e.listTag,r=e.itemTag,a=e.ariaLabel,h=e.autoActive,p=e.isToHome,m=e.divider,x="string"!==m&&m;return(0,c.jsx)(n.Z,{tag:l,"aria-label":a,style:m?{"--bs-breadcrumb-divider":"string"===typeof m?"'".concat(m,"'"):"none"}:null,children:(0,c.jsxs)(n.Z,{tag:o,className:"breadcrumb",children:[p&&(0,c.jsx)(d,{to:"/",ariaLabel:"Home",children:p}),s?s.map((function(e,i){return(0,c.jsx)(d,{tag:e.tag||r,to:e.to,isActive:h&&s.length===i+1,divider:x,children:e.title},e.title)})):t.Children.map(i,(function(e,s){return(0,t.cloneElement)(e,{tag:e.props.tag||r,isActive:h&&i.length===s+1,divider:e.props.divider||x})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(a.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(a.Z,{icon:"ChevronRight"})},i.Z=h},17007:function(e,i,s){s.r(i);s(72791);var t=s(38493),l=s(7134),o=s(15224),r=s(5081),n=s(31024),a=s(47930),c=s(96517),d=s(11592),h=s(48977),p=s(57e3),m=s(37003),x=s(80184);i.default=function(){return(0,x.jsxs)(t.Z,{title:l.XZ.components.subMenu.tooltip.text,children:[(0,x.jsxs)(o.ZP,{children:[(0,x.jsx)(o.Vv,{children:(0,x.jsx)(r.Z,{list:[{title:l.XZ.components.text,to:"/".concat(l.XZ.components.path)},{title:l.XZ.components.subMenu.tooltip.text,to:"/".concat(l.XZ.components.subMenu.tooltip.path)}]})}),(0,x.jsx)(o.$o,{children:(0,x.jsx)(n.Z,{to:"/docs/components-tooltips--default"})})]}),(0,x.jsx)(a.Z,{children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(c.ZP,{children:[(0,x.jsx)(c.Ol,{children:(0,x.jsx)(c.oL,{icon:"Assignment",children:(0,x.jsx)(c.ll,{children:"General Usage"})})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(c.TY,{children:"\n<Tooltips\n\tclassName={ String }\n\ttitle={ String || Node }\n\tplacement={ String } // 'auto' || 'top' || 'bottom' || 'right' || 'left'\n\tflip={ Array } // ['auto' || 'top' || 'bottom' || 'right' || 'left']\n\tdelay={ Number }\n\tisDisplayInline={ Boolean }\n\tisDisableElements={ Boolean }\n\tmodifiers={ Object } // [Popper.js](https://popper.js.org/docs/v2/modifiers/)\n\t{...props}>\n\t... { // String, HTML tag or React Component }\n</Tooltips>"})})]})}),(0,x.jsx)("div",{className:"col-xl-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsxs)(c.Ol,{children:[(0,x.jsxs)(c.oL,{icon:"ControlCamera",iconColor:"warning",children:[(0,x.jsx)(c.ll,{children:"placement"}),(0,x.jsx)(c.md,{children:"Tooltips"})]}),(0,x.jsx)(c.T$,{children:(0,x.jsx)(n.Z,{to:"/story/components-tooltips--default&args=placement:right"})})]}),(0,x.jsx)(c.Ol,{children:(0,x.jsx)(p.Z,{children:"placement: PropTypes.oneOf(['auto', 'top', 'bottom', 'right', 'left']),"})}),(0,x.jsx)(c.eW,{children:(0,x.jsxs)("div",{className:"row g-4 align-items-stretch",children:[(0,x.jsx)("div",{className:"col-md",children:(0,x.jsx)(h.Z,{title:"This is a title",placement:"auto",children:(0,x.jsx)(d.Z,{color:"primary",isLight:!0,icon:"PublishedWithChanges",className:"w-100 h-100",children:"Auto"})})}),(0,x.jsx)("div",{className:"col-md",children:(0,x.jsx)(h.Z,{title:"This is a title",placement:"top",children:(0,x.jsx)(d.Z,{color:"secondary",isLight:!0,icon:"North",className:"w-100 h-100",children:"Top"})})}),(0,x.jsx)("div",{className:"col-md",children:(0,x.jsx)(h.Z,{title:"This is a title",placement:"right",children:(0,x.jsx)(d.Z,{color:"info",isLight:!0,icon:"East",className:"w-100 h-100",children:"Right"})})}),(0,x.jsx)("div",{className:"col-md",children:(0,x.jsx)(h.Z,{title:"This is a title",placement:"bottom",children:(0,x.jsx)(d.Z,{color:"success",isLight:!0,icon:"South",className:"w-100 h-100",children:"Bottom"})})}),(0,x.jsx)("div",{className:"col-md",children:(0,x.jsx)(h.Z,{title:"This is a title",placement:"left",children:(0,x.jsx)(d.Z,{color:"danger",isLight:!0,icon:"West",className:"w-100 h-100",children:"Left"})})})]})})]})}),(0,x.jsx)("div",{className:"col-xl-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsxs)(c.Ol,{children:[(0,x.jsxs)(c.oL,{icon:"PublishedWithChanges",iconColor:"danger",children:[(0,x.jsx)(c.ll,{children:"flip"}),(0,x.jsx)(c.md,{children:"Tooltips"})]}),(0,x.jsx)(c.T$,{children:(0,x.jsx)(n.Z,{to:"/story/components-tooltips--default&args=placement:right;flip[1]:left"})})]}),(0,x.jsx)(c.Ol,{children:(0,x.jsx)(p.Z,{children:"flip: PropTypes.arrayOf(PropTypes.oneOf(['auto', 'top', 'bottom', 'right', 'left'])),"})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)(h.Z,{title:"This is a title",flip:["top","bottom"],children:(0,x.jsx)(d.Z,{color:"primary",isLight:!0,icon:"DataExploration",children:"Hover me!"})})}),(0,x.jsx)(c.iR,{children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)("p",{children:"If the popper has placement set to bottom, but there isn't enough space to position the popper in that direction, by default, it will change the popper placement to top. As soon as enough space is detected, the placement will be reverted to the originally defined (or preferred) one."}),(0,x.jsx)("p",{children:"You can also define fallback placements by providing a list of placements to try. When no space is available on the preferred placement, the modifier will test the ones provided in the list, and use the first useful one."})," ","If you want detailed information,",(0,x.jsx)("a",{href:"https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements",rel:"noreferrer",target:"_blank",children:"Popper.js"})]})})]})}),(0,x.jsx)("div",{className:"col-xl-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsxs)(c.Ol,{children:[(0,x.jsxs)(c.oL,{icon:"Bolt",iconColor:"primary",children:[(0,x.jsx)(c.ll,{children:"delay"}),(0,x.jsx)(c.md,{children:"Tooltips"})]}),(0,x.jsx)(c.T$,{children:(0,x.jsx)(n.Z,{to:"/story/components-tooltips--default&args=delay:1000"})})]}),(0,x.jsx)(c.Ol,{children:(0,x.jsxs)(p.Z,{children:[(0,x.jsx)("div",{children:"// miliseconds"}),"delay: PropTypes.number,"]})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)("div",{className:"row d-flex align-items-center",children:(0,x.jsx)("div",{className:"col-auto",children:(0,x.jsx)(h.Z,{title:"This is a title.",delay:1e3,children:"Bring the mouse to see! (Turns off after 1 second)"})})})})]})}),(0,x.jsx)("div",{className:"col-xl-6",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsxs)(c.Ol,{children:[(0,x.jsxs)(c.oL,{icon:"Bolt",iconColor:"primary",children:[(0,x.jsx)(c.ll,{children:"isDisableElements"}),(0,x.jsx)(c.md,{children:"Tooltips"})]}),(0,x.jsx)(c.T$,{children:(0,x.jsx)(n.Z,{to:"/story/components-tooltips--default&args=isDisplayInline:true;isDisableElements:true"})})]}),(0,x.jsx)(c.Ol,{children:(0,x.jsx)(p.Z,{children:"isDisableElements: PropTypes.bool,"})}),(0,x.jsx)(c.eW,{children:(0,x.jsx)("div",{className:"row d-flex align-items-center",children:(0,x.jsx)("div",{className:"col-auto",children:(0,x.jsx)(h.Z,{title:"This is a title.",isDisableElements:!0,isDisplayInline:!0,children:(0,x.jsx)(d.Z,{color:"primary",isDisable:!0,children:"Disable Button"})})})})})]})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsxs)(c.ZP,{stretch:!0,children:[(0,x.jsx)(c.Ol,{children:(0,x.jsxs)(c.oL,{icon:"Extension",iconColor:"danger",children:[(0,x.jsx)(c.ll,{children:"modifiers"}),(0,x.jsx)(c.md,{children:"Tooltips"})]})}),(0,x.jsx)(c.Ol,{children:(0,x.jsx)(p.Z,{children:"modifiers: PropTypes.object,"})}),(0,x.jsxs)(c.eW,{children:[(0,x.jsx)("p",{children:"Popper is built using an extensible core, which provides the foundation used to deliver all the functionalities offered by the library."}),(0,x.jsx)("p",{children:'All the useful functionalities provided by the library are implemented as Popper modifiers. They are plugins, or middlewares, that can hook into the lifecycle of Popper, and add additional logic to the positioning operations provided by default by Popper. They effectively "modify" the popper state in some fashion, adding functionality, hence the term "modifiers".'})]}),(0,x.jsx)(c.iR,{children:(0,x.jsxs)(m.Z,{children:["If you want detailed information,",(0,x.jsx)("a",{href:"https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements",rel:"noreferrer",target:"_blank",children:"Popper.js"})]})})]})})]})})]})}}}]);
//# sourceMappingURL=7007.45edea80.chunk.js.map