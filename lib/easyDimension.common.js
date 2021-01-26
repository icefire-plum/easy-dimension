module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./packages/mark/init.js
// 随机id
var generateId = function generateId() {
  return "easyMark".concat(Date.now());
}; // 初始化canvas 实例


var init_init = function init(domId) {
  // 如果dom不存在，不能初始化
  if (!domId) {
    console.error('请指定需要标注的dom，否则标注器无法进行标注！');
    return;
  }

  var dom = document.querySelector('#' + domId);

  if (!dom) {
    console.error('请提供正确的dom id!');
    return;
  } // 追加canvas 元素到dom


  var canvasId = generateId();
  var canvasStr = "<canvas id=\"".concat(canvasId, "\" style=\"position: relative; z-index:1000\"></canvas>");
  dom.innerHTML += canvasStr; // 获取容器尺寸

  var containerW = dom.offsetWidth;
  var containerH = dom.offsetHeight; // 设置画布大小

  var canvas = document.querySelector("#".concat(canvasId));
  var ctx = canvas.getContext('2d');
  canvas.setAttribute('width', containerW);
  canvas.setAttribute('height', containerH);
  return ctx;
};

/* harmony default export */ var mark_init = (init_init);
// CONCATENATED MODULE: ./packages/mark/line/index.js
/**
 * 根据两点绘制直线
 * @param {*} ctx canvas 实例
 * @param {object} option 配置项
 */
var line_drawLine = function drawLine(ctx, option) {
  var points = option.points,
      _option$lineColor = option.lineColor,
      lineColor = _option$lineColor === void 0 ? 'red' : _option$lineColor,
      _option$lineWidth = option.lineWidth,
      lineWidth = _option$lineWidth === void 0 ? 2 : _option$lineWidth,
      _option$lineDash = option.lineDash,
      lineDash = _option$lineDash === void 0 ? [] : _option$lineDash;
  ctx.beginPath();
  ctx.setLineDash(lineDash);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.stroke();
};

/* harmony default export */ var line = (line_drawLine);
// CONCATENATED MODULE: ./packages/mark/cure/util.js
/**
 * 三次贝塞尔曲线求控制点
 * @param {*} ps 点位数组
 * @param {*} i 控制点索引
 * @param {*} lineSmooth 平滑度
 */
var getControlPoint = function getControlPoint(ps, i, lineSmooth) {
  var pAx = '';
  var pAy = '';
  var pBx = '';
  var pBy = ''; // 第一段特殊处理

  if (i == 0) {
    pAx = ps[i].x + (ps[i + 1].x - ps[0].x) * lineSmooth;
    pAy = ps[i].y + (ps[i + 1].y - ps[0].y) * lineSmooth;
    pBx = ps[i + 1].x - (ps[i + 2].x - ps[i].x) * lineSmooth;
    pBy = ps[i + 1].y - (ps[i + 2].y - ps[i].y) * lineSmooth;
    return {
      pA: {
        x: pAx,
        y: pAy
      },
      pB: {
        x: pBx,
        y: pBy
      }
    };
  } // 最后一段特殊处理


  if (i == ps.length - 2) {
    pAx = ps[i].x + (ps[i + 1].x - ps[i - 1].x) * lineSmooth;
    pAy = ps[i].y + (ps[i + 1].y - ps[i - 1].y) * lineSmooth;
    pBx = ps[i + 1].x - (ps[i + 1].x - ps[i].x) * lineSmooth;
    pBy = ps[i + 1].y - (ps[i + 1].y - ps[i].y) * lineSmooth;
    return {
      pA: {
        x: pAx,
        y: pAy
      },
      pB: {
        x: pBx,
        y: pBy
      }
    };
  } // 正常情况


  pAx = ps[i].x + (ps[i + 1].x - ps[i - 1].x) * lineSmooth;
  pAy = ps[i].y + (ps[i + 1].y - ps[i - 1].y) * lineSmooth;
  pBx = ps[i + 1].x - (ps[i + 2].x - ps[i].x) * lineSmooth;
  pBy = ps[i + 1].y - (ps[i + 2].y - ps[i].y) * lineSmooth;
  return {
    pA: {
      x: pAx,
      y: pAy
    },
    pB: {
      x: pBx,
      y: pBy
    }
  };
};

/* harmony default export */ var util = (getControlPoint);
// CONCATENATED MODULE: ./packages/mark/cure/index.js

/**
 * 根据一系列点绘制曲线
 * @param {} ctx canvas实例
 * @param {object} option 配置项
 */

var cure_curve = function curve(ctx, option) {
  var points = option.points,
      lineColor = option.lineColor,
      _option$lineWidth = option.lineWidth,
      lineWidth = _option$lineWidth === void 0 ? 2 : _option$lineWidth,
      _option$lineSmooth = option.lineSmooth,
      lineSmooth = _option$lineSmooth === void 0 ? 0.2 : _option$lineSmooth,
      _option$lineDash = option.lineDash,
      lineDash = _option$lineDash === void 0 ? [] : _option$lineDash;

  if (points.length <= 2) {
    console.warn('绘制曲线至少需要3个点!');
    return;
  }

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(lineDash);

  for (var i = 1; i < points.length; i++) {
    var ctrlP = util(points, i - 1, lineSmooth);
    ctx.bezierCurveTo(ctrlP.pA.x, ctrlP.pA.y, ctrlP.pB.x, ctrlP.pB.y, points[i].x, points[i].y);
  }

  ctx.stroke();
};

/* harmony default export */ var cure = (cure_curve);
// CONCATENATED MODULE: ./packages/mark/index.js






var mark_EasyMark = /*#__PURE__*/function () {
  function EasyMark() {
    _classCallCheck(this, EasyMark);

    this.ctx = '';
  } // 检测canvas 是否实例化


  _createClass(EasyMark, [{
    key: "detectCtx",
    value: function detectCtx() {
      if (!this.ctx) {
        console.error('canvas 还未初始化，请使用easyMark.init()进行初始化!');
        return false;
      }

      return true;
    } // 初始化canvas 实例

  }, {
    key: "init",
    value: function init(domId) {
      this.ctx = mark_init(domId);
    } // 画直线

  }, {
    key: "drawLine",
    value: function drawLine(option) {
      if (this.detectCtx()) {
        line(this.ctx, option);
      }
    } // 画曲线

  }, {
    key: "drawCure",
    value: function drawCure(option) {
      if (this.detectCtx()) {
        cure(this.ctx, option);
      }
    }
  }]);

  return EasyMark;
}();

/* harmony default export */ var mark = (easyDimension);
// CONCATENATED MODULE: ./packages/index.js
 // 安装方法， 

var install = function install(vue) {
  if (install.installed) return;
  install.installed = true;
  vue.prototype.$easyMark = new EasyDimension();
};

/* harmony default export */ var packages_0 = ({
  install: install
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=easyDimension.common.js.map