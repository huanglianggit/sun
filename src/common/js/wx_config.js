
import wx from "weixin-js-sdk"
import { http } from "./axios_api"
// 判断是否为微信浏览器，
export function wxConfig(){
    if (navigator.userAgent.toLowerCase().includes("micromessenger")) {
        // 向后台请求微信jssdk的配置参数
        let url = window.location.href.split("#")[0];
        //console.log(url, "wx.config")
        // 配置需要使用的接口
        const jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "openLocation", "getLocation","hideMenuItems", "scanQRCode"]
        let params = {
            type:'POST',
            url:'Oauth_weixin_jssdk_sign',
            data:{
                url:url,
           }
         }
        http(params,(data)=>{
            data = data.data;  
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList:[
                    'jsApiList',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareQZone'
                ]  // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
        })
        wx.ready(function () {
            // wx.hideMenuItems({
            //     menuList: ["menuItem:share:qq","menuItem:share:weiboApp","menuItem:favorite","menuItem:share:facebook","menuItem:share:QZone"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
            // });
            wx.checkJsApi({
                jsApiList: ['onMenuShareQQ','onMenuShareQZone'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function(res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
               // alert(JSON.stringify(res))
                }
            });
            //share({}); 
        })
    }
}

export function share(obj){
    //分享给朋友
    wx.onMenuShareAppMessage({
        title: obj.title||'i微影', // 分享标题
        desc: obj.desc||'13亿人都会用的App', // 分享描述
        link: obj.link||window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: obj.imgUrl||window.location.href.split("?")[0]+'static/images/logo.jpg', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            Toast({
                message: '分享成功',
                position: 'middle',
                duration: 1500
              });
        },
        cancel:function(){
            Toast({
                message: '取消分享',
                position: 'middle',
                duration: 1500
              });
        }
    });
    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: obj.title||'i微影', // 分享标题
        link: obj.link||window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: obj.imgUrl||window.location.href.split("?")[0]+'static/images/logo.jpg', // 分享图标
        success: function () {
            Toast({
                message: '分享成功',
                position: 'middle',
                duration: 1500
              });
        },
        cancel:function(){
            Toast({
                message: '取消分享',
                position: 'middle',
                duration: 1500
              });
        }
    });
    //分享到qq
    wx.onMenuShareQQ({
        title: obj.title||'i微影', // 分享标题
        desc: obj.desc||'13亿人都会用的App', // 分享描述
        link: obj.link||window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: obj.imgUrl||window.location.href.split("?")[0]+'static/images/logo.jpg', // 分享图标
        success: function () {
            Toast({
                message: '分享成功',
                position: 'middle',
                duration: 1500
              });
        },
        cancel: function () {
            Toast({
                message: '取消分享',
                position: 'middle',
                duration: 1500
              });
        }
        });
    //分享到qq空间
    wx.onMenuShareQZone({
        title: obj.title||'i微影', // 分享标题
        desc: obj.desc||'13亿人都会用的App', // 分享描述
        link: obj.link||window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: obj.imgUrl||window.location.href.split("?")[0]+'static/images/logo.jpg', // 分享图标
        success: function () {
            Toast({
                message: '分享成功',
                position: 'middle',
                duration: 1500
              });
        },
        cancel: function () {
            Toast({
                message: '取消分享',
                position: 'middle',
                duration: 1500
              });
        }
        });
}