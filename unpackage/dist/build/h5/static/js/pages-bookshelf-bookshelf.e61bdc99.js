(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bookshelf-bookshelf"],{"0666":function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,e.myRequestPost=i;var r="https://wechat.idejian.com/";function o(t,e){var n="";return n=r+t,n=t,new Promise((function(t,r){uni.request({url:n,method:"GET",data:e,success:function(e){console.log("res",e),t(e.data)},fail:function(t){console.log("err",t),r(t)}})}))}function i(t,e){return new Promise((function(n,o){uni.request({url:r+t,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",data:e,success:function(t){resolve(t.data)},fail:function(t){o(t)}})}))}},1009:function(t,e,n){"use strict";var r=n("5369"),o=n.n(r);o.a},"11da":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".zi[data-v-4707b5e9]{width:100%;height:30px;font-size:20px;font-weight:800;text-align:center;margin-top:%?20?%}uni-image[data-v-4707b5e9]{height:85px!important;width:65px!important}.uni-title[data-v-4707b5e9]{margin-left:%?15?%}.uni-ellipsis-2[data-v-4707b5e9]{font-size:%?33?%;color:#333}.swyd[data-v-4707b5e9]{margin:%?15?%;margin-left:%?25?%}.zz[data-v-4707b5e9]{color:#777;font-size:%?25?%}.shop-price[data-v-4707b5e9]{margin:%?15?%;margin-left:%?12?%;white-space:nowrap;text-overflow:ellipsis}uni-image[data-v-4707b5e9]{width:65px!important;height:85px!important}.uni-list-item__icon[data-v-4707b5e9]{width:65px!important;height:85px!important}.uni-list--base[data-v-4707b5e9]{display:inline-block;width:65px!important;height:85px!important}.shop-price-text[data-v-4707b5e9]{color:#777;font-size:%?25?%}.uni-list--border-top[data-v-4707b5e9]{display:none}.uni-list--border[data-v-4707b5e9]{display:none}.ny[data-v-4707b5e9]{border:%?1?% solid red;margin:%?10?%;padding:%?5?% %?8?%;font-size:%?20?%;font-weight:100;color:red}.zt[data-v-4707b5e9]{margin-left:%?30?%;margin-bottom:%?20?%}.z1[data-v-4707b5e9]{color:#777}.jiu[data-v-4707b5e9]{color:red;font-size:%?45?%;margin:0 %?5?%}.delete[data-v-4707b5e9]{float:right;margin-top:%?-70?%;margin-right:%?20?%}",""]),t.exports=e},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},5369:function(t,e,n){var r=n("11da");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("1bbaca6e",r,!0,{sourceMap:!1,shadowMode:!1})},"944e":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),i=r(n("beb1")),a=r(n("c8ed")),s=r(n("0666")),c={data:function(){return{books:[],msg:"删除",text:"123"}},onLoad:function(){this.getBooks()},methods:{getBooks:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)("/api/wechat/bookshelf/builtin?sex=-1&categories=1&p2=129003");case 2:n=e.sent,t.books=n.bookInfo;case 4:case"end":return e.stop()}}),e)})))()},goBooks:function(t){uni.navigateTo({url:"/pages/bookshelfs/bookshelfs?id=".concat(t.bookId,"&m=1")})},detele:function(){console.log(333),this.msg="完成",console.log(text)}},components:{uniList:i.default,uniListItem:a.default}};e.default=c},"95a3":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"zi"},[t._v("书架")]),n("v-uni-view",{staticClass:"zt"},[n("v-uni-text",{staticClass:"z1"},[t._v("共"),n("v-uni-text",{staticClass:"jiu"},[t._v(t._s(t.books.length))]),t._v("本书")],1)],1),n("v-uni-view",{staticClass:"delete"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detele()}}},[t._v(t._s(t.msg))])],1),n("uni-list",t._l(t.books,(function(e){return n("uni-list-item",{key:e.lastChapterId,attrs:{link:!0,to:"",thumb:e.picUrl,thumbSize:"lg"}},[n("v-uni-view",{staticClass:"item slot-box slot-text",attrs:{slot:"body"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBooks(e)}},slot:"body"},[n("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.bookName))]),n("v-uni-view",{staticClass:"swyd"},[n("v-uni-text",{staticClass:"zz",model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},[t._v("尚未阅读")])],1),n("v-uni-view",{staticClass:"shop-price"},[n("v-uni-text",{staticClass:"ny"},[t._v("最新")]),n("v-uni-text",{staticClass:"shop-price-text"},[t._v(t._s(e.lastChapter))])],1)],1)],1)})),1)],1)},i=[]},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(N([])));y&&y!==r&&o.call(y,a)&&(g=y);var w=L.prototype=_.prototype=Object.create(g);k.prototype=w.constructor=L,L.constructor=k,L[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,r){var o=new j(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new G(r||[]);return i._invoke=z(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function k(){}function L(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,i,a){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(s.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function z(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a6b3:function(t,e,n){"use strict";n.r(e);var r=n("944e"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},cc50:function(t,e,n){"use strict";n.r(e);var r=n("95a3"),o=n("a6b3");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("1009");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"4707b5e9",null,!1,r["a"],a);e["default"]=c.exports}}]);