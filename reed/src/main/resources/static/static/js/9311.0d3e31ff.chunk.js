(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[9311],{31024:function(t,e,n){"use strict";var s=n(1413),i=n(45987),r=(n(72791),n(11592)),l=n(80184),o=["to"];e.Z=function(t){var e=t.to,n=(0,i.Z)(t,o);return(0,l.jsx)(r.Z,(0,s.Z)((0,s.Z)({color:"storybook",icon:"CustomStorybook",tag:"a",target:"_blank",isLight:!0,href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_STORYBOOK_URL).concat(e)},n),{},{children:"Storybook"}))}},5081:function(t,e,n){"use strict";n.d(e,{g:function(){return d}});var s=n(72791),i=n(81694),r=n.n(i),l=n(11087),o=n(16843),a=n(63542),c=n(80184),d=function(t){var e=t.children,n=t.ariaLabel,i=t.className,a=t.tag,d=t.to,u=t.isActive,p=t.divider;return(0,c.jsxs)(o.Z,{tag:a,className:r()("breadcrumb-item",{active:u},i),"aria-current":u?"page":null,"aria-label":n||e,children:[p&&"string"!==typeof p&&(0,s.cloneElement)(p,{className:r()("breadcrumb-icon",p.props.className)}),u?e:(0,c.jsx)(l.OL,{to:d,"aria-label":n,children:e})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var u=function(t){var e=t.children,n=t.list,i=t.tag,r=t.listTag,l=t.itemTag,a=t.ariaLabel,u=t.autoActive,p=t.isToHome,h=t.divider,f="string"!==h&&h;return(0,c.jsx)(o.Z,{tag:i,"aria-label":a,style:h?{"--bs-breadcrumb-divider":"string"===typeof h?"'".concat(h,"'"):"none"}:null,children:(0,c.jsxs)(o.Z,{tag:r,className:"breadcrumb",children:[p&&(0,c.jsx)(d,{to:"/",ariaLabel:"Home",children:p}),n?n.map((function(t,e){return(0,c.jsx)(d,{tag:t.tag||l,to:t.to,isActive:u&&n.length===e+1,divider:f,children:t.title},t.title)})):s.Children.map(e,(function(t,n){return(0,s.cloneElement)(t,{tag:t.props.tag||l,isActive:u&&e.length===n+1,divider:t.props.divider||f})}))]})})};u.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(a.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(a.Z,{icon:"ChevronRight"})},e.Z=u},38352:function(t,e,n){"use strict";var s=n(1413),i=n(29439),r=n(45987),l=n(72791),o=n(53746),a=n(4607),c=n(80184),d=["tag","items","children","offset","setActiveId"],u=function(t){var e=t.tag,n=t.items,u=t.children,p=t.offset,h=t.setActiveId,f=(0,r.Z)(t,d),m=(0,l.useState)(null),v=(0,i.Z)(m,2),g=v[0],x=v[1];(0,l.useEffect)((function(){return h&&h(g),function(){}}),[g]);var y=(0,c.jsx)(o.Z,(0,s.Z)((0,s.Z)({items:n,offset:p,currentClassName:"active",componentTag:e,onUpdate:function(t){x(null===t||void 0===t?void 0:t.attributes.id.value)}},f),{},{children:u}));return u?y:(0,c.jsx)(a.Z,{children:y})};u.defaultProps={children:null,offset:void 0,tag:"span",setActiveId:void 0},e.Z=u},39311:function(t,e,n){"use strict";n.r(e);var s=n(29439),i=n(72791),r=n(38493),l=n(7134),o=n(15224),a=n(5081),c=n(31024),d=n(47930),u=n(11592),p=n(96517),h=n(38352),f=n(45929),m=n(90884),v=n(3755),g=n(36963),x=n(80184);e.default=function(){var t=(0,i.useState)(null),e=(0,s.Z)(t,2),n=e[0],y=e[1];return(0,x.jsxs)(r.Z,{title:l.XZ.components.subMenu.scrollspy.text,children:[(0,x.jsxs)(o.ZP,{children:[(0,x.jsxs)(o.Vv,{children:[(0,x.jsx)(a.Z,{list:[{title:l.XZ.components.text,to:"/".concat(l.XZ.components.path)},{title:l.XZ.components.subMenu.scrollspy.text,to:"/".concat(l.XZ.components.subMenu.scrollspy.path)}]}),(0,x.jsx)(o.Ar,{}),(0,x.jsx)(h.Z,{items:["general-usage","second","third"],setActiveId:y,offset:-500}),(0,x.jsx)(u.Z,{tag:"a",to:"#general-usage",color:"primary",isLight:!0,isActive:"general-usage"===n,children:"General Usage"}),(0,x.jsx)(u.Z,{tag:"a",to:"#second",color:"primary",isLight:!0,isActive:"second"===n,children:"Second"}),(0,x.jsx)(u.Z,{tag:"a",to:"#third",color:"primary",isLight:!0,isActive:"third"===n,children:"Third"})]}),(0,x.jsx)(o.$o,{children:(0,x.jsx)(c.Z,{to:"/docs/components-scrollspynav--default"})})]}),(0,x.jsx)(d.Z,{children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(p.ZP,{id:"general-usage",className:"scroll-margin",children:[(0,x.jsx)(p.Ol,{children:(0,x.jsx)(p.oL,{icon:"Assignment",children:(0,x.jsx)(p.ll,{children:"General Usage"})})}),(0,x.jsx)(p.eW,{children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-xl-6",children:[(0,x.jsx)("h4",{children:"1. Way (with children)"}),(0,x.jsx)(p.TY,{children:"\n<ScrollspyNav\n\ttag={ String } // Example: 'div'\n\titems={ Array } // Example: ['first', 'second', 'third']\n\tsetActiveId={ Function } // NOT REQUIRED\n\toffset={ Number } // -500\n\t{...props}>\n\t<Button\n\t\ttag='a' // * Required\n\t\tto={ String } // Example: #first\n\t\t{...props}>\n\t\t... {// Button text}\n\t</Button>\n\t...\n</ScrollspyNav>\n...\n<Component\n\tid={ String} // Example: first\n\t{...props}>\n\t...\n</Component>\n<div\n\tid={ String} // Example: second\n\t>\n\t...\n</div>\n..."})]}),(0,x.jsxs)("div",{className:"col-xl-6",children:[(0,x.jsx)("h4",{children:"2. Way (with state)"}),(0,x.jsx)(p.TY,{className:"mb-4",children:"\nconst [state, setState] = useState(null);"}),(0,x.jsx)(p.TY,{children:"\n<ScrollspyNav\n\titems={ Array } // Example: ['first', 'second', 'third']\n\tsetActiveId={ Function } // Example: setState\n\toffset={ Number } // -500\n/>\n<Button\n\ttag='a'\n\tto={ String } // Example: #first\n\tisActive={ Boolean } // Example: state === 'first'\n\t{...props}>\n\t... {// Button text}\n</Button>\n<HashLink\n\tto={ String } // Example: #second\n\tclassName={ String } // Example: state === 'second' && 'active-item'\n\tstyle={ Object } // Example: {color: state === 'second' ? 'green' : 'red'}\n\t{...props}>\n</HashLink>\n...\n<Component\n\tid={ String} // Example: first\n\t{...props}>\n\t...\n</Component>\n<div\n\tid={ String} // Example: second\n\t>\n\t...\n</div>\n..."})]})]})})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(p.ZP,{id:"second",className:"scroll-margin",children:[(0,x.jsx)(p.Ol,{children:(0,x.jsx)(p.oL,{children:(0,x.jsx)(p.ll,{children:"Second"})})}),(0,x.jsx)(p.eW,{children:(0,x.jsx)("div",{className:"row d-flex align-items-center",children:(0,x.jsx)("div",{className:"col-12 d-flex align-items-baseline justify-content-center",children:(0,x.jsx)("img",{srcSet:f,src:m,alt:"Humans",style:{height:"50vh"}})})})})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(p.ZP,{id:"third",className:"scroll-margin",children:[(0,x.jsx)(p.Ol,{children:(0,x.jsx)(p.oL,{children:(0,x.jsx)(p.ll,{children:"Third"})})}),(0,x.jsx)(p.eW,{children:(0,x.jsx)("div",{className:"row d-flex align-items-center",children:(0,x.jsx)("div",{className:"col-12 d-flex align-items-baseline justify-content-center",children:(0,x.jsx)("img",{srcSet:v,src:g,alt:"Humans",style:{height:"50vh"}})})})})]})})]})})]})}},53746:function(t,e,n){"use strict";var s=n(64836);e.Z=void 0;var i=s(n(10434)),r=s(n(38416)),l=s(n(861)),o=s(n(56690)),a=s(n(94993)),c=s(n(73808)),d=s(n(66115)),u=s(n(89728)),p=s(n(61655)),h=s(n(52007)),f=s(n(72791)),m=s(n(81694)),v=s(n(51863));var g=function(t){function e(t){var n;return(0,o.default)(this,e),(n=(0,a.default)(this,(0,c.default)(e).call(this,t))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,d.default)(n)),n}return(0,p.default)(e,t),(0,u.default)(e,null,[{key:"propTypes",get:function(){return{items:h.default.arrayOf(h.default.string).isRequired,currentClassName:h.default.string.isRequired,scrolledPastClassName:h.default.string,style:h.default.object,componentTag:h.default.oneOfType([h.default.string,h.default.elementType]),offset:h.default.number,rootEl:h.default.string,onUpdate:h.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(e,[{key:"_initSpyTarget",value:function(t){return t.map((function(t){return document.getElementById(t)}))}},{key:"_fillArray",value:function(t,e){for(var n=[],s=0,i=t.length;s<i;s++)n[s]=e;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var t=document,e=this.props.rootEl;return{scrollTop:e?t.querySelector(e).scrollTop:t.documentElement.scrollTop||t.body.parentNode.scrollTop||t.body.scrollTop,scrollHeight:e?t.querySelector(e).scrollHeight:t.documentElement.scrollHeight||t.body.parentNode.scrollHeight||t.body.scrollHeight}}},{key:"_getElemsViewState",value:function(t){for(var e=[],n=[],s=[],i=t||this.state.targetItems,r=!1,o=0,a=i.length;o<a;o++){var c=i[o],d=!r&&this._isInView(c);d?(r=!0,e.push(c)):n.push(c);var u=o===a-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!d&&u&&p&&(n.pop(),n.push.apply(n,(0,l.default)(e)),e=[c],s=this._fillArray(s,!1),d=!0),s.push(d)}return{inView:e,outView:n,viewStatusList:s,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(s)}}},{key:"_isInView",value:function(t){if(!t)return!1;var e,n=this.props,s=n.rootEl,i=n.offset;s&&(e=document.querySelector(s).getBoundingClientRect());var r=t.getBoundingClientRect(),l=s?e.height:window.innerHeight,o=this._getScrollDimension().scrollTop,a=o+l,c=s?r.top+o-e.top+i:r.top+o+i,d=c+t.offsetHeight;return c<a&&d>o}},{key:"_isAtBottom",value:function(){var t=this.props.rootEl,e=this._getScrollDimension(),n=e.scrollTop,s=e.scrollHeight;return n+(t?document.querySelector(t).getBoundingClientRect().height:window.innerHeight)>=s}},{key:"_getScrolledPast",value:function(t){if(!t.some((function(t){return t})))return t;var e=!1;return t.map((function(t){return t&&!e?(e=!0,!1):!e}))}},{key:"_spy",value:function(t){var e=this,n=this._getElemsViewState(t),s=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){e._update(s)}))}},{key:"_update",value:function(t){var e,n;(e=this.state.inViewState,n=t,e.length===n.length&&e.every((function(t,e){return t===n[e]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var t=this._initSpyTarget(this.props.items);this.setState({targetItems:t}),this._spy(t)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var t=this,e=this.props.componentTag,n=this.props,s=n.children,l=n.className,o=n.scrolledPastClassName,a=n.style,c=0,d=f.default.Children.map(s,(function(e,n){var s;if(!e)return null;var l=e.type,a=o&&t.state.isScrolledPast[n],d=(0,m.default)((s={},(0,r.default)(s,"".concat(e.props.className),e.props.className),(0,r.default)(s,"".concat(t.props.currentClassName),t.state.inViewState[n]),(0,r.default)(s,"".concat(t.props.scrolledPastClassName),a),s));return f.default.createElement(l,(0,i.default)({},e.props,{className:d,key:c++}),e.props.children)})),u=(0,m.default)((0,r.default)({},"".concat(l),l));return f.default.createElement(e,{className:u,style:a},d)}}]),e}(f.default.Component);e.Z=g},51863:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){var e,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var i=+new Date;!!e&&i<e+s?(clearTimeout(n),n=setTimeout((function(){e=i,t()}),s)):(e=i,t())}};e.default=n},45929:function(t,e,n){"use strict";t.exports=n.p+"static/media/scene1.7010cee1d1c6de14dcd2.webp"},3755:function(t,e,n){"use strict";t.exports=n.p+"static/media/scene2.03ec3d1aa25076f781ed.webp"},90884:function(t,e,n){"use strict";t.exports=n.p+"static/media/scene1.edf253f443b39934cbcb.png"},36963:function(t,e,n){"use strict";t.exports=n.p+"static/media/scene2.0ff0cc865eb628e11d66.png"},10434:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=9311.0d3e31ff.chunk.js.map