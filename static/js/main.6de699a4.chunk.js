(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(23),r=n.n(s),o=n(19),a=n.n(o),i=n(20),l=n(30),u=n.n(l),j=n(34),d=n(17),b=n(6),h=(n(123),n(5)),O=function(e){var t=e.id,n=e.go,s=e.fetchedUser,r=e.userFriends,o=e.chooseUser,a=Object(c.useState)(""),i=Object(d.a)(a,2),l=i[0],u=i[1],j=Object(c.useState)(""),O=Object(d.a)(j,2),f=O[0],p=O[1];return Object(c.useEffect)((function(){r&&p(r.response.items)}),[r]),Object(c.useEffect)((function(){l?p((function(e){return e.filter((function(e){return e.first_name.toLowerCase().startsWith(l.toLowerCase())||e.last_name.toLowerCase().startsWith(l.toLowerCase())}))})):l||p(r.response.items)}),[l]),Object(h.jsxs)(b.n,{id:t,children:[Object(h.jsx)(b.o,{children:"Friends"}),s&&Object(h.jsx)(b.i,{header:Object(h.jsx)(b.j,{mode:"secondary",children:"I am"}),children:Object(h.jsx)(b.e,{before:s.photo_200?Object(h.jsx)(b.c,{src:s.photo_200}):null,description:s.city&&s.city.title?s.city.title:"",children:"".concat(s.first_name," ").concat(s.last_name)})}),Object(h.jsxs)(b.i,{header:Object(h.jsx)(b.j,{mode:"secondary",children:"My friends"}),children:[Object(h.jsx)(b.r,{value:l,onChange:function(e){return t=e,u((function(e){return t.target.value})),void console.log(l);var t}}),Object(h.jsx)(b.l,{children:f?f.map((function(e,t){return Object(h.jsx)(b.t,{onClick:function(e){return c=t,s=e,o((function(e){return c})),void n(s);var c,s},"data-to":"detailed",before:e.photo_100?Object(h.jsx)(b.c,{src:e.photo_100}):null,description:e.city&&e.city.title?e.city.title:"",children:"".concat(e.first_name," ").concat(e.last_name)},t)})):""})]})]})},f=n(26),p=n(126),m=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)(!1),a=Object(d.a)(o,2),l=a[0],u=a[1],j=Object(c.useState)(null),O=Object(d.a)(j,2),m=O[0],x=O[1],g=["January","February","March","April","May","June","July","August","September","Oktober","November","December"];return Object(c.useEffect)((function(){r((function(t){return e.userFriends.response.items[e.whichUser]}))}),[e]),console.log(m),s&&console.log("detailed",e.storage),Object(h.jsxs)(b.n,{id:e.id,children:[Object(h.jsxs)(b.o,{left:Object(h.jsx)(b.p,{onClick:e.go,"data-to":"home"}),children:["back to the list ",console.log(s)]}),s?Object(h.jsxs)(b.i,{children:[Object(h.jsxs)(b.h,{style:{margin:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32},children:[(null===s||void 0===s?void 0:s.photo_200_orig)?Object(h.jsx)(b.c,{size:96,src:s.photo_200_orig}):null,Object(h.jsx)(b.v,{style:{marginBottom:8,marginTop:20},level:"2",weight:"medium",children:"".concat(s.first_name," ").concat(s.last_name,"  ")}),s.status?Object(h.jsx)(b.m,{textWrap:"full",children:Object(h.jsx)(b.k,{header:"\u0427\u0442\u043e \u0434\u0443\u043c\u0430\u0435\u0442:",children:"".concat(s.status)})}):""]}),Object(h.jsxs)(b.i,{children:[Object(h.jsx)(b.j,{mode:"secondary",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),s.bdate?Object(h.jsx)(b.t,{children:Object(h.jsx)(b.k,{header:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",children:"".concat(function(e){var t=e.match(/\d+/g);return t[1]=g[t[1]-1],t.join(" ")}(s.bdate))})}):"",s.city&&s.city.title?Object(h.jsx)(b.t,{children:Object(h.jsx)(b.k,{header:"\u0413\u043e\u0440\u043e\u0434",children:"".concat(s.city.title)})}):"",s.country&&s.country.title?Object(h.jsx)(b.t,{children:Object(h.jsx)(b.k,{header:"\u0421\u0442\u0440\u0430\u043d\u0430",children:"".concat(s.country.title)})}):"",s.faculty_name?Object(h.jsx)(b.t,{children:Object(h.jsxs)(b.k,{header:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:["\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b"," ".concat(s.faculty_name),Object(h.jsx)("br",{}),s.university_name?" \u0432 ".concat(s.university_name," "):"",s.graduation?"  \u0432 ".concat(s.graduation," \u0433\u043e\u0434\u0443"):""]})}):""]}),l?Object(h.jsx)(b.i,{children:Object(h.jsx)(b.g,{top:"What`s on your mind?",children:Object(h.jsx)(b.u,{onChange:function(e){x((function(t){return e.target.value}))},placeholder:"write something about this person"})})}):"",l?Object(h.jsx)(b.d,{style:{marginLeft:"15px"},onClick:function(){return e.setStorage(e.storage.map((function(t,n){return t.id===s.domain&&m?Object(i.a)(Object(i.a)({},e.storage[n]),{},{id:s.domain,note:[].concat(Object(f.a)(t.note),[m])}):t}))),x((function(e){return""})),void u((function(e){return!e}))},mode:m?"commerce":"destructive",children:m?"save":"close"}):Object(h.jsx)(b.f,{onClick:function(){return u((function(e){return!e}))},before:Object(h.jsx)(p.a,{}),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"}),e.storage[e.whichUser].note.length?Object(h.jsxs)(b.i,{children:[Object(h.jsx)(b.j,{mode:"secondary",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),Object(h.jsx)(b.t,{children:e.storage[e.whichUser].note.map((function(t,n){return Object(h.jsxs)(b.m,{textWrap:"full",children:["Note ".concat(n+1,": ").concat(t),Object(h.jsx)(b.d,{style:{marginLeft:"15px"},onClick:function(){return t=e.whichUser,c=n,void(e.storage[t].note.length&&e.setStorage(e.storage.map((function(n,r){return r===t?Object(i.a)(Object(i.a)({},e.storage[r]),{},{id:s.domain,note:[].concat(Object(f.a)(n.note.slice(0,c)),Object(f.a)(n.note.slice(c+1)))}):n}))));var t,c},mode:"destructive",children:"delete"})]})}))})]}):""]}):""]})},x={STATUS:"online"},g=function(){var e=Object(c.useState)("home"),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),o=Object(d.a)(r,2),l=o[0],f=o[1],p=Object(c.useState)(null),g=Object(d.a)(p,2),y=g[0],v=g[1],_=Object(c.useState)(null),S=Object(d.a)(_,2),k=S[0],w=S[1],A=Object(c.useState)({}),C=Object(d.a)(A,2),U=C[0],W=C[1],I=Object(c.useState)(Object(h.jsx)(b.q,{size:"large"})),J=Object(d.a)(I,2),K=J[0],T=J[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t,n,c,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,a.a.send("VKWebAppGetAuthToken",{app_id:7888409,scope:"friends"});case 5:return n=e.sent,e.next=8,a.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:7888409,params:{user_ids:"".concat(t.id),v:"5.131",access_token:"".concat(n.access_token),fields:" nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities"}});case 8:return c=e.sent,e.next=11,a.a.send("VKWebAppStorageSet",{key:x.STATUS,value:JSON.stringify({online:!0})});case 11:return s=e.sent,console.log(s),e.next=15,a.a.send("VKWebAppStorageGet",{keys:Object.values(x)});case 15:r=e.sent,console.log(JSON.parse(r.keys[0].value)),f(t),v(c),T(null);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){if(y){var e=y.response.items;console.log("friends",e),W((function(t){return e.map((function(e){return Object(i.a)(Object(i.a)({},t),{},{id:e.domain,note:[]})}))}))}}),[y]),console.log("storage",U);var V=function(e){s(e.currentTarget.dataset.to)};return console.log(y),console.log("user is",k),Object(h.jsx)(b.a,{children:Object(h.jsx)(b.b,{children:Object(h.jsxs)(b.w,{activePanel:n,popout:K,children:[Object(h.jsx)(O,{id:"home",fetchedUser:l,chooseUser:w,userFriends:y,go:V}),Object(h.jsx)(m,{id:"detailed",storage:U,setStorage:W,whichUser:k,userFriends:y,go:V})]})})})};a.a.send("VKWebAppInit"),r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.6de699a4.chunk.js.map