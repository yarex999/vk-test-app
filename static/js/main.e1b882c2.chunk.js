(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(23),s=n.n(r),o=n(18),i=n.n(o),a=n(20),l=n(30),d=n.n(l),j=n(34),u=n(19),b=n(6),h=(n(124),n(5)),O=function(e){var t=e.id,n=e.go,c=e.fetchedUser,r=e.userFriends,s=e.chooseUser;return Object(h.jsxs)(b.n,{id:t,children:[Object(h.jsx)(b.o,{children:"Friends"}),c&&Object(h.jsx)(b.i,{header:Object(h.jsx)(b.j,{mode:"secondary",children:"I am"}),children:Object(h.jsx)(b.e,{before:c.photo_200?Object(h.jsx)(b.c,{src:c.photo_200}):null,description:c.city&&c.city.title?c.city.title:"",children:"".concat(c.first_name," ").concat(c.last_name)})}),Object(h.jsx)(b.i,{header:Object(h.jsx)(b.j,{mode:"secondary",children:"My friends"}),children:Object(h.jsx)(b.l,{children:r?r.response.items.map((function(e,t){return Object(h.jsx)(b.r,{onClick:function(e){return c=t,r=e,s((function(e){return c})),void n(r);var c,r},"data-to":"detailed",before:e.photo_100?Object(h.jsx)(b.c,{src:e.photo_100}):null,description:e.city&&e.city.title?e.city.title:"",children:"".concat(e.first_name," ").concat(e.last_name)},t)})):""})})]})},p=n(26),m=n(127),f=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(null),O=Object(u.a)(j,2),f=O[0],x=O[1],g=["January","February","March","April","May","June","July","August","September","Oktober","November","December"];return Object(c.useEffect)((function(){s((function(t){return e.userFriends.response.items[e.whichUser]}))}),[e]),console.log(f),r&&console.log("detailed",e.storage),Object(h.jsxs)(b.n,{id:e.id,children:[Object(h.jsxs)(b.o,{left:Object(h.jsx)(b.p,{onClick:e.go,"data-to":"home"}),children:["back to the list ",console.log(r)]}),r?Object(h.jsxs)(b.i,{children:[Object(h.jsxs)(b.h,{style:{margin:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32},children:[(null===r||void 0===r?void 0:r.photo_200_orig)?Object(h.jsx)(b.c,{size:96,src:r.photo_200_orig}):null,Object(h.jsx)(b.t,{style:{marginBottom:8,marginTop:20},level:"2",weight:"medium",children:"".concat(r.first_name," ").concat(r.last_name,"  ")}),r.status?Object(h.jsx)(b.m,{textWrap:"full",children:Object(h.jsx)(b.k,{header:"\u0427\u0442\u043e \u0434\u0443\u043c\u0430\u0435\u0442:",children:"".concat(r.status)})}):""]}),Object(h.jsxs)(b.i,{children:[Object(h.jsx)(b.j,{mode:"secondary",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),r.bdate?Object(h.jsx)(b.r,{children:Object(h.jsx)(b.k,{header:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",children:"".concat(function(e){var t=e.match(/\d+/g);return t[1]=g[t[1]-1],t.join(" ")}(r.bdate))})}):"",r.city&&r.city.title?Object(h.jsx)(b.r,{children:Object(h.jsx)(b.k,{header:"\u0413\u043e\u0440\u043e\u0434",children:"".concat(r.city.title)})}):"",r.country&&r.country.title?Object(h.jsx)(b.r,{children:Object(h.jsx)(b.k,{header:"\u0421\u0442\u0440\u0430\u043d\u0430",children:"".concat(r.country.title)})}):"",r.faculty_name?Object(h.jsx)(b.r,{children:Object(h.jsxs)(b.k,{header:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:["\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b"," ".concat(r.faculty_name),Object(h.jsx)("br",{}),r.university_name?" \u0432 ".concat(r.university_name," "):"",r.graduation?"  \u0432 ".concat(r.graduation," \u0433\u043e\u0434\u0443"):""]})}):""]}),l?Object(h.jsx)(b.i,{children:Object(h.jsx)(b.g,{top:"What`s on your mind?",children:Object(h.jsx)(b.s,{onChange:function(e){x((function(t){return e.target.value}))},placeholder:"write something about this person"})})}):"",l?Object(h.jsx)(b.d,{style:{marginLeft:"15px"},onClick:function(){return e.setStorage(e.storage.map((function(t,n){return t.id===r.domain&&f?Object(a.a)(Object(a.a)({},e.storage[n]),{},{id:r.domain,note:[].concat(Object(p.a)(t.note),[f])}):t}))),x((function(e){return""})),void d((function(e){return!e}))},mode:f?"commerce":"destructive",children:f?"save":"close"}):Object(h.jsx)(b.f,{onClick:function(){return d((function(e){return!e}))},before:Object(h.jsx)(m.a,{}),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"}),e.storage[e.whichUser].note.length?Object(h.jsxs)(b.i,{children:[Object(h.jsx)(b.j,{mode:"secondary",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),Object(h.jsx)(b.r,{children:e.storage[e.whichUser].note.map((function(t,n){return Object(h.jsxs)(b.m,{textWrap:"full",children:["Note ".concat(n+1,": ").concat(t),Object(h.jsx)(b.d,{style:{marginLeft:"15px"},onClick:function(){return t=e.whichUser,c=n,void(e.storage[t].note.length&&e.setStorage(e.storage.map((function(n,s){return s===t?Object(a.a)(Object(a.a)({},e.storage[s]),{},{id:r.domain,note:[].concat(Object(p.a)(n.note.slice(0,c)),Object(p.a)(n.note.slice(c+1)))}):n}))));var t,c},mode:"destructive",children:"delete"})]})}))})]}):""]}):""]})},x={STATUS:"online"},g=function(){var e=Object(c.useState)("home"),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),o=Object(u.a)(s,2),l=o[0],p=o[1],m=Object(c.useState)(null),g=Object(u.a)(m,2),y=g[0],_=g[1],v=Object(c.useState)(null),k=Object(u.a)(v,2),S=k[0],A=k[1],U=Object(c.useState)({}),w=Object(u.a)(U,2),W=w[0],C=w[1],I=Object(c.useState)(Object(h.jsx)(b.q,{size:"large"})),J=Object(u.a)(I,2),K=J[0],T=J[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,i.a.send("VKWebAppGetAuthToken",{app_id:7888409,scope:"friends"});case 5:return n=e.sent,e.next=8,i.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:7888409,params:{user_ids:"".concat(t.id),v:"5.131",access_token:"".concat(n.access_token),fields:" nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities"}});case 8:return c=e.sent,e.next=11,i.a.send("VKWebAppStorageSet",{key:x.STATUS,value:JSON.stringify({online:!0})});case 11:return r=e.sent,console.log(r),e.next=15,i.a.send("VKWebAppStorageGet",{keys:Object.values(x)});case 15:s=e.sent,console.log(JSON.parse(s.keys[0].value)),p(t),_(c),T(null);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){if(y){var e=y.response.items;console.log("friends",e),C((function(t){return e.map((function(e){return Object(a.a)(Object(a.a)({},t),{},{id:e.domain,note:[]})}))}))}}),[y]),console.log("storage",W);var V=function(e){r(e.currentTarget.dataset.to)};return console.log(y),console.log("user is",S),Object(h.jsx)(b.a,{children:Object(h.jsx)(b.b,{children:Object(h.jsxs)(b.u,{activePanel:n,popout:K,children:[Object(h.jsx)(O,{id:"home",fetchedUser:l,chooseUser:A,userFriends:y,go:V}),Object(h.jsx)(f,{id:"detailed",storage:W,setStorage:C,whichUser:S,userFriends:y,go:V})]})})})};i.a.send("VKWebAppInit"),s.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.e1b882c2.chunk.js.map