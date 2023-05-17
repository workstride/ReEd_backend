"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[5863],{37003:function(e,l,i){i(72791);var s=i(81694),n=i.n(s),c=i(50022),a=i(80184),d=function(e){var l=e.children,i=e.className,s=e.color;return(0,a.jsx)(c.ZP,{color:s,isLight:!0,shadow:"md",borderWidth:0,icon:"Info",className:n()("flex-nowrap","w-100","mb-0",i),children:l})};d.defaultProps={className:void 0,color:"warning"},l.Z=d},57e3:function(e,l,i){i(72791);var s=i(66867),n=i(50022),c=i(5443),a=i(80184),d=(0,s.QM)({prism:{padding:"0 !important",margin:"0 !important",background:"transparent !important",borderRadius:"0 !important","& > code":{color:"#2e3f96 !important",fontSize:"0.875rem !important"}}}),o=function(e){var l=e.children,i=e.isPrism,s=d();return(0,a.jsx)(n.ZP,{color:"info",isLight:!0,shadow:"md",borderWidth:0,icon:"CustomReact",className:"flex-nowrap w-100",children:i?(0,a.jsx)(c.Z,{code:l,language:"jsx",className:s.prism}):(0,a.jsx)("code",{children:l})})};o.defaultProps={isPrism:!1},l.Z=o},31024:function(e,l,i){var s=i(1413),n=i(45987),c=(i(72791),i(11592)),a=i(80184),d=["to"];l.Z=function(e){var l=e.to,i=(0,n.Z)(e,d);return(0,a.jsx)(c.Z,(0,s.Z)((0,s.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_STORYBOOK_URL).concat(l)},i),{},{children:"Storybook"}))}},45328:function(e,l,i){var s=i(1413),n=i(45987),c=(i(72791),i(80184)),a=["to","children"];l.Z=function(e){var l=e.to,i=e.children,d=(0,n.Z)(e,a);return(0,c.jsx)("a",(0,s.Z)((0,s.Z)({href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_STORYBOOK_URL).concat(l),target:"_blank",rel:"noreferrer"},d),{},{children:i}))}},5081:function(e,l,i){i.d(l,{g:function(){return r}});var s=i(72791),n=i(81694),c=i.n(n),a=i(11087),d=i(16843),o=i(63542),h=i(80184),r=function(e){var l=e.children,i=e.ariaLabel,n=e.className,o=e.tag,r=e.to,t=e.isActive,x=e.divider;return(0,h.jsxs)(d.Z,{tag:o,className:c()("breadcrumb-item",{active:t},n),"aria-current":t?"page":null,"aria-label":i||l,children:[x&&"string"!==typeof x&&(0,s.cloneElement)(x,{className:c()("breadcrumb-icon",x.props.className)}),t?l:(0,h.jsx)(a.OL,{to:r,"aria-label":i,children:l})]})};r.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var t=function(e){var l=e.children,i=e.list,n=e.tag,c=e.listTag,a=e.itemTag,o=e.ariaLabel,t=e.autoActive,x=e.isToHome,j=e.divider,u="string"!==j&&j;return(0,h.jsx)(d.Z,{tag:n,"aria-label":o,style:j?{"--bs-breadcrumb-divider":"string"===typeof j?"'".concat(j,"'"):"none"}:null,children:(0,h.jsxs)(d.Z,{tag:c,className:"breadcrumb",children:[x&&(0,h.jsx)(r,{to:"/",ariaLabel:"Home",children:x}),i?i.map((function(e,l){return(0,h.jsx)(r,{tag:e.tag||a,to:e.to,isActive:t&&i.length===l+1,divider:u,children:e.title},e.title)})):s.Children.map(l,(function(e,i){return(0,s.cloneElement)(e,{tag:e.props.tag||a,isActive:t&&l.length===i+1,divider:e.props.divider||u})}))]})})};t.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,h.jsx)(o.Z,{icon:"HolidayVillage"}),divider:(0,h.jsx)(o.Z,{icon:"ChevronRight"})},l.Z=t},91380:function(e,l,i){i.d(l,{N:function(){return x}});var s=i(1413),n=i(45987),c=i(72791),a=i(81694),d=i.n(a),o=i(81827),h=i(80184),r=["id","className","children","isInline","isValid","isTouched","invalidFeedback","validFeedback","isTooltipFeedback"],t=["id","className","name","type","label","value","checked","disabled","isInline","isFormCheckInput","isValid","isTouched","invalidFeedback","validFeedback","isValidMessage","isTooltipFeedback","onBlur","onChange","onFocus","onInput","onInvalid","onSelect","ariaLabel"],x=(0,c.forwardRef)((function(e,l){var i=e.id,a=e.className,t=e.children,x=e.isInline,j=e.isValid,u=e.isTouched,k=e.invalidFeedback,b=e.validFeedback,m=e.isTooltipFeedback,p=(0,n.Z)(e,r);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",(0,s.Z)((0,s.Z)({ref:l,id:i,className:d()({"is-invalid":!j&&u&&k,"is-valid":!j&&u&&!k},a)},p),{},{children:c.Children.map(t,(function(e){return(0,c.cloneElement)(e,{isInline:e.props.isInline||x,isValid:j,isTouched:u,invalidFeedback:k,validFeedback:b,isTooltipFeedback:m,isValidMessage:!1})}))})),(0,h.jsx)(o.Z,{isTouched:u,invalidFeedback:k,validFeedback:b,isTooltip:m})]})}));x.displayName="ChecksGroup",x.defaultProps={id:void 0,className:void 0,isInline:!1,isTouched:!1,isValid:!1,invalidFeedback:void 0,validFeedback:void 0,isTooltipFeedback:!1};var j=(0,c.forwardRef)((function(e,l){var i=e.id,c=e.className,a=e.name,r=e.type,x=e.label,j=e.value,u=e.checked,k=e.disabled,b=e.isInline,m=e.isFormCheckInput,p=e.isValid,C=e.isTouched,g=e.invalidFeedback,v=e.validFeedback,f=e.isValidMessage,Z=e.isTooltipFeedback,T=e.onBlur,y=e.onChange,w=e.onFocus,O=e.onInput,N=e.onInvalid,F=e.onSelect,I=e.ariaLabel,S=(0,n.Z)(e,t),P=(0,h.jsx)("input",(0,s.Z)({ref:l,className:d()("form-check-input",{"mt-0":m,"is-invalid":!p&&C&&g,"is-valid":!p&&C&&!g},c),name:null===a?i:a,type:"radio"===r?"radio":"checkbox",id:i,value:j,checked:"radio"===r?u===j:!!u,disabled:k,onBlur:T,onChange:y,onFocus:w,onInput:O,onInvalid:N,onSelect:F,"aria-label":I},S));return m?P:(0,h.jsxs)("div",{className:d()("form-check",{"form-switch":"switch"===r,"form-check-inline":b}),children:[P,x&&(0,h.jsx)("label",{className:"form-check-label",htmlFor:i,children:x}),f&&(0,h.jsx)(o.Z,{isTouched:C,invalidFeedback:g,validFeedback:v,isTooltip:Z})]})}));j.displayName="Checks",j.defaultProps={id:void 0,className:void 0,name:null,type:"checkbox",label:null,checked:!1,disabled:!1,isInline:!1,isFormCheckInput:!1,isTouched:!1,isValid:!1,invalidFeedback:void 0,validFeedback:void 0,isValidMessage:!0,isTooltipFeedback:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,onInvalid:void 0,onSelect:void 0,ariaLabel:void 0},l.Z=j},15863:function(e,l,i){i.r(l);i(72791);var s=i(26438),n=i(15224),c=i(5081),a=i(47930),d=i(38493),o=i(96517),h=i(91380),r=i(57e3),t=i(67827),x=i(12578),j=i(37003),u=i(29944),k=i(11592),b=i(45328),m=i(31024),p=i(7134),C=i(80184);l.default=function(){var e=(0,s.TA)({initialValues:{defaultCheck:!1,checkedCheck:!0},onSubmit:function(){}}),l=(0,s.TA)({initialValues:{flexRadioDefault:"first",flexRadioDisabled:"third"},onSubmit:function(){}}),i=(0,s.TA)({initialValues:{checkOne:!0,checkTwo:!1,checkThree:!1},onSubmit:function(){}}),g=(0,s.TA)({initialValues:{radios:"first"},onSubmit:function(){}}),v=(0,s.TA)({initialValues:{exampleLabelOne:!0,exampleLabelTwo:!1,exampleLabelThree:!0,exampleLabelFour:!1},onSubmit:function(){}}),f=(0,s.TA)({initialValues:{exampleInlineOne:!0,exampleInlineTwo:!1,exampleInlineThree:!1},onSubmit:function(){}});return(0,C.jsxs)(d.Z,{title:p.XZ.forms.subMenu.checksAndRadio.text,children:[(0,C.jsxs)(n.ZP,{children:[(0,C.jsx)(n.Vv,{children:(0,C.jsx)(c.Z,{list:[{title:"Forms",to:"/forms"},{title:"Checks & Radio",to:"/forms/checks-and-radio"}]})}),(0,C.jsx)(n.$o,{children:(0,C.jsxs)(u.ZP,{children:[(0,C.jsx)(u.Z_,{children:(0,C.jsx)(k.Z,{color:"storybook",icon:"CustomStorybook",isLight:!0,children:"Storybook"})}),(0,C.jsxs)(u.h_,{isAlignmentEnd:!0,children:[(0,C.jsx)(u.hP,{children:(0,C.jsx)(b.Z,{to:"/docs/forms-checks--checkbox",children:"Checkbox"})}),(0,C.jsx)(u.hP,{children:(0,C.jsx)(b.Z,{to:"/docs/forms-checks--radio",children:"Radio"})}),(0,C.jsx)(u.hP,{children:(0,C.jsx)(b.Z,{to:"/docs/forms-checks--switch",children:"Switch"})})]})]})})]}),(0,C.jsx)(a.Z,{children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-12",children:(0,C.jsxs)(o.ZP,{children:[(0,C.jsx)(o.Ol,{children:(0,C.jsx)(o.oL,{icon:"Assignment",children:(0,C.jsx)(o.ll,{tag:"h2",children:"Checks and radios"})})}),(0,C.jsx)(o.eW,{children:(0,C.jsx)("h3",{className:"text-muted",children:"Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component."})}),(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(o.oL,{icon:"Assignment",children:[(0,C.jsx)(o.ll,{children:"General Usage"}),(0,C.jsx)(o.md,{children:"Checks and ChecksGroup"})]})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsx)(o.TY,{children:"\n<Checks\n\tid={ String }\n\tname={ String }\n\tclassName={ String }\n\ttype={ String } // 'checkbox' || 'radio' || 'switch'\n\tlabel={ String }\n\tvalue={ String } // For only type is radio\n\tchecked={ Boolean } \n\tdisabled={ Boolean } \n\tisInline={ Boolean } \n\tisFormCheckInput={ Boolean } // For input group\n\tonBlur={ Function }\n\tonChange={ Function }\n\tonFocus={ Function }\n\tonInput={ Function }\n\tonInvalid={ Function }\n\tonSelect={ Function }\n \t{...props}>"})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsx)(o.TY,{children:"\n<ChecksGroup\n\tid={ String }\n\tclassName={ String }\n\tisInline={ Boolean }\n \t{...props}>\n \t<Checks {...props} />\n \t...\n</ChecksGroup>"})})]})})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"CheckBox",iconColor:"info",children:[(0,C.jsxs)(o.ll,{children:["type ",(0,C.jsx)("small",{children:"checkbox"})]}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--checkbox"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(r.Z,{children:["type: PropTypes.oneOf(['",(0,C.jsx)("b",{children:"checkbox"}),"', 'radio', 'switch']),"]})}),(0,C.jsxs)(o.eW,{children:[(0,C.jsx)(h.Z,{id:"flexCheckDefault",label:"Default checkbox",name:"defaultCheck",onChange:e.handleChange,checked:e.values.defaultCheck}),(0,C.jsx)(h.Z,{id:"flexCheckChecked",label:"Checked checkbox",name:"checkedCheck",onChange:e.handleChange,checked:e.values.checkedCheck})]})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"GppBad",iconColor:"info",children:[(0,C.jsxs)(o.ll,{children:["type",(0,C.jsx)("small",{children:'="checkbox"'})," & disabled"]}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--checkbox&args=disabled:true"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsx)(r.Z,{children:"disabled: PropTypes.bool,"})}),(0,C.jsxs)(o.eW,{children:[(0,C.jsx)(h.Z,{id:"flexCheckDisabled",label:"Disabled checkbox",name:"defaultCheck",onChange:e.handleChange,checked:e.values.defaultCheck,disabled:!0}),(0,C.jsx)(h.Z,{id:"flexCheckCheckedDisabled",label:"Disabled checked checkbox",name:"checkedCheck",onChange:e.handleChange,checked:e.values.checkedCheck,disabled:!0})]})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"RadioButtonChecked",iconColor:"success",children:[(0,C.jsxs)(o.ll,{children:["type ",(0,C.jsx)("small",{children:"radio"})]}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--radio"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(r.Z,{children:["type: PropTypes.oneOf(['checkbox', '",(0,C.jsx)("b",{children:"radio"}),"', 'switch']),"]})}),(0,C.jsxs)(o.eW,{children:[(0,C.jsx)(h.Z,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",label:"Default radio",value:"first",onChange:l.handleChange,checked:l.values.flexRadioDefault}),(0,C.jsx)(h.Z,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",label:"Default checked radio",value:"second",onChange:l.handleChange,checked:l.values.flexRadioDefault})]})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"GppBad",iconColor:"success",children:[(0,C.jsxs)(o.ll,{children:["type",(0,C.jsx)("small",{children:'="radio"'})," & disabled"]}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--radio&args=disabled:true"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsx)(r.Z,{children:"disabled: PropTypes.bool,"})}),(0,C.jsxs)(o.eW,{children:[(0,C.jsx)(h.Z,{type:"radio",name:"flexRadioDisabled",id:"flexRadioDefault1-2",label:"Default radio",value:"third",onChange:l.handleChange,checked:l.values.flexRadioDisabled,disabled:!0}),(0,C.jsx)(h.Z,{type:"radio",name:"flexRadioDisabled",id:"flexRadioDefault2-2",label:"Default checked radio",value:"fourth",onChange:l.handleChange,checked:l.values.flexRadioDisabled,disabled:!0})]})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"ToggleOn",iconColor:"warning",children:[(0,C.jsxs)(o.ll,{children:["type ",(0,C.jsx)("small",{children:"switch"})]}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--switch"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(r.Z,{children:["type: PropTypes.oneOf(['checkbox', 'radio', '",(0,C.jsx)("b",{children:"switch"}),"']),"]})}),(0,C.jsxs)(o.eW,{children:[(0,C.jsx)(h.Z,{type:"switch",id:"flexSwitchCheckDefault",label:"Default switch checkbox input",name:"defaultCheck",onChange:e.handleChange,checked:e.values.defaultCheck}),(0,C.jsx)(h.Z,{type:"switch",id:"flexSwitchCheckChecked",label:"Checked switch checkbox input",name:"checkedCheck",onChange:e.handleChange,checked:e.values.checkedCheck})]})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"GppBad",iconColor:"warning",children:[(0,C.jsxs)(o.ll,{children:["type",(0,C.jsx)("small",{children:'="switch"'})," & disabled"]}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--switch&args=disabled:true"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsx)(r.Z,{children:"disabled: PropTypes.bool,"})}),(0,C.jsxs)(o.eW,{children:[(0,C.jsx)(h.Z,{type:"switch",id:"flexSwitchCheckDisabled",label:"Disabled switch checkbox input",name:"defaultCheck",onChange:e.handleChange,checked:e.values.defaultCheck,disabled:!0}),(0,C.jsx)(h.Z,{type:"switch",id:"flexSwitchCheckCheckedDisabled",label:"Disabled checked switch checkbox input",name:"checkedCheck",onChange:e.handleChange,checked:e.values.checkedCheck,disabled:!0})]})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"Label",iconColor:"warning",children:[(0,C.jsx)(o.ll,{children:"label"}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks--checkbox"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsx)(r.Z,{children:"label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),"})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsxs)(t.Z,{className:"col-lg-6",children:[(0,C.jsx)(x.Z,{children:"With label"}),(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleLabelOne",label:(0,C.jsxs)(C.Fragment,{children:["Initial ",(0,C.jsx)("b",{children:"select"})]}),onChange:v.handleChange,checked:v.values.exampleLabelOne}),(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleLabelTwo",label:"Initial unselect",onChange:v.handleChange,checked:v.values.exampleLabelTwo})]}),(0,C.jsxs)(t.Z,{className:"col-lg-6",children:[(0,C.jsx)(x.Z,{children:"Without label"}),(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleLabelThree",onChange:v.handleChange,checked:v.values.exampleLabelThree}),(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleLabelFour",onChange:v.handleChange,checked:v.values.exampleLabelFour})]})]})})]})}),(0,C.jsx)("div",{className:"col-lg-6",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"FormatAlignJustify",iconColor:"info",children:[(0,C.jsx)(o.ll,{children:"isInline"}),(0,C.jsx)(o.md,{children:"Checks"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks-sup-component-checksgroup--default&args=children[2].isInline:true"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsx)(r.Z,{children:"isInline: PropTypes.bool,"})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)(t.Z,{children:[(0,C.jsx)(x.Z,{children:"Set as only the first two inline"}),(0,C.jsxs)(h.N,{children:[(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleInlineOne",label:"Select one (isInline)",onChange:f.handleChange,checked:f.values.exampleInlineOne,isInline:!0}),(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleInlineTwo",label:"Select two (isInline)",onChange:f.handleChange,checked:f.values.exampleInlineTwo,isInline:!0}),(0,C.jsx)(h.Z,{type:"checkbox",id:"exampleInlineThree",label:"Select three",onChange:f.handleChange,checked:f.values.exampleInlineThree})]})]})}),(0,C.jsx)(o.iR,{children:(0,C.jsxs)(j.Z,{children:["This value overwrites the value of the"," ",(0,C.jsx)("code",{children:"<ChecksGroup>"}),"."]})})]})}),(0,C.jsx)("div",{className:"col-12",children:(0,C.jsxs)(o.ZP,{stretch:!0,children:[(0,C.jsxs)(o.Ol,{children:[(0,C.jsxs)(o.oL,{icon:"FormatAlignJustify",iconColor:"info",children:[(0,C.jsx)(o.ll,{children:"isInline"}),(0,C.jsx)(o.md,{children:"ChecksGroup"})]}),(0,C.jsx)(o.T$,{children:(0,C.jsx)(m.Z,{to:"/story/forms-checks-sup-component-checksgroup--default&args=isInline:true"})})]}),(0,C.jsx)(o.Ol,{children:(0,C.jsx)(r.Z,{children:"isInline: PropTypes.bool,"})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-lg-4",children:(0,C.jsxs)(o.ZP,{stretch:!0,className:"mb-0",children:[(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(o.oL,{icon:"CheckBox",iconColor:"info",children:[(0,C.jsxs)(o.ll,{children:["type ",(0,C.jsx)("small",{children:"checkbox"})]}),(0,C.jsx)(o.md,{children:"Checks"})]})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)(t.Z,{children:[(0,C.jsxs)(x.Z,{children:["Group checkboxes or radios on the same horizontal row by adding"," ",(0,C.jsx)("code",{children:"isInline"})]}),(0,C.jsxs)(h.N,{isInline:!0,children:[(0,C.jsx)(h.Z,{type:"checkbox",id:"inlineCheckOne",label:"One",name:"checkOne",onChange:i.handleChange,checked:i.values.checkOne}),(0,C.jsx)(h.Z,{type:"checkbox",id:"inlineCheckTwo",label:"Two",name:"checkTwo",onChange:i.handleChange,checked:i.values.checkTwo}),(0,C.jsx)(h.Z,{type:"checkbox",id:"inlineCheckThree",label:(0,C.jsxs)(C.Fragment,{children:["Three ",(0,C.jsx)("sup",{children:"(disabled)"})]}),name:"checkThree",onChange:i.handleChange,checked:i.values.checkThree,disabled:!0})]})]})})]})}),(0,C.jsx)("div",{className:"col-lg-4",children:(0,C.jsxs)(o.ZP,{stretch:!0,className:"mb-0",children:[(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(o.oL,{icon:"RadioButtonChecked",iconColor:"success",children:[(0,C.jsxs)(o.ll,{children:["type ",(0,C.jsx)("small",{children:"radio"})]}),(0,C.jsx)(o.md,{children:"Checks"})]})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)(t.Z,{children:[(0,C.jsxs)(x.Z,{children:["Group checkboxes or radios on the same horizontal row by adding"," ",(0,C.jsx)("code",{children:"isInline"})]}),(0,C.jsxs)(h.N,{isInline:!0,children:[(0,C.jsx)(h.Z,{type:"radio",id:"inlineRadioOne",label:"One",name:"radios",value:"first",onChange:g.handleChange,checked:g.values.radios}),(0,C.jsx)(h.Z,{type:"radio",id:"inlineRadioTwo",label:"Two",name:"radios",value:"second",onChange:g.handleChange,checked:g.values.radios}),(0,C.jsx)(h.Z,{type:"radio",id:"inlineRadioThree",label:(0,C.jsxs)(C.Fragment,{children:["Three ",(0,C.jsx)("sup",{children:"(disabled)"})]}),name:"radios",value:"third",onChange:g.handleChange,checked:g.values.radios,disabled:!0})]})]})})]})}),(0,C.jsx)("div",{className:"col-lg-4",children:(0,C.jsxs)(o.ZP,{stretch:!0,className:"mb-0",children:[(0,C.jsx)(o.Ol,{children:(0,C.jsxs)(o.oL,{icon:"ToggleOn",iconColor:"warning",children:[(0,C.jsxs)(o.ll,{children:["type ",(0,C.jsx)("small",{children:"radio"})]}),(0,C.jsx)(o.md,{children:"Checks"})]})}),(0,C.jsx)(o.eW,{children:(0,C.jsxs)(t.Z,{children:[(0,C.jsxs)(x.Z,{children:["Group checkboxes or radios on the same horizontal row by adding"," ",(0,C.jsx)("code",{children:"isInline"})]}),(0,C.jsxs)(h.N,{isInline:!0,children:[(0,C.jsx)(h.Z,{type:"switch",id:"inlineCheckOne",label:"One",name:"checkOne",onChange:i.handleChange,checked:i.values.checkOne}),(0,C.jsx)(h.Z,{type:"switch",id:"inlineCheckTwo",label:"Two",name:"checkTwo",onChange:i.handleChange,checked:i.values.checkTwo}),(0,C.jsx)(h.Z,{type:"switch",id:"inlineCheckThree",label:(0,C.jsxs)(C.Fragment,{children:["Three ",(0,C.jsx)("sup",{children:"(disabled)"})]}),name:"checkThree",onChange:i.handleChange,checked:i.values.checkThree,disabled:!0})]})]})})]})})]})})]})})]})})]})}}}]);
//# sourceMappingURL=5863.f7ffeddc.chunk.js.map