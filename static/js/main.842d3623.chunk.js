(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(13),i=n.n(s),o=(n(20),n(3));n(21);var l=function(e){var t=e.children;return Object(c.jsx)("div",{className:"container",children:t})};var j=function(){return Object(c.jsx)("nav",{className:"navbar navbar-dark",children:Object(c.jsx)("h3",{children:"Employee React Directory"})})};var u=function(e){return Object(c.jsxs)("table",{className:"table table-hover",style:{width:"50%",margin:"0 auto"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{scope:"col",children:["Name ",Object(c.jsx)("span",{className:"",children:Object(c.jsx)("svg",{className:"",onClick:function(){e.setSort(!e.sort)},width:"1rem",height:"1rem",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Picture"})]})}),Object(c.jsx)("tbody",{children:e.children})]})},h=n(14),d=n.n(h),m={getTeam:function(){return d.a.get("https://randomuser.me/api/?results=100&nat=US")}};var b=function(e){return Object(c.jsxs)("tr",{className:"table-active",children:[Object(c.jsx)("th",{scope:"row",children:e.name}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:Object(c.jsx)("img",{style:{borderRadius:"20px"},alt:e.name,src:e.picture})})]})};var p=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),h=i[0],d=i[1],p=Object(r.useState)(!0),O=Object(o.a)(p,2),x=O[0],f=O[1];return Object(r.useEffect)((function(){m.getTeam().then((function(e){return a(e.data.results)}))}),[]),Object(r.useEffect)((function(){var e;x?(e="first",n.sort((function(t,n){return t.name[e]<n.name[e]?-1:t.name[e]>n.name[e]?1:0}))):function(e,t){t.sort((function(t,n){return t.name[e]<n.name[e]?1:t.name[e]>n.name[e]?-1:0}))}("first",n)}),[x]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsxs)(l,{children:[Object(c.jsx)("input",{placeholder:"Search for employee",type:"text",className:"searchBar",value:h,onChange:function(e){d(e.target.value)}}),Object(c.jsx)("div",{width:"50%",style:{margin:"0 auto",alignContent:"center",textAlign:"center"},children:Object(c.jsx)(u,{sort:x,setSort:f,children:h.length<1?n.map((function(e,t){return Object(c.jsx)(b,{name:e.name.first+" "+e.name.last,number:t,email:e.email,phone:e.phone,picture:e.picture.large})})):n.map((function(e,t){if(e.name.first.toLowerCase().includes(h.toLowerCase()))return Object(c.jsx)(b,{name:e.name.first+" "+e.name.last,number:t,email:e.email,phone:e.phone,picture:e.picture.large})}))})})]})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.842d3623.chunk.js.map