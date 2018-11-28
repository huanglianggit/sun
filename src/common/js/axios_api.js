import axios from "axios"
import qs from 'qs';
import md5 from 'js-md5';
import {Toast,Indicator} from "mint-ui"
import {getQueryString,setCookie} from "./base-method"

//baseUrl 请求地址域名前缀
let DOMAIN = ``;
if (window.location.host == "ivywap.i-weiying.com") {//正式域名
     DOMAIN = 'http://ivy.i-weiying.com/api/';
} else if (window.location.host == "prewap.i-weiying.com") {//预正式域名
     DOMAIN = 'http://pre2.i-weiying.com/api/';
} else {//测试域名
     DOMAIN = 'http://test2.i-weiying.com/api/';
    //DOMAIN = 'http://local.wy.com/api/';
}
let DOMAIN_LOGIN = DOMAIN + 'weix_Sharing_links?jump_url=' + escape(location.href);
let toUrl = window.location.href;
//从分享链接进入没有ticket，重新微信授权登录
if(toUrl.includes('share')){
    let url = toUrl.replace("?","#");
    let base = url.split("#")[0];
    let shareBackUrl = url.split("&")[0];//如果分享至其他应用，打开则直接进入首页
    //let id = toUrl.replace(/[^0-9]/ig,"")
    let id = toUrl.split("id=")[1];
    id = id.split("&")[0];
    let shareUrl = base+"?id="+id;
    window.location.href = shareUrl;
    // if (navigator.userAgent.toLowerCase().includes("micromessenger")) {//在微信中打开
    //    window.location.href = DOMAIN + "weix_Sharing_links?menu_type=mediaDetail&media_id="+id;
    // }else{
    //   window.location.href = shareBackUrl;
    // }
}else{
  if(toUrl.includes('flag')){
    window.location.href = toUrl;
  }else{
    let shareUrl = toUrl.split("&")[0];
    window.location.href = shareUrl;
  } 
}
//简单封装请求异常提示
export function axiosToast(message){
    Toast({
      message: message,
      position: 'middle',
      duration: 2000
    });
}
//封装axios请求
export function http(argument,SUCCESS){
    let ClientSource = ``;//设备标识 1-android，2-ios
    let ua = navigator.userAgent;
    if(ua.match(/iPhone|iPod|iPad/)){//ios回调
      ClientSource = `2`;
    }else{ //android回调
      ClientSource = `1`
    }
  //设置公共参数
  let TICKET = getQueryString("ticket");//获取参数后面的ticket
  setCookie("ticket",TICKET);
  argument.data['ClientSource'] = ClientSource;//string 请求源（None = 0,Android = 1,IOS = 2,Web = 3）
  argument.data['ClientSystem'] = `micromessenger`;//请求系统信息，Web端传浏览器版本信息，APP端传系统版本信息 每更新一个版本加1
  argument.data['ticket'] = TICKET||`F222A7E2-449B-0941-1417729020A3`;//用户 token，登陆后会返回此数据，客户端保存到本机，所有请求均带上此数据，如未登录就传空字符串
  argument.data['Version'] = `3.1`;//app端版本号，web默认传值3.1
  argument.data['mobile_unique_code'] = 'web';
  let data = sort(argument.data);
  //拼接参数-用于生成签名
  let new_data = [];
  let data_str = ``;
  for (let i in data) {
    let new_arr = i + '=' + data[i];
    new_data.push(new_arr);
  }
  data_str = new_data.join('&');
  //console.info("签名前》》》"+data_str)
  let sign = md5(data_str).toLowerCase();//生成md5
  argument.data['sign'] = "TY-8da23798c69b7bf706604f25c2c9549ae21593b6bdf4be64";//接口签名，多个参数用&符号连接之后的转小写md5值
  axios({
    method:argument.type,
    url:DOMAIN+argument.url,
    data:argument.type.toLocaleUpperCase()=='POST'?qs.stringify(argument.data):``,
    params:argument.type.toLocaleUpperCase()=='GET'?argument.data:``,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(function (response) {
    Indicator.close();
    //axiosToast(response)
    if(response.status == '200'){ //网络请求成功
      if(response.data.status == '1000'){//接口返回错误
         callBack(response.data)
      }else{//接口返回成功
        SUCCESS(response.data) 
      }
    }else{//网络请求失败
      errorCode(response)
    }
  })
  .catch(function (error) {//axios请求异常错误处理
    Indicator.close();
    //axiosToast(error)
    //axiosToast("服务器异常，请重试")
    //catchError(error)
    //reject(response)
  });
}
//请求拦截
// axios.interceptors.request.use(function (config) {
//     // 一般在这个位置判断token是否存在
//     return config;
//     }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });
// //响应拦截
axios.interceptors.response.use((res) =>{
  //axiosToast(">>>>"+JSON.stringify(res))
  //alert(res.status)
  // if(res.status=='200'){
  //   // _.toast(res.data.msg);
  //   return Promise.resolve(res);
  // }else{
  //   return Promise.reject(res);
  // }
  return res;
}, (error) => {
   console.info("接口异常，请稍后再试")
  let UA = navigator.userAgent;
  if(UA.match(/iPhone|iPod|iPad/)){//ios回调
     window.webkit.messageHandlers.appBack.postMessage('10');
     //axiosToast("接口异常，请稍后再试")
  }else{ //android回调
     grapefs.initHeader(ture);
      //grapefs.onPagerError();
  }
  return Promise.reject(error);
});
//axios请求成功返回错误提示
export function callBack(DATA){
  //alert("ERROR>>>>>>>>>>>>>>>>"+JSON.stringify(DATA))
   if(DATA.info == '用户未登录'){ //登录失效，ticket存空
     //setCookie("ticket","");
     axiosToast("登录失效,请重新登录")
   }else{//其他情况
      //TODO
      //console.info(DATA.info)
      //axiosToast(DATA.info)
   }
}
//网络请求失败错误码
export function errorCode(err){
  switch (err.status) {
    case 400:
     axiosToast("请求错误")
      break
    case 401:
     axiosToast('未授权，请登录')
      break
    case 403:
     axiosToast('拒绝访问')
      break
    case 404:
     axiosToast(`请求地址出错`)
      break
    case 408:
      axiosToast('请求超时')
      break
    case 500:
      axiosToast('服务器内部错误')
      break
    case 501:
      axiosToast('服务未实现')
      break
    case 502:
      axiosToast('网关错误')
      break
    case 503:
      axiosToast('服务不可用')
      break
    case 504:
      axiosToast('网关超时')
      break
    case 505:
      axiosToast('HTTP版本不受支持')
      break
    default:
      axiosToast('到底发生了什么错？？？')
      break
  }
}
//axios请求异常错误处理
export function catchError(error){
  axiosToast('请求异常报告,请稍后再试!')
}
//对接口参数进行自然排序
export function sort(arr){
  let i, order = [],sort_arr = {};
  for (i in arr) {
    order.push(i);
  }
  order.sort();
  for (i = 0; i < order.length; i++) {
    sort_arr[order[i]] = arr[order[i]];
  }
  return sort_arr;
}

