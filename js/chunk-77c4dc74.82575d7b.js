(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77c4dc74"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),s=r("17c2"),a=r("9112");for(var c in i){var o=n[c],l=o&&o.prototype;if(l&&l.forEach!==s)try{a(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("b301");t.exports=i("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1ce9":function(t,e,r){"use strict";var n=r("29ef"),i=r.n(n);i.a},"29ef":function(t,e,r){},"33e8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bckUsers"},[r("br"),r("h2",{staticClass:"adminTitle"},[t._v("Gestão de Utilizadores")]),r("b-table",{attrs:{bordered:"",hover:"",items:this.items,fields:this.fields},scopedSlots:t._u([{key:"cell(details)",fn:function(e){return[r("b-button",{staticClass:"btnDetails",attrs:{variant:"info",size:"sm"},on:{click:e.toggleDetails}},[t._v("Mostrar Detalhes")])]}},{key:"row-details",fn:function(e){return[r("b-card",[r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[t._v("Escola:")]),t._v(" "+t._s(e.item.escola)+" ")]),r("b-col")],1),r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[t._v("Email:")]),t._v(" "+t._s(e.item.email_ipp)+" ")])],1),r("b-row",{staticClass:"mb-2"},[r("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[r("b",[t._v("Contacto:")]),t._v(" "+t._s(e.item.telemovel)+" ")]),r("b-col")],1)],1)]}},{key:"cell(options)",fn:function(e){return[r("b-button",{staticClass:"btnRemove",staticStyle:{margin:"5px"},attrs:{variant:"danger",size:"sm"},on:{click:function(r){return t.removeUser(e.item.id_utilizador)}}},[t._v("Eliminar Utilizador")]),r("b-button",{staticClass:"btnChange",attrs:{size:"sm"},on:{click:function(r){return t.changeUser(e.item.id_utilizador,e.item.tipoUser)}}},[t._v("Mudar tipo de utilizador")])]}}])})],1)},i=[],s=(r("96cf"),r("1da1")),a=r("5530"),c=r("683f"),o=r("2f62"),l={data:function(){return{items:[],fields:[{key:"nome",label:"Nome utilizador",sortable:"true"},{key:"tipoUser",label:"Tipo de utilizador",sortable:"true"},{key:"details",label:"Detalhes"},{key:"options",label:"Opções"}]}},created:function(){this.getAllUsers()},computed:Object(a["a"])({},Object(o["b"])(["getUsers"])),methods:{getAllUsers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("getUsers");case 3:t.items=t.getUsers,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},removeUser:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t==e.$store.state.loggedUser.user[0].id_utilizador){r.next=12;break}return r.prev=1,r.next=4,e.$store.dispatch("removeUser",{id:t});case 4:e.getAllUsers(),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),alert(r.t0);case 10:r.next=13;break;case 12:c["a"].fire("Não pode eliminar a sua própria conta!");case 13:case"end":return r.stop()}}),r,null,[[1,7]])})))()},changeUser:function(t,e){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("Administrador"!==e){n.next=12;break}return n.prev=1,n.next=4,r.$store.dispatch("editUserType",{id:t});case 4:r.getAllUsers(),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),alert(n.t0);case 10:n.next=21;break;case 12:return n.prev=12,n.next=15,r.$store.dispatch("editUserTypeClient",{id:t});case 15:r.getAllUsers(),n.next=21;break;case 18:n.prev=18,n.t1=n["catch"](12),alert(n.t1);case 21:case"end":return n.stop()}}),n,null,[[1,7],[12,18]])})))()}}},u=l,f=(r("1ce9"),r("2877")),b=Object(f["a"])(u,n,i,!1,null,null,null);e["default"]=b.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,s=r("d039"),a=r("1dde"),c=a("filter"),o=c&&!s((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return s}))},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),s=r("df75"),a=r("d039"),c=a((function(){s(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return s(i(t))}})},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),s=r("56ef"),a=r("fc6a"),c=r("06cf"),o=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,l=s(n),u={},f=0;while(l.length>f)r=i(n,e=l[f++]),void 0!==r&&o(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),s=r("fc6a"),a=r("06cf").f,c=r("83ab"),o=i((function(){a(1)})),l=!c||o;n({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(s(t),e)}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-77c4dc74.82575d7b.js.map