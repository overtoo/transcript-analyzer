(this["webpackJsonptext-analyzer"]=this["webpackJsonptext-analyzer"]||[]).push([[0],{21:function(e,t,n){},25:function(e){e.exports=JSON.parse('["\u50b3\u67d3","\u904e\u654f","\u9996\u5148","\u6cd5\u5f8b","\u898f\u5b9a","\u793e\u4ea4","\u4e4b\u985e","\u898f\u7bc4","\u5d29\u6f70","\u5999","\u5dee\u7570","\u770b\u4e0d\u51fa\u4f86","\u88ab\u5e97","\u81f3\u65bc","\u8a87\u5f35","\u96a8\u6642","\u597d\u4e8b","\u6df1\u523b","\u5fa9\u6d3b\u7bc0","\u6643\u4f86\u6643\u53bb","\u9023\u7e8c\u5047\u65e5","\u7a7a\u8569\u8569","\u71df\u696d"]')},26:function(e){e.exports=JSON.parse('["\u5687","\u666e\u904d","\u75ab\u60c5","\u95dc\u4fc2","\u5fc5\u9808\u8981\u8aaa","\u5e7e\u4e4e","\u54b3\u55fd","\u5b63\u7bc0","\u5674\u568f","\u56e0\u6b64","\u5404\u7a2e","\u6b63\u5e38","\u767c\u751f","\u6d41\u9f3b\u6c34","\u7b97\u662f","\u72c2","\u539f\u56e0"]')},27:function(e){e.exports=JSON.parse('{"target":["\u50b3\u67d3","\u904e\u654f","\u9996\u5148","\u6cd5\u5f8b","\u898f\u5b9a","\u793e\u4ea4","\u4e4b\u985e","\u898f\u7bc4","\u5d29\u6f70","\u5999","\u5dee\u7570","\u770b\u4e0d\u51fa\u4f86","\u88ab\u5e97","\u81f3\u65bc","\u8a87\u5f35","\u96a8\u6642","\u597d\u4e8b","\u6df1\u523b","\u5fa9\u6d3b\u7bc0","\u6643\u4f86\u6643\u53bb","\u9023\u7e8c\u5047\u65e5","\u7a7a\u8569\u8569","\u71df\u696d"],"learned":["\u5687","\u666e\u904d","\u75ab\u60c5","\u95dc\u4fc2","\u5fc5\u9808\u8981\u8aaa","\u5e7e\u4e4e","\u54b3\u55fd","\u5b63\u7bc0","\u5674\u568f","\u56e0\u6b64","\u5404\u7a2e","\u6b63\u5e38","\u767c\u751f","\u6d41\u9f3b\u6c34","\u7b97\u662f","\u72c2","\u539f\u56e0"],"trash":[]}')},32:function(e,t,n){},39:function(e){e.exports=JSON.parse("{}")},41:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=n(24),o=n.n(r),s=(n(32),n(12)),i=n.n(s),d=n(14),u=n(11),l=n(16),j=n(6),f=n(18),b=(f.a,f.a.initializeApp({apiKey:"AIzaSyBWRZjPbE0egCI-ch6yuRwwUfVz1VvFy44",authDomain:"text-analyzer-7ad51.firebaseapp.com",projectId:"text-analyzer-7ad51",storageBucket:"text-analyzer-7ad51.appspot.com",messagingSenderId:"903119730099",appId:"1:903119730099:web:a1cdac09020e707d4687c6"}).firestore()),p=(f.a.auth(),n(25)),O=n(26),h=n(27),x=(n(39),n(21),n(3)),m=(n.p,function(e){var t=e.url,n=e.autoPlay,c=e.seekTo,r=e.refreshAudio,o=e.loadAudio,s=e.setGetTime,i=Object(a.useState)("0: 00"),d=Object(j.a)(i,2),u=d[0],l=d[1],f=function(e,t,n,c,r){var o=Object(a.useState)(new Audio(e)),s=Object(j.a)(o,1)[0],i=Object(a.useState)(t),d=Object(j.a)(i,2),u=d[0],l=d[1],f=Object(a.useState)(0),b=Object(j.a)(f,2),p=b[0],O=b[1];Object(a.useEffect)((function(){var e=setInterval((function(){return O(s.currentTime)}),1e3);return function(){clearInterval(e)}}),[]),Object(a.useEffect)((function(){u?s.play():s.pause()}),[u]);var h=function(e){s.pause(),s.currentTime=e,s.play()};return Object(a.useEffect)((function(){return r&&h(n),s.addEventListener("ended",(function(){return l(!1)})),function(){s.removeEventListener("ended",(function(){return l(!1)}))}}),[u,n,c,n]),Object(a.useEffect)((function(){return console.log("player loaded and ready to go"),r&&h(n),s.addEventListener("ended",(function(){return l(!1)})),function(){s.removeEventListener("ended",(function(){return l(!1)}))}}),[r]),[u,function(){return l(!u)},h,s.currentTime,p]}(t,n,c,r,o),b=Object(j.a)(f,5),p=(b[0],b[1],b[2],b[3]),O=b[4];return Object(a.useEffect)((function(){l(function(e){var t=e/3600,n=e%3600/60;return s(p),[t,n,e%60].map((function(e){return"0".concat(Math.floor(e)).slice(-2)})).join(":")}(p)),s(p)}),[O]),Object(x.jsxs)("div",{children:[u," ","  "]})}),v=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2);n[0],n[1];return Object(x.jsx)("div",{className:"words-wrapper",children:e.words[e.load].map((function(t){return Object(x.jsx)("span",{class:"bubble",style:{backgroundColor:e.color},onMouseDown:function(n){return function(t,n){if(0==t.button&&e.promoteTo){var a=e.words[e.load].filter((function(e){return e!==n})),c={};Object.assign(c,e.words),c[e.load]=a;var r=e.words[e.promoteTo];c[e.promoteTo]=[].concat(Object(u.a)(r),[n]),e.setWords(c)}else if(1==t.button&&e.demoteTo){var o=e.words[e.load].filter((function(e){return e!==n})),s={};Object.assign(s,e.words),s[e.load]=o;var i=e.words[e.demoteTo];s[e.demoteTo]=[].concat(Object(u.a)(i),[n]),e.setWords(s)}}(n,t)},children:t})}))})},g=(n.p,n.p,function(e){var t=e.setWords,n=e.words,c=e.controlMusic,r=(e.refresh,e.displayController),o=(e.cardChange,e.getTime),s=(e.parentLockTime,e.rawText),d=e.setLoadAudio,f=Object(a.useRef)([]),p=Object(a.useState)(!0),O=Object(j.a)(p,2),h=O[0],m=O[1];Object(a.useEffect)((function(){}),[]),Object(a.useEffect)((function(){var e,t;r.card&&!r.targetSen&&(window.addEventListener("wheel",(function(){h&&m(!1)})),window.addEventListener("keypress",(function(e){return function(e){97==e.keyCode&&m(!0)}(e)})),window.addEventListener("click",(function(e){d(!0)})),w.length>2&&h&&(console.log(o),w.map((function(t,n){o>t.time&&(e=n)})),console.log(e),e>0&&(t=e-1,f.current[t].scrollIntoView())))}),[o]);var v=Object(a.useState)([]),g=Object(j.a)(v,2),w=g[0],S=g[1],y=Object(a.useState)([]),N=Object(j.a)(y,2),T=(N[0],N[1],Object(a.useState)([])),E=Object(j.a)(T,2),k=E[0],C=E[1],A=Object(a.useState)(!1),I=Object(j.a)(A,2),L=I[0],$=I[1],D=Object(a.useState)(!1),M=Object(j.a)(D,2),W=M[0],z=M[1],F=Object(a.useState)(!1),P=Object(j.a)(F,2),R=P[0],J=P[1];function B(){return(B=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.collection("rawtranscripts"),e.next=3,t.doc("active").set({rawEN:s.en,rawPY:s.py,raw:s.cn,data:w,episode:s.episode});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){if("unloaded"!=s.cn&&s.data)S(s.data),console.log("data from cloud has been loaded. Should only happen once.");else if("unloaded"!=s.cn&&!s.data){console.log("raw data from cloud has loaded. NO TIMESTAMPS. should never happen unless raw."),$(!0);var e=s.cn.split("\u3002<><>").join("||$END$").split("\u3002<>").join("|$END$").split("<><>").join("||$END$").split("<>").join("|$END$").split("\u3002").join("\u3002$END$").split("\uff0c").join("\uff0c$END$").split("$END$").filter((function(e){return e})),a=s.en.split("<>"),c=s.py.split("<>");C([e,a,c]);var r=[];for(var o in k[0])r.push({index:parseInt(o),cn:k[0][o],en:k[1][o],py:k[2][o]});S(r),t(n),W&&J(!0),f.current=f.current.slice(0,w.length)}}),[s]),Object(a.useEffect)((function(){var e=Object(u.a)(w),t=0,a=0;for(var c in e){a+=e[c].cn.length}for(var r in e){var o=e[r];o.tw=[],o.length=o.cn.length,o.position=t,o.freePosition=parseInt(t/a*840),t+=o.cn.length}for(var s in e){var i=e[s];for(var d in n.target){var l=n.target[d],j=i.cn.indexOf(l);j>-1&&(i.tw||(i.tw=[]),i.tw.push(j),l.length>1&&i.tw.push(j+1),l.length>2&&i.tw.push(j+2),l.length>3&&i.tw.push(j+3))}}S(e),L&&z(!0)}),[n,L,R]),Object(x.jsxs)("div",{className:"".concat(r.card?"cards-wrapper":"nocards-wrapper"),children:[Object(x.jsxs)("div",{className:"save-to-cloud",children:[Object(x.jsxs)("button",{onClick:function(){r.card&&m(!h)},children:[" ",h?"AUTOSCROLL: ON":"AUTOSCROLL: OFF"," "]}),Object(x.jsx)("button",{onClick:function(){return B.apply(this,arguments)},children:"Save to Cloud"})]}),w.map((function(e,t){return 0==e.tw&&r.targetSen?Object(x.jsx)("div",{}):Object(x.jsxs)("div",{className:"".concat(r.card?"card":"nocard"),onClick:function(t){return c(t,e.time)},ref:function(e){return f.current[t]=e},children:[Object(x.jsx)("p",{className:"".concat(r.card?"sn py":"hide"),children:e.py}),Object(x.jsx)("span",{className:"off",children:e.cn.split("").map((function(t,n){return e.tw?e.tw.includes(n)?Object(x.jsx)("span",{className:"sn cn hl",children:t}):"|"==t?Object(x.jsx)("span",{className:"sn cn",children:Object(x.jsx)("br",{})}):Object(x.jsx)("span",{className:"sn cn",children:t}):Object(x.jsx)("span",{className:"sn cn",children:t})}))}),Object(x.jsx)("p",{className:"".concat(r.card?"sn en":"hide"),children:e.en}),Object(x.jsx)("p",{className:"time2 time",children:parseInt(e.time)}),Object(x.jsxs)("p",{className:"".concat(r.card?"timeToDisplay":"hide"),children:[parseInt(e.time/60),":",parseInt(e.time%60)]}),Object(x.jsx)("p",{className:"".concat(r.card?"timeToDisplay2":"hide"),onClick:function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if(console.log(w),"0"!=e){var n,a,c=Object(u.a)(w),r=parseInt(e);c[0].time=.1,c[0].fixed=.1,c[c.length-1].time=840,c[c.length-1].fixed=840,c[r].fixed=t,c[r].time=t;for(var s=r+1;s<c.length;s++){if(c[s].fixed){a=s;break}}for(var i=r-1;i<c.length;i--){if(c[i].fixed>-1){n=i;break}}for(var d=n+1;d<r;d++)c[d].time=Math.round(10*(c[n].fixed+(d-n)/(r-n)*(c[r].fixed-c[n].fixed))/10);for(var l=a-1;l>r;l--)c[l].time=Math.round(10*(c[r].fixed+(l-r)/(a-r)*(c[a].fixed-c[r].fixed))/10);S(c),console.log(c)}}(e.index)},children:e.fixed?"refix (click to refix audio to this position)":"fix (click to fix audio to this position)"})]})}))]})}),w=function(){Object(a.useRef)(null);return Object(x.jsx)(x.Fragment,{})},S=function(){var e=Object(a.useState)(Math.floor(750*Math.random())),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),o=Object(j.a)(r,2),s=o[0],f=o[1],S=Object(a.useState)({cn:"unloaded"}),y=Object(j.a)(S,2),N=y[0],T=y[1],E=Object(a.useState)(0),k=Object(j.a)(E,2),C=k[0],A=k[1],I=Object(a.useState)(p),L=Object(j.a)(I,2),$=(L[0],L[1],Object(a.useState)(O)),D=Object(j.a)($,2),M=(D[0],D[1],Object(a.useState)(h)),W=Object(j.a)(M,2),z=W[0],F=W[1],P=Object(a.useState)([]),R=Object(j.a)(P,2),J=R[0],B=(R[1],Object(a.useState)([])),U=Object(j.a)(B,2),V=U[0],G=(U[1],Object(a.useState)({senCN:!1,targetSen:!1,card:!0})),Y=Object(j.a)(G,2),q=Y[0],K=Y[1],Z=Object(a.useState)(0),H=Object(j.a)(Z,2),Q=H[0],X=(H[1],Object(a.useState)(!1)),_=Object(j.a)(X,2),ee=_[0],te=_[1];function ne(){return(ne=Object(l.a)(i.a.mark((function e(){var t,n,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"46",n=b.collection("rawtranscripts"),e.next=4,n.get();case 4:e.sent.forEach((function(e){e.data().episode===t&&T({cn:e.data().raw,en:e.data().rawEN,py:e.data().rawPY,id:e.id,episode:e.data().episode,data:e.data().data})}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){ne.apply(this,arguments)}()}),[]);var ae=function(){var e=Object(l.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.target.querySelector(".time2")&&(c(n-.5),A(C+1));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"text-first",children:[Object(x.jsx)(w,{}),Object(x.jsx)(m,{setGetTime:f,seekTo:n,refreshAudio:C,loadAudio:ee,url:"https://raw.githubusercontent.com/overtoo/test/main/ep46.mp3"}),Object(x.jsx)("button",{onClick:function(){K(Object(d.a)(Object(d.a)({},q),{},{targetSen:!q.targetSen}))},children:q.targetSen?"show All":"target sentences only"}),Object(x.jsx)("button",{onClick:function(){K(Object(d.a)(Object(d.a)({},q),{},{card:!q.card}))},children:q.card?"no card":"card"}),Object(x.jsx)("button",{onClick:function(){if(window.getSelection){var e=window.getSelection().toString().replace(/\n/g,"");if(e.length>0){var t=Object(u.a)(z.target);t.push(e),F(Object(d.a)(Object(d.a)({},z),{},{target:t}))}}},children:"Add Word"})]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{children:Object(x.jsx)(g,{rawText:N,parentLockTime:function(e){alert(e),alert(s)},getTime:s,setWords:F,refresh:Q,words:z,controlMusic:ae,displayController:q,cardChange:q.card,setLoadAudio:te})}),Object(x.jsxs)("div",{className:"input-box",children:[Object(x.jsx)(v,{words:z,setWords:F,load:"target",promoteTo:"learned",color:"lightpink"}),Object(x.jsx)(v,{words:z,setWords:F,load:"learned",demoteTo:"target",promoteTo:"trash",color:"lightblue"}),Object(x.jsx)(v,{words:z,setWords:F,load:"trash",demoteTo:"learned",color:"lightgrey"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:" Add to Anki:"}),J.map((function(e,t){return t===J.length-1?Object(x.jsxs)("span",{className:"anki-adder",children:['traditional:"',e,'" ']}):Object(x.jsxs)("span",{className:"anki-adder",children:['traditional:"',e,'" OR ']})})),Object(x.jsx)("h3",{children:" Manually Add:"}),V.map((function(e){return Object(x.jsx)("p",{children:e})}))]})]})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.9a374afd.chunk.js.map