(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{55:function(e,n){},57:function(e,n){},73:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var r,a,c,o=t(1),s=t.n(o),i=t(41),u=t.n(i),p=t(7),d=(t(73),t(10)),b=t(11),x=t(47),j=t(8),l=t(12),f=t.n(l),g=t(15),O=t(5),h=b.a.div(r||(r=Object(d.a)(["\n  margin: 10px 5px;\n  padding: 10px;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n"]))),v=function(e){var n=e.user.loggedIn,t=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n?p.g():p.a();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(O.jsx)("button",{onClick:t,children:n?"Sign Out":"Sign In/Up"})},m=function(){var e=Object(o.useState)({}),n=Object(j.a)(e,2),t=n[0],r=n[1];return Object(o.useEffect)((function(){return p.c().subscribe((function(e){return r(Object(x.a)({},e))}))}),[]),Object(O.jsx)(h,{children:Object(O.jsx)(v,{user:t})})},w=b.a.div(a||(a=Object(d.a)(["\n  margin: 10px 5px;\n  padding: 10px;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n"])));b.a.pre(c||(c=Object(d.a)(["\n  background: #f0f0f0;\n  border-radius: 5px;\n  max-height: 150px;\n  overflow-y: auto;\n  padding: 5px;\n"])));var k,S,y,C,A=function(){var e=Object(o.useState)("userMessage"),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)("--"),c=Object(j.a)(a,2),s=c[0],i=c[1],u=Object(o.useState)("--"),d=Object(j.a)(u,2),b=d[0],x=d[1],l=function(){var e=Object(g.a)(f.a.mark((function e(n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=t,r=Array.from(c).map((function(e){return e.charCodeAt(0)<128?e.charCodeAt(0).toString(16):encodeURIComponent(e).replace(/\%/g,"").toLowerCase()})).join(""),e.next=4,p.c().signUserMessage(r);case 4:a=e.sent,window.parent.postMessage({message:"compSignatures",value:a},"*"),i(a[0].signature),x(a[0].addr);case 8:case"end":return e.stop()}var c}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(O.jsxs)(w,{children:[Object(O.jsxs)("label",{children:["message:",Object(O.jsx)("input",{type:"text",value:t,onChange:function(e){console.log(e),r(e.target.value),console.log("value changed: "+t)}})]}),Object(O.jsx)("button",{onClick:l,children:"Sign"}),Object(O.jsx)("br",{}),"userAddress: ",b,Object(O.jsx)("br",{}),"message: ",s]})};b.a.div(k||(k=Object(d.a)(["\n  margin: 10px 5px;\n  padding: 10px;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n"]))),b.a.pre(S||(S=Object(d.a)(["\n  background: #f0f0f0;\n  border-radius: 5px;\n  max-height: 150px;\n  overflow-y: auto;\n  padding: 5px;\n"]))),b.a.div(y||(y=Object(d.a)(["\n  margin: 10px 5px;\n  padding: 10px;\n  border: 1px solid #c0c0c0;\n  border-radius: 5px;\n"]))),b.a.pre(C||(C=Object(d.a)(["\n  background: #f0f0f0;\n  border-radius: 5px;\n  max-height: 150px;\n  overflow-y: auto;\n  padding: 5px;\n"])));var I,M=b.a.div(I||(I=Object(d.a)(["\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n"])));var U=function(){return Object(O.jsxs)(M,{children:[Object(O.jsx)(m,{}),Object(O.jsx)(A,{})]})};p.b().put("accessNode.api","https://access-testnet.onflow.org").put("challenge.handshake","https://flow-wallet-testnet.blocto.app/authn"),u.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.2f277dba.chunk.js.map