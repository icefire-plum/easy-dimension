(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{304:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(163),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),arrDetect=function arrDetect(arr,compareLen,text){return arr&&arr instanceof Array?!eval("".concat(arr.length).concat(compareLen))&&(console.error(text),!0):(console.error(text),!0)};__webpack_exports__.a=arrDetect},309:function(t,a,e){"use strict";var s=e(26),n=e(43),r=function(t){if(t){var a=document.querySelector("#"+t);if(a){var e="easyMark".concat(Date.now()),s='<canvas id="'.concat(e,'" style="position: relative; z-index:1000"></canvas>');a.innerHTML+=s;var n=a.offsetWidth,r=a.offsetHeight,o=document.querySelector("#".concat(e)),p=o.getContext("2d");return o.setAttribute("width",n),o.setAttribute("height",r),p}console.error("请提供正确的dom id!")}else console.error("请指定需要标注的dom，否则标注器无法进行标注！")},o=function(t,a){var e=a.points,s=a.lineColor,n=void 0===s?"#76C1A6":s,r=a.lineWidth,o=void 0===r?2:r,p=a.lineDash,c=void 0===p?[]:p;t.beginPath(),t.setLineDash(c),t.strokeStyle=n,t.lineWidth=o,t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),t.stroke()},p=function(t,a,e){return 0==a?{pA:{x:t[a].x+(t[a+1].x-t[0].x)*e,y:t[a].y+(t[a+1].y-t[0].y)*e},pB:{x:t[a+1].x-(t[a+2].x-t[a].x)*e,y:t[a+1].y-(t[a+2].y-t[a].y)*e}}:a==t.length-2?{pA:{x:t[a].x+(t[a+1].x-t[a-1].x)*e,y:t[a].y+(t[a+1].y-t[a-1].y)*e},pB:{x:t[a+1].x-(t[a+1].x-t[a].x)*e,y:t[a+1].y-(t[a+1].y-t[a].y)*e}}:{pA:{x:t[a].x+(t[a+1].x-t[a-1].x)*e,y:t[a].y+(t[a+1].y-t[a-1].y)*e},pB:{x:t[a+1].x-(t[a+2].x-t[a].x)*e,y:t[a+1].y-(t[a+2].y-t[a].y)*e}}},c=function(t,a){var e=a.points,s=a.lineColor,n=a.lineWidth,r=void 0===n?2:n,o=a.lineSmooth,c=void 0===o?.2:o,_=a.lineDash,l=void 0===_?[]:_;if(e.length<=2)console.warn("绘制曲线至少需要3个点!");else{t.beginPath(),t.moveTo(e[0].x,e[0].y),t.strokeStyle=s,t.lineWidth=r,t.setLineDash(l);for(var v=1;v<e.length;v++){var i=p(e,v-1,c);t.bezierCurveTo(i.pA.x,i.pA.y,i.pB.x,i.pB.y,e[v].x,e[v].y)}t.stroke()}},_=(e(305),e(306)),l=e.n(_),v=e(304),i=function(t,a){var e=a.center,s=a.radius,n=a.startAngle,r=void 0===n?0*Math.PI:n,o=a.endAngle,p=void 0===o?2*Math.PI:o,c=a.clockwise,_=void 0===c||c;if(!Object(v.a)(e,"==2","请提供正确的圆心坐标，类似[100, 100]！！！"))if(s&&"number"==typeof s){var i={show:!1,color:"red",lineWidth:2,lineDash:[]};l()(i,a.periphery);var u={show:!0,color:"red"};l()(u,a.fill),t.beginPath(),t.setLineDash(i.lineDash),t.lineWidth=i.lineWidth,t.strokeStyle=i.color,t.fillStyle=u.color,t.arc(e[0],e[1],s,r,p,_),i.show&&t.stroke(),u.show&&t.fill()}else console.error("请提供正确的半径！！！")},u=(e(95),e(96),function(t,a){var e=a.points,s={show:!1,color:"#76C1A6",lineWidth:2,lineDash:[]};l()(s,a.periphery);var n={show:!0,color:"#76C1A6"};l()(n,a.fill),Object(v.a)(e,">=3","画平面请至少提供3个不相同的点位坐标！！！")||(t.beginPath(),t.setLineDash(s.lineDash),t.lineWidth=s.lineWidth,t.strokeStyle=s.color,t.fillStyle=n.color,e.forEach((function(a,e){0==e?t.moveTo(a.x,a.y):t.lineTo(a.x,a.y)})),s.show&&t.stroke(),n.show&&t.fill())}),k=function(t,a){var e=a.center,s=a.peak,n=void 0===s?3:s,r=a.distance,o=a.startAngel,p=void 0===o?0:o,c=a.periphery,_=a.fill;if(!Object(v.a)(e,"==2","请提供正确的中心坐标，类似[30, 30]！！！"))if("number"==typeof r){var l=function(t,a,e,s){for(var n=2*Math.PI/a,r=[],o=0;o<=a;o++){var p=t[0]+e*Math.cos(s),c=t[1]-e*Math.sin(s);s+=n,r.push({x:p,y:c})}return r}(e,n,r,p);u(t,{points:l,periphery:c,fill:_})}else console.error("请提供正确的中点到顶点长度！！！")},y=function(){function t(){Object(s.a)(this,t),this.ctx=""}return Object(n.a)(t,[{key:"detectCtx",value:function(){return!!this.ctx||(console.error("canvas 还未初始化，请使用easyMark.init()进行初始化!"),!1)}},{key:"init",value:function(t){this.ctx=r(t)}},{key:"drawLine",value:function(t){this.detectCtx()&&o(this.ctx,t)}},{key:"drawCure",value:function(t){this.detectCtx()&&c(this.ctx,t)}},{key:"drawPie",value:function(t){this.detectCtx()&&i(this.ctx,t)}},{key:"drawPolygon",value:function(t){this.detectCtx()&&u(this.ctx,t)}},{key:"drawEqlPolygon",value:function(t){this.detectCtx()&&k(this.ctx,t)}}]),t}();a.a=y},359:function(t,a,e){},457:function(t,a,e){"use strict";e(359)},466:function(t,a,e){"use strict";e.r(a);var s=new(e(309).a),n={mounted:function(){s.init("easy-easyDimension");s.drawPolygon({points:[{x:200,y:198},{x:220,y:230},{x:278,y:232},{x:343,y:276},{x:398,y:298},{x:504,y:247},{x:610,y:220}],periphery:{show:!0,color:"#8B8878",lineWidth:5,lineDash:[]},fill:{show:!0,color:"#00EE00"}})}},r=(e(457),e(41)),o=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"任意多变形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任意多变形"}},[t._v("#")]),t._v(" 任意多变形")]),t._v(" "),e("p",[t._v("根据至少3个点画出经过这些点的平面")]),t._v(" "),[e("div",{staticClass:"demo",attrs:{id:"easy-easyDimension"}})],t._v(" "),e("h2",{attrs:{id:"示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("easy-easyDimension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$easyDimension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'easy-easyDimension'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" option "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            points"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("198")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("230")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("278")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("232")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("343")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("276")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("398")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("298")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("247")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("610")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            periphery"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                color"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#8B8878'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                lineWidth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                lineDash"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fill"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                color"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#00F5FF'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$easyDimension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawPolygon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 800px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"配置项-option"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项-option"}},[t._v("#")]),t._v(" 配置项 option")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("points")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("点序列")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("periphery")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("包围线样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("periphery.show")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否显示包围线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("periphery.color")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("包围线颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("#76C1A6")])]),t._v(" "),e("tr",[e("td",[t._v("periphery.lineWidth")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("包围线宽度")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),e("tr",[e("td",[t._v("periphery.lineDash")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("包围线类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[]")])]),t._v(" "),e("tr",[e("td",[t._v("fill")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("内部图形样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("fill.show")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否显示内部图形")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("fill.color")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("内部图形颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("#76C1A6")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("关于lineDah 更多信息请参考canvas文档\n"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"),e("OutboundLink")],1)])])],2)}),[],!1,null,null,null);a.default=o.exports}}]);