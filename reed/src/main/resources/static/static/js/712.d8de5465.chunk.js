"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[712],{5081:function(t,e,i){i.d(e,{g:function(){return l}});var s=i(72791),o=i(81694),r=i.n(o),a=i(11087),n=i(16843),d=i(63542),h=i(80184),l=function(t){var e=t.children,i=t.ariaLabel,o=t.className,d=t.tag,l=t.to,c=t.isActive,p=t.divider;return(0,h.jsxs)(n.Z,{tag:d,className:r()("breadcrumb-item",{active:c},o),"aria-current":c?"page":null,"aria-label":i||e,children:[p&&"string"!==typeof p&&(0,s.cloneElement)(p,{className:r()("breadcrumb-icon",p.props.className)}),c?e:(0,h.jsx)(a.OL,{to:l,"aria-label":i,children:e})]})};l.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var c=function(t){var e=t.children,i=t.list,o=t.tag,r=t.listTag,a=t.itemTag,d=t.ariaLabel,c=t.autoActive,p=t.isToHome,S=t.divider,_="string"!==S&&S;return(0,h.jsx)(n.Z,{tag:o,"aria-label":d,style:S?{"--bs-breadcrumb-divider":"string"===typeof S?"'".concat(S,"'"):"none"}:null,children:(0,h.jsxs)(n.Z,{tag:r,className:"breadcrumb",children:[p&&(0,h.jsx)(l,{to:"/",ariaLabel:"Home",children:p}),i?i.map((function(t,e){return(0,h.jsx)(l,{tag:t.tag||a,to:t.to,isActive:c&&i.length===e+1,divider:_,children:t.title},t.title)})):s.Children.map(e,(function(t,i){return(0,s.cloneElement)(t,{tag:t.props.tag||a,isActive:c&&e.length===i+1,divider:t.props.divider||_})}))]})})};c.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,h.jsx)(d.Z,{icon:"HolidayVillage"}),divider:(0,h.jsx)(d.Z,{icon:"ChevronRight"})},e.Z=c},50318:function(t,e,i){var s=i(1413),o=i(45987),r=i(72791),a=i(13496),n=i(81694),d=i.n(n),h=i(80184),l=["series","options","type","width","height","className"],c=function(t){var e=t.series,i=t.options,r=t.type,n=t.width,c=t.height,p=t.className,S=(0,o.Z)(t,l);return(0,h.jsx)("div",(0,s.Z)((0,s.Z)({className:d()("apex-chart",p)},S),{},{children:(0,h.jsx)(a.Z,{options:(0,s.Z)({colors:[{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PRIMARY_COLOR,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SECONDARY_COLOR,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUCCESS_COLOR,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_INFO_COLOR,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_WARNING_COLOR,{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_DANGER_COLOR],plotOptions:{candlestick:{colors:{upward:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUCCESS_COLOR,downward:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_DANGER_COLOR}},boxPlot:{colors:{upper:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUCCESS_COLOR,lower:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_DANGER_COLOR}}}},i),series:e,type:r,width:n,height:c})}))};c.defaultProps={type:"line",width:"100%",height:"auto",className:void 0},e.Z=(0,r.memo)(c)},20712:function(t,e,i){i.r(e);var s=i(29439),o=i(72791),r=i(15224),a=i(5081),n=i(47930),d=i(38493),h=i(96517),l=i(50318),c=i(7134),p=i(80184);e.default=function(){var t,e,i=function(t){for(var e,i,s=t.slice(),o=s.length;0!==o;)i=Math.floor(Math.random()*o),e=s[o-=1],s[o]=s[i],s[i]=e;return s},S=[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46],_=(0,o.useState)({series:[{data:i(S)}],options:{chart:{type:"area",height:200,sparkline:{enabled:!0}},stroke:{curve:"straight"},fill:{opacity:.3},yaxis:{min:0},colors:["#DCE6EC"],title:{text:"$424,652",offsetX:15,offsetY:20,style:{fontSize:"24px"}},subtitle:{text:"Sales",offsetX:15,offsetY:50,style:{fontSize:"14px"}}},seriesSpark2:[{data:i(S)}],optionsSpark2:{chart:{type:"area",height:200,sparkline:{enabled:!0}},stroke:{curve:"straight"},fill:{opacity:.3},yaxis:{min:0},colors:["#DCE6EC"],title:{text:"$235,312",offsetX:15,offsetY:20,style:{fontSize:"24px"}},subtitle:{text:"Expenses",offsetX:15,offsetY:50,style:{fontSize:"14px"}}},seriesSpark3:[{data:i(S)}],optionsSpark3:{chart:{type:"area",height:200,sparkline:{enabled:!0}},stroke:{curve:"straight"},fill:{opacity:.3},xaxis:{crosshairs:{width:1}},yaxis:{min:0},title:{text:"$135,965",offsetX:15,offsetY:20,style:{fontSize:"24px"}},subtitle:{text:"Profits",offsetX:15,offsetY:50,style:{fontSize:"14px"}}},series1:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],options1:{chart:{type:"line",width:100,height:35,sparkline:{enabled:!0}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}},series2:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],options2:{chart:{type:"line",width:100,height:35,sparkline:{enabled:!0}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}},series3:[43,32,12,9],options3:{chart:{type:"pie",width:40,height:40,sparkline:{enabled:!0}},stroke:{width:1},tooltip:{fixed:{enabled:!1}}},series4:[43,32,12,9],options4:{chart:{type:"donut",width:40,height:40,sparkline:{enabled:!0}},stroke:{width:1},tooltip:{fixed:{enabled:!1}}},series5:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],options5:{chart:{type:"bar",width:100,height:35,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}},series6:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],options6:{chart:{type:"bar",width:100,height:35,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}},series7:[45],options7:{chart:{type:"radialBar",width:50,height:50,sparkline:{enabled:!0}},dataLabels:{enabled:!1},plotOptions:{radialBar:{hollow:{margin:0,size:"50%"},track:{margin:0},dataLabels:{show:!1}}}},series8:[53,67],options8:{chart:{type:"radialBar",width:40,height:40,sparkline:{enabled:!0}},dataLabels:{enabled:!1},plotOptions:{radialBar:{hollow:{margin:0,size:"50%"},track:{margin:1},dataLabels:{show:!1}}}}}),x=(0,s.Z)(_,1)[0];return(0,p.jsxs)(d.Z,{title:c.XZ.charts.subMenu.chartsSparkline.text,children:[(0,p.jsx)(r.ZP,{children:(0,p.jsx)(r.Vv,{children:(0,p.jsx)(a.Z,{list:[{title:"Charts",to:"/charts"},{title:"Sparkline",to:"/charts/sparkline"}]})})}),(0,p.jsxs)(n.Z,{children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsx)(h.ZP,{className:"overflow-hidden",children:(0,p.jsx)(h.eW,{className:"p-0",children:(0,p.jsx)(l.Z,{series:x.series,options:x.options,type:null===(t=x.options.chart)||void 0===t?void 0:t.type,height:null===(e=x.options.chart)||void 0===e?void 0:e.height})})})}),(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsx)(h.ZP,{className:"overflow-hidden",children:(0,p.jsx)(h.eW,{className:"p-0",children:(0,p.jsx)(l.Z,{series:x.seriesSpark2,options:x.optionsSpark2,type:x.optionsSpark2.chart.type,height:x.optionsSpark2.chart.height})})})}),(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsx)(h.ZP,{className:"overflow-hidden",children:(0,p.jsx)(h.eW,{className:"p-0",children:(0,p.jsx)(l.Z,{series:x.seriesSpark3,options:x.optionsSpark3,type:x.optionsSpark3.chart.type,height:x.optionsSpark3.chart.height})})})})]}),(0,p.jsx)(h.ZP,{children:(0,p.jsx)(h.eW,{children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",{className:"table table-modern",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Total Value"}),(0,p.jsx)("th",{children:"Percentage of Portfolio"}),(0,p.jsx)("th",{children:"Last 10 days"}),(0,p.jsx)("th",{children:"Volume"})]})}),(0,p.jsxs)("tbody",{children:[(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"$32,554"}),(0,p.jsx)("td",{children:"15%"}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series1,options:x.options1,type:x.options1.chart.type,height:x.options1.chart.height,width:x.options1.chart.width})}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series5,options:x.options5,type:x.options5.chart.type,height:x.options5.chart.height,width:x.options5.chart.width})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"$23,533"}),(0,p.jsx)("td",{children:"7%"}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series2,options:x.options2,type:x.options2.chart.type,height:x.options2.chart.height,width:x.options2.chart.width})}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series6,options:x.options6,type:x.options6.chart.type,height:x.options6.chart.height,width:x.options6.chart.width})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"$54,276"}),(0,p.jsx)("td",{children:"9%"}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series3,options:x.options3,type:x.options3.chart.type,height:x.options3.chart.height,width:x.options3.chart.width})}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series7,options:x.options7,type:x.options7.chart.type,height:x.options7.chart.height,width:x.options7.chart.width})})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"$11,533"}),(0,p.jsx)("td",{children:"2%"}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series4,options:x.options4,type:x.options4.chart.type,height:x.options4.chart.height,width:x.options4.chart.width})}),(0,p.jsx)("td",{children:(0,p.jsx)(l.Z,{series:x.series8,options:x.options8,type:x.options8.chart.type,height:x.options8.chart.height,width:x.options8.chart.width})})]})]})]})})})})})})]})]})}}}]);
//# sourceMappingURL=712.d8de5465.chunk.js.map