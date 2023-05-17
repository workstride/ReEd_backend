"use strict";(self.webpackChunkfacit=self.webpackChunkfacit||[]).push([[1575],{71575:function(e,s,a){a.r(s);var n=a(29439),i=a(72791),l=a(26438),r=a(38493),c=a(15224),t=a(47930),d=a(7134),o=a(96517),h=a(76914),m=a(95155),x=a(38039),u=a(11592),j=a(63542),p=a(2926),b=a(29944),Z=a(67827),g=a(91380),v=a(1715),N=a(15177),f=a(21909),y=a(79423),P=a(43860),C=a(41741),w=a(56424),k=a(80184);s.default=function(){var e=(0,w.Z)().darkModeStatus,s=(0,i.useState)(1),a=(0,n.Z)(s,2),L=a[0],M=a[1],I=(0,i.useState)(x.LD[10]),S=(0,n.Z)(I,2),z=S[0],F=S[1],A=(0,l.TA)({initialValues:{searchInput:"",payment:Object.keys(v.Z).map((function(e){return v.Z[e].name})),minPrice:"",maxPrice:""},onSubmit:function(e){}}),D=m.Z.filter((function(e){return e.name.toLowerCase().includes(A.values.searchInput.toLowerCase())&&(""===A.values.minPrice||e.balance>Number(A.values.minPrice))&&(""===A.values.maxPrice||e.balance<Number(A.values.maxPrice))&&A.values.payment.includes(e.payout)})),O=(0,N.Z)(D),V=O.items,E=O.requestSort,_=O.getClassNamesFor,B=(0,i.useState)(!1),q=(0,n.Z)(B,2),H=q[0],T=q[1];return(0,k.jsxs)(r.Z,{title:d.j5.crm.subMenu.customersList.text,children:[(0,k.jsxs)(c.ZP,{children:[(0,k.jsxs)(c.Vv,{children:[(0,k.jsx)("label",{className:"border-0 bg-transparent cursor-pointer me-0",htmlFor:"searchInput",children:(0,k.jsx)(j.Z,{icon:"Search",size:"2x",color:"primary"})}),(0,k.jsx)(p.Z,{id:"searchInput",type:"search",className:"border-0 shadow-none bg-transparent",placeholder:"Search customer...",onChange:A.handleChange,value:A.values.searchInput})]}),(0,k.jsxs)(c.$o,{children:[(0,k.jsxs)(b.ZP,{children:[(0,k.jsx)(b.Z_,{hasIcon:!1,children:(0,k.jsx)(u.Z,{icon:"FilterAlt",color:"dark",isLight:!0,className:"btn-only-icon position-relative",children:m.Z.length!==D.length&&(0,k.jsx)(y.Z,{desc:"Filtering applied",trigger:"hover",children:(0,k.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2",children:(0,k.jsx)("span",{className:"visually-hidden",children:"there is filtering"})})})})}),(0,k.jsx)(b.h_,{isAlignmentEnd:!0,size:"lg",children:(0,k.jsx)("div",{className:"container py-2",children:(0,k.jsxs)("div",{className:"row g-3",children:[(0,k.jsx)(Z.Z,{label:"Balance",className:"col-12",children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(p.Z,{id:"minPrice",ariaLabel:"Minimum price",placeholder:"Min.",onChange:A.handleChange,value:A.values.minPrice}),(0,k.jsx)(f.O,{children:"to"}),(0,k.jsx)(p.Z,{id:"maxPrice",ariaLabel:"Maximum price",placeholder:"Max.",onChange:A.handleChange,value:A.values.maxPrice})]})}),(0,k.jsx)(Z.Z,{label:"Payments",className:"col-12",children:(0,k.jsx)(g.N,{children:Object.keys(v.Z).map((function(e){return(0,k.jsx)(g.Z,{id:v.Z[e].name,label:v.Z[e].name,name:"payment",value:v.Z[e].name,onChange:A.handleChange,checked:A.values.payment.includes(v.Z[e].name)},v.Z[e].name)}))})})]})})})]}),(0,k.jsx)(c.Ar,{}),(0,k.jsx)(u.Z,{icon:"PersonAdd",color:"primary",isLight:!0,onClick:function(){return T(!0)},children:"New Customer"})]})]}),(0,k.jsx)(t.Z,{children:(0,k.jsx)("div",{className:"row h-100",children:(0,k.jsx)("div",{className:"col-12",children:(0,k.jsxs)(o.ZP,{stretch:!0,children:[(0,k.jsx)(o.eW,{isScrollable:!0,className:"table-responsive",children:(0,k.jsxs)("table",{className:"table table-modern table-hover",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsxs)("th",{onClick:function(){return E("name")},className:"cursor-pointer text-decoration-underline",children:["Customer"," ",(0,k.jsx)(j.Z,{size:"lg",className:_("name"),icon:"FilterList"})]}),(0,k.jsx)("th",{children:"Email"}),(0,k.jsx)("th",{children:"Membership Date"}),(0,k.jsxs)("th",{onClick:function(){return E("balance")},className:"cursor-pointer text-decoration-underline",children:["Balance",(0,k.jsx)(j.Z,{size:"lg",className:_("balance"),icon:"FilterList"})]}),(0,k.jsxs)("th",{onClick:function(){return E("payout")},className:"cursor-pointer text-decoration-underline",children:["Payout"," ",(0,k.jsx)(j.Z,{size:"lg",className:_("payout"),icon:"FilterList"})]}),(0,k.jsx)("td",{})]})}),(0,k.jsx)("tbody",{children:(0,x.c9)(V,L,z).map((function(s){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsxs)("div",{className:"d-flex align-items-center",children:[(0,k.jsx)("div",{className:"flex-shrink-0",children:(0,k.jsx)("div",{className:"ratio ratio-1x1 me-3",style:{width:48},children:(0,k.jsx)("div",{className:"bg-l".concat(e?"o25":"25","-").concat((0,C.M)(s.id)," text-").concat((0,C.M)(s.id)," rounded-2 d-flex align-items-center justify-content-center"),children:(0,k.jsx)("span",{className:"fw-bold",children:(0,h.V8)(s.name)})})})}),(0,k.jsxs)("div",{className:"flex-grow-1",children:[(0,k.jsx)("div",{className:"fs-6 fw-bold",children:s.name}),(0,k.jsxs)("div",{className:"text-muted",children:[(0,k.jsx)(j.Z,{icon:"Label"})," ",(0,k.jsx)("small",{children:s.type})]})]})]})}),(0,k.jsx)("td",{children:(0,k.jsx)(u.Z,{isLink:!0,color:"light",icon:"Email",className:"text-lowercase",tag:"a",href:"mailto:".concat(s.email),children:s.email})}),(0,k.jsxs)("td",{children:[(0,k.jsx)("div",{children:s.membershipDate.format("ll")}),(0,k.jsx)("div",{children:(0,k.jsx)("small",{className:"text-muted",children:s.membershipDate.fromNow()})})]}),(0,k.jsx)("td",{children:(0,h.XY)(s.balance)}),(0,k.jsxs)("td",{children:[(0,k.jsx)(j.Z,{size:"lg",icon:"custom ".concat(s.payout.toLowerCase())})," ",s.payout]}),(0,k.jsx)("td",{children:(0,k.jsxs)(b.ZP,{children:[(0,k.jsx)(b.Z_,{hasIcon:!1,children:(0,k.jsx)(u.Z,{icon:"MoreHoriz",color:"dark",isLight:!0,shadow:"sm"})}),(0,k.jsx)(b.h_,{isAlignmentEnd:!0,children:(0,k.jsx)(b.hP,{children:(0,k.jsx)(u.Z,{icon:"Visibility",tag:"a",to:"../".concat(d.j5.crm.subMenu.customerID.path,"/").concat(s.id),children:"View"})})})]})})]},s.id)}))})]})}),(0,k.jsx)(x.ZP,{data:D,label:"customers",setCurrentPage:M,currentPage:L,perPage:z,setPerPage:F})]})})})}),(0,k.jsx)(P.Z,{setIsOpen:T,isOpen:H,id:"0"})]})}}}]);
//# sourceMappingURL=1575.2f4717cc.chunk.js.map