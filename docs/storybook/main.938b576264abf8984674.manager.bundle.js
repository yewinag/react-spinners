(self.webpackChunkreact_spinners=self.webpackChunkreact_spinners||[]).push([[179],{4964:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(82526),__webpack_require__(41817);var global__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(58908),_storybook_addons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(32605),_storybook_core_events__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(50114),react_ga4__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9089);_storybook_addons__WEBPACK_IMPORTED_MODULE_4__.KP.register("storybook/google-analytics-v4",(function(api){console.log("registering google analytics v4"),react_ga4__WEBPACK_IMPORTED_MODULE_3__.ZP.initialize(global__WEBPACK_IMPORTED_MODULE_2__.window.STORYBOOK_GA_V4_ID,global__WEBPACK_IMPORTED_MODULE_2__.window.STORYBOOK_REACT_GA_OPTIONS),api.on(_storybook_core_events__WEBPACK_IMPORTED_MODULE_5__.STORY_CHANGED,(function(){var path=api.getUrlState().path;react_ga4__WEBPACK_IMPORTED_MODULE_3__.ZP.send({hitType:"pageview",page:path})})),api.on(_storybook_core_events__WEBPACK_IMPORTED_MODULE_5__.STORY_ERRORED,(function(_ref){var description=_ref.description;react_ga4__WEBPACK_IMPORTED_MODULE_3__.ZP.exception({description,fatal:!0})})),api.on(_storybook_core_events__WEBPACK_IMPORTED_MODULE_5__.STORY_MISSING,(function(id){react_ga4__WEBPACK_IMPORTED_MODULE_3__.ZP.exception({description:"attempted to render ".concat(id,", but it is missing"),fatal:!1})}))}))},84129:()=>{window.STORYBOOK_GA_ID="UA-92266369-2",window.STORYBOOK_GA_V4_ID="G-ZLGVJTEW5V",window.STORYBOOK_REACT_GA_OPTIONS={}},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[709],(()=>(__webpack_exec__(37707),__webpack_exec__(84129),__webpack_exec__(7967),__webpack_exec__(78295),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(10566),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457),__webpack_exec__(29449),__webpack_exec__(4964))));__webpack_require__.O()}]);