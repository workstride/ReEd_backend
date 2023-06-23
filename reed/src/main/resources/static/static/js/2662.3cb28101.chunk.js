"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[2662],{37003:function(s,e,n){n(72791);var i=n(81694),o=n.n(i),r=n(50022),c=n(80184),l=function(s){var e=s.children,n=s.className,i=s.color;return(0,c.jsx)(r.ZP,{color:i,isLight:!0,shadow:"md",borderWidth:0,icon:"Info",className:o()("flex-nowrap","w-100","mb-0",n),children:e})};l.defaultProps={className:void 0,color:"warning"},e.Z=l},57e3:function(s,e,n){n(72791);var i=n(66867),o=n(50022),r=n(5443),c=n(80184),l=(0,i.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),d=function(s){var e=s.children,n=s.isPrism,i=l();return(0,c.jsx)(o.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:n?(0,c.jsx)(r.Z,{code:e,language:"jsx",className:i.prism}):(0,c.jsx)("code",{children:e})})};d.defaultProps={isPrism:!1},e.Z=d},31024:function(s,e,n){var i=n(1413),o=n(45987),r=(n(72791),n(11592)),c=n(80184),l=["to"];e.Z=function(s){var e=s.to,n=(0,o.Z)(s,l);return(0,c.jsx)(r.Z,(0,i.Z)((0,i.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_STORYBOOK_URL).concat(e)},n),{},{children:"Storybook"}))}},54461:function(s,e,n){var i=n(1413),o=n(4942),r=n(45987),c=(n(72791),n(81694)),l=n.n(c),d=n(56424),t=n(80184),a=["children","className","color","shadow","rounded","isLight"],h=function(s){var e,n=s.children,c=s.className,h=s.color,x=s.shadow,j=s.rounded,p=s.isLight,m=(0,r.Z)(s,a),u=(0,d.Z)().darkModeStatus;return(0,t.jsx)("span",(0,i.Z)((0,i.Z)({className:l()("badge",(e={},(0,o.Z)(e,"bg-".concat(h),!p),(0,o.Z)(e,"bg-l".concat(u?"o25":"10","-").concat(h),p),(0,o.Z)(e,"text-".concat(h),p),(0,o.Z)(e,"shadow".concat("default"!==x?"-".concat(x):""),!!x),(0,o.Z)(e,"rounded".concat("default"!==j?"-".concat(j):""),j),(0,o.Z)(e,"rounded-0","bottom"===j||"top"===j||"end"===j||"start"===j||0===j),e),c)},m),{},{children:n}))};h.defaultProps={className:void 0,color:"primary",rounded:null,shadow:null,isLight:!1},e.Z=h},5081:function(s,e,n){n.d(e,{g:function(){return a}});var i=n(72791),o=n(81694),r=n.n(o),c=n(11087),l=n(16843),d=n(63542),t=n(80184),a=function(s){var e=s.children,n=s.ariaLabel,o=s.className,d=s.tag,a=s.to,h=s.isActive,x=s.divider;return(0,t.jsxs)(l.Z,{tag:d,className:r()("breadcrumb-item",{active:h},o),"aria-current":h?"page":null,"aria-label":n||e,children:[x&&"string"!==typeof x&&(0,i.cloneElement)(x,{className:r()("breadcrumb-icon",x.props.className)}),h?e:(0,t.jsx)(c.OL,{to:a,"aria-label":n,children:e})]})};a.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var h=function(s){var e=s.children,n=s.list,o=s.tag,r=s.listTag,c=s.itemTag,d=s.ariaLabel,h=s.autoActive,x=s.isToHome,j=s.divider,p="string"!==j&&j;return(0,t.jsx)(l.Z,{tag:o,"aria-label":d,style:j?{"--bs-breadcrumb-divider":"string"===typeof j?"'".concat(j,"'"):"none"}:null,children:(0,t.jsxs)(l.Z,{tag:r,className:"breadcrumb",children:[x&&(0,t.jsx)(a,{to:"/",ariaLabel:"Home",children:x}),n?n.map((function(s,e){return(0,t.jsx)(a,{tag:s.tag||c,to:s.to,isActive:h&&n.length===e+1,divider:p,children:s.title},s.title)})):i.Children.map(e,(function(s,n){return(0,i.cloneElement)(s,{tag:s.props.tag||c,isActive:h&&e.length===n+1,divider:s.props.divider||p})}))]})})};h.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,t.jsx)(d.Z,{icon:"HolidayVillage"}),divider:(0,t.jsx)(d.Z,{icon:"ChevronRight"})},e.Z=h},82662:function(s,e,n){n.r(e),n.d(e,{DROPDOWN_INNER:function(){return Z}});n(72791);var i=n(11087),o=n(15224),r=n(47930),c=n(38493),l=n(96517),d=n(11592),t=n(29944),a=n(63542),h=n(54461),x=n(5081),j=n(57e3),p=n(37003),m=n(31024),u=n(7134),g=n(80184),Z=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.hP,{isHeader:!0,children:"Header"}),(0,g.jsx)(t.hP,{children:(0,g.jsxs)(i.OL,{to:"/components/popovers",children:[(0,g.jsx)(a.Z,{icon:"Send"})," Navlink"]})}),(0,g.jsx)(t.hP,{isDivider:!0}),(0,g.jsx)(t.hP,{isText:!0,children:"Lorem ipsum dolor sit amet."}),(0,g.jsx)(t.hP,{children:(0,g.jsxs)("a",{href:"/",children:[(0,g.jsxs)("div",{className:"col text-nowrap overflow-hidden text-overflow-ellipsis",children:[(0,g.jsx)(a.Z,{icon:"Send"})," Link Item"]}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsx)(h.Z,{children:"2"})})]})}),(0,g.jsx)(t.hP,{children:"String"})]});e.default=function(){var s=["primary","secondary","success","info","warning","danger","light","dark","link"];return(0,g.jsxs)(c.Z,{title:u.XZ.components.subMenu.dropdowns.text,children:[(0,g.jsxs)(o.ZP,{children:[(0,g.jsx)(o.Vv,{children:(0,g.jsx)(x.Z,{list:[{title:u.XZ.components.text,to:"/".concat(u.XZ.components.path)},{title:u.XZ.components.subMenu.dropdowns.text,to:"/".concat(u.XZ.components.subMenu.dropdowns.path)}]})}),(0,g.jsx)(o.$o,{children:(0,g.jsx)(m.Z,{to:"/docs/components-dropdown--dropdown-template"})})]}),(0,g.jsx)(r.Z,{children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-12",children:(0,g.jsxs)(l.ZP,{children:[(0,g.jsx)(l.Ol,{children:(0,g.jsx)(l.oL,{icon:"Assignment",children:(0,g.jsx)(l.ll,{children:"General Usagse"})})}),(0,g.jsx)(l.eW,{children:(0,g.jsx)(l.TY,{children:"\n<Dropdown\n\tisOpen={ Boolean } // Not required. Example: state\n\tsetIsOpen={ Function } // Not required. Example: setState\n\tclassName={ String }\n\tdirection={ String } // 'up' || 'end' || 'down' || 'start'\n\tisButtonGroup={ Boolean }>\n\t<DropdownToggle\n\t\thasIcon={ Boolean }>\n\t\t<Button {...props}>...</Button> { // component, html tag. }\n\t</DropdownToggle>\n\t<DropdownMenu\n\t\tclassName={ String }\n\t\tisAlignmentEnd={ Boolean }\n\t\tbreakpoint={ String } // 'sm' || 'md' || 'lg' || 'xl' || 'xxl'\n\t\tsize={ String } // 'sm' || 'md' || 'lg'\n\t\t>\n\t\t<DropdownItem\n\t\t\tisHeader={ Boolean }\n\t\t\tisDivider={ Boolean }\n\t\t\tisText={ Boolean }\n\t\t\t{...props}>\n\t\t\t...\n\t\t</DropdownItem>\n\t\t...\n\t</DropdownMenu>\n</Dropdown>"})})]})}),(0,g.jsx)("div",{className:"col-lg-6",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"HdrStrong",iconColor:"danger",children:[(0,g.jsx)(l.ll,{children:"isOpen, setIsOpen"}),(0,g.jsx)(l.md,{children:"Dropdown"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown--dropdown-template"})})]}),(0,g.jsxs)(l.eW,{children:[(0,g.jsxs)(j.Z,{children:[(0,g.jsx)("div",{children:"isOpen: PropTypes.bool,"}),(0,g.jsx)("div",{children:"setIsOpen: PropTypes.func,"})]}),(0,g.jsx)(l.TY,{className:"mb-3",children:"const [state, setState] = useState(false);"}),(0,g.jsx)(l.TY,{children:"\n<Dropdown\n\tisOpen={state}\n\tsetIsOpen={setState}\n\t{...props}>\n\t<DropdownToggle {...props} />\n\t<DropdownMenu {...props}>\n\t\t<DropdownItem {...props}>\n\t\t...\n\t\t</DropdownItem>\n\t\t...\n\t</DropdownMenu>\n</Dropdown>"})]}),(0,g.jsx)(l.eW,{children:(0,g.jsx)("div",{className:"row g-4",children:(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"success",isLight:!0,children:"Dropdown"})}),(0,g.jsx)(t.h_,{children:Z})]})})})}),(0,g.jsx)(l.iR,{children:(0,g.jsx)(p.Z,{children:"If you do not want to intervene, there is no need to define the state."})})]})}),(0,g.jsx)("div",{className:"col-lg-6",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"ControlCamera",iconColor:"warning",children:[(0,g.jsx)(l.ll,{children:"direction"}),(0,g.jsx)(l.md,{children:"Dropdown"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-props--direction"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"direction: PropTypes.oneOf(['up', 'end', 'down', 'start']),"})}),(0,g.jsx)(l.eW,{children:["up","end","down","start"].map((function(e,n){return(0,g.jsxs)("div",{className:"row g-4 mb-4 d-flex align-items-center",children:[(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{direction:e,children:[(0,g.jsx)(t.Z_,{children:(0,g.jsxs)(d.Z,{color:s[n],isLight:!0,icon:"Public",children:["Drop - ",e]})}),(0,g.jsx)(t.h_,{children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{direction:e,children:[(0,g.jsx)(t.Z_,{hasIcon:!1,children:(0,g.jsx)(d.Z,{color:s[n],isLight:!0,hoverShadow:"default",icon:"Send"})}),(0,g.jsx)(t.h_,{children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{direction:e,children:[(0,g.jsx)(t.Z_,{hasIcon:!1,children:(0,g.jsx)(d.Z,{color:s[n],isOutline:!0,hoverShadow:"default",icon:"MoreHoriz",className:"border-0"})}),(0,g.jsx)(t.h_,{children:Z})]})})]},e)}))})]})}),(0,g.jsx)("div",{className:"col-lg-6",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsx)(l.Ol,{children:(0,g.jsxs)(l.oL,{icon:"ViewInAr",iconColor:"danger",children:[(0,g.jsx)(l.ll,{children:"isButtonGroup"}),(0,g.jsx)(l.md,{children:"Dropdown"})]})}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"isButtonGroup: PropTypes.bool,"})}),(0,g.jsx)(l.eW,{children:(0,g.jsx)("div",{className:"row g-4",children:(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{isButtonGroup:!0,children:[(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public",children:"Button"}),(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public",children:"Button 2"}),(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"success",isLight:!0})}),(0,g.jsx)(t.h_,{children:Z})]})})})})]})}),(0,g.jsx)("div",{className:"col-lg-6",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"Panorama",children:[(0,g.jsx)(l.ll,{children:"hasIcon"}),(0,g.jsx)(l.md,{children:"DropdownToggle"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdowntoggle-props--has-icon"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"hasIcon: PropTypes.bool,"})}),(0,g.jsxs)(l.eW,{children:[(0,g.jsxs)("div",{className:"row g-4 mb-4 d-flex align-items-center",children:[(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{hasIcon:!1,children:(0,g.jsx)(d.Z,{color:"primary",isLight:!0,icon:"Public",children:"hasIcon, false"})}),(0,g.jsx)(t.h_,{children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{hasIcon:!1,children:(0,g.jsx)(d.Z,{color:"primary",isLight:!0,icon:"Public"})}),(0,g.jsx)(t.h_,{children:Z})]})})]}),(0,g.jsxs)("div",{className:"row g-4 d-flex align-items-center",children:[(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public",children:"hasIcon, true"})}),(0,g.jsx)(t.h_,{children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public"})}),(0,g.jsx)(t.h_,{children:Z})]})})]})]}),(0,g.jsx)(l.iR,{children:(0,g.jsx)(p.Z,{children:"Sets the visibility of the arrow icon"})})]})}),(0,g.jsx)("div",{className:"col-lg-6",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"AlignHorizontalRight",iconColor:"success",children:[(0,g.jsx)(l.ll,{children:"isAlignmentEnd"}),(0,g.jsx)(l.md,{children:"DropdownMenu"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdownmenu-props--is-alignment-end"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"isAlignmentEnd: PropTypes.bool,"})}),(0,g.jsx)(l.eW,{children:(0,g.jsxs)("div",{className:"row g-4",children:[(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public",children:"The menu here is just right side."})}),(0,g.jsx)(t.h_,{isAlignmentEnd:!0,children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"danger",isLight:!0,icon:"Public",children:"The menu here isn't just right side."})}),(0,g.jsx)(t.h_,{children:Z})]})})]})})]})}),(0,g.jsx)("div",{className:"col-lg-6",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"Straighten",iconColor:"warning",children:[(0,g.jsx)(l.ll,{children:"size"}),(0,g.jsx)(l.md,{children:"DropdownMenu"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdownmenu-props--size"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"size: PropTypes.oneOf(['sm', 'md', 'lg']),"})}),(0,g.jsx)(l.eW,{children:(0,g.jsxs)("div",{className:"row g-4",children:[(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"primary",isLight:!0,icon:"Public",children:"Size Default"})}),(0,g.jsx)(t.h_,{children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public",children:"Size sm"})}),(0,g.jsx)(t.h_,{size:"sm",children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"info",isLight:!0,icon:"Public",children:"Size md"})}),(0,g.jsx)(t.h_,{size:"md",children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"warning",isLight:!0,icon:"Public",children:"Size lg"})}),(0,g.jsx)(t.h_,{size:"lg",children:Z})]})})]})})]})}),(0,g.jsx)("div",{className:"col-12",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"AspectRatio",children:[(0,g.jsx)(l.ll,{children:"breakpoint"}),(0,g.jsx)(l.md,{children:"DropdownMenu"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdownmenu-props--breakpoint"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"breakpoint: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),"})}),(0,g.jsx)(l.eW,{children:(0,g.jsxs)("div",{className:"row g-4",children:[(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{isStatic:!0,children:(0,g.jsx)(d.Z,{color:"primary",isLight:!0,icon:"Public",children:"Left-aligned but right aligned when large screen"})}),(0,g.jsx)(t.h_,{breakpoint:"xxl",children:Z})]})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{isStatic:!0,children:(0,g.jsx)(d.Z,{color:"success",isLight:!0,icon:"Public",children:"Right-aligned but left aligned when large screen"})}),(0,g.jsx)(t.h_,{isAlignmentEnd:!0,breakpoint:"xxl",children:Z})]})})]})}),(0,g.jsxs)(l.eW,{children:[(0,g.jsx)(p.Z,{className:"mb-4",children:"This example is for xxl."}),(0,g.jsx)(p.Z,{children:"If you want to use responsive alignment, disable dynamic positioning by adding the isStatic attribute and use use the breakpoint props in the DropdownMenu."})]})]})}),(0,g.jsx)("div",{className:"col-md-4",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"DocumentScanner",iconColor:"danger",children:[(0,g.jsx)(l.ll,{children:"isHeader"}),(0,g.jsx)(l.md,{children:"DropdownItem"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdownmenu-sub-components-dropdownitem-props--is-header"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"isHeader: PropTypes.bool,"})}),(0,g.jsx)(l.eW,{children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"danger",isLight:!0,icon:"DocumentScanner",children:"Menu"})}),(0,g.jsx)(t.h_,{children:(0,g.jsx)(t.hP,{isHeader:!0,children:" This is a Header"})})]})})]})}),(0,g.jsx)("div",{className:"col-md-4",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"SafetyDivider",iconColor:"info",children:[(0,g.jsx)(l.ll,{children:"isDivider"}),(0,g.jsx)(l.md,{children:"DropdownItem"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdownmenu-sub-components-dropdownitem-props--is-divider"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"isDivider: PropTypes.bool,"})}),(0,g.jsx)(l.eW,{children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"info",isLight:!0,icon:"SafetyDivider",children:"Menu"})}),(0,g.jsxs)(t.h_,{children:[(0,g.jsx)(t.hP,{isHeader:!0,children:"The following is a divider"}),(0,g.jsx)(t.hP,{isDivider:!0})]})]})})]})}),(0,g.jsx)("div",{className:"col-md-4",children:(0,g.jsxs)(l.ZP,{stretch:!0,children:[(0,g.jsxs)(l.Ol,{children:[(0,g.jsxs)(l.oL,{icon:"FormatColorText",iconColor:"warning",children:[(0,g.jsx)(l.ll,{children:"isText"}),(0,g.jsx)(l.md,{children:"DropdownItem"})]}),(0,g.jsx)(l.T$,{children:(0,g.jsx)(m.Z,{to:"/story/components-dropdown-sub-components-dropdownmenu-sub-components-dropdownitem-props--is-text"})})]}),(0,g.jsx)(l.Ol,{children:(0,g.jsx)(j.Z,{children:"isText: PropTypes.bool,"})}),(0,g.jsx)(l.eW,{children:(0,g.jsxs)(t.ZP,{children:[(0,g.jsx)(t.Z_,{children:(0,g.jsx)(d.Z,{color:"warning",isLight:!0,icon:"FormatColorText",children:"Menu"})}),(0,g.jsx)(t.h_,{children:(0,g.jsx)(t.hP,{isText:!0,children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."})})]})})]})})]})})]})}}}]);
//# sourceMappingURL=2662.3cb28101.chunk.js.map