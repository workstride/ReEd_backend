"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[9153],{57e3:function(e,i,t){t(72791);var s=t(66867),r=t(50022),l=t(5443),n=t(80184),o=(0,s.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),a=function(e){var i=e.children,t=e.isPrism,s=o();return(0,n.jsx)(r.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:t?(0,n.jsx)(l.Z,{code:i,language:"jsx",className:s.prism}):(0,n.jsx)("code",{children:i})})};a.defaultProps={isPrism:!1},i.Z=a},31024:function(e,i,t){var s=t(1413),r=t(45987),l=(t(72791),t(11592)),n=t(80184),o=["to"];i.Z=function(e){var i=e.to,t=(0,r.Z)(e,o);return(0,n.jsx)(l.Z,(0,s.Z)((0,s.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_STORYBOOK_URL).concat(i)},t),{},{children:"Storybook"}))}},5081:function(e,i,t){t.d(i,{g:function(){return d}});var s=t(72791),r=t(81694),l=t.n(r),n=t(11087),o=t(16843),a=t(63542),c=t(80184),d=function(e){var i=e.children,t=e.ariaLabel,r=e.className,a=e.tag,d=e.to,g=e.isActive,x=e.divider;return(0,c.jsxs)(o.Z,{tag:a,className:l()("breadcrumb-item",{active:g},r),"aria-current":g?"page":null,"aria-label":t||i,children:[x&&"string"!==typeof x&&(0,s.cloneElement)(x,{className:l()("breadcrumb-icon",x.props.className)}),g?i:(0,c.jsx)(n.OL,{to:d,"aria-label":t,children:i})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var g=function(e){var i=e.children,t=e.list,r=e.tag,l=e.listTag,n=e.itemTag,a=e.ariaLabel,g=e.autoActive,x=e.isToHome,j=e.divider,h="string"!==j&&j;return(0,c.jsx)(o.Z,{tag:r,"aria-label":a,style:j?{"--bs-breadcrumb-divider":"string"===typeof j?"'".concat(j,"'"):"none"}:null,children:(0,c.jsxs)(o.Z,{tag:l,className:"breadcrumb",children:[x&&(0,c.jsx)(d,{to:"/",ariaLabel:"Home",children:x}),t?t.map((function(e,i){return(0,c.jsx)(d,{tag:e.tag||n,to:e.to,isActive:g&&t.length===i+1,divider:h,children:e.title},e.title)})):s.Children.map(i,(function(e,t){return(0,s.cloneElement)(e,{tag:e.props.tag||n,isActive:g&&i.length===t+1,divider:e.props.divider||h})}))]})})};g.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(a.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(a.Z,{icon:"ChevronRight"})},i.Z=g},29153:function(e,i,t){t.r(i);t(72791);var s=t(11087),r=t(15224),l=t(5081),n=t(31024),o=t(47930),a=t(38493),c=t(7134),d=t(96517),g=t(57e3),x=t(63542),j=t(80184);i.default=function(){return(0,j.jsxs)(a.Z,{title:c.XZ.components.subMenu.breadcrumb.text,children:[(0,j.jsxs)(r.ZP,{children:[(0,j.jsx)(r.Vv,{children:(0,j.jsx)(l.Z,{list:[{title:c.XZ.components.text,to:"/".concat(c.XZ.components.path)},{title:c.XZ.components.subMenu.breadcrumb.text,to:"/".concat(c.XZ.components.subMenu.breadcrumb.path)}]})}),(0,j.jsx)(r.$o,{children:(0,j.jsx)(n.Z,{to:"/docs/components-breadcrumb--default"})})]}),(0,j.jsx)(o.Z,{children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-12",children:(0,j.jsxs)(d.ZP,{children:[(0,j.jsx)(d.Ol,{children:(0,j.jsx)(d.oL,{icon:"Assignment",children:(0,j.jsx)(d.ll,{children:"General Usage"})})}),(0,j.jsx)(d.eW,{children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-xl-6",children:(0,j.jsx)(d.TY,{className:"h-100",children:"\n<Breadcrumb\n\tlist={ Array } // [{ title: String , to: String }, Object ]\n\ttag={ String } // 'nav' || 'div' || 'section'\n\tlistTag={ String } // 'div' || 'ol' || 'ul'\n\titemTag={ String } // 'div' || 'li'\n\tariaLabel={ String }\n\tautoActive={ Boolean }\n\tisToHome={ String || Node } // <Icon {...props}/>\n\tdivider={ String || Node } // <Icon {...props}/>\n\t/>"})}),(0,j.jsx)("div",{className:"col-xl-6",children:(0,j.jsx)(d.TY,{className:"h-100",children:"\n<Breadcrumb\n\tlist={null}\n\ttag={ String } // 'nav' || 'div' || 'section'\n\tlistTag={ String } // 'div' || 'ol' || 'ul'\n\titemTag={ String } // 'div' || 'li'\n\tariaLabel={ String }\n\tautoActive={ Boolean }\n\tisToHome={ String || Node } // <Icon {...props}/>\n\tdivider={ String || Node } // <Icon {...props}/>\n\t/>\n\t<BreadcrumbItem\n\t\tariaLabel={ String }\n\t\tclassName={ String }\n\t\ttag={ String }\n\t\tto={ String }\n\t\tisActive={ Boolean } \n\t\tdivider={ String || Node } // <Icon {...props}/>\n\t\t/>\n\t...\n</Breadcrumb>"})})]})})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"FormatListBulleted",iconColor:"info",children:[(0,j.jsx)(d.ll,{children:"list"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"list: PropTypes.arrayOf( PropTypes.shape({ title: PropTypes.string.isRequired, to: PropTypes.string.isRequired }) )"})}),(0,j.jsx)(d.eW,{children:(0,j.jsx)(l.Z,{list:[{title:"Page",to:"/page"},{title:"Sub Page",to:"/page/subpage"},{title:"Sub sub Page",to:"/page/subpage/subsubpage"}]})})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"Bookmarks",iconColor:"warning",children:[(0,j.jsx)(d.ll,{children:"tag"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default&args=tag:div"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"tag: PropTypes.oneOf(['nav', 'div', 'section']),"})}),(0,j.jsxs)(d.eW,{children:[(0,j.jsx)(l.Z,{tag:"nav",list:[{title:"Page",to:"/page"},{title:'tag "nav"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{tag:"div",list:[{title:"Page",to:"/page"},{title:'tag "div"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{tag:"section",list:[{title:"Page",to:"/page"},{title:'tag "section"',to:"/page/subpage"}]})]})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"Bookmarks",iconColor:"success",children:[(0,j.jsx)(d.ll,{children:"listTag"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default&args=listTag:ul"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"listTag: PropTypes.oneOf(['div', 'ol', 'ul']),"})}),(0,j.jsxs)(d.eW,{children:[(0,j.jsx)(l.Z,{listTag:"div",list:[{title:"Page",to:"/page"},{title:'listTag "div"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{listTag:"ol",list:[{title:"Page",to:"/page"},{title:'listTag "ol"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{listTag:"ul",list:[{title:"Page",to:"/page"},{title:'listTag "ul"',to:"/page/subpage"}]})]})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"Bookmarks",iconColor:"danger",children:[(0,j.jsx)(d.ll,{children:"itemTag"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default&args=listTag:div;itemTag:div"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"itemTag: PropTypes.oneOf(['div', 'li']),"})}),(0,j.jsxs)(d.eW,{children:[(0,j.jsx)(l.Z,{itemTag:"div",list:[{title:"Page",to:"/page"},{title:'itemTag "div"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{itemTag:"li",list:[{title:"Page",to:"/page"},{title:'itemTag "li"',to:"/page/subpage"}]})]})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"AutoFixNormal",iconColor:"primary",children:[(0,j.jsx)(d.ll,{children:"autoActive"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default&args=autoActive:true"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"autoActive: PropTypes.bool,"})}),(0,j.jsxs)(d.eW,{children:[(0,j.jsx)(l.Z,{list:[{title:"Page",to:"/page"},{title:'autoActive "true"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{autoActive:!1,list:[{title:"Page",to:"/page"},{title:'autoActive "false"',to:"/page/subpage"}]})]})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"HolidayVillage",iconColor:"info",children:[(0,j.jsx)(d.ll,{children:"isToHome"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default&args=isToHome:Home"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsxs)(g.Z,{children:[(0,j.jsx)("div",{children:"isToHome: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),"}),(0,j.jsxs)("div",{children:["// ",(0,j.jsx)(s.OL,{to:"/icons/material",children:"Material"})," or"," ",(0,j.jsx)(s.OL,{to:"/icons/bootstrap-icon",children:"Bootstrap"})," to see the icon names and previews."]})]})}),(0,j.jsxs)(d.eW,{children:[(0,j.jsx)(l.Z,{list:[{title:"Page",to:"/page"},{title:"Default",to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{isToHome:"Home",list:[{title:"Page",to:"/page"},{title:'String "Home"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{isToHome:(0,j.jsx)(x.Z,{icon:"OtherHouses"}),list:[{title:"Page",to:"/page"},{title:"node \"<Icon icon='OtherHouses' />\"",to:"/page/subpage"}]})]})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"Carpenter",iconColor:"danger",children:[(0,j.jsx)(d.ll,{children:"divider"}),(0,j.jsx)(d.md,{children:"Breadcrumb"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb--default&args=divider:divide"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsxs)(g.Z,{children:[(0,j.jsx)("div",{children:"divider: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),"}),(0,j.jsxs)("div",{children:["// ",(0,j.jsx)(s.OL,{to:"/icons/material",children:"Material"})," or"," ",(0,j.jsx)(s.OL,{to:"/icons/bootstrap-icon",children:"Bootstrap"})," to see the icon names and previews."]})]})}),(0,j.jsxs)(d.eW,{children:[(0,j.jsx)(l.Z,{list:[{title:"Page",to:"/page"},{title:"Default",to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{divider:"-",list:[{title:"Page",to:"/page"},{title:'String "-"',to:"/page/subpage"}]}),(0,j.jsx)(l.Z,{divider:(0,j.jsx)(x.Z,{icon:"PlayArrow"}),list:[{title:"Page",to:"/page"},{title:"node \"<Icon icon='PlayArrow' />\"",to:"/page/subpage"}]})]})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"Bookmarks",iconColor:"info",children:[(0,j.jsx)(d.ll,{children:"tag"}),(0,j.jsx)(d.md,{children:"BreadcrumbItem"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb-sub-components-breadcrumbitem--default&args=tag:div"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"tag: PropTypes.string,"})}),(0,j.jsx)(d.eW,{children:(0,j.jsxs)(l.Z,{autoActive:!1,children:[(0,j.jsx)(l.g,{to:"/",tag:"div",children:'tag "div"'}),(0,j.jsx)(l.g,{to:"/",tag:"span",children:'tag "span"'})]})})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"NotificationsActive",iconColor:"warning",children:[(0,j.jsx)(d.ll,{children:"isActive"}),(0,j.jsx)(d.md,{children:"BreadcrumbItem"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb-sub-components-breadcrumbitem--default&args=isActive:true"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"isActive: PropTypes.bool,"})}),(0,j.jsx)(d.eW,{children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(l.g,{to:"/",isActive:!1,children:'isActive "false"'}),(0,j.jsx)(l.g,{to:"/",isActive:!0,children:'isActive "true"'})]})})]})}),(0,j.jsx)("div",{className:"col-lg-6",children:(0,j.jsxs)(d.ZP,{stretch:!0,children:[(0,j.jsxs)(d.Ol,{children:[(0,j.jsxs)(d.oL,{icon:"Carpenter",iconColor:"success",children:[(0,j.jsx)(d.ll,{children:"divider"}),(0,j.jsx)(d.md,{children:"BreadcrumbItem"})]}),(0,j.jsx)(d.T$,{children:(0,j.jsx)(n.Z,{to:"/story/components-breadcrumb-sub-components-breadcrumbitem--default&args=divider:divide"})})]}),(0,j.jsx)(d.Ol,{children:(0,j.jsx)(g.Z,{children:"divider: PropTypes.bool,"})}),(0,j.jsx)(d.eW,{children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(l.g,{to:"/",divider:(0,j.jsx)(x.Z,{icon:"Carpenter"}),children:"divider \"<Icon icon='Carpenter' />\""}),(0,j.jsx)(l.g,{to:"/",divider:(0,j.jsx)(x.Z,{icon:"ContentCut"}),children:"divider \"<Icon icon='ContentCut' />\""})]})})]})})]})})]})}}}]);
//# sourceMappingURL=9153.b5e79c7f.chunk.js.map