(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(7),i=n.n(a),s=(n(16),n(2)),u=n(9),o=function(e){var t=e.setCategories,n=Object(r.useState)("Dale Boke"),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),i.trim().length<2)return alert("Escribi bien capo");t((function(e){return[i].concat(Object(u.a)(e))}))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})})},j=n(10),l=n(6),d=n.n(l),b=n(8),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c,r,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=6tmuFqBAzVVez9b7PqMRUsLYAscIAjlN"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.url,n=e.title;return Object(c.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(c.jsx)("img",{src:t,alt:n}),Object(c.jsx)("p",{children:n})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),2e3)}))}),[e]),c}(t),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"animate__heartBeat",children:t}),i&&Object(c.jsx)("p",{children:"loading"}),Object(c.jsx)("div",{className:"card-grid",children:Object(c.jsx)("ol",{children:a.map((function(e){return Object(c.jsx)(f,Object(j.a)({},e),e.id)}))})})]})},h=function(){var e=Object(r.useState)(["One Punch "]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(o,{setCategories:a}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(e){return Object(c.jsx)(O,{category:e},e)}))})]})};i.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a8be3c25.chunk.js.map