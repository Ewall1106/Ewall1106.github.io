(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cbbc03b0"],{"068c":function(t,e,s){"use strict";var i=s("e31a"),n=s.n(i);n.a},2486:function(t,e,s){},2543:function(t,e,s){},2801:function(t,e,s){"use strict";var i=s("6259"),n=s.n(i);n.a},"42d1":function(t,e,s){},"4ed2":function(t,e,s){"use strict";var i=s("2486"),n=s.n(i);n.a},"536b":function(t,e,s){},"5bcf":function(t,e,s){"use strict";var i=s("42d1"),n=s.n(i);n.a},6259:function(t,e,s){},"63d7":function(t,e,s){"use strict";var i=s("536b"),n=s.n(i);n.a},"757e":function(t,e,s){},"7abe":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Header"),s("Swiper",{attrs:{banner:t.banner}}),s("Category",{attrs:{cateList:t.cateList}}),s("Session",{attrs:{sessionList:t.sessionList}}),s("Goods",{attrs:{goodsList:t.goodsList,isFinished:t.isFinished},on:{onReachBottom:t.onReachBottom},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),s("back-top"),t.isSkeletonShow?s("Skeleton"):t._e()],1)},n=[],a=(s("99af"),s("d3b7"),s("3ca3"),s("ddb0"),s("2909")),c=s("b775");function r(){return Object(c["a"])({url:"/home/banner",method:"get"})}function o(){return Object(c["a"])({url:"/home/category",method:"get"})}function l(){return Object(c["a"])({url:"/home/session",method:"get"})}function u(t){return Object(c["a"])({url:"/home/list",method:"post",data:t})}var d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"home-header"},[i("image-pic",{attrs:{width:"28px",height:"28px",src:s("cf05")}}),i("van-button",{staticClass:"search",attrs:{block:"",size:"small"}},[i("span",{staticStyle:{color:"#8e8e8e","margin-right":"6px"}},[i("svg-icon",{attrs:{"icon-class":"search",width:15,height:15}})],1),i("span",[t._v("搜索商品名称")])]),i("span",{staticStyle:{color:"#8e8e8e"}},[i("svg-icon",{attrs:{"icon-class":"user",width:18,height:18}})],1)],1),i("div",{staticClass:"placeholder"})])},h=[],f={components:{}},p=f,m=(s("5bcf"),s("2877")),g=Object(m["a"])(p,d,h,!1,null,"ad7eb0d6",null),v=g.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.banner,(function(t,e){return s("van-swipe-item",{key:e},[s("image-pic",{attrs:{width:"100%",height:"150",src:t}})],1)})),1)],1)},b=[],y={props:["banner"]},x=y,C=Object(m["a"])(x,_,b,!1,null,null,null),w=C.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-category"},[s("div",{ref:"scroll",staticClass:"scroll-wrapper"},[s("div",{staticClass:"scroll-content"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"scroll-item__wrapper"},t._l(e,(function(e,i){return s("div",{key:i,staticClass:"scroll-item",on:{click:function(e){return t.onNavigate()}}},[s("img",{attrs:{src:e.icon}}),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])})),0)})),0)]),t.list&&t.list.prev&&t.list.prev.length>5?s("div",{staticClass:"dot-wrapper"},[s("div",{staticClass:"dot",style:{transform:"translateX("+t.rate+")"}})]):t._e()])},k=[],S=(s("4160"),s("fb6a"),s("a9e3"),s("b680"),s("159b"),s("229e")),$={props:{cateList:{type:Array}},data:function(){return{rate:0,breakPoint:0}},computed:{list:function(){var t={},e=this.cateList,s=this.cateList.length;if(s<=5)t={prev:e,next:[]};else if(s>5&&s<=10)t={prev:e.slice(0,5),next:e.slice(5)};else{var i=Math.ceil(e.length/2);t={prev:e.slice(0,i),next:e.slice(i)}}return t}},beforeDestroy:function(){this.bs&&this.bs.destroy()},watch:{cateList:function(t){var e=this;t.length>5&&this.$nextTick((function(){e.init()}))}},methods:{onNavigate:function(t){this.$router.push({path:"/product"})},init:function(){var t=this;this.bs=new S["a"](this.$refs.scroll,{scrollX:!0,click:!0,probeType:3});var e=Math.abs(this.bs.maxScrollX);this._registerHooks(["scroll"],(function(s){var i=Math.abs(s.x);t.rate="".concat(Number(i/e*100).toFixed(2),"%")}))},_registerHooks:function(t,e){var s=this;t.forEach((function(t){s.bs.on(t,e)}))}}},j=$,O=(s("068c"),Object(m["a"])(j,L,k,!1,null,"55cf4cb9",null)),E=O.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-session"},[s("Title",{attrs:{name:"精选专场"}}),s("div",{staticClass:"main"},t._l(t.sessionList,(function(t,e){return s("session-item",{key:e,staticStyle:{"margin-bottom":"10px"},attrs:{img:t.img,title:t.title,tagnum:t.tagnum,discount:t.discount,time:t.time}})})),1)],1)},B=[],F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-title"},[s("span",{staticClass:"line"}),s("span",{staticClass:"text"},[t._v(t._s(t.name))]),s("span",{staticClass:"line"})])},z=[],G={props:["name"]},R=G,T=(s("a654"),Object(m["a"])(R,F,z,!1,null,"0f486268",null)),H=T.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"session-item",on:{click:t.onClick}},[s("image-pic",{attrs:{align:"center",width:"100%",height:"160",src:t.img}}),s("div",{staticClass:"title"},[s("span",{staticClass:"title__text"},[t._v(t._s(t.title))]),s("count-down",{attrs:{time:t.time}})],1),s("div",{staticClass:"desc"},[s("span",{staticClass:"desc__tag"},[t._v(t._s(t.tagnum)+"+款上新")]),s("span",{staticClass:"desc__text"},[s("i",[t._v(t._s(t.discount))]),t._v("折起 ")])])],1)},Z=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-count-down",t._b({scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"item"},[t._v(t._s(t._f("padZero")(e.hours)))]),s("span",{staticClass:"item"},[t._v(t._s(t._f("padZero")(e.minutes)))]),s("span",{staticClass:"item red"},[t._v(t._s(t._f("padZero")(e.seconds)))])]}}])},"van-count-down",t.$attrs,!1))],1)},X=[],A=(s("4d90"),{filters:{padZero:function(t){return"".concat(t).padStart(2,"0")}}}),D=A,I=(s("4ed2"),Object(m["a"])(D,M,X,!1,null,"f05c5656",null)),J=I.exports,q={props:{img:{type:String,default:""},title:{type:String,default:""},time:{type:Number},tagnum:{type:Number,default:100},discount:{type:Number,default:0}},components:{CountDown:J},methods:{onClick:function(){this.$router.push({path:"/product"})}}},K=q,Q=(s("2801"),Object(m["a"])(K,P,Z,!1,null,"34de44a9",null)),U=Q.exports,V={props:["sessionList"],components:{Title:H,SessionItem:U}},W=V,Y=Object(m["a"])(W,N,B,!1,null,"2382a1cb",null),tt=Y.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-goods"},[s("Title",{staticStyle:{background:"#fff"},attrs:{name:"为你推荐"}}),s("van-list",{attrs:{finished:t.isFinished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onReachBottom},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[s("div",{staticClass:"main"},t._l(t.goodsList,(function(t,e){return s("goods-item",{key:e,attrs:{img:t.img,title:t.title,desc:t.desc,price:t.price,discount:t.discount}})})),1)])],1)},st=[],it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-item",on:{click:t.onNavigate}},[s("div",{staticClass:"pic"},[s("image-pic",{attrs:{align:"center",width:"90",height:"125",src:t.img}})],1),s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("p",{staticClass:"desc"},[t._v(t._s(t.desc))]),s("div",{staticClass:"num"},[s("span",{staticClass:"num__now"},[t._v("¥"+t._s(t.price))]),s("span",{staticClass:"num__old"},[t._v("¥"+t._s(t.discount))])]),s("div",{staticClass:"btn-wrapper"},[s("van-button",{staticClass:"btn",attrs:{size:"small"}},[t._v("立即购买")])],1)])},nt=[],at={props:["img","title","desc","price","discount"],methods:{onNavigate:function(){this.$router.push({path:"/detail"})}}},ct=at,rt=(s("b632"),Object(m["a"])(ct,it,nt,!1,null,"2e9e5a80",null)),ot=rt.exports,lt={model:{prop:"isLoading"},props:{goodsList:Array,isLoading:{type:Boolean,default:!1},isFinished:{type:Boolean,default:!1}},components:{GoodsItem:ot,Title:H},computed:{loading:{get:function(){return this.isLoading},set:function(t){this.$emit("input",t)}}},methods:{onReachBottom:function(){this.$emit("onReachBottom")}}},ut=lt,dt=(s("9ef1"),Object(m["a"])(ut,et,st,!1,null,"2c752a6f",null)),ht=dt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skeleton"},[s("ContentLoader",{attrs:{width:"325",height:"600"}},[s("rect",{attrs:{x:"10",y:"8",rx:"3",ry:"3",width:"305",height:"30"}}),s("rect",{attrs:{x:"10",y:"45",rx:"3",ry:"3",width:"305",height:"130"}}),s("circle",{attrs:{cx:"35",cy:"210",r:"25"}}),s("circle",{attrs:{cx:"35",cy:"280",r:"25"}}),s("circle",{attrs:{cx:"100",cy:"210",r:"25"}}),s("circle",{attrs:{cx:"100",cy:"280",r:"25"}}),s("circle",{attrs:{cx:"165",cy:"210",r:"25"}}),s("circle",{attrs:{cx:"165",cy:"280",r:"25"}}),s("circle",{attrs:{cx:"230",cy:"210",r:"25"}}),s("circle",{attrs:{cx:"295",cy:"210",r:"25"}}),s("circle",{attrs:{cx:"230",cy:"280",r:"25"}}),s("circle",{attrs:{cx:"295",cy:"280",r:"25"}}),s("rect",{attrs:{x:"100",y:"340",rx:"3",ry:"3",width:"120",height:"20"}}),s("rect",{attrs:{x:"10",y:"370",rx:"3",ry:"3",width:"305",height:"130"}}),s("rect",{attrs:{x:"10",y:"510",rx:"3",ry:"3",width:"305",height:"10"}}),s("rect",{attrs:{x:"10",y:"540",rx:"3",ry:"3",width:"305",height:"10"}}),s("rect",{attrs:{x:"10",y:"570",rx:"3",ry:"3",width:"305",height:"10"}})])],1)},pt=[],mt=s("e330"),gt={components:{ContentLoader:mt["a"]}},vt=gt,_t=(s("d31e"),Object(m["a"])(vt,ft,pt,!1,null,"79cf4046",null)),bt=_t.exports,yt={name:"Home",components:{Header:v,Swiper:w,Category:E,Session:tt,Goods:ht,Skeleton:bt},data:function(){return{banner:[],cateList:[],sessionList:[],goodsList:[],pageSize:1,pageNum:4,isLoading:!1,isFinished:!1,isSkeletonShow:!0}},mounted:function(){var t=this;Promise.all([this.getBanner(),this.getCategory(),this.getSession()]).then((function(){t.isSkeletonShow=!1,t.getGoodsList()}))},methods:{getBanner:function(){var t=this;return new Promise((function(e){r().then((function(s){t.banner=s.entry,e()}))}))},getCategory:function(){var t=this;return new Promise((function(e){o().then((function(s){var i=s.entry;t.cateList=i,e()}))}))},getSession:function(){var t=this;return new Promise((function(e){l().then((function(s){t.sessionList=s.entry,e()}))}))},getGoodsList:function(){var t=this;u({pageSize:this.pageSize,pageNum:this.pageNum}).then((function(e){var s=e.entry;t.goodsList=[].concat(Object(a["a"])(t.goodsList),Object(a["a"])(s)),t.isLoading=!1,s.length<t.pageNum&&t.goodsList.length>0&&(t.isFinished=!0)}))},onReachBottom:function(){this.pageSize+=1,this.getGoodsList()}}},xt=yt,Ct=(s("63d7"),Object(m["a"])(xt,i,n,!1,null,"6eea96bc",null));e["default"]=Ct.exports},"8ef9":function(t,e,s){},"9ef1":function(t,e,s){"use strict";var i=s("8ef9"),n=s.n(i);n.a},a654:function(t,e,s){"use strict";var i=s("aaff"),n=s.n(i);n.a},aaff:function(t,e,s){},b632:function(t,e,s){"use strict";var i=s("2543"),n=s.n(i);n.a},cf05:function(t,e,s){t.exports=s.p+"static/img/logo.973a6b85.png"},d31e:function(t,e,s){"use strict";var i=s("757e"),n=s.n(i);n.a},e31a:function(t,e,s){}}]);