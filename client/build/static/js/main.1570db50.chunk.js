(this.webpackJsonpkeeper_app=this.webpackJsonpkeeper_app||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var c=n(8),o=n.n(c),a=n(19),i=n(0),r=n(3);function s(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Keeper"})})}var j=n(28),l=n.n(j),u=n(44),p=n.n(u);function b(e){return Object(r.jsxs)("div",{className:"note",children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("p",{children:e.content}),Object(r.jsx)("button",{onClick:function(){e.ondelete(e.id)},children:Object(r.jsx)(p.a,{})})]})}var h=n(23),d=n(32),O=n(50),f=n.n(O),x=n(100),m=n(101);function k(e){var t=Object(i.useState)({title:"",content:""}),n=Object(a.a)(t,2),c=n[0],o=n[1],s=Object(i.useState)(!1),j=Object(a.a)(s,2),l=j[0],u=j[1];function p(e){var t=e.target,n=t.value,c=t.name;o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(h.a)({},c,n))}))}return Object(r.jsxs)("div",{className:"form",children:[l&&Object(r.jsx)("input",{onChange:p,type:"text",name:"title",placeholder:"Title",autoComplete:"off",value:c.title}),Object(r.jsx)("textarea",{onChange:p,name:"content",placeholder:"Take a note...",rows:l?"3":"1",value:c.content,onClick:function(){u(!0)}}),Object(r.jsx)(m.a,{in:l,children:Object(r.jsx)(x.a,{onClick:function(){""!==c.title||""!==c.content?(e.onsubmit(c),o({title:"",content:""})):alert("Title and Content feilds are empty")},children:Object(r.jsx)(f.a,{})})})]})}function v(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];function o(e){l.a.delete("https://keeprapi.herokuapp.com/api/notes/"+e).catch((function(e){return console.log(e)}))}return Object(i.useEffect)((function(){l.a.get("https://keeprapi.herokuapp.com/api/notes").then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))})),Object(r.jsxs)("div",{children:[Object(r.jsx)(s,{}),Object(r.jsx)(k,{onsubmit:function(e){l.a.post("https://keeprapi.herokuapp.com/api/notes",e).catch((function(e){return console.log(e)}))}}),n.map((function(e,t){return Object(r.jsx)(b,{title:e.title,content:e.content,id:e._id,ondelete:o},t)}))]})}o.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.1570db50.chunk.js.map