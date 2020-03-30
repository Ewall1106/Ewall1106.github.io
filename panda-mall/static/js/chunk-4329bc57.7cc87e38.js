(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4329bc57"],{"08b6":function(t,e,i){"use strict";var s=i("86ec"),a=i.n(s);a.a},"3d5c":function(t,e,i){"use strict";var s=i("98da"),a=i.n(s);a.a},"598a":function(t,e,i){},"6ac3":function(t,e,i){"use strict";var s=i("598a"),a=i.n(s);a.a},"86ec":function(t,e,i){t.exports={theme:"rgba(28,153,226,0.752941)",black:"#333",red:"#ea625b",green:"#38ca73",bgGradient:"linear-gradient(90deg, #0af, #0085ff)"}},"98da":function(t,e,i){},e590:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-compoment"},[i("van-nav-bar",{staticClass:"nav",attrs:{title:t.title,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[t._t("default")]},proxy:!0}],null,!0)})],1)},a=[],n={props:{title:{type:String,default:"请输入标题"}},methods:{onClickLeft:function(){this.$router.go(-1)}}},r=n,c=(i("08b6"),i("2877")),o=Object(c["a"])(r,s,a,!1,null,null,null);e["a"]=o.exports},e6e2:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product"},[i("nav-bar",{attrs:{title:"商品列表"}},[i("van-icon",{attrs:{name:"shopping-cart-o",color:t.variables.black,size:"18"}})],1),i("div",{staticClass:"banner"},[i("image-pic",{attrs:{src:"http://m.360buyimg.com/babel/jfs/t1/106316/25/14939/138006/5e6a3b4dE5609efcf/27de6ed334aa7c9b.jpg!q70.dpg",width:"100%",height:"100"}})],1),i("div",{staticClass:"main"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return i("product-item",{key:e,staticStyle:{"margin-bottom":"6px"},attrs:{img:t.img,title:t.title,desc:t.title,price:t.price,discount:t.discount,percentage:t.percentage}})})),1)],1)],1),t.isSkeletonShow?i("Skeleton"):t._e()],1)},a=[],n=(i("99af"),i("2909")),r=i("b775");function c(t){return Object(r["a"])({url:"/product/list",method:"post",data:t})}var o=i("e590"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-item",on:{click:t.onClick}},[i("image-pic",{attrs:{src:t.img,width:"90",height:"90"}}),i("div",{staticClass:"desc"},[i("div",{staticClass:"desc__top"},[i("h3",{staticClass:"desc__top__title"},[t._v(t._s(t.title))]),i("p",{staticClass:"desc__top__info"},[t._v(t._s(t.desc))])]),i("div",{staticClass:"desc__bottom"},[i("div",{staticClass:"desc__bottom__info"},[i("p",{staticClass:"price"},[i("span",{staticClass:"price--new"},[t._v("¥"+t._s(t.price))]),i("span",{staticClass:"price--old"},[t._v("¥"+t._s(t.discount))])]),i("div",{staticClass:"progress"},[i("van-progress",{attrs:{"stroke-width":"6",percentage:t.percentage,"show-pivot":!1}})],1)]),i("div",{staticClass:"desc__bottom__btn"},[i("van-button",{staticClass:"btn",attrs:{size:"mini"}},[t._v("立即购买")])],1)])])],1)},d=[],h={props:["img","title","desc","price","discount","percentage"],methods:{onClick:function(){this.$router.push({path:"/detail"})}}},u=h,f=(i("6ac3"),i("2877")),p=Object(f["a"])(u,l,d,!1,null,"6aa71f94",null),g=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skeleton"},[i("ContentLoader",{attrs:{width:"325",height:"600"}},[i("rect",{attrs:{x:"10",y:"5",rx:"3",ry:"3",width:"305",height:"30"}}),i("rect",{attrs:{x:"10",y:"42",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"130",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"220",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"310",rx:"3",ry:"3",width:"305",height:"80"}}),i("rect",{attrs:{x:"10",y:"400",rx:"3",ry:"3",width:"305",height:"20"}}),i("rect",{attrs:{x:"60",y:"435",rx:"3",ry:"3",width:"205",height:"10"}}),i("rect",{attrs:{x:"60",y:"460",rx:"3",ry:"3",width:"205",height:"10"}})])],1)},_=[],b=i("e330"),m={components:{ContentLoader:b["a"]}},x=m,C=(i("fc6b"),Object(f["a"])(x,v,_,!1,null,"00d3b4da",null)),w=C.exports,k=i("cf1e"),y=i.n(k),S={name:"Product",components:{NavBar:o["a"],ProductItem:g,Skeleton:w},data:function(){return{list:[],pageNo:1,pageSize:10,loading:!1,finished:!1,refreshing:!1,isSkeletonShow:!0}},computed:{variables:function(){return y.a}},mounted:function(){this.getProductList()},methods:{getProductList:function(){var t=this;c({pageNo:this.pageNo,pageSize:this.pageSize}).then((function(e){var i=e.entry;t.refreshing?(t.list=i,t.refreshing=!1):(t.list=[].concat(Object(n["a"])(t.list),Object(n["a"])(i)),i.length<t.pageSize&&t.list.length>0&&(t.finished=!0)),t.loading=!1,t.isSkeletonShow=!1}))},onLoad:function(){this.loading=!0,this.pageNo+=1,this.getProductList()},onRefresh:function(){this.refreshing=!0,this.pageNo=1,this.getProductList()}}},L=S,j=(i("3d5c"),Object(f["a"])(L,s,a,!1,null,"33955a4c",null));e["default"]=j.exports},e8d4:function(t,e,i){},fc6b:function(t,e,i){"use strict";var s=i("e8d4"),a=i.n(s);a.a}}]);