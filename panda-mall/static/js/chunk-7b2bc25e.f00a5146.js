(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b2bc25e"],{"08b6":function(t,e,i){"use strict";var a=i("86ec"),r=i.n(a);r.a},"3d5c":function(t,e,i){"use strict";var a=i("98da"),r=i.n(a);r.a},"598a":function(t,e,i){},"6ac3":function(t,e,i){"use strict";var a=i("598a"),r=i.n(a);r.a},"86ec":function(t,e,i){t.exports={theme:"rgba(28,153,226,0.752941)",black:"#333",red:"#ea625b",green:"#38ca73",bgGradient:"linear-gradient(90deg, #0af, #0085ff)"}},"92fa":function(t,e){var i=/^(attrs|props|on|nativeOn|class|style|hook)$/;function a(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,e){var r,s,n,o,c;for(n in e)if(r=t[n],s=e[n],r&&i.test(n))if("class"===n&&("string"===typeof r&&(c=r,t[n]=r={},r[c]=!0),"string"===typeof s&&(c=s,e[n]=s={},s[c]=!0)),"on"===n||"nativeOn"===n||"hook"===n)for(o in s)r[o]=a(r[o],s[o]);else if(Array.isArray(r))t[n]=r.concat(s);else if(Array.isArray(s))t[n]=[r].concat(s);else for(o in s)r[o]=s[o];else t[n]=e[n];return t}),{})}},"98da":function(t,e,i){},e330:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("92fa"),r=i.n(a),s=function(){return Math.random().toString(36).substring(2)},n={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var i=e.props,a=e.data,n=e.children,o=i.uniqueKey?i.uniqueKey+"-idClip":s(),c=i.uniqueKey?i.uniqueKey+"-idGradient":s();return t("svg",r()([a,{attrs:{viewBox:"0 0 "+i.width+" "+i.height,version:"1.1",preserveAspectRatio:i.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+i.baseUrl+"#"+c+")"},attrs:{"clip-path":"url("+i.baseUrl+"#"+o+")",x:"0",y:"0",width:i.width,height:i.height}}),t("defs",[t("clipPath",{attrs:{id:o}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:i.width,height:i.height}})]),t("linearGradient",{attrs:{id:c}},[t("stop",{attrs:{offset:"0%","stop-color":i.primaryColor,"stop-opacity":i.primaryOpacity}},[i.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:i.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":i.secondaryColor,"stop-opacity":i.secondaryOpacity}},[i.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:i.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":i.primaryColor,"stop-opacity":i.primaryOpacity}},[i.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:i.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},e590:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-compoment"},[i("van-nav-bar",{staticClass:"nav",attrs:{title:t.title,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[t._t("default")]},proxy:!0}],null,!0)})],1)},r=[],s={props:{title:{type:String,default:"请输入标题"}},methods:{onClickLeft:function(){this.$router.go(-1)}}},n=s,o=(i("08b6"),i("2877")),c=Object(o["a"])(n,a,r,!1,null,null,null);e["a"]=c.exports},e6e2:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product"},[i("nav-bar",{attrs:{title:"商品列表"}},[i("van-icon",{attrs:{name:"shopping-cart-o",color:t.variables.black,size:"18"}})],1),i("div",{staticClass:"banner"},[i("image-pic",{attrs:{src:"http://m.360buyimg.com/babel/jfs/t1/106316/25/14939/138006/5e6a3b4dE5609efcf/27de6ed334aa7c9b.jpg!q70.dpg",width:"100%",height:"100"}})],1),i("div",{staticClass:"main"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return i("product-item",{key:e,staticStyle:{"margin-bottom":"6px"},attrs:{img:t.img,title:t.title,desc:t.title,price:t.price,discount:t.discount,percentage:t.percentage}})})),1)],1)],1),t.isSkeletonShow?i("Skeleton"):t._e()],1)},r=[],s=(i("99af"),i("2909")),n=i("b775");function o(t){return Object(n["a"])({url:"/product/list",method:"post",data:t})}var c=i("e590"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-item",on:{click:t.onClick}},[i("image-pic",{attrs:{src:t.img,width:"90",height:"90"}}),i("div",{staticClass:"desc"},[i("div",{staticClass:"desc__top"},[i("h3",{staticClass:"desc__top__title"},[t._v(t._s(t.title))]),i("p",{staticClass:"desc__top__info"},[t._v(t._s(t.desc))])]),i("div",{staticClass:"desc__bottom"},[i("div",{staticClass:"desc__bottom__info"},[i("p",{staticClass:"price"},[i("span",{staticClass:"price--new"},[t._v("¥"+t._s(t.price))]),i("span",{staticClass:"price--old"},[t._v("¥"+t._s(t.discount))])]),i("div",{staticClass:"progress"},[i("van-progress",{attrs:{"stroke-width":"6",percentage:t.percentage,"show-pivot":!1}})],1)]),i("div",{staticClass:"desc__bottom__btn"},[i("van-button",{staticClass:"btn",attrs:{size:"mini"}},[t._v("立即购买")])],1)])])],1)},d=[],u={props:["img","title","desc","price","discount","percentage"],methods:{onClick:function(){this.$router.push({path:"/detail"})}}},p=u,f=(i("6ac3"),i("2877")),h=Object(f["a"])(p,l,d,!1,null,"6aa71f94",null),g=h.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skeleton"},[i("ContentLoader",{attrs:{width:"325",height:"600"}},[i("rect",{attrs:{x:"10",y:"5",rx:"3",ry:"3",width:"305",height:"30"}}),i("rect",{attrs:{x:"10",y:"42",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"130",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"220",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"310",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"400",rx:"3",ry:"3",width:"305",height:"20"}}),i("rect",{attrs:{x:"60",y:"435",rx:"3",ry:"3",width:"205",height:"10"}}),i("rect",{attrs:{x:"60",y:"460",rx:"3",ry:"3",width:"205",height:"10"}})])],1)},m=[],v=i("e330"),b={components:{ContentLoader:v["a"]}},_=b,C=(i("fc6b"),Object(f["a"])(_,y,m,!1,null,"00d3b4da",null)),x=C.exports,w=i("cf1e"),k=i.n(w),S={name:"Product",components:{NavBar:c["a"],ProductItem:g,Skeleton:x},data:function(){return{list:[],pageNo:1,pageSize:10,loading:!1,finished:!1,refreshing:!1,isSkeletonShow:!0}},computed:{variables:function(){return k.a}},mounted:function(){this.getProductList()},methods:{getProductList:function(){var t=this;o({pageNo:this.pageNo,pageSize:this.pageSize}).then((function(e){var i=e.entry;t.refreshing?(t.list=i,t.refreshing=!1):(t.list=[].concat(Object(s["a"])(t.list),Object(s["a"])(i)),i.length<t.pageSize&&t.list.length>0&&(t.finished=!0)),t.loading=!1,t.isSkeletonShow=!1}))},onLoad:function(){this.loading=!0,this.pageNo+=1,this.getProductList()},onRefresh:function(){this.refreshing=!0,this.pageNo=1,this.getProductList()}}},N=S,O=(i("3d5c"),Object(f["a"])(N,a,r,!1,null,"33955a4c",null));e["default"]=O.exports},e8d4:function(t,e,i){},fc6b:function(t,e,i){"use strict";var a=i("e8d4"),r=i.n(a);r.a}}]);