(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{304:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(163),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),arrDetect=function arrDetect(arr,compareLen,text){return arr&&arr instanceof Array?!eval("".concat(arr.length).concat(compareLen))&&(console.error(text),!0):(console.error(text),!0)};__webpack_exports__.a=arrDetect},309:function(t,a,s){"use strict";var e=s(26),n=s(43),r=function(t){if(t){var a=document.querySelector("#"+t);if(a){var s="easyMark".concat(Date.now()),e='<canvas id="'.concat(s,'" style="position: relative; z-index:1000"></canvas>');a.innerHTML+=e;var n=a.offsetWidth,r=a.offsetHeight,o=document.querySelector("#".concat(s)),p=o.getContext("2d");return o.setAttribute("width",n),o.setAttribute("height",r),p}console.error("请提供正确的dom id!")}else console.error("请指定需要标注的dom，否则标注器无法进行标注！")},o=function(t,a){var s=a.points,e=a.lineColor,n=void 0===e?"#76C1A6":e,r=a.lineWidth,o=void 0===r?2:r,p=a.lineDash,c=void 0===p?[]:p;t.beginPath(),t.setLineDash(c),t.strokeStyle=n,t.lineWidth=o,t.moveTo(s[0].x,s[0].y),t.lineTo(s[1].x,s[1].y),t.stroke()},p=function(t,a,s){return 0==a?{pA:{x:t[a].x+(t[a+1].x-t[0].x)*s,y:t[a].y+(t[a+1].y-t[0].y)*s},pB:{x:t[a+1].x-(t[a+2].x-t[a].x)*s,y:t[a+1].y-(t[a+2].y-t[a].y)*s}}:a==t.length-2?{pA:{x:t[a].x+(t[a+1].x-t[a-1].x)*s,y:t[a].y+(t[a+1].y-t[a-1].y)*s},pB:{x:t[a+1].x-(t[a+1].x-t[a].x)*s,y:t[a+1].y-(t[a+1].y-t[a].y)*s}}:{pA:{x:t[a].x+(t[a+1].x-t[a-1].x)*s,y:t[a].y+(t[a+1].y-t[a-1].y)*s},pB:{x:t[a+1].x-(t[a+2].x-t[a].x)*s,y:t[a+1].y-(t[a+2].y-t[a].y)*s}}},c=function(t,a){var s=a.points,e=a.lineColor,n=a.lineWidth,r=void 0===n?2:n,o=a.lineSmooth,c=void 0===o?.2:o,_=a.lineDash,l=void 0===_?[]:_;if(s.length<=2)console.warn("绘制曲线至少需要3个点!");else{t.beginPath(),t.moveTo(s[0].x,s[0].y),t.strokeStyle=e,t.lineWidth=r,t.setLineDash(l);for(var v=1;v<s.length;v++){var i=p(s,v-1,c);t.bezierCurveTo(i.pA.x,i.pA.y,i.pB.x,i.pB.y,s[v].x,s[v].y)}t.stroke()}},_=(s(305),s(306)),l=s.n(_),v=s(304),i=function(t,a){var s=a.center,e=a.radius,n=a.startAngle,r=void 0===n?0*Math.PI:n,o=a.endAngle,p=void 0===o?2*Math.PI:o,c=a.clockwise,_=void 0===c||c;if(!Object(v.a)(s,"==2","请提供正确的圆心坐标，类似[100, 100]！！！"))if(e&&"number"==typeof e){var i={show:!1,color:"red",lineWidth:2,lineDash:[]};l()(i,a.periphery);var u={show:!0,color:"red"};l()(u,a.fill),t.beginPath(),t.setLineDash(i.lineDash),t.lineWidth=i.lineWidth,t.strokeStyle=i.color,t.fillStyle=u.color,t.arc(s[0],s[1],e,r,p,_),i.show&&t.stroke(),u.show&&t.fill()}else console.error("请提供正确的半径！！！")},u=(s(95),s(96),function(t,a){var s=a.points,e={show:!1,color:"#76C1A6",lineWidth:2,lineDash:[]};l()(e,a.periphery);var n={show:!0,color:"#76C1A6"};l()(n,a.fill),Object(v.a)(s,">=3","画平面请至少提供3个不相同的点位坐标！！！")||(t.beginPath(),t.setLineDash(e.lineDash),t.lineWidth=e.lineWidth,t.strokeStyle=e.color,t.fillStyle=n.color,s.forEach((function(a,s){0==s?t.moveTo(a.x,a.y):t.lineTo(a.x,a.y)})),e.show&&t.stroke(),n.show&&t.fill())}),k=function(t,a){var s=a.center,e=a.peak,n=void 0===e?3:e,r=a.distance,o=a.startAngel,p=void 0===o?0:o,c=a.periphery,_=a.fill;if(!Object(v.a)(s,"==2","请提供正确的中心坐标，类似[30, 30]！！！"))if("number"==typeof r){var l=function(t,a,s,e){for(var n=2*Math.PI/a,r=[],o=0;o<=a;o++){var p=t[0]+s*Math.cos(e),c=t[1]-s*Math.sin(e);e+=n,r.push({x:p,y:c})}return r}(s,n,r,p);u(t,{points:l,periphery:c,fill:_})}else console.error("请提供正确的中点到顶点长度！！！")},d=function(){function t(){Object(e.a)(this,t),this.ctx=""}return Object(n.a)(t,[{key:"detectCtx",value:function(){return!!this.ctx||(console.error("canvas 还未初始化，请使用easyMark.init()进行初始化!"),!1)}},{key:"init",value:function(t){this.ctx=r(t)}},{key:"drawLine",value:function(t){this.detectCtx()&&o(this.ctx,t)}},{key:"drawCure",value:function(t){this.detectCtx()&&c(this.ctx,t)}},{key:"drawPie",value:function(t){this.detectCtx()&&i(this.ctx,t)}},{key:"drawPolygon",value:function(t){this.detectCtx()&&u(this.ctx,t)}},{key:"drawEqlPolygon",value:function(t){this.detectCtx()&&k(this.ctx,t)}}]),t}();a.a=d},358:function(t,a,s){},456:function(t,a,s){"use strict";s(358)},465:function(t,a,s){"use strict";s.r(a);var e=new(s(309).a),n={mounted:function(){e.init("easy-easyDimension");e.drawCure({points:[{x:200,y:198},{x:220,y:230},{x:278,y:232},{x:343,y:276},{x:398,y:298},{x:504,y:247},{x:610,y:220}],lineColor:"#76C1A6",linewIdth:2,lineDash:[]})}},r=(s(456),s(41)),o=Object(r.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"曲线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#曲线"}},[t._v("#")]),t._v(" 曲线")]),t._v(" "),s("p",[t._v("根据一系列点画出经过这些点的曲线")]),t._v(" "),[s("div",{staticClass:"demo",attrs:{id:"easy-easyDimension"}})],t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("easy-easyDimension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$easyDimension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'easy-easyDimension'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" option "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            points"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("198")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("230")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("278")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("232")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("343")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("276")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("398")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("298")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("247")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("610")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lineColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#76C1A6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            linewIdth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lineDash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lineSmooth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$easyDimension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawCure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 800px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置项-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项-option"}},[t._v("#")]),t._v(" 配置项 option")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("points")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("点序列")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",[t._v("lineColor")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("线段颜色")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("#76C1A6")])]),t._v(" "),s("tr",[s("td",[t._v("linewIdth")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("线段宽度(px)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("lineDash")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("线段类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[ ]")])]),t._v(" "),s("tr",[s("td",[t._v("lineSmooth")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("曲线光滑度")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0.2")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("关于lineDah 更多信息请参考canvas文档\n"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"),s("OutboundLink")],1)])])],2)}),[],!1,null,null,null);a.default=o.exports}}]);