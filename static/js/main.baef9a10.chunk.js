(this.webpackJsonpartcalc=this.webpackJsonpartcalc||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,u,s,l=t(0),d=t.n(l),j=t(10),b=t.n(j),f=t(4),m=t(7),O=t(2),h=t(3),v=h.a.div(r||(r=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n"]))),g=h.a.label(c||(c=Object(O.a)(["\n  display: flex;\n  width: 75%;\n  max-width: 50rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n"]))),x=h.a.input(i||(i=Object(O.a)(["\n  font-size: 2rem;\n  margin: 1rem 0rem;\n  width: 100%;\n"]))),p=t(1),w=Object(l.forwardRef)((function(e,n){var t=e.value,r=e.onChange;return Object(p.jsxs)(g,{children:["Distance (meters):",Object(p.jsx)(x,{type:"number",pattern:"\\d*",value:t,onChange:function(e){return r(e.target.value)},ref:n})]})})),S=h.a.button(a||(a=Object(O.a)(["\n  background-color: green;\n  border: none;\n  width: 25%;\n  height: 10%;\n  font-size: 2rem;\n  color: white;\n  border-radius: 2rem;\n  margin-top: 1rem;\n  cursor: pointer;\n"]))),k=function(e){var n=e.onClick;return Object(p.jsx)(S,{onClick:n,children:"Reset"})},y=h.a.p(o||(o=Object(O.a)(["\n  font-size: 4rem;\n  font-weight: 300;\n"]))),C=function(e){var n=e.value;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(y,{children:["Angle: ",n]})})},A=h.a.div(u||(u=Object(O.a)([""]))),E=h.a.button(s||(s=Object(O.a)(["\n  cursor: pointer;\n  width: 10rem;\n  height: 5rem;\n  margin: 1rem 0.2rem;\n  border-radius: 1rem;\n  background-color: ","\n"])),(function(e){return e.selected?"#86EFAC":"#F43F5E"})),z=function(e){var n=e.nations,t=e.onSelect;return Object(p.jsx)(A,{children:n.map((function(e){return Object(p.jsx)(E,{selected:e.selected,onClick:function(){return t(e.id)},children:e.name},e.id)}))})},F={GERMAN_USA:{id:1,name:"Germany / USA",selected:!1},SOVIET:{id:2,name:"Soviet Union",selected:!1}};var R=function(){var e=Object(l.useState)(0),n=Object(m.a)(e,2),t=n[0],r=n[1],c=Object(l.useState)(Object.values(F)),i=Object(m.a)(c,2),a=i[0],o=i[1],u=Object(l.createRef)();return Object(p.jsxs)(v,{children:[Object(p.jsx)(z,{nations:a,onSelect:function(e){var n=a.map((function(n){return n.id===e?Object(f.a)(Object(f.a)({},n),{},{selected:!0}):Object(f.a)(Object(f.a)({},n),{},{selected:!1})}));o(n)}}),Object(p.jsx)(w,{type:"number",value:t,onChange:r,ref:u}),Object(p.jsx)(C,{value:function(){var e=a.find((function(e){return e.selected}));switch(null===e||void 0===e?void 0:e.id){case 1:return 1004-.24*t;case 2:return function(e){return 1142-.21*e}(t);default:return 0}}()}),Object(p.jsx)(k,{onClick:function(){r(0),u.current.focus()}})]})};t(21);b.a.render(Object(p.jsx)(d.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.baef9a10.chunk.js.map