(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{725:function(e,t,n){},726:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(e){return e.goods.items},o=function(e){return e.goods.criterions},a=function(e){return e.good},i=function(e){return e.categories}},727:function(e,t,n){},728:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(67),i=(n(3),n(822)),u=n(31),c=(n(725),function(e){var t=e.routes;return o.a.createElement(i.a,{className:"breadcrumb__routes"},t.map((function(e){return o.a.createElement(i.a.Item,{key:e.to,className:"breadcrumb__route"},o.a.createElement(u.b,{to:"/".concat(e.to)},e.name))})))});c.propTypes={};var s=c,l=function(e){var t=e.url,n=Object(a.a)(t);return o.a.createElement(s,{routes:n})};l.propTypes={};var f=l,d=n(80),p=(n(727),function(e){var t=e.url;return o.a.createElement("section",{className:"breadcrumb"},o.a.createElement(d.a,null,o.a.createElement(f,{url:t})))});p.propTypes={};var m=p,y=n(18);t.a=function(){var e=Object(y.h)().url;return o.a.createElement(m,{url:e})}},729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},u=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),u&&e.apply(o,a)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(new Set(Object.keys(e),Object.keys(t)));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(e[o]!==t[o]&&!i(e[o]))return!0}}catch(e){r.e(e)}finally{r.f()}return!1};var r,o=(r=n(0))&&r.__esModule?r:{default:r};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},735:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(3),n(42)),i=(n(736),function(e){var t=e.description;return o.a.createElement("article",{className:"good-characteristics"},o.a.createElement(a.a,null,"Описание:"),o.a.createElement("div",{className:""},o.a.createElement("div",{className:"pre good-characteristic"},t)))});i.propTypes={},t.a=i},736:function(e,t,n){},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return a.DiscussionEmbed}}),t.default=void 0;var r=n(738),o=n(739),a=n(740),i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},738:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=i(n(0)),o=i(n(3)),a=n(729);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,o,i=f(u);function u(){return c(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?m():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(t.prototype,n),o&&s(t,o),u}(r.default.Component);t.CommentCount=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=a(n(0)),o=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,o,a=l(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(t.prototype,n),o&&c(t,o),i}(r.default.Component);t.CommentEmbed=p,p.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},p.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=i(n(0)),o=i(n(3)),a=n(729);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,o,i=d(u);function u(){return s(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),y.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),u}(r.default.Component);t.DiscussionEmbed=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},787:function(e,t,n){},788:function(e,t,n){},828:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),i=(n(3),n(53)),u=n(215),c=n(221),s=n(735),l=n(60),f=(n(787),function(e){var t=e.good,n=e.account,r=e.addToCart,a=t.img,f=t.description,d=t.name,p=t.price,m=t.oldPrice;return o.a.createElement("section",{className:"good-info"},o.a.createElement(i.a,{className:"good__image",src:a,alt:d,width:"550px"}),o.a.createElement("article",{className:"good-info__main"},o.a.createElement("h1",{className:"hidden"},d),o.a.createElement("div",{className:"name"},d),o.a.createElement("div",{className:"buy"},o.a.createElement(c.a,{price:p,oldPrice:m}),n.login?o.a.createElement(l.a,{onClick:function(){return r(n.id,t)}},"Добавить в корзину"):o.a.createElement("div",null)),o.a.createElement(u.a,null),o.a.createElement(s.a,{description:f})))}),d=n(728),p=n(80),m=n(212),y=n(737),h=(n(788),n(722)),b=function(e){var t=e.good,n=e.account,r=e.url,a=e.addToCart;return o.a.createElement("main",{className:"good media1220"},o.a.createElement(p.a,null,o.a.createElement(m.a,null,o.a.createElement("title",null,t.name),o.a.createElement("meta",{name:"description",content:t.description}),o.a.createElement("meta",{name:"keywords",content:"Купить ".concat(t.name)}),o.a.createElement("meta",{property:"og:title",content:t.name}),o.a.createElement("meta",{property:"og:url",content:"https://upgradepc.ru".concat(r)}),o.a.createElement("meta",{property:"og:type",content:"product"}),o.a.createElement("meta",{property:"og:image",content:t.img}),o.a.createElement("link",{rel:"canonical",href:"https://upgradepc.ru".concat(r)})),o.a.createElement(d.a,null),o.a.createElement(h.a,{size:10,direction:"vertical"},o.a.createElement(f,{good:t,account:n,addToCart:a}),o.a.createElement(y.DiscussionEmbed,{shortname:"upgradepc",config:{url:"https://upgradepc.ru".concat(r),identifier:r,title:t.name,language:"ru_RU"}}))))};b.propTypes={};var g=b,v=n(82),w=n(29),E=n(726),_=n(216);t.default=Object(v.b)((function(e){return{good:Object(E.c)(e),account:e.account}}),{getGood:w.h,cleanGood:w.d,addToCart:w.a})((function(e){var t=e.good,n=e.account,i=e.getGood,u=e.cleanGood,c=e.addToCart,s=Object(a.h)().url;return Object(r.useEffect)((function(){return i(s),function(){return u()}}),[]),t?o.a.createElement(g,{good:t,account:n,url:s,addToCart:c}):o.a.createElement(_.a,null)}))}}]);