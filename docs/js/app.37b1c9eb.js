(function(t){function e(e){for(var r,o,i=e[0],c=e[1],d=e[2],l=0,p=[];l<i.length;l++)o=i[l],s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=n("9f7b"),a=n.n(s),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"poster"},[n("div",{staticClass:"poster__container container-fluid"},[n("b-card",{staticClass:"poster__header",attrs:{header:"Receipt Info"}},[n("b-card-text",[n("b-form",{staticClass:"poster__info",attrs:{inline:""}},[n("b-form-group",[n("b-form-text",[t._v("Receipt NO:")]),n("b-form-input",{attrs:{type:"text",placeholder:"Receipt NO"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1),n("b-form-group",[n("b-form-text",[t._v("Waiter:")]),n("b-form-input",{attrs:{type:"text",placeholder:"Waiter"},model:{value:t.info.waiter,callback:function(e){t.$set(t.info,"waiter",e)},expression:"info.waiter"}})],1),n("b-form-group",[n("b-form-text",[t._v("Opened at:")]),n("b-form-input",{attrs:{type:"text",placeholder:"Opened at"},model:{value:t.info.openedAt,callback:function(e){t.$set(t.info,"openedAt",e)},expression:"info.openedAt"}})],1),n("b-form-group",[n("b-form-text",[t._v("Printed at:")]),n("b-form-input",{attrs:{type:"text",placeholder:"Printed at"},model:{value:t.info.printedAt,callback:function(e){t.$set(t.info,"printedAt",e)},expression:"info.printedAt"}})],1),n("b-form-group",[n("b-form-text",[t._v("Table #:")]),n("b-form-input",{attrs:{type:"text",placeholder:"Table #"},model:{value:t.info.table,callback:function(e){t.$set(t.info,"table",e)},expression:"info.table"}})],1),n("b-form-group",[n("b-form-text",[t._v("Guests:")]),n("b-form-input",{attrs:{type:"text",placeholder:"Guests"},model:{value:t.info.guests,callback:function(e){t.$set(t.info,"guests",e)},expression:"info.guests"}})],1)],1)],1)],1),n("div",{staticClass:"row"},[n("div",{staticClass:"poster__container-form col-6"},[n("b-card",{attrs:{header:"Products"}},[n("b-card-text",t._l(t.products,function(e,r){return n("div",{key:r},[n("b-row",{staticClass:"my-1"},[n("b-col",{attrs:{sm:"5"}},[n("b-input",{attrs:{type:"text",placeholder:"Name"},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"product.name"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{attrs:{type:"number",placeholder:"QTY"},model:{value:e.qty,callback:function(n){t.$set(e,"qty",n)},expression:"product.qty"}})],1),n("b-col",{attrs:{sm:"3"}},[n("b-input",{attrs:{type:"text",placeholder:"Price"},model:{value:e.price,callback:function(n){t.$set(e,"price",n)},expression:"product.price"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-button",{attrs:{variant:"danger",disabled:0===r},on:{click:function(e){return t.removeProduct(r)}}},[t._v("x")])],1)],1)],1)}),0),n("b-button",{attrs:{variant:"primary"},on:{click:t.addProduct}},[t._v("Add position")]),t._v("  \n              "),n("b-button",{attrs:{variant:"success"},on:{click:t.print}},[t._v("Print")])],1)],1),n("div",{staticClass:"poster__container-receipt col-6"},[n("Receipt",{ref:"receipt",attrs:{info:t.info,products:t.products},on:{"update:info":function(e){t.info=e},"update:products":function(e){t.products=e}}})],1)])],1)])])},i=[],c=n("3748"),d=n.n(c),f=n("c1df"),l=n.n(f),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"receipt"},[t._m(0),t.info?n("div",{staticClass:"receipt__info"},[n("table",[n("tr",[t._m(1),n("td",[t._v(t._s(t.info.id))])]),n("tr",[t._m(2),n("td",[t._v(t._s(t.info.waiter))])]),n("tr",[t._m(3),n("td",[t._v(t._s(t.info.openedAt))])]),n("tr",[t._m(4),n("td",[t._v(t._s(t.info.printedAt))])]),n("tr",[t._m(5),n("td",[t._v(t._s(t.info.table))])]),n("tr",[t._m(6),n("td",[t._v(t._s(t.info.guests))])])])]):t._e(),t.products?n("div",{staticClass:"receipt__products"},[n("table",[t._m(7),n("tbody",t._l(t.products,function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.qty))]),n("td",[t._v(t._s(e.price))]),n("td",[t._v(t._s((parseInt(e.qty)*parseFloat(e.price)).toFixed(2)))])])}),0)])]):t._e(),t.products?n("div",{staticClass:"receipt__total"},[n("div",{staticClass:"receipt__total-col"},[t._v("\n      Total\n    ")]),t._m(8),n("div",{staticClass:"receipt__total-col"},[n("div",{staticClass:"receipt__total-sum"},[t._v("\n        "+t._s(t.total)+" ლ\n      ")])])]):t._e(),t._m(9)])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"receipt__header"},[r("img",{attrs:{src:n("cf05")}}),r("h1",[t._v("Famous")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Receipt #")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Waiter")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Opened at")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Printer at")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Table #")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("Guests count")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Q-ty")]),n("th",[t._v("Price")]),n("th",[t._v("Sub-total")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"receipt__total-col receipt__total-col_line"},[n("div",{staticClass:"receipt__total-line"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"receipt__footer"},[r("img",{attrs:{src:n("d9a5")}})])}],b=n("59ad"),_=n.n(b),m=n("e814"),j=n.n(m),v=n("5d73"),h=n.n(v),g={name:"HelloWorld",props:{info:Object,products:Array},computed:{total:function(){if(!this.products||0===this.products.length)return"0.00";var t=0,e=!0,n=!1,r=void 0;try{for(var s,a=h()(this.products);!(e=(s=a.next()).done);e=!0){var o=s.value;t+=j()(o.qty)*_()(o.price)}}catch(i){n=!0,r=i}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return t.toFixed(2)}}},x=g,y=(n("c7ce"),n("2877")),k=Object(y["a"])(x,p,u,!1,null,"7da137ac",null),w=k.exports,z={name:"app",components:{Receipt:w},data:function(){return{info:{id:"",waiter:"Alexandra",openedAt:"",printedAt:"",table:"0 (Феймос)",guests:"1"},products:[]}},methods:{addProduct:function(){this.products.push({name:"",qty:1,price:"0.00"})},removeProduct:function(t){this.products=this.products.splice(t,1)},print:function(){var t=new d.a;t.print(this.$refs.receipt.$el,[".receipt {\n  background-color: #fff;\n  width: 330px;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #000;\n}\n\n.receipt__header {\n  text-align: center;\n}\n\n.receipt__header img {\n  margin: 15px 0;\n}\n\n.receipt__header h1 {\n  font-size: 20px;\n  font-weight: 900;\n  margin-bottom: 0;\n}\n\n.receipt__info {\n  padding: 10px;\n  font-size: 14px;\n  border-bottom: 2px dashed #000;\n  margin-bottom: 10px;\n}\n.receipt__info b {\n  margin-right: 15px;\n}\n.receipt__info tr {\n  border-spacing: 0px;\n}\n\n.receipt__products {\n  padding: 5px 20px;\n  font-size: 14px;\n  border-bottom: 2px solid #f3f3f3;\n  margin-bottom: 5px;\n}\n\n.receipt__products table {\n  width: 100%;\n}\n\n.receipt__products thead {\n  border-bottom: 2px solid #f3f3f3;\n}\n\n.receipt__products th, .receipt__products td {\n  padding: 0 10px;\n  text-align: right;\n}\n\n.receipt__products th:first-child, .receipt__products td:first-child {\n  text-align: left;\n}\n\n.receipt__total {\n  display: flex;\n  padding: 10px 5px;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.receipt__total-col {\n  padding: 0 10px;\n}\n\n.receipt__total-col_line {\n  flex: 1 0;\n}\n\n.receipt__total-line {\n  border-bottom: 2px dashed #000;\n}\n\n.receipt__total-sum {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: right;\n}"])}},mounted:function(){var t=l()().format("MMMM DD YYYY HH:mm");this.info.openedAt=t,this.info.printedAt=t,this.addProduct()}},$=z,O=(n("034f"),Object(y["a"])($,o,i,!1,null,null,null)),C=O.exports;n("f9e3"),n("2dd8");r["a"].use(a.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,n){},6822:function(t,e,n){},c7ce:function(t,e,n){"use strict";var r=n("6822"),s=n.n(r);s.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.fa58ceda.png"},d9a5:function(t,e,n){t.exports=n.p+"img/footer.75ef05df.png"}});
//# sourceMappingURL=app.37b1c9eb.js.map