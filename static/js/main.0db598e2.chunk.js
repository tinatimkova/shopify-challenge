(this["webpackJsonpmovie-challenge"]=this["webpackJsonpmovie-challenge"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n(0),c=n.n(i),o=n(5),a=n.n(o),r=(n(25),n(6)),u=(n(26),n(17)),l=n.n(u),j=(n(27),n(16)),b=n.n(j);var m=function(t){var e=t.getResults,n=t.text,i=t.setText;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h5",{children:"Movie title"}),Object(s.jsxs)("div",{className:"search-bar",children:[Object(s.jsx)(l.a,{className:"search-icon"}),Object(s.jsx)("input",{className:"search-field",type:"text",autoFocus:"autofocus",placeholder:"Search Movies...",value:n,onChange:function(t){i(t.target.value),function(t){return b()({method:"GET",url:"http://www.omdbapi.com/?apikey=".concat("e31d0927","&s=").concat(t,"&r=json&type=movie")})}(n).then((function(t){"True"===t.data.Response&&e(t.data.Search)}))}})]})]})};n(54);function d(t){var e=t.movie,n=t.button,i=t.setNominations,c=t.nominations;return Object(s.jsxs)("li",{className:"movie",children:[Object(s.jsxs)("span",{children:[e.Title,"(",e.Year,")"]}),Object(s.jsx)("input",{type:"button",className:"submit-button",value:n,onClick:function(){if("Remove"===n){var t=c.filter((function(t){return t.imdbID!==e.imdbID}));return i(t)}if("Nominate"===n&&c.length<5)return i(c.concat(e))},disabled:-1!==c.findIndex((function(t){return t.imdbID===e.imdbID}))&&"Nominate"===n||c.length>=5&&"Nominate"===n?"disabled":""})]})}n(55);function h(t){var e=t.title,n=t.results,i=t.nominations,c=t.setNominations,o=t.button,a="";return n&&n.length>0&&(a=n.map((function(t,e){return Object(s.jsx)(d,{movie:t,results:n,nominations:i,setNominations:c,button:o},e)}))),Object(s.jsxs)("div",{className:"results-card",children:[Object(s.jsx)("h6",{children:e}),Object(s.jsx)("ul",{children:a})]})}var x=function(){var t=Object(i.useState)(null),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)([]),a=Object(r.a)(o,2),u=a[0],l=a[1],j=Object(i.useState)(""),b=Object(r.a)(j,2),d=b[0],x=b[1];return Object(s.jsxs)(i.Fragment,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h4",{children:"The Shoppies"}),Object(s.jsx)("div",{className:"search",children:Object(s.jsx)(m,{getResults:c,text:d,setText:x})})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(h,{title:"Results for '".concat(d,"'"),results:n,nominations:u,setNominations:l,button:"Nominate"}),Object(s.jsx)(h,{title:"Nominations",results:u,nominations:u,setNominations:l,button:"Remove"})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),c(t),o(t)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),O()}},[[57,1,2]]]);
//# sourceMappingURL=main.0db598e2.chunk.js.map