webpackJsonp([7],{115:function(e,t,i){"use strict";function n(e,t){var i=new Date;return i.setTime(i.getTime()+2592e5),document.cookie=e+"="+encodeURIComponent(t)+";expires="+i.toGMTString()+";path=/",!0}function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(t);return null!=i?unescape(i[2]):null}function o(e){return e?window.sessionStorage.getItem(e):""}function r(e){document.documentElement.scrollTop=e,document.body.scrollTop=e}function s(e){if(!navigator.userAgent.toLowerCase().includes("android")){var t=function(e){for(var t=0;t<e.length;t++){if(new RegExp(e[t]).test(location.href))return!0}return!1},i=!1;window.addEventListener("pageshow",function(){t(e)&&i&&window.location.reload()}),window.addEventListener("pagehide",function(){t(e)&&(i=!0)})}}function c(){var e=navigator.userAgent,t="";t="ivywap.i-weiying.com"==window.location.host?"http://www.i-weiying.com":"http://prewww.i-weiying.com",e.match(/iPhone|iPod|iPad/)?window.location.href="https://itunes.apple.com/cn/app/i%E5%BE%AE%E5%BD%B1/id1436251288?mt=8":e.match(/MicroMessenger/i)?i.i(u.Toast)({message:"请点击右上角按钮选择在浏览器打开此页面！",position:"middle",duration:2e3}):window.location.href=t}function l(e){var t=["角","分"],i=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],a=e<0?"欠":"";e=Math.abs(e);for(var o="",r=0;r<t.length;r++)o+=(i[Math.floor(10*e*Math.pow(10,r))%10]+t[r]).replace(/零./,"");o=o||"整",e=Math.floor(e);for(var r=0;r<n[0].length&&e>0;r++){for(var s="",c=0;c<n[1].length&&e>0;c++)s=i[e%10]+n[1][c]+s,e=Math.floor(e/10);o=s.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][r]+o}return a+o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")}t.f=n,t.e=a,t.c=o,t.d=r,t.a=s,t.b=c,t.g=l;var u=i(58);i.n(u),function(){var e=window.document.location.href.toString(),t=e.split("?");if("string"==typeof t[1]){t=t[1].split("&");var i={};for(var n in t){var a=t[n].split("=");i[a[0]]=decodeURIComponent(a[1])}return i}}()},116:function(e,t,i){"use strict";function n(){if(navigator.userAgent.toLowerCase().includes("micromessenger")){var e=window.location.href.split("#")[0],t={type:"POST",url:"Oauth_weixin_jssdk_sign",data:{url:e}};i.i(s.a)(t,function(e){e=e.data,r.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["jsApiList","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"]})}),r.a.ready(function(){r.a.checkJsApi({jsApiList:["onMenuShareQQ","onMenuShareQZone"],success:function(e){}})})}}function a(e){r.a.onMenuShareAppMessage({title:e.title||"i微影",desc:e.desc||"13亿人都会用的App",link:e.link||window.location.href,imgUrl:e.imgUrl||window.location.href.split("?")[0]+"static/images/logo.jpg",type:"",dataUrl:"",success:function(){Toast({message:"分享成功",position:"middle",duration:1500})},cancel:function(){Toast({message:"取消分享",position:"middle",duration:1500})}}),r.a.onMenuShareTimeline({title:e.title||"i微影",link:e.link||window.location.href,imgUrl:e.imgUrl||window.location.href.split("?")[0]+"static/images/logo.jpg",success:function(){Toast({message:"分享成功",position:"middle",duration:1500})},cancel:function(){Toast({message:"取消分享",position:"middle",duration:1500})}}),r.a.onMenuShareQQ({title:e.title||"i微影",desc:e.desc||"13亿人都会用的App",link:e.link||window.location.href,imgUrl:e.imgUrl||window.location.href.split("?")[0]+"static/images/logo.jpg",success:function(){Toast({message:"分享成功",position:"middle",duration:1500})},cancel:function(){Toast({message:"取消分享",position:"middle",duration:1500})}}),r.a.onMenuShareQZone({title:e.title||"i微影",desc:e.desc||"13亿人都会用的App",link:e.link||window.location.href,imgUrl:e.imgUrl||window.location.href.split("?")[0]+"static/images/logo.jpg",success:function(){Toast({message:"分享成功",position:"middle",duration:1500})},cancel:function(){Toast({message:"取消分享",position:"middle",duration:1500})}})}t.b=n,t.a=a;var o=i(453),r=i.n(o),s=i(175)},122:function(e,t,i){"use strict";var n=i(113),a=i(446);n.default.use(a.a);var o=function(e){i.e(3).then(i.bind(null,461)).then(function(t){e(t)})},r=function(e){i.e(5).then(i.bind(null,463)).then(function(t){e(t)})},s=function(e){i.e(4).then(i.bind(null,462)).then(function(t){e(t)})},c=function(e){i.e(2).then(i.bind(null,458)).then(function(t){e(t)})},l=function(e){i.e(0).then(i.bind(null,459)).then(function(t){e(t)})},u=function(e){i.e(1).then(i.bind(null,460)).then(function(t){e(t)})},d=new a.a({linkActiveClass:"active",mode:"hash",routes:[{path:"/",redirect:"/index"},{path:"/index",component:o,meta:{title:"i微影",keepAlive:!0}},{path:"/agreement",component:r,meta:{title:"用户协议"}},{path:"/about",component:s,meta:{title:"关于微影"}},{path:"/VIPCard",component:c,meta:{title:"会员证"}},{path:"/holder",component:l,meta:{title:"股份认购协议"}},{path:"/holderCard",component:u,meta:{title:"股份证书"}}]}),p=["index","follow"],f=["videoDetails"];t.a={routerGroup:d,keepAliveGroup:p,refreshGroup:f}},172:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(113),a=i(444),o=i.n(a),r=i(122),s=i(431),c=(i.n(s),i(58)),l=i.n(c),u=i(432),d=(i.n(u),i(433)),p=(i.n(d),i(434)),f=(i.n(p),i(171)),h=(i.n(f),i(449));i.n(h),i(116);n.default.component(f.CellItem.name,f.CellItem),n.default.component(f.CellGroup.name,f.CellGroup),n.default.component(h.Switch.name,h.Switch),n.default.use(i(448)),n.default.use(l.a),window.onunload=function(){sessionStorage.clear()},new n.default({el:"#app",router:r.a.routerGroup,data:{eventHub:new n.default},render:function(e){return e(o.a)}})},175:function(e,t,i){"use strict";function n(e){i.i(w.Toast)({message:e,position:"middle",duration:2e3})}function a(e,t){var n="";n=navigator.userAgent.match(/iPhone|iPod|iPad/)?"2":"1";var a=i.i(v.e)("ticket");i.i(v.f)("ticket",a),e.data.ClientSource=n,e.data.ClientSystem="micromessenger",e.data.ticket=a||"F222A7E2-449B-0941-1417729020A3",e.data.Version="3.1",e.data.mobile_unique_code="web";var c=s(e.data),l=[],u="";for(var p in c){var h=p+"="+c[p];l.push(h)}u=l.join("&");m()(u).toLowerCase();e.data.sign="TY-8da23798c69b7bf706604f25c2c9549ae21593b6bdf4be64",d()({method:e.type,url:g+e.url,data:"POST"==e.type.toLocaleUpperCase()?f.a.stringify(e.data):"",params:"GET"==e.type.toLocaleUpperCase()?e.data:"",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){w.Indicator.close(),"200"==e.status?"1000"==e.data.status?o(e.data):t(e.data):r(e)}).catch(function(e){w.Indicator.close()})}function o(e){"用户未登录"==e.info&&n("登录失效,请重新登录")}function r(e){switch(e.status){case 400:n("请求错误");break;case 401:n("未授权，请登录");break;case 403:n("拒绝访问");break;case 404:n("请求地址出错");break;case 408:n("请求超时");break;case 500:n("服务器内部错误");break;case 501:n("服务未实现");break;case 502:n("网关错误");break;case 503:n("服务不可用");break;case 504:n("网关超时");break;case 505:n("HTTP版本不受支持");break;default:n("到底发生了什么错？？？")}}function s(e){var t=void 0,i=[],n={};for(t in e)i.push(t);for(i.sort(),t=0;t<i.length;t++)n[i[t]]=e[i[t]];return n}t.a=a;var c=i(397),l=i.n(c),u=i(176),d=i.n(u),p=i(440),f=i.n(p),h=i(437),m=i.n(h),w=i(58),v=(i.n(w),i(115)),g="";g="ivywap.i-weiying.com"==window.location.host?"http://ivy.i-weiying.com/api/":"prewap.i-weiying.com"==window.location.host?"http://pre2.i-weiying.com/api/":"http://test2.i-weiying.com/api/";var b=(escape(location.href),window.location.href);if(b.includes("share")){var k=b.replace("?","#"),T=k.split("#")[0],A=(k.split("&")[0],b.split("id=")[1]);A=A.split("&")[0];var _=T+"?id="+A;window.location.href=_}else if(b.includes("flag"))window.location.href=b;else{var C=b.split("&")[0];window.location.href=C}d.a.interceptors.response.use(function(e){return e},function(e){return navigator.userAgent.match(/iPhone|iPod|iPad/)?window.webkit.messageHandlers.appBack.postMessage("10"):grapefs.initHeader(ture),l.a.reject(e)})},195:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(122),a=i(115),o=i(58),r=(i.n(o),i(116));t.default={data:function(){return{isShowTabBar:!1,isVIP:!1,keepAliveGroup:n.a.keepAliveGroup,keepAliveGroupPos:{},refreshGroup:n.a.refreshGroup,routeShow:!1,checked_tab:"index"}},created:function(){this.tabBarStatus(this.$route.path),i.i(a.a)(this.refreshGroup)},updated:function(){var e=window.location.href.split("?")[0],t=window.location.href.split("#")[1],n=e+"?"+t+"share",a={link:n};i.i(r.a)(a)},methods:{goTab:function(e){"Record"==e?i.i(a.b)():navigator.userAgent.toLowerCase().includes("micromessenger")?(this.checked_tab=e,this.$router.push({path:e})):"mine"==e?i.i(a.b)():(this.checked_tab=e,this.$router.push({path:e}))},tabBarStatus:function(e){"/index"==e||"/mine"==e?"1"==i.i(a.c)("showTab")?this.isShowTabBar=!1:this.isShowTabBar=!0:this.isShowTabBar=!1,navigator.userAgent.toLowerCase().includes("micromessenger")}},watch:{$route:function(e,t){var o=this;this.checked_tab=e.path.substr(1),this.tabBarStatus(e.path);!function(){for(var r=0;r<n.a.keepAliveGroup.length;r++)if(t.path.includes(n.a.keepAliveGroup[r])){var s=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;o.keepAliveGroupPos[n.a.keepAliveGroup[r]]={scrollTop:s};break}for(var c=!1,l=0;l<n.a.keepAliveGroup.length;l++){if("break"===function(t){if(e.path.includes(n.a.keepAliveGroup[t])&&o.keepAliveGroupPos[n.a.keepAliveGroup[t]])return o.$nextTick(function(){i.i(a.d)(o.keepAliveGroupPos[n.a.keepAliveGroup[t]].scrollTop)}),c=!0,"break"}(l))break}c||i.i(a.d)(0)}()}}}},431:function(e,t){},432:function(e,t){},433:function(e,t){},434:function(e,t){},435:function(e,t){},436:function(e,t){},444:function(e,t,i){function n(e){i(436),i(435)}var a=i(174)(i(195),i(445),n,"data-v-6724880a",null);e.exports=a.exports},445:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mainPage"},[i("keep-alive",[e.$route.meta.keepAlive?i("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]}):e._e()],1),e._v(" "),e.$route.meta.keepAlive?e._e():i("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"tabBar",staticClass:"tab",attrs:{id:"tabBar"}},[i("div",{staticClass:"tab-item",class:{checked_bg:"index"==e.checked_tab},on:{click:function(t){e.goTab("index")}}},[i("i",{staticClass:"index"}),e._v(" "),i("span",{staticClass:"text"},[e._v("首页")])]),e._v(" "),i("div",{staticClass:"tab-item",on:{click:function(t){e.goTab("Record")}}},[i("i",{staticClass:"shoot"}),e._v(" "),i("span",{staticClass:"text"},[e._v("记录")])]),e._v(" "),i("div",{staticClass:"tab-item",class:{checked_bg:"mine"==e.checked_tab},on:{click:function(t){e.goTab("mine")}}},[i("i",{staticClass:"mine"}),e._v(" "),i("span",{staticClass:"text"},[e._v("我的")])])])],1)},staticRenderFns:[]}},454:function(e,t,i){i(173),e.exports=i(172)}},[454]);