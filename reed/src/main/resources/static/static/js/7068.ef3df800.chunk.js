"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[7068],{38039:function(e,t,i){i.d(t,{LD:function(){return d},c9:function(){return c}});i(72791);var a=i(96517),n=i(3372),l=i(87020),s=i(46314),r=i(80184),d={3:3,5:5,10:10,25:25,50:50},c=function(e,t,i){return e.filter((function(e,a){return a+1>(t-1)*i&&a+1<=t*i}))},o=function(e){var t=e.setCurrentPage,i=e.currentPage,c=e.perPage,o=e.setPerPage,u=e.data,v=e.label,m=u.length,h=Math.ceil(m/c);return(0,r.jsxs)(a.iR,{children:[(0,r.jsx)(a.gn,{children:(0,r.jsx)("span",{className:"text-muted",children:function(){var e=c*(i-1)+1,t=c*i;return(0,r.jsxs)("span",{className:"pagination__desc",children:["Showing ",e," to ",t>m?m:t," of ",m," ",v]})}()})}),(0,r.jsxs)(a.M3,{className:"d-flex",children:[h>1&&(0,r.jsxs)(n.Z,{ariaLabel:v,children:[(0,r.jsx)(n.n,{isFirst:!0,isDisabled:!(i-1>0),onClick:function(){return t(1)}}),(0,r.jsx)(n.n,{isPrev:!0,isDisabled:!(i-1>0),onClick:function(){return t(i-1)}}),i-1>1&&(0,r.jsx)(n.n,{onClick:function(){return t(i-2)},children:"..."}),function(){for(var e=[],a=i-1;a>=i-1&&a>0;)e.push((0,r.jsx)(n.n,{onClick:function(){return t(i-1)},children:a},a)),a-=1;for((e=e.reverse()).push((0,r.jsx)(n.n,{isActive:!0,onClick:function(){return t(i)},children:i},i)),a=i+1;a<=i+1&&a<=h;)e.push((0,r.jsx)(n.n,{onClick:function(){return t(i+1)},children:a},a)),a+=1;return e}(),i+1<h&&(0,r.jsx)(n.n,{onClick:function(){return t(i+2)},children:"..."}),(0,r.jsx)(n.n,{isNext:!0,isDisabled:!(i+1<=h),onClick:function(){return t(i+1)}}),(0,r.jsx)(n.n,{isLast:!0,isDisabled:!(i+1<=h),onClick:function(){return t(h)}})]}),(0,r.jsx)(l.Z,{size:"sm",ariaLabel:"Per",onChange:function(e){o(parseInt(e.target.value,10)),t(1)},value:c.toString(),children:Object.keys(d).map((function(e){return(0,r.jsx)(s.Z,{value:e,children:e},e)}))})]})]})};o.defaultProps={label:"items"},t.ZP=o},5081:function(e,t,i){i.d(t,{g:function(){return o}});var a=i(72791),n=i(81694),l=i.n(n),s=i(11087),r=i(16843),d=i(63542),c=i(80184),o=function(e){var t=e.children,i=e.ariaLabel,n=e.className,d=e.tag,o=e.to,u=e.isActive,v=e.divider;return(0,c.jsxs)(r.Z,{tag:d,className:l()("breadcrumb-item",{active:u},n),"aria-current":u?"page":null,"aria-label":i||t,children:[v&&"string"!==typeof v&&(0,a.cloneElement)(v,{className:l()("breadcrumb-icon",v.props.className)}),u?t:(0,c.jsx)(s.OL,{to:o,"aria-label":i,children:t})]})};o.defaultProps={className:void 0,ariaLabel:void 0,tag:"li",isActive:!1,divider:void 0};var u=function(e){var t=e.children,i=e.list,n=e.tag,l=e.listTag,s=e.itemTag,d=e.ariaLabel,u=e.autoActive,v=e.isToHome,m=e.divider,h="string"!==m&&m;return(0,c.jsx)(r.Z,{tag:n,"aria-label":d,style:m?{"--bs-breadcrumb-divider":"string"===typeof m?"'".concat(m,"'"):"none"}:null,children:(0,c.jsxs)(r.Z,{tag:l,className:"breadcrumb",children:[v&&(0,c.jsx)(o,{to:"/",ariaLabel:"Home",children:v}),i?i.map((function(e,t){return(0,c.jsx)(o,{tag:e.tag||s,to:e.to,isActive:u&&i.length===t+1,divider:h,children:e.title},e.title)})):a.Children.map(t,(function(e,i){return(0,a.cloneElement)(e,{tag:e.props.tag||s,isActive:u&&t.length===i+1,divider:e.props.divider||h})}))]})})};u.defaultProps={children:void 0,tag:"nav",listTag:"ol",itemTag:"li",ariaLabel:"breadcrumb",list:void 0,autoActive:!0,isToHome:(0,c.jsx)(d.Z,{icon:"HolidayVillage"}),divider:(0,c.jsx)(d.Z,{icon:"ChevronRight"})},t.Z=u},46314:function(e,t,i){i.d(t,{E:function(){return d}});var a=i(1413),n=i(45987),l=(i(72791),i(80184)),s=["children","value","disabled","ariaLabelledby"],r=function(e){var t=e.children,i=e.value,r=e.disabled,d=e.ariaLabelledby,c=(0,n.Z)(e,s);return(0,l.jsx)("option",(0,a.Z)((0,a.Z)({value:i,disabled:r,"aria-labelledby":d||t},c),{},{children:t}))};r.defaultProps={disabled:!1,ariaLabelledby:null};var d=function(e){var t=e.list;return null===t||void 0===t?void 0:t.map((function(e){return(0,l.jsx)(r,(0,a.Z)((0,a.Z)({value:e.value},e),{},{children:e.text||e.label}),e.value)}))};t.Z=r},3372:function(e,t,i){i.d(t,{n:function(){return m}});var a=i(4942),n=i(1413),l=i(45987),s=i(72791),r=i(81694),d=i.n(r),c=i(63542),o=i(80184),u=["className","isDisabled","isActive","isPrev","isFirst","isNext","isLast","children","onClick"],v=["ariaLabel","className","children","size"],m=(0,s.forwardRef)((function(e,t){var i=e.className,a=e.isDisabled,s=e.isActive,r=e.isPrev,v=e.isFirst,m=e.isNext,h=e.isLast,b=e.children,f=e.onClick,g=(0,l.Z)(e,u);return(0,o.jsx)("li",(0,n.Z)((0,n.Z)({ref:t,className:d()("page-item",{disabled:a,active:s},i)},g),{},{children:(0,o.jsxs)("span",{role:"button",onClick:f,onKeyDown:f,className:"page-link",tabIndex:a?-1:void 0,"aria-disabled":a?"true":void 0,"aria-label":(r?"First Page":m&&"Last Page")||"".concat(b," page"),children:[r&&(0,o.jsx)(c.Z,{icon:"ChevronLeft"}),v&&(0,o.jsx)(c.Z,{icon:"FirstPage"}),m&&(0,o.jsx)(c.Z,{icon:"ChevronRight"}),h&&(0,o.jsx)(c.Z,{icon:"LastPage"}),b]})}))}));m.displayName="PaginationItem",m.defaultProps={className:void 0,isDisabled:!1,isActive:!1,isPrev:!1,isFirst:!1,isNext:!1,isLast:!1,children:null,onClick:void 0};var h=(0,s.forwardRef)((function(e,t){var i=e.ariaLabel,s=e.className,r=e.children,c=e.size,u=(0,l.Z)(e,v);return(0,o.jsx)("nav",(0,n.Z)((0,n.Z)({ref:t,"aria-label":i,className:s},u),{},{children:(0,o.jsx)("ul",{className:d()("pagination",(0,a.Z)({},"pagination-".concat(c),c),"m-0"),children:r})}))}));h.displayName="Pagination",h.defaultProps={className:void 0,size:null},t.Z=h},91380:function(e,t,i){i.d(t,{N:function(){return v}});var a=i(1413),n=i(45987),l=i(72791),s=i(81694),r=i.n(s),d=i(81827),c=i(80184),o=["id","className","children","isInline","isValid","isTouched","invalidFeedback","validFeedback","isTooltipFeedback"],u=["id","className","name","type","label","value","checked","disabled","isInline","isFormCheckInput","isValid","isTouched","invalidFeedback","validFeedback","isValidMessage","isTooltipFeedback","onBlur","onChange","onFocus","onInput","onInvalid","onSelect","ariaLabel"],v=(0,l.forwardRef)((function(e,t){var i=e.id,s=e.className,u=e.children,v=e.isInline,m=e.isValid,h=e.isTouched,b=e.invalidFeedback,f=e.validFeedback,g=e.isTooltipFeedback,p=(0,n.Z)(e,o);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",(0,a.Z)((0,a.Z)({ref:t,id:i,className:r()({"is-invalid":!m&&h&&b,"is-valid":!m&&h&&!b},s)},p),{},{children:l.Children.map(u,(function(e){return(0,l.cloneElement)(e,{isInline:e.props.isInline||v,isValid:m,isTouched:h,invalidFeedback:b,validFeedback:f,isTooltipFeedback:g,isValidMessage:!1})}))})),(0,c.jsx)(d.Z,{isTouched:h,invalidFeedback:b,validFeedback:f,isTooltip:g})]})}));v.displayName="ChecksGroup",v.defaultProps={id:void 0,className:void 0,isInline:!1,isTouched:!1,isValid:!1,invalidFeedback:void 0,validFeedback:void 0,isTooltipFeedback:!1};var m=(0,l.forwardRef)((function(e,t){var i=e.id,l=e.className,s=e.name,o=e.type,v=e.label,m=e.value,h=e.checked,b=e.disabled,f=e.isInline,g=e.isFormCheckInput,p=e.isValid,N=e.isTouched,k=e.invalidFeedback,x=e.validFeedback,j=e.isValidMessage,C=e.isTooltipFeedback,Z=e.onBlur,F=e.onChange,P=e.onFocus,L=e.onInput,y=e.onInvalid,T=e.onSelect,S=e.ariaLabel,I=(0,n.Z)(e,u),V=(0,c.jsx)("input",(0,a.Z)({ref:t,className:r()("form-check-input",{"mt-0":g,"is-invalid":!p&&N&&k,"is-valid":!p&&N&&!k},l),name:null===s?i:s,type:"radio"===o?"radio":"checkbox",id:i,value:m,checked:"radio"===o?h===m:!!h,disabled:b,onBlur:Z,onChange:F,onFocus:P,onInput:L,onInvalid:y,onSelect:T,"aria-label":S},I));return g?V:(0,c.jsxs)("div",{className:r()("form-check",{"form-switch":"switch"===o,"form-check-inline":f}),children:[V,v&&(0,c.jsx)("label",{className:"form-check-label",htmlFor:i,children:v}),j&&(0,c.jsx)(d.Z,{isTouched:N,invalidFeedback:k,validFeedback:x,isTooltip:C})]})}));m.displayName="Checks",m.defaultProps={id:void 0,className:void 0,name:null,type:"checkbox",label:null,checked:!1,disabled:!1,isInline:!1,isFormCheckInput:!1,isTouched:!1,isValid:!1,invalidFeedback:void 0,validFeedback:void 0,isValidMessage:!0,isTooltipFeedback:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,onInvalid:void 0,onSelect:void 0,ariaLabel:void 0},t.Z=m},87020:function(e,t,i){var a=i(1413),n=i(4942),l=i(45987),s=i(72791),r=i(81694),d=i.n(r),c=i(46314),o=i(81827),u=i(80184),v=["id","name","className","children","required","placeholder","ariaDescribedby","ariaLabelledby","ariaLabel","list","multiple","title","size","disabled","value","defaultValue","isValid","isTouched","invalidFeedback","validFeedback","isValidMessage","isTooltipFeedback","onBlur","onChange","onFocus","onInput","onInvalid","onSelect"],m=(0,s.forwardRef)((function(e,t){var i,s=e.id,r=e.name,m=e.className,h=e.children,b=e.required,f=e.placeholder,g=e.ariaDescribedby,p=e.ariaLabelledby,N=e.ariaLabel,k=e.list,x=e.multiple,j=e.title,C=e.size,Z=e.disabled,F=e.value,P=e.defaultValue,L=e.isValid,y=e.isTouched,T=e.invalidFeedback,S=e.validFeedback,I=e.isValidMessage,V=e.isTooltipFeedback,A=e.onBlur,D=e.onChange,M=e.onFocus,w=e.onInput,B=e.onInvalid,R=e.onSelect,z=(0,l.Z)(e,v);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("select",(0,a.Z)((0,a.Z)({ref:t,id:s,className:d()("form-select",(i={},(0,n.Z)(i,"form-select-".concat(C),C),(0,n.Z)(i,"text-muted",""===F&&f),(0,n.Z)(i,"is-invalid",!L&&y&&T),(0,n.Z)(i,"is-valid",!L&&y&&!T),i),m),name:r,"aria-label":N,"aria-describedby":g,"aria-labelledby":p,multiple:x,disabled:Z,title:j,value:F,defaultValue:P,required:b,onBlur:A,onChange:D,onFocus:M,onInput:w,onInvalid:B,onSelect:R},z),{},{children:[f&&(0,u.jsx)(c.Z,{value:"",hidden:!0,children:f}),h||k&&(0,u.jsx)(c.E,{list:k})]})),I&&(0,u.jsx)(o.Z,{isTouched:y,invalidFeedback:T,validFeedback:S,isTooltip:V})]})}));m.displayName="Select",m.defaultProps={id:void 0,className:void 0,name:void 0,children:null,placeholder:void 0,multiple:!1,size:void 0,disabled:!1,required:!1,ariaDescribedby:void 0,ariaLabelledby:void 0,title:void 0,value:void 0,defaultValue:void 0,list:void 0,isTouched:!1,isValid:!1,invalidFeedback:void 0,validFeedback:void 0,isValidMessage:!0,isTooltipFeedback:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,onInvalid:void 0,onSelect:void 0},t.Z=m},62261:function(e,t,i){var a=i(1413),n=i(72791),l=i(26438),s=i(91380),r=i(80184);t.Z=function(e){var t=(0,l.TA)({onSubmit:function(e,t){},initialValues:{selectAll:!1,selectedList:[]}});(0,n.useEffect)((function(){return t.values.selectAll?t.setValues((0,a.Z)((0,a.Z)({},t.values),{},{selectedList:e.map((function(e){return e.id.toString()}))})):t.setValues((0,a.Z)((0,a.Z)({},t.values),{},{selectedList:[]})),function(){}}),[t.values.selectAll]);var i=(0,n.useRef)(null);(0,n.useEffect)((function(){i.current&&(t.values.selectedList.length&&t.values.selectedList.length!==e.map((function(e){return e.id.toString()})).length?(i.current.checked=!1,i.current.indeterminate=!0):t.values.selectedList.length===e.map((function(e){return e.id.toString()})).length?(i.current.checked=!0,i.current.indeterminate=!1):0===t.values.selectedList.length&&(i.current.checked=!1,i.current.indeterminate=!1))}),[t.values.selectAll,t.values.selectedList,e]);var d=(0,r.jsx)(s.Z,{ref:i,id:"selectAll",onChange:t.handleChange,checked:t.values.selectAll}),c=t.handleChange,o=t.values.selectedList;return{selectTable:t,selectItemHandleChange:c,selectedIdList:o,SelectAllCheck:d}}},15177:function(e,t,i){var a=i(93433),n=i(29439),l=i(72791);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=(0,l.useState)(t),s=(0,n.Z)(i,2),r=s[0],d=s[1];return{items:(0,l.useMemo)((function(){var t=(0,a.Z)(e);return null!==r&&t.sort((function(e,t){return e[r.key]<t[r.key]?"ascending"===r.direction?-1:1:e[r.key]>t[r.key]?"ascending"===r.direction?1:-1:0})),t}),[e,r]),requestSort:function(e){var t="ascending";r&&r.key===e&&"ascending"===r.direction&&(t="descending"),d({key:e,direction:t})},getClassNamesFor:function(e){return r&&r.key===e?r.direction:"d-none"},sortConfig:r}}},37068:function(e,t,i){i.r(t);var a=i(29439),n=i(72791),l=i(7134),s=i(15224),r=i(5081),d=i(47930),c=i(38493),o=i(96517),u=i(15177),v=i(38039),m=i(62261),h=i(91380),b=i(63542),f=i(80184);t.default=function(){var e=(0,n.useState)(1),t=(0,a.Z)(e,2),i=t[0],g=t[1],p=(0,n.useState)(3),N=(0,a.Z)(p,2),k=N[0],x=N[1],j=(0,u.Z)([{id:1,firstName:"John",lastName:"Doe"},{id:2,firstName:"Ella",lastName:"Oliver"},{id:3,firstName:"Sam",lastName:"Roberts"},{id:4,firstName:"Grace",lastName:"Buckland"},{id:5,firstName:"Jane",lastName:"Lee"},{id:6,firstName:"Chloe",lastName:"Walker"},{id:7,firstName:"Ryan",lastName:"McGrath"}]),C=j.items,Z=j.requestSort,F=j.getClassNamesFor,P=(0,v.c9)(C,i,k),L=(0,m.Z)(P),y=L.selectTable,T=L.SelectAllCheck;return(0,f.jsxs)(c.Z,{title:l.XZ.components.subMenu.table.text,children:[(0,f.jsx)(s.ZP,{children:(0,f.jsx)(s.Vv,{children:(0,f.jsx)(r.Z,{list:[{title:l.XZ.components.text,to:"/".concat(l.XZ.components.path)},{title:l.XZ.components.subMenu.table.text,to:"/".concat(l.XZ.components.subMenu.table.path)}]})})}),(0,f.jsx)(d.Z,{children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-12",children:(0,f.jsxs)(o.ZP,{children:[(0,f.jsx)(o.Ol,{children:(0,f.jsx)(o.oL,{icon:"Assignment",children:(0,f.jsx)(o.ll,{children:"General Usage"})})}),(0,f.jsx)(o.eW,{children:(0,f.jsx)(o.TY,{children:"\nconst Foo = () => {\n\tconst data = [\n\t\t{id: 1, firstName: 'John', lastName: 'Doe' },\n\t\t{id: 2, firstName: 'Ella', lastName: 'Oliver' },\n\t\t{id: 3, firstName: 'Sam', lastName: 'Roberts' },\n\t\t{id: 4, firstName: 'Grace', lastName: 'Buckland' },\n\t\t{id: 5, firstName: 'Jane', lastName: 'Lee' },\n\t\t{id: 6, firstName: 'Chloe', lastName: 'Walker' },\n\t\t{id: 7, firstName: 'Ryan', lastName: 'McGrath' },\n\t];\n\n\tconst [currentPage, setCurrentPage] = useState(1);\n\tconst [perPage, setPerPage] = useState(10);\n\n\tconst { items, requestSort, getClassNamesFor } = useSortableData(filteredData);\n\t/**\n\t  *\n\t  * items: Array\n\t  * requestSort: Function\n\t  * getClassNamesFor: Function\n\t  *\n\t  */\n\tconst onCurrentPageData = dataPagination(items, currentPage, perPage);\n\t/**\n\t  *\n\t  * onCurrentPageData: Array\n\t  *\n\t  */\n\tconst { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageData);\n\t/**\n\t  *\n\t  * selectTable: Object\n\t  * SelectAllCheck: Node\n\t  *\n\t  */\n\n\treturn (\n\t\t<Card>\n\t\t\t<CardBody>\n\t\t\t\t<table>\n\t\t\t\t\t<thead className='table table-modern'>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{SelectAllCheck}</th>\n\t\t\t\t\t\t\t<th onClick={() => requestSort('firstName')}>\n\t\t\t\t\t\t\t\tFirst Name\n\t\t\t\t\t\t\t\t<Icon\n\t\t\t\t\t\t\t\t\tsize='lg'\n\t\t\t\t\t\t\t\t\tclassName={getClassNamesFor('firstName')}\n\t\t\t\t\t\t\t\t\ticon='FilterList'\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th onClick={() => requestSort('lastName')}>\n\t\t\t\t\t\t\t\tLast Name\n\t\t\t\t\t\t\t\t<Icon\n\t\t\t\t\t\t\t\t\tsize='lg'\n\t\t\t\t\t\t\t\t\tclassName={getClassNamesFor('lastName')}\n\t\t\t\t\t\t\t\t\ticon='FilterList'\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t{onCurrentPageData.map((item) => (\n\t\t\t\t\t\t\t<tr key={item.id.toString()}>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<Checks\n\t\t\t\t\t\t\t\t\t\tid={item.id.toString()}\n\t\t\t\t\t\t\t\t\t\tname='selectedList'\n\t\t\t\t\t\t\t\t\t\tvalue={item.id}\n\t\t\t\t\t\t\t\t\t\tonChange={selectTable.handleChange}\n\t\t\t\t\t\t\t\t\t\tchecked={selectTable.values.selectedList.includes( item.id.toString() )}\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>{item.firstName}</td>\n\t\t\t\t\t\t\t\t<td>{item.lastName}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t))}\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</CardBody>\n\t\t\t<PaginationButtons\n\t\t\t\tdata={items}\n\t\t\t\tlabel='items'\n\t\t\t\tsetCurrentPage={setCurrentPage}\n\t\t\t\tcurrentPage={currentPage}\n\t\t\t\tperPage={perPage}\n\t\t\t\tsetPerPage={setPerPage}\n\t\t\t/>\n\t\t</Card>\n\t);\n}"})})]})}),(0,f.jsx)("div",{className:"col-12",children:(0,f.jsxs)(o.ZP,{children:[(0,f.jsx)(o.eW,{children:(0,f.jsxs)("table",{className:"table table-modern",children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{style:{width:50},children:T}),(0,f.jsxs)("th",{onClick:function(){return Z("firstName")},className:"cursor-pointer text-decoration-underline",children:["First Name"," ",(0,f.jsx)(b.Z,{size:"lg",className:F("firstName"),icon:"FilterList"})]}),(0,f.jsxs)("th",{onClick:function(){return Z("lastName")},className:"cursor-pointer text-decoration-underline",children:["Last Name"," ",(0,f.jsx)(b.Z,{size:"lg",className:F("lastName"),icon:"FilterList"})]})]})}),(0,f.jsx)("tbody",{children:P.map((function(e){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)(h.Z,{id:e.id.toString(),name:"selectedList",value:e.id,onChange:y.handleChange,checked:y.values.selectedList.includes(e.id.toString())})}),(0,f.jsx)("td",{children:e.firstName}),(0,f.jsx)("td",{children:e.lastName})]},e.id)}))})]})}),(0,f.jsx)(v.ZP,{data:C,label:"items",setCurrentPage:g,currentPage:i,perPage:k,setPerPage:x})]})})]})})]})}}}]);
//# sourceMappingURL=7068.ef3df800.chunk.js.map