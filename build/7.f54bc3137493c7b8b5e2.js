(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{725:function(e,t,n){},726:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var r=function(e){return e.goods.items},a=function(e){return e.goods.criterions},c=function(e){return e.good},o=function(e){return e.categories}},727:function(e,t,n){},728:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(67),o=(n(3),n(822)),u=n(31),i=(n(725),function(e){var t=e.routes;return a.a.createElement(o.a,{className:"breadcrumb__routes"},t.map((function(e){return a.a.createElement(o.a.Item,{key:e.to,className:"breadcrumb__route"},a.a.createElement(u.b,{to:"/".concat(e.to)},e.name))})))});i.propTypes={};var l=i,s=function(e){var t=e.url,n=Object(c.a)(t);return a.a.createElement(l,{routes:n})};s.propTypes={};var m=s,p=n(80),f=(n(727),function(e){var t=e.url;return a.a.createElement("section",{className:"breadcrumb"},a.a.createElement(p.a,null,a.a.createElement(m,{url:t})))});f.propTypes={};var d=f,E=n(18);t.a=function(){var e=Object(E.h)().url;return a.a.createElement(d,{url:e})}},750:function(e,t,n){},784:function(e,t,n){},785:function(e,t,n){},786:function(e,t,n){},825:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(80),o=n(330),u=n(42),i=(n(3),n(784),function(e){var t=e.criterion,n=e.onClick;return a.a.createElement("div",{className:"sort-goods__criterion ".concat(t.active?"active":""),onClick:function(){return n(t)}},t.name,a.a.createElement("div",{className:"".concat(t.isAsc?"triangle":"triangle tirangle-up")},a.a.createElement("span",null)))});i.propTypes={};var l=i,s=(n(750),function(e){var t=e.criterions,n=e.onClick;return a.a.createElement("div",{className:"sort-goods__criterions"},t.map((function(e){return a.a.createElement(l,{key:e.name,criterion:e,onClick:n})})))}),m=n(726),p=n(29),f=n(82),d=Object(f.b)((function(e){return{criterions:Object(m.b)(e)}}),{changeSortCriterion:p.b})((function(e){var t=e.criterions,n=e.changeSortCriterion;return a.a.createElement(s,{onClick:function(e){n(t,e)},criterions:t})})),E=(n(785),function(){return a.a.createElement("section",{className:"sort-goods"},a.a.createElement(u.a,null,"Сортировать по:"),a.a.createElement(d,null))}),b=n(728),g=n(212),v=(n(786),function(e){var t=e.items,n=e.url;return a.a.createElement("main",{className:"goods media1220"},a.a.createElement(c.a,null,a.a.createElement(g.a,null,a.a.createElement("meta",{name:"description",content:"Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку"}),a.a.createElement("meta",{property:"og:url",content:"https://upgradepc.ru".concat(n)}),a.a.createElement("meta",{property:"og:image",content:"https://i.ibb.co/BcP1pQZ/og-img.png"}),a.a.createElement("meta",{property:"og:type",content:"product.group"}),a.a.createElement("link",{rel:"canonical",href:"https://upgradepc.ru".concat(n)})),a.a.createElement(b.a,null),a.a.createElement(E,null),a.a.createElement(o.a,{items:t})),a.a.createElement("h1",{className:"hidden"},"Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку"))}),h=n(18),k=n(216),C=n(54);t.default=Object(C.compose)(Object(f.b)((function(e){return{items:Object(m.d)(e)}}),{requsetComponents:p.k,cleanGoods:p.e}),h.i)((function(e){var t=e.items,n=e.requsetComponents,c=e.cleanGoods,o=Object(h.h)().url;return Object(r.useEffect)((function(){return n(o),function(){return c()}}),[o]),t?a.a.createElement(v,{items:t,url:o}):a.a.createElement(k.a,null)}))}}]);