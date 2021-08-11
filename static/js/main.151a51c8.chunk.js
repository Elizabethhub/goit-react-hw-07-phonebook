(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[2],{10:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}));var c=n(2),r=Object(c.b)("auth/registerUser"),a=Object(c.b)("auth/loginUser"),i=Object(c.b)("auth/signOut")},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return b})),n.d(e,"c",(function(){return i}));var c=n(2),r=Object(c.b)("users/addUser"),a=Object(c.b)("users/deleteUser"),i=Object(c.b)("users/getUsers"),o=Object(c.b)("users/setFilter"),u=Object(c.b)("users/setError"),s=Object(c.b)("users/resetError"),b=Object(c.b)("users/setLoader");Object(c.b)("users/deleteUserContacts"),Object(c.b)("users/addCount")},53:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var c,r,a,i,o,u,s,b,j,d,l,O=n(0),f=n(26),h=n.n(f),p=n(15),m=n(16),v=n(10),x=function(t){return Boolean(t.auth.idToken)},g=n(1),k=[{name:"Home",path:"/",component:Object(O.lazy)((function(){return n.e(6).then(n.bind(null,89))})),exact:!0,isPrivate:!1,restricted:!1},{name:"About",path:"/about",component:function(){return Object(g.jsx)("h2",{children:"AboutPage"})},exact:!0,isPrivate:!1,restricted:!1},{name:"Phonebook",path:"/contacts",component:Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,90))})),exact:!0,isPrivate:!0,restricted:!1},{name:"Sign Up",path:"/signup",component:Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,91))})),exact:!0,isPrivate:!1,restricted:!0},{name:"Sign In",path:"/signin",component:Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,91))})),exact:!0,isPrivate:!1,restricted:!0}],y=n(14),C=function(t){var e=t.isAuth,n=t.path,c=t.exact,r=t.name,a=t.isPrivate,i=t.restricted;return Object(g.jsxs)(g.Fragment,{children:[!a&&!i&&Object(g.jsx)("li",{className:"navListItem",children:Object(g.jsx)(y.b,{to:n,exact:c,className:"navLink",activeClassName:"navLinkActive",children:r.toUpperCase()})},n),a&&!i&&e&&Object(g.jsx)("li",{className:"navListItem",children:Object(g.jsx)(y.b,{to:n,exact:c,className:"navLink",activeClassName:"navLinkActive",children:r.toUpperCase()})},n),!a&&i&&!e&&Object(g.jsx)("li",{className:"navListItem",children:Object(g.jsx)(y.b,{to:n,exact:c,className:"navLink",activeClassName:"navLinkActive",children:r.toUpperCase()})},n)]})},A=n(21),L=n(22),T=L.a.nav(c||(c=Object(A.a)(["\n  .navList {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .navListItem:not(:last-child) {\n    margin-right: 20px;\n  }\n  .navLink {\n    text-decoration: none;\n    font-weight: 700;\n    color: cornflowerblue;\n    cursor: pointer;\n  }\n  .navLinkActive {\n    color: #59446d;\n  }\n"]))),I=Object(p.b)((function(t){return{isAuth:x(t)}}),{signOut:v.c})((function(t){var e=t.isAuth,n=t.signOut;return Object(g.jsx)(T,{children:Object(g.jsxs)("ul",{className:"navList",children:[k.map((function(t){return Object(O.createElement)(C,Object(m.a)(Object(m.a)({},t),{},{key:t.path,isAuth:e}))})),e&&Object(g.jsx)("li",{className:"navLink",onClick:function(){return n()},children:"LOGOUT"})]})})})),P=L.a.header(r||(r=Object(A.a)(["\n  height: 60px;\n  background-color: #72728d;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 40px;\n"]))),U=function(){return Object(g.jsx)(P,{children:Object(g.jsx)(I,{})})},N=n(6),E=function(t){var e=t.isAuth,n=t.path,c=t.component,r=t.exact;return e?Object(g.jsx)(N.b,{path:n,exact:r,component:c}):Object(g.jsx)(N.a,{to:"/signin"})},w=Object(p.b)((function(t){var e;return{isAuth:null===(e=t.auth)||void 0===e?void 0:e.idToken}}))((function(t){var e=t.isAuth,n=t.path,c=t.component,r=t.exact,a=t.restricted;return e&&a?Object(g.jsx)(N.a,{to:"/contacts"}):Object(g.jsx)(N.b,{path:n,exact:r,component:c})})),S=L.a.main(a||(a=Object(A.a)(["\n  padding: 0 40px;\n"]))),z=Object(p.b)((function(t){return{isAuth:x(t)}}))((function(t){var e=t.isAuth;return Object(g.jsx)(S,{children:Object(g.jsx)(O.Suspense,{fallback:Object(g.jsx)("h2",{children:"...loading"}),children:Object(g.jsx)(N.d,{children:k.map((function(t){return t.isPrivate?Object(O.createElement)(E,Object(m.a)(Object(m.a)({},t),{},{key:t.path,isAuth:e})):Object(O.createElement)(w,Object(m.a)(Object(m.a)({},t),{},{key:t.path,isAuth:e}))}))})})})})),F=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(U,{}),Object(g.jsx)(z,{})]})},q=n(2),R=n(8),B=n(3),J=n(25),G=n(18),H=Object(q.c)([],(i={},Object(B.a)(i,G.c,(function(t,e){return e.payload})),Object(B.a)(i,G.a,(function(t,e){var n=e.payload;return[].concat(Object(J.a)(t),[n])})),Object(B.a)(i,G.b,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(B.a)(i,v.c,(function(){return[]})),i)),D=Object(q.c)("",(o={},Object(B.a)(o,G.f,(function(t,e){return e.payload})),Object(B.a)(o,v.c,(function(){return""})),o)),K=Object(q.c)(!1,Object(B.a)({},G.g,(function(t){return!t}))),M=Object(q.c)("",(u={},Object(B.a)(u,G.e,(function(t,e){return e.payload})),Object(B.a)(u,G.d,(function(){return""})),Object(B.a)(u,v.c,(function(){return""})),u)),Q=Object(R.b)({items:H,filter:D,error:M,isLoading:K}),V=n(39),W=n.n(V),X=Object(q.c)({idToken:"",refreshToken:""},(s={},Object(B.a)(s,v.b,(function(t,e){var n=e.payload;return{idToken:n.idToken,refreshToken:n.refreshToken}})),Object(B.a)(s,v.a,(function(t,e){var n=e.payload;return{idToken:n.idToken,refreshToken:n.refreshToken}})),Object(B.a)(s,v.c,(function(){return{idToken:"",refreshToken:""}})),s)),Y=Object(q.c)({email:"",localId:""},(b={},Object(B.a)(b,v.b,(function(t,e){var n=e.payload;return{email:n.email,localId:n.localId}})),Object(B.a)(b,v.a,(function(t,e){var n=e.payload;return{email:n.email,localId:n.localId}})),Object(B.a)(b,v.c,(function(){return{email:"",localId:""}})),b)),Z=n(24),$=n(7),_=Object(q.c)([],(j={},Object(B.a)(j,$.i,(function(t,e){var n=e.payload;return Object(J.a)(n)})),Object(B.a)(j,$.c,(function(t,e){var n=e.payload;return[].concat(Object(J.a)(t),[n])})),Object(B.a)(j,$.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),j)),tt=Object(q.c)("",Object(B.a)({},$.j,(function(t,e){return e.payload}))),et=Object(q.c)(!1,(d={},Object(B.a)(d,$.b,(function(){return!0})),Object(B.a)(d,$.c,(function(){return!1})),Object(B.a)(d,$.a,(function(){return!1})),Object(B.a)(d,$.e,(function(){return!0})),Object(B.a)(d,$.f,(function(){return!1})),Object(B.a)(d,$.d,(function(){return!1})),Object(B.a)(d,$.h,(function(){return!0})),Object(B.a)(d,$.i,(function(){return!1})),Object(B.a)(d,$.g,(function(){return!1})),d)),nt=function(t,e){return e.payload},ct=function(){return null},rt=Object(q.c)(null,(l={},Object(B.a)(l,$.b,ct),Object(B.a)(l,$.a,nt),Object(B.a)(l,$.e,ct),Object(B.a)(l,$.d,nt),Object(B.a)(l,$.h,ct),Object(B.a)(l,$.g,nt),l)),at=Object(R.b)({items:_,filter:tt,loading:et,error:rt}),it={key:"auth",storage:W.a,whitelist:["idToken","refreshToken"]},ot=Object(R.b)({contacts:at,phonebookUsers:Q,auth:Object(Z.a)(it,X),user:Y}),ut=n(19),st=Object(q.a)({reducer:ot,devTools:!1,middleware:Object(q.d)({serializableCheck:{ignoredActions:[ut.a,ut.f,ut.b,ut.c,ut.d,ut.e]}})});Object(ut.g)(st);var bt=st;n(53);h.a.render(Object(g.jsx)(p.a,{store:bt,children:Object(g.jsx)(y.a,{children:Object(g.jsx)(F,{})})}),document.getElementById("root"))},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return d})),n.d(e,"j",(function(){return l}));var c=n(2),r=Object(c.b)("contacts/addContactRequest"),a=Object(c.b)("contacts/addContactSuccess"),i=Object(c.b)("contacts/addContactError"),o=Object(c.b)("contacts/deleteContactRequest"),u=Object(c.b)("contacts/deleteContactSuccess"),s=Object(c.b)("contacts/deleteContactError"),b=Object(c.b)("contacts/getContactRequest"),j=Object(c.b)("contacts/getContactSuccess"),d=Object(c.b)("contacts/getContactError"),l=Object(c.b)("contacts/setFilter")}},[[54,3,4]]]);
//# sourceMappingURL=main.151a51c8.chunk.js.map