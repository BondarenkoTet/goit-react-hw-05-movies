"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,n,e){e.r(n);var r=e(439),c=e(791),a=e(559),u=e(689),i=e(184);n.default=function(){var t=(0,c.useState)(null),n=(0,r.Z)(t,2),e=n[0],o=n[1],s=(0,u.UO)().movieId;return(0,c.useEffect)((function(){null===e&&(0,a.IQ)(s).then((function(t){return o(t.data.cast)}))}),[e,s]),e&&(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/original/".concat(t.profile_path):"https://via.placeholder.com/180x250",alt:t.name,width:200,height:300}),(0,i.jsx)("p",{children:t.name}),(0,i.jsx)("p",{children:t.character})]},t.id)}))})}},559:function(t,n,e){e.d(n,{Df:function(){return s},IQ:function(){return l},Jh:function(){return m},TP:function(){return f},qF:function(){return k}});var r=e(861),c=e(757),a=e.n(c),u=e(243),i="9726aa8cd88febf75b5d2369f8da550e",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/trending/movie/week?&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"?&api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/credits?&api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/reviews?&api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.6f54436a.chunk.js.map