(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{37:function(e,a,t){e.exports=t(76)},42:function(e,a,t){},43:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),o=(t(42),t(43),t(44),t(8)),s=t(3),i=t.n(s),m=t(9),u=t(13),d=t(17),p=(t(46),t(5)),b=t(18),E=t.n(b),f=t(36),g=t(22),v=t.n(g),h=(t(68),t(69),["Degree","Engineering","MTech","Masters"]),y=["HTML","CSS","JavaScript","React","Angular","Node JS","Mongo DB"];function N(){var e,a,t,r,c,s,b=Object(n.useRef)(),g=Object(p.f)(),N=Object(n.useState)(!1),k=Object(u.a)(N,2),x=k[0],O=k[1],j=Object(n.useState)(!1),w=Object(u.a)(j,2),S=w[0],C=w[1],L=Object(p.g)().id,F=Object(f.a)(),T=F.register,A=F.handleSubmit,D=F.formState.errors,M=F.setValue,q=F.reset,V=Object(n.useState)(""),B=Object(u.a)(V,1)[0],I=Object(n.useState)(null),J=Object(u.a)(I,2),P=J[0],z=J[1];Object(n.useEffect)((function(){H()}),[]);var H=function(){var e=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:8000/user/".concat(L));case 2:a=e.sent,z(a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(i.a.mark((function e(a){var t,n,l,r,c,s,m,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("onsubmit--",a),!L){e.next=20;break}t="true"===a.gender,(n=new FormData).append("firstname",a.firstname),n.append("lastname",a.lastname),n.append("gender",t),n.append("dob",B),n.append("education",a.education),n.append("knownLanguages",a.knownLanguages),n.append("bio",a.bio),l=Object(o.a)(n.entries());try{for(l.s();!(r=l.n()).done;)c=r.value,console.log(c[0]+", "+c[1])}catch(i){l.e(i)}finally{l.f()}return e.next=15,E.a.put("http://localhost:8000/user/".concat(L),n,{"Content-Type":"multipart/form-data","Access-Control-Allow-Methods":"*"});case 15:(s=e.sent).data.message&&alert(s.data.message),g.push("/"),e.next=37;break;case 20:return console.log("data --else ",a),(m=new FormData).append("firstname",a.firstname),m.append("lastname",a.lastname),m.append("gender",a.gender),m.append("dob",a.dob),m.append("education",a.education),m.append("knownLanguages",a.knownLanguages),m.append("bio",a.bio),console.log("bodyFormData -- ",m),e.next=32,E.a.post("http://localhost:8000/user",m,{"Content-Type":"multipart/form-data"});case 32:(u=e.sent).data.message&&alert(u.data.message),g.push("/"),q(),console.log(u);case 37:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card bg-light mb-3",style:{maxWidth:"40rem",margin:"14px auto"}},l.a.createElement("div",{className:"card-header",style:{textAlign:"center"}},l.a.createElement("h4",null,"Information Form")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("form",{className:"row",onSubmit:A(R)},l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement("input",Object.assign({className:"form-control",defaultValue:L?M("firstname",P&&P.firstname):""},T("firstname",{required:!0,maxLength:20,pattern:/^[A-Za-z]+$/i}))),"required"===(null===D||void 0===D||null===(e=D.firstname)||void 0===e?void 0:e.type)&&l.a.createElement("p",null,"This field is required"),"maxLength"===(null===D||void 0===D||null===(a=D.firstname)||void 0===a?void 0:a.type)&&l.a.createElement("p",null,"First name cannot exceed 20 characters"),"pattern"===(null===D||void 0===D||null===(t=D.firstname)||void 0===t?void 0:t.type)&&l.a.createElement("p",null,"Alphabetical characters only")),l.a.createElement("div",null,l.a.createElement("label",null,"Laste Name"),l.a.createElement("input",Object.assign({className:"form-control",defaultValue:L?M("lastname",P?P.lastname:""):""},T("lastname",{required:!0,maxLength:20,pattern:/^[A-Za-z]+$/i}))),"required"===(null===D||void 0===D||null===(r=D.lastname)||void 0===r?void 0:r.type)&&l.a.createElement("p",null,"This field is required"),"maxLength"===(null===D||void 0===D||null===(c=D.lastname)||void 0===c?void 0:c.type)&&l.a.createElement("p",null,"First name cannot exceed 20 characters"),"pattern"===(null===D||void 0===D||null===(s=D.lastname)||void 0===s?void 0:s.type)&&l.a.createElement("p",null,"Alphabetical characters only"))),l.a.createElement("div",{className:"row mb-2"},l.a.createElement("div",null,l.a.createElement("label",null,"Education"),l.a.createElement("select",Object.assign({className:"form-select",defaultValue:L?M("education",P&&P.education):""},T("education",{})),l.a.createElement("option",{value:""},"Choose..."),h.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),D.education&&l.a.createElement("p",null,"Please choose any one education")),l.a.createElement("div",{className:"mt-3"},l.a.createElement("label",null,"Select Technologies"),y.map((function(e){return l.a.createElement("div",{className:"technology",key:e},l.a.createElement("lable",null,l.a.createElement("input",Object.assign({className:"form-check-input p-2",type:"checkbox",value:e,"aria-label":"Checkbox for following text input"},T("knownLanguages",{validate:function(e){return console.log("val -",e.length),!(e.length||!L)||!!e.length}}))),e))})),(null===D||void 0===D?void 0:D.knownLanguages)&&l.a.createElement("p",null,"Please known languages"))),l.a.createElement("div",{className:"row mb-2"},l.a.createElement("div",{className:"col"},l.a.createElement("label",{className:"d-block"},"Gender"),l.a.createElement("label",{className:"radio-inline d-inline p-2"},l.a.createElement("input",Object.assign({type:"radio",name:"optradio"},T("gender"),{value:!0,defaultChecked:!L||P&&P.gender})),"Male"),l.a.createElement("label",{className:"radio-inline d-inline p-2"},l.a.createElement("input",Object.assign({type:"radio",name:"optradio"},T("gender"),{value:!1,defaultChecked:!!L&&!(P&&P.gender)})),"Female")),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"Date Of Birth"),P&&P.dob&&l.a.createElement(v.a,{closeOnSelect:!0,ref:b,timeFormat:!1,initialValue:L?new Date(P.dob):""}),!L&&l.a.createElement(v.a,{closeOnSelect:!0,ref:b}))),l.a.createElement("div",{className:"col mb-2"},l.a.createElement("label",null,"Tell me about yourself more"),l.a.createElement("textarea",Object.assign({className:"form-control",defaultValue:L?M("bio",P?P.bio:""):""},T("bio",{validate:function(e){return""!==e}}))),D.bio&&l.a.createElement("p",null,"Discribe yourself")),l.a.createElement("span",{className:"d-grid d-md-flex justify-content-md-end"},l.a.createElement("input",{type:"submit",className:"btn btn-secondary me-md-2",value:"Submit"}),l.a.createElement("button",{type:"button",className:"btn btn-primary me-md-2",onClick:function(){return O(!0)}},"Share")))))),l.a.createElement(d.a,{show:x},l.a.createElement(d.a.Header,null,l.a.createElement("h5",null,"Send-Form")),l.a.createElement(d.a.Body,null,"Send via Link:",l.a.createElement("a",{href:"mailto:?subject=Information Form,body=Information Form Link: http://localhost:3000"},l.a.createElement("button",{className:"btn btn mr-3",onClick:function(){return C(!1)}},l.a.createElement("box-icon",{name:"mail-send"}))),l.a.createElement("button",{className:"btn btn mr-3",onClick:function(){return C(!0)}},l.a.createElement("box-icon",{name:"link-alt"})),l.a.createElement("hr",null),S&&"http://localhost:3000"),l.a.createElement(d.a.Footer,null,S&&l.a.createElement("button",{type:"button",className:"btn btn-primary me-md-2",onClick:function(){navigator.clipboard.writeText("http://localhost:3000")}},"Copy Link"),l.a.createElement("button",{type:"button",className:"btn btn-danger me-md-2",onClick:function(){O(!1),C(!1)}},"Close"))))}var k=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary"},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"}))))},x=t(21),O=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement("h1",{className:"display-1"},"Page Not Found"))};var j=function(e){return l.a.createElement(x.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",component:N}),l.a.createElement(p.a,{component:O}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.44dbe9e8.chunk.js.map