(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[21],{607:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(2),o=n(195);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(o.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}},611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var a=o(n(630)),r=o(n(617)),l=o(n(632));function o(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),r=c(n(3)),l=c(n(34)),o=n(631);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,y,v=function(e){function t(){return u(this,t),f(this,m(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=a.default.createElement("div",{className:"react-head-temp"},t);l.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var a=Array.prototype.slice.call(n.children),r=document.head,l=r.innerHTML;(a=(a=a.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,o.getDuplicateTitle)();n&&(0,o.removeChild)(r,n)}else if("meta"===t){var a=(0,o.getDuplicateMeta)(e);a&&(0,o.removeChild)(r,a)}else if("link"===t&&"canonical"===e.rel){var l=(0,o.getDuplicateCanonical)(e);l&&(0,o.removeChild)(r,l)}})),(0,o.appendChild)(document.head,a)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,r),c&&s(n,c),t}(a.Component);p=v,b="contextTypes",y={extract:r.default.func},b in p?Object.defineProperty(p,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[b]=y;var h=v;t.default=h,e.exports=t.default},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=n(0),l=(a=n(3))&&a.__esModule?a:{default:a};function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return c(this,t),u(this,s(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(n.prototype,a),l&&i(n,l),t}(r.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(m,"childContextTypes",{extract:l.default.func});var d=m;t.default=d,e.exports=t.default},631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,a=[],o=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?n=e:"meta"===r?a.push(e):o.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var n=[],a=function(a){var o=e[a],c=o.props.id;(c?!t.id[c]:0===r.filter((function(e){var n=o.props[e],a=t[e][n];return a&&!a.props.id})).length)&&(n.unshift(o),l.forEach((function(e){var n=o.props[e];n&&(t[e][n]=o)})))},o=e.length-1;o>=0;o--)a(o);return n}(a)),[n],o)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return a.reduce((function(n,a){var r,l=e.getAttribute(a);return l?n.concat((r=t.querySelectorAll("[".concat(a,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),a=0,r=t.length;a<r;a++)n.appendChild(t[a]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,a=t.length;n<a;n++)e.removeChild(t[n])};var a=["property","name","itemprop"],r=a.concat(["itemProp"]),l=r.concat(["id"])},632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),r=o(n(3)),l=o(n(617));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,b,y=function(e){function t(){return i(this,t),s(this,f(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.default.createElement(l.default,null,a.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,r),o&&u(n,o),t}(a.Component);d=y,p="propTypes",b={title:r.default.string},p in d?Object.defineProperty(d,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[p]=b;var v=y;t.default=v,e.exports=t.default},711:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(2);t.a=function(){return r.a.createElement("div",{className:"sidebar-style"},r.a.createElement("div",{className:"sidebar-widget mt-35"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Categories"),r.a.createElement("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.c,{to:"/blog-standard"},"Modern Astrology ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.c,{to:"/blog-standard"},"Traditional Astrology  ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.c,{to:"/blog-standard"},"Relationship Astrology ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.c,{to:"/blog-standard"},"Sidereal Astrology ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.c,{to:"/blog-standard"},"Horary Astrology",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"})))))))}},712:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"prev"},r.a.createElement("i",{className:"fa fa-angle-double-left"}))),r.a.createElement("li",null,r.a.createElement("button",{className:"active"},"1")),r.a.createElement("li",null,r.a.createElement("button",null,"2")),r.a.createElement("li",null,r.a.createElement("button",{className:"next"},r.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},736:function(e,t,n){"use strict";var a=n(24),r=n(0),l=n.n(r),o=n(2),c=(n(61),n(748)),i=n.n(c);t.a=function(e){var t=e.data,n=Object(r.useState)(t),c=Object(a.a)(n,2),u=(c[0],c[1]);return Object(r.useEffect)((function(){u(t)}),[t]),l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},l.a.createElement("div",{className:"blog-wrap-2 mb-30"},l.a.createElement("div",{className:"blog-img-2"},l.a.createElement(o.c,{to:"/blog-details-standard/"+(null===t||void 0===t?void 0:t._id)},l.a.createElement("img",{src:null===t||void 0===t?void 0:t.blogImg,alt:""}))),l.a.createElement("div",{className:"blog-content-2"},l.a.createElement("div",{className:"blog-meta-2"},l.a.createElement("ul",null,l.a.createElement("li",null,null===t||void 0===t?void 0:t.createdAt),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/blog-details-standard"},"4 ",l.a.createElement("i",{className:"fa fa-comments-o"}))))),l.a.createElement("h4",null,l.a.createElement(o.c,{to:"/blog-details-standard"+(null===t||void 0===t?void 0:t._id)},null===t||void 0===t?void 0:t.blog_title)),l.a.createElement("p",null," ",i()(null===t||void 0===t?void 0:t.desc)),l.a.createElement("div",{className:"blog-share-comment"},l.a.createElement("div",{className:"blog-btn-2"},l.a.createElement(o.c,{to:"/blog-details-standard"},"read more")),l.a.createElement("div",{className:"blog-share"},l.a.createElement("span",null,"share :"),l.a.createElement("div",{className:"share-social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"facebook",href:"//facebook.com"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter",href:"//twitter.com"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram",href:"//instagram.com"},l.a.createElement("i",{className:"fa fa-instagram"})))))))))))}},760:function(e,t){},923:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(611),o=n.n(l),c=n(195),i=n(196),u=n(607),s=n(711),f=n(712),m=n(736);t.default=function(e){var t=e.location.pathname;return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Flone | Blog"),r.a.createElement("meta",{name:"description",content:"Blog of flone react minimalist eCommerce template."})),r.a.createElement(c.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(c.BreadcrumbsItem,{to:""+t},"Blog"),r.a.createElement(i.a,{headerTop:"visible"},r.a.createElement(u.a,null),r.a.createElement("div",{className:"blog-area pt-100 pb-100"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"mr-20"},r.a.createElement("div",{className:"row"},r.a.createElement(m.a,null)),r.a.createElement(f.a,null))),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,null)))))))}}}]);
//# sourceMappingURL=21.7f616d1b.chunk.js.map