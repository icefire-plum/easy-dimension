(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{305:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(163),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),arrDetect=function arrDetect(arr,compareLen,text){return arr&&arr instanceof Array?!eval("".concat(arr.length).concat(compareLen))&&(console.error(text),!0):(console.error(text),!0)};__webpack_exports__.a=arrDetect},307:function(t,e,a){"use strict";var s=a(24),n=a(43),r=function(t){if(t){var e=document.querySelector("#"+t);if(e){var a="easyMark".concat(Date.now()),s='<canvas id="'.concat(a,'" style="position: relative; z-index:1000"></canvas>');e.innerHTML+=s;var n=e.offsetWidth,r=e.offsetHeight,o=document.querySelector("#".concat(a)),c=o.getContext("2d");return o.setAttribute("width",n),o.setAttribute("height",r),c}console.error("请提供正确的dom id!")}else console.error("请指定需要标注的dom，否则标注器无法进行标注！")},o=function(t,e){var a=e.points,s=e.lineColor,n=void 0===s?"#76C1A6":s,r=e.lineWidth,o=void 0===r?2:r,c=e.lineDash,i=void 0===c?[]:c;t.beginPath(),t.setLineDash(i),t.strokeStyle=n,t.lineWidth=o,t.moveTo(a[0].x,a[0].y),t.lineTo(a[1].x,a[1].y),t.stroke()},c=function(t,e,a){return 0==e?{pA:{x:t[e].x+(t[e+1].x-t[0].x)*a,y:t[e].y+(t[e+1].y-t[0].y)*a},pB:{x:t[e+1].x-(t[e+2].x-t[e].x)*a,y:t[e+1].y-(t[e+2].y-t[e].y)*a}}:e==t.length-2?{pA:{x:t[e].x+(t[e+1].x-t[e-1].x)*a,y:t[e].y+(t[e+1].y-t[e-1].y)*a},pB:{x:t[e+1].x-(t[e+1].x-t[e].x)*a,y:t[e+1].y-(t[e+1].y-t[e].y)*a}}:{pA:{x:t[e].x+(t[e+1].x-t[e-1].x)*a,y:t[e].y+(t[e+1].y-t[e-1].y)*a},pB:{x:t[e+1].x-(t[e+2].x-t[e].x)*a,y:t[e+1].y-(t[e+2].y-t[e].y)*a}}},i=function(t,e){var a=e.points,s=e.lineColor,n=e.lineWidth,r=void 0===n?2:n,o=e.lineSmooth,i=void 0===o?.2:o,p=e.lineDash,l=void 0===p?[]:p;if(a.length<=2)console.warn("绘制曲线至少需要3个点!");else{t.beginPath(),t.moveTo(a[0].x,a[0].y),t.strokeStyle=s,t.lineWidth=r,t.setLineDash(l);for(var v=1;v<a.length;v++){var _=c(a,v-1,i);t.bezierCurveTo(_.pA.x,_.pA.y,_.pB.x,_.pB.y,a[v].x,a[v].y)}t.stroke()}},p=(a(304),a(306)),l=a.n(p),v=a(305),_=function(t,e){var a=e.center,s=e.radius,n=e.startAngle,r=void 0===n?0*Math.PI:n,o=e.endAngle,c=void 0===o?2*Math.PI:o,i=e.clockwise,p=void 0===i||i;if(!Object(v.a)(a,"==2","请提供正确的圆心坐标，类似[100, 100]！！！"))if(s&&"number"==typeof s){var _={show:!1,color:"#8B8878",lineWidth:2,lineDash:[]};l()(_,e.periphery);var u={show:!0,color:"#00F5FF"};l()(u,e.fill),t.beginPath(),t.setLineDash(_.lineDash),t.lineWidth=_.lineWidth,t.strokeStyle=_.color,t.fillStyle=u.color,t.arc(a[0],a[1],s,r,c,p),_.show&&t.stroke(),u.show&&t.fill()}else console.error("请提供正确的半径！！！")},u=(a(95),a(96),function(t,e){var a=e.points,s={show:!1,color:"#76C1A6",lineWidth:2,lineDash:[]};l()(s,e.periphery);var n={show:!0,color:"#76C1A6"};l()(n,e.fill),Object(v.a)(a,">=3","画平面请至少提供3个不相同的点位坐标！！！")||(t.beginPath(),t.setLineDash(s.lineDash),t.lineWidth=s.lineWidth,t.strokeStyle=s.color,t.fillStyle=n.color,a.forEach((function(e,a){0==a?t.moveTo(e.x,e.y):t.lineTo(e.x,e.y)})),s.show&&t.stroke(),n.show&&t.fill())}),k=function(t,e){var a=e.center,s=e.peak,n=void 0===s?3:s,r=e.distance,o=e.startAngel,c=void 0===o?0:o,i=e.periphery,p=e.fill;if(!Object(v.a)(a,"==2","请提供正确的中心坐标，类似[30, 30]！！！"))if("number"==typeof r){var l=function(t,e,a,s){for(var n=2*Math.PI/e,r=[],o=0;o<=e;o++){var c=t[0]+a*Math.cos(s),i=t[1]-a*Math.sin(s);s+=n,r.push({x:c,y:i})}return r}(a,n,r,c);u(t,{points:l,periphery:i,fill:p})}else console.error("请提供正确的中点到顶点长度！！！")},d=a(311),y=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"drawPie",s=e.pointOption,n=void 0===s?{center:[0,0],radius:2}:s;if(n.center){!e.pointOption&&e.radius&&(n.radius=e.radius),!e.pointOption&&e.color&&(n.fill={color:e.color});var r,o=Object(d.a)(e.points);try{for(o.s();!(r=o.n()).done;){var c=r.value;n.center[0]=c.x,n.center[1]=c.y,t[a](n)}}catch(t){o.e(t)}finally{o.f()}}else console.warn("各个点自定义图形应提供具有中心属性的图像，若无将静默失败！！！")},h=function(){function t(){Object(s.a)(this,t),this.ctx=""}return Object(n.a)(t,[{key:"detectCtx",value:function(){return!!this.ctx||(console.error("canvas 还未初始化，请使用easyMark.init()进行初始化!"),!1)}},{key:"init",value:function(t){this.ctx=r(t)}},{key:"drawLine",value:function(t){this.detectCtx()&&o(this.ctx,t)}},{key:"drawCure",value:function(t){this.detectCtx()&&i(this.ctx,t)}},{key:"drawPie",value:function(t){this.detectCtx()&&_(this.ctx,t)}},{key:"drawPolygon",value:function(t){this.detectCtx()&&u(this.ctx,t)}},{key:"drawEqlPolygon",value:function(t){this.detectCtx()&&k(this.ctx,t)}},{key:"drawPoints",value:function(t,e){this.detectCtx()&&y(this,t,e)}}]),t}();e.a=h},362:function(t,e,a){},462:function(t,e,a){"use strict";a(362)},473:function(t,e,a){"use strict";a.r(e);var s=new(a(307).a),n={mounted:function(){s.init("easy-easyDimension");s.drawLine({points:[{x:200,y:100},{x:600,y:300}],lineColor:"#76C1A6",linewIdth:2,lineDash:[]})}},r=(a(462),a(41)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"线段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线段"}},[t._v("#")]),t._v(" 线段")]),t._v(" "),a("p",[t._v("连接两个点绘制一条线段")]),t._v(" "),[a("div",{staticClass:"demo",attrs:{id:"easy-easyDimension"}})],t._v(" "),a("h2",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("easy-easyDimension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$easyDimension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'easy-easyDimension'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" option "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            points"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lineColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#76C1A6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            linewIdth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lineDash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$easyDimension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 800px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置项-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项-option"}},[t._v("#")]),t._v(" 配置项 option")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("points")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("给定两点的坐标")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("lineColor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("线段颜色")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("#76C1A6")])]),t._v(" "),a("tr",[a("td",[t._v("linewIdth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("线段宽度(px)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("lineDash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("线段类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[ ]")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("关于lineDah 更多信息请参考canvas文档\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"),a("OutboundLink")],1)])])],2)}),[],!1,null,null,null);e.default=o.exports}}]);