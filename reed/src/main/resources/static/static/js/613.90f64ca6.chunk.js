(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[613],{5081:function(e,s,l){"use strict";l.d(s,{g:function(){return d}});var i=l(72791),c=l(81694),a=l.n(c),t=l(11087),n=l(16843),r=l(63542),o=l(80184),d=function(e){var s=e.children,l=e.ariaLabel,c=e.className,r=e.tag,d=e.to,m=e.isActive,h=e.divider;return(0,o.jsxs)(n.Z,{tag:r,className:a()("breadcrumb-item",{active:m},c),"aria-current":m?"page":null,"aria-label":l||s,children:[h&&"string"!==typeof h&&(0,i.cloneElement)(h,{className:a()("breadcrumb-icon",h.props.className)}),m?s:(0,o.jsx)(t.OL,{to:d,"aria-label":l,children:s})]})};d.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var m=function(e){var s=e.children,l=e.list,c=e.tag,a=e.listTag,t=e.itemTag,r=e.ariaLabel,m=e.autoActive,h=e.isToHome,u=e.divider,x="string"!==u&&u;return(0,o.jsx)(n.Z,{tag:c,"aria-label":r,style:u?{"--bs-breadcrumb-divider":"string"===typeof u?"'".concat(u,"'"):"none"}:null,children:(0,o.jsxs)(n.Z,{tag:a,className:"breadcrumb",children:[h&&(0,o.jsx)(d,{to:"/",ariaLabel:"Home",children:h}),l?l.map((function(e,s){return(0,o.jsx)(d,{tag:e.tag||t,to:e.to,isActive:m&&l.length===s+1,divider:x,children:e.title},e.title)})):i.Children.map(s,(function(e,l){return(0,i.cloneElement)(e,{tag:e.props.tag||t,isActive:m&&s.length===l+1,divider:e.props.divider||x})}))]})})};m.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,o.jsx)(r.Z,{icon:"HolidayVillage"}),divider:(0,o.jsx)(r.Z,{icon:"ChevronRight"})},s.Z=m},38352:function(e,s,l){"use strict";var i=l(1413),c=l(29439),a=l(45987),t=l(72791),n=l(53746),r=l(4607),o=l(80184),d=["tag","items","children","offset","setActiveId"],m=function(e){var s=e.tag,l=e.items,m=e.children,h=e.offset,u=e.setActiveId,x=(0,a.Z)(e,d),p=(0,t.useState)(null),j=(0,c.Z)(p,2),v=j[0],f=j[1];(0,t.useEffect)((function(){return u&&u(v),function(){}}),[v]);var N=(0,o.jsx)(n.Z,(0,i.Z)((0,i.Z)({items:l,offset:h,currentClassName:"active",componentTag:s,onUpdate:function(e){f(null===e||void 0===e?void 0:e.attributes.id.value)}},x),{},{children:m}));return m?N:(0,o.jsx)(r.Z,{children:N})};m.defaultProps={children:null,offset:void 0,tag:"span",setActiveId:void 0},s.Z=m},70613:function(e,s,l){"use strict";l.r(s);var i=l(29439),c=l(72791),a=l(81694),t=l.n(a),n=l(38493),r=l(15224),o=l(47930),d=l(7134),m=l(96517),h=l(63542),u=l(11592),x=l(56424),p=l(5081),j=l(38352),v=l(80184);s.default=function(){var e=(0,x.Z)().darkModeStatus,s=(0,c.useState)(null),l=(0,i.Z)(s,2),a=l[0],f=l[1];return(0,v.jsxs)(n.Z,{title:d.j5.pricingTable.text,children:[(0,v.jsx)(r.ZP,{children:(0,v.jsxs)(r.Vv,{children:[(0,v.jsx)(p.Z,{list:[{title:d.j5.pricingTable.text,to:"/".concat(d.j5.pricingTable.path)}]}),(0,v.jsx)(r.Ar,{}),(0,v.jsx)(j.Z,{items:["first","second","third"],setActiveId:f,offset:-500}),(0,v.jsx)(u.Z,{tag:"a",to:"#first",color:"primary",isLight:!0,isActive:"first"===a,children:"Design 1"}),(0,v.jsx)(u.Z,{tag:"a",to:"#second",color:"primary",isLight:!0,isActive:"second"===a,children:"Design 2"}),(0,v.jsx)(u.Z,{tag:"a",to:"#third",color:"primary",isLight:!0,isActive:"third"===a,children:"Design 3"})]})}),(0,v.jsxs)(o.Z,{children:[(0,v.jsxs)("div",{id:"first",className:"row scroll-margin",children:[(0,v.jsx)("div",{className:"col-12 mb-3",children:(0,v.jsx)("div",{className:"display-4 fw-bold py-3",children:"Design 1"})}),(0,v.jsx)("div",{className:"col-md-3",children:(0,v.jsx)(m.ZP,{stretch:!0,className:"bg-transparent",shadow:"none",children:(0,v.jsx)(m.eW,{children:(0,v.jsx)("div",{className:"h-100 d-flex align-items-center justify-content-center",children:(0,v.jsxs)("div",{className:"row text-center",children:[(0,v.jsx)("div",{className:"col-12 text-uppercase fw-light",children:"Per Month"}),(0,v.jsx)("div",{className:"col-12 text-uppercase h2 fw-bold mb-2",children:"Select Your Perfect Plan"}),(0,v.jsx)("div",{className:"col-12 mb-2",children:"Vivamus ut magna pharetra, ultricies nunc eu, dignissim lorem. Proin et est nec ante ultricies dignissim sit amet eget libero."}),(0,v.jsx)(h.Z,{icon:"Verified",size:"5x",color:"info"})]})})})})}),(0,v.jsx)("div",{className:"col-md-3",children:(0,v.jsx)(m.ZP,{children:(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row pt-5 g-4 text-center",children:[(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(h.Z,{icon:"CustomRocketLaunch",size:"7x",color:"info"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("h2",{children:"Startup Company"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"219",(0,v.jsx)("span",{className:"display-6",children:"/mo"})]})}),(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Exclusive Workspace"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Internet Connection"]}),(0,v.jsxs)("div",{className:"lead text-muted",children:[(0,v.jsx)(h.Z,{icon:"Close",color:"danger"})," Meeting Room"]}),(0,v.jsxs)("div",{className:"lead text-muted",children:[(0,v.jsx)(h.Z,{icon:"Close",color:"danger"})," Small Rest Room"]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"info",isLight:!0,className:"w-100 py-3 text-uppercase",size:"lg",children:"Select Plan"})})]})})})}),(0,v.jsx)("div",{className:"col-md-3",children:(0,v.jsx)(m.ZP,{children:(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row pt-5 g-4 text-center",children:[(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(h.Z,{icon:"Maps Home Work",size:"7x",color:"success"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("h2",{children:"Mid-Size Company"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"339",(0,v.jsx)("span",{className:"display-6",children:"/mo"})]})}),(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Exclusive Workspace"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Internet Connection"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Five Meeting Room"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Small Rest Room"]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"success",className:"w-100 py-3 text-uppercase",size:"lg",children:"Select Plan"})})]})})})}),(0,v.jsx)("div",{className:"col-md-3",children:(0,v.jsx)(m.ZP,{children:(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row pt-5 g-4 text-center",children:[(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(h.Z,{icon:"CustomFactory",size:"7x",color:"info"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("h2",{children:"Large Company"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"339",(0,v.jsx)("span",{className:"display-6",children:"/mo"})]})}),(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Exclusive Workspace"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Internet Connection"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Five Meeting Room"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Large Rest Room"]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"info",isLight:!0,className:"w-100 py-3 text-uppercase",size:"lg",children:"Select Plan"})})]})})})})]}),(0,v.jsxs)("div",{id:"second",className:"row scroll-margin",children:[(0,v.jsx)("div",{className:"col-12 mb-3",children:(0,v.jsx)("div",{className:"display-4 fw-bold py-3",children:"Design 2"})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsx)(m.ZP,{stretch:!0,children:(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row pt-5 g-4 align-items-center",children:[(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsx)(h.Z,{icon:"CustomRocketLaunch",size:"5x",color:"warning"})}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)("h2",{children:"Startup Company"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"219",(0,v.jsx)("span",{className:"display-6",children:"/mo"})]})}),(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Exclusive Workspace"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Internet Connection"]}),(0,v.jsxs)("div",{className:"lead text-muted",children:[(0,v.jsx)(h.Z,{icon:"Close",color:"danger"})," Meeting Room"]}),(0,v.jsxs)("div",{className:"lead text-muted",children:[(0,v.jsx)(h.Z,{icon:"Close",color:"danger"})," Small Rest Room"]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"warning",isLight:!0,className:"w-100 py-3 text-uppercase",size:"lg",children:"Select Plan"})})]})})})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsx)(m.ZP,{stretch:!0,borderColor:"primary",borderSize:3,shadow:"lg",children:(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row pt-5 g-4 align-items-center",children:[(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsx)(h.Z,{icon:"Maps Home Work",size:"5x",color:"primary"})}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)("h2",{children:"Mid-Size Company"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"339",(0,v.jsx)("span",{className:"display-6",children:"/mo"})]})}),(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Exclusive Workspace"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Internet Connection"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Five Meeting Room"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Small Rest Room"]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"primary",className:"w-100 py-3 text-uppercase",size:"lg",children:"Select Plan"})})]})})})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsx)(m.ZP,{stretch:!0,children:(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row pt-5 g-4 align-items-center",children:[(0,v.jsx)("div",{className:"col-auto",children:(0,v.jsx)(h.Z,{icon:"CustomFactory",size:"5x",color:"info"})}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)("h2",{children:"Large Company"})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"339",(0,v.jsx)("span",{className:"display-6",children:"/mo"})]})}),(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Exclusive Workspace"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Internet Connection"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Five Meeting Room"]}),(0,v.jsxs)("div",{className:"lead",children:[(0,v.jsx)(h.Z,{icon:"Done Outline",color:"success"})," Large Rest Room"]})]}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"info",isLight:!0,className:"w-100 py-3 text-uppercase",size:"lg",children:"Select Plan"})})]})})})})]}),(0,v.jsxs)("div",{id:"third",className:"row scroll-margin",children:[(0,v.jsx)("div",{className:"col-12 my-3",children:(0,v.jsx)("div",{className:"display-4 fw-bold py-3",children:"Design 3"})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsxs)(m.ZP,{children:[(0,v.jsx)(m.Ol,{borderSize:1,children:(0,v.jsxs)("div",{className:"col text-center py-4",children:[(0,v.jsx)("h2",{className:"fw-bold display-5",children:"Personal"}),(0,v.jsx)("div",{className:"h5 fw-light",children:"Get the hack started."})]})}),(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row g-5 pt-4 text-center",children:[(0,v.jsxs)("div",{className:"col-auto mx-auto",children:[(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"135"]}),(0,v.jsx)("div",{className:"text-end mt-n4",children:(0,v.jsx)("span",{className:"fw-bold text-muted text-uppercase",children:"Per Month"})})]}),(0,v.jsx)("div",{className:"col-8 mx-auto",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"primary",isLight:!0,size:"lg",className:"w-100",children:"Get Started"})})]})})]})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsxs)(m.ZP,{className:t()({"bg-lo25-primary":e,"bg-l25-primary":!e}),children:[(0,v.jsx)(m.Ol,{borderSize:1,borderColor:"primary",className:"bg-transparent",children:(0,v.jsxs)("div",{className:"col text-center py-4 position-relative",children:[(0,v.jsx)("h2",{className:"fw-bold display-5",children:"Business"}),(0,v.jsx)("div",{className:"h5 fw-light",children:"Get the hack started."}),(0,v.jsx)("span",{className:"position-absolute top-0 end-0 border border-primary border-2 text-primary fw-bold px-2 py-1 rounded-1 lead text-uppercase",children:"propose"})]})}),(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row g-5 pt-4 text-center",children:[(0,v.jsxs)("div",{className:"col-auto mx-auto",children:[(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"175"]}),(0,v.jsx)("div",{className:"text-end mt-n4",children:(0,v.jsx)("span",{className:"fw-bold text-muted text-uppercase",children:"Per Month"})})]}),(0,v.jsx)("div",{className:"col-8 mx-auto",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"primary",size:"lg",className:"w-100",children:"Get Started"})})]})})]})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsxs)(m.ZP,{children:[(0,v.jsx)(m.Ol,{borderSize:1,children:(0,v.jsxs)("div",{className:"col text-center py-4",children:[(0,v.jsx)("h2",{className:"fw-bold display-5",children:"Expert"}),(0,v.jsx)("div",{className:"h5 fw-light",children:"Get the hack started."})]})}),(0,v.jsx)(m.eW,{children:(0,v.jsxs)("div",{className:"row g-5 pt-4 text-center",children:[(0,v.jsxs)("div",{className:"col-auto mx-auto",children:[(0,v.jsxs)("h3",{className:"display-1 fw-bold",children:[(0,v.jsx)("span",{className:"display-4 fw-bold",children:"$"}),"380"]}),(0,v.jsx)("div",{className:"text-end mt-n4",children:(0,v.jsx)("span",{className:"fw-bold text-muted text-uppercase",children:"Per Month"})})]}),(0,v.jsx)("div",{className:"col-8 mx-auto",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)(u.Z,{color:"primary",isLight:!0,size:"lg",className:"w-100",children:"Get Started"})})]})})]})})]})]})]})}},53746:function(e,s,l){"use strict";var i=l(64836);s.Z=void 0;var c=i(l(10434)),a=i(l(38416)),t=i(l(861)),n=i(l(56690)),r=i(l(94993)),o=i(l(73808)),d=i(l(66115)),m=i(l(89728)),h=i(l(61655)),u=i(l(52007)),x=i(l(72791)),p=i(l(81694)),j=i(l(51863));var v=function(e){function s(e){var l;return(0,n.default)(this,s),(l=(0,r.default)(this,(0,o.default)(s).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},l._handleSpy=l._handleSpy.bind((0,d.default)(l)),l}return(0,h.default)(s,e),(0,m.default)(s,null,[{key:"propTypes",get:function(){return{items:u.default.arrayOf(u.default.string).isRequired,currentClassName:u.default.string.isRequired,scrolledPastClassName:u.default.string,style:u.default.object,componentTag:u.default.oneOfType([u.default.string,u.default.elementType]),offset:u.default.number,rootEl:u.default.string,onUpdate:u.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,m.default)(s,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,s){for(var l=[],i=0,c=e.length;i<c;i++)l[i]=s;return l}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,s=this.props.rootEl;return{scrollTop:s?e.querySelector(s).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:s?e.querySelector(s).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var s=[],l=[],i=[],c=e||this.state.targetItems,a=!1,n=0,r=c.length;n<r;n++){var o=c[n],d=!a&&this._isInView(o);d?(a=!0,s.push(o)):l.push(o);var m=n===r-1,h=this._isScrolled();this._isAtBottom()&&this._isInView(o)&&!d&&m&&h&&(l.pop(),l.push.apply(l,(0,t.default)(s)),s=[o],i=this._fillArray(i,!1),d=!0),i.push(d)}return{inView:s,outView:l,viewStatusList:i,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(i)}}},{key:"_isInView",value:function(e){if(!e)return!1;var s,l=this.props,i=l.rootEl,c=l.offset;i&&(s=document.querySelector(i).getBoundingClientRect());var a=e.getBoundingClientRect(),t=i?s.height:window.innerHeight,n=this._getScrollDimension().scrollTop,r=n+t,o=i?a.top+n-s.top+c:a.top+n+c,d=o+e.offsetHeight;return o<r&&d>n}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,s=this._getScrollDimension(),l=s.scrollTop,i=s.scrollHeight;return l+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=i}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var s=!1;return e.map((function(e){return e&&!s?(s=!0,!1):!s}))}},{key:"_spy",value:function(e){var s=this,l=this._getElemsViewState(e),i=this.state.inViewState;this.setState({inViewState:l.viewStatusList,isScrolledPast:l.scrolledPast},(function(){s._update(i)}))}},{key:"_update",value:function(e){var s,l;(s=this.state.inViewState,l=e,s.length===l.length&&s.every((function(e,s){return e===l[s]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,j.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,s=this.props.componentTag,l=this.props,i=l.children,t=l.className,n=l.scrolledPastClassName,r=l.style,o=0,d=x.default.Children.map(i,(function(s,l){var i;if(!s)return null;var t=s.type,r=n&&e.state.isScrolledPast[l],d=(0,p.default)((i={},(0,a.default)(i,"".concat(s.props.className),s.props.className),(0,a.default)(i,"".concat(e.props.currentClassName),e.state.inViewState[l]),(0,a.default)(i,"".concat(e.props.scrolledPastClassName),r),i));return x.default.createElement(t,(0,c.default)({},s.props,{className:d,key:o++}),s.props.children)})),m=(0,p.default)((0,a.default)({},"".concat(t),t));return x.default.createElement(s,{className:m,style:r},d)}}]),s}(x.default.Component);s.Z=v},51863:function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=function(e){var s,l,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var c=+new Date;!!s&&c<s+i?(clearTimeout(l),l=setTimeout((function(){s=c,e()}),i)):(s=c,e())}};s.default=l},10434:function(e){function s(){return e.exports=s=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,s.apply(this,arguments)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=613.90f64ca6.chunk.js.map