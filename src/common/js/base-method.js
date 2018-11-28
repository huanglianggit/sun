
import {MessageBox,Toast} from "mint-ui"
//判断是否已经加载cdn	
// 设置cookie
export function setCookie(name, value) {
  var exp = new Date();
  exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000); //3天过期
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/";
  return true;
};
//读取cookie
export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return '';
};
//js获取参数
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
// php式获取参数
var $_GET = (function () {
  var url = window.document.location.href.toString();
  var u = url.split("?");
  if (typeof (u[1]) == "string") {
    u = u[1].split("&");
    var get = {};
    for (var i in u) {
      var j = u[i].split("=");
      get[j[0]] = decodeURIComponent(j[1]);
    }
    return get;
  } else {
    return {};
  }
})();
//日志输出
export function log(){
 // console.info()
  console.log.apply(console,arguments)
}
/**
 * 本地存储localstorage
 * @item  键
 * @val  值
 */
export function setLocVal(item, val) {
  window.localStorage.setItem(item, val);
}
export function getLocVal(item) {
  var val = "";
  if (item) {
    val = window.localStorage.getItem(item);
  } else {
    val = "";
  }
  return val;
}
/**
 * sessionStorage
 * @item  键
 * @val  值
 */
export function setSession(item, val) {
  window.sessionStorage.setItem(item, val);
}
export function getSession(item) {
  if (item) {
    return window.sessionStorage.getItem(item);
  } else {
    return "";
  }
}
export function removeSession(item){
  window.sessionStorage.removeItem(item);
}
/**
 * 
 * 
 * @export
 * @param {any} str 
 * @param {any} len 
 * @param {any} hasDot 
 * @returns 
 */

export function substring(str, len, hasDot) {
  var newLength = 0;
  var newStr = "";
  var chineseRegex = /[^\x00-\xff]/g;
  var singleChar = "";
  var strLength = str.replace(chineseRegex, "**").length;
  for (var i = 0; i < strLength; i++) {
    singleChar = str.charAt(i).toString();
    if (singleChar.match(chineseRegex) != null) {
      newLength += 2;
    } else {
      newLength++;
    }
    if (newLength > len) {
      break;
    }
    newStr += singleChar;
  }

  if (hasDot && strLength > len) {
    newStr += "...";
  }
  return newStr;
};
//验证字符串是否是数字
export function checkNumber(theObj) {
  var reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(theObj)) {
    return true;
  }
  return false;
}
//验证输入金额是否合法
export function MONEY_CHECK(ev) {
  var exp = /^([1-9]\d*(\.\d{0,2})?)$|^(0(\.\d{0,2})?)$/;//限制小数点0-2位
  if (exp.test(ev)) {
    return true;
  } else {
    return false;
  }
}
//验证输入手机号是否合法
export function PHONE_CHECK(phone) {
  var myReg = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (myReg.test(phone)) {
    return true;
  } else {
    return false;
  }
}
// 验证银行卡号是否合法
//检查银行卡号
export function Check_Bank_No(bankno) {
  var bankno = bankno.replace(/\s/g, '');
  if (bankno == "") {
    // tips("请填写银行卡号");
    return false;
  }
  if (bankno.length < 16 || bankno.length > 23) {
    // tips("银行卡号长度必须在16到19之间");
    return false;
  }
  var num = /^\d*$/; //全数字
  if (!num.exec(bankno)) {
    // tips("银行卡号必须全为数字");
    return false;
  }
  //开头6位
  var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
  if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
    // tips("银行卡号开头6位不符合规范");
    return false;
  }
  //Luhn校验
  if (!luhnCheck(bankno)) {
    return false;
  }
  return true;
}

function luhnCheck(bankno) {
  var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）

  var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
  var newArr = new Array();
  for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
    newArr.push(first15Num.substr(i, 1));
  }
  var arrJiShu = new Array(); //奇数位*2的积 <9
  var arrJiShu2 = new Array(); //奇数位*2的积 >9

  var arrOuShu = new Array(); //偶数位数组
  for (var j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) { //奇数位
      if (parseInt(newArr[j]) * 2 < 9)
        arrJiShu.push(parseInt(newArr[j]) * 2);
      else
        arrJiShu2.push(parseInt(newArr[j]) * 2);
    } else //偶数位
      arrOuShu.push(newArr[j]);
  }

  var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
  var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
  for (var h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
  }

  var sumJiShu = 0; //奇数位*2 < 9 的数组之和
  var sumOuShu = 0; //偶数位数组之和
  var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
  var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
  var sumTotal = 0;
  for (var m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
  }

  for (var n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
  }

  for (var p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
  }
  //计算总和
  sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

  //计算luhn值
  var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
  var luhn = 10 - k;
  if (lastNum == luhn) {
    console.log("验证通过");
    return true;
  } else {
    // tips("请输入正确的银行卡号");
    return false;
  }
}
// 时间格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
/**
 * 
 * 
 * @export
 * @param {any} h 滑动到某个位置
 */
export function scrollTo(h) {
  document.documentElement.scrollTop = h;
  document.body.scrollTop = h;
  // window.pageYOffset = h;
}
// ios中，微信浏览器后退不会刷新，为了解决这个问题，定义函数
export function backRefresh(routerArr) {
  if (!navigator.userAgent.toLowerCase().includes('android')) {
    let isPageHide = false;
    function matchAdd(arr) {
      for (let i = 0; i < arr.length; i++) {
        let r = new RegExp(arr[i]);
        if (r.test(location.href)) {
          return true;
        }
      }
      return false;
    } 
    window.addEventListener('pageshow', function () {
      if (matchAdd(routerArr)) {
        if (isPageHide) {
          window.location.reload();
        }
      }
    });
    window.addEventListener('pagehide', function () {
      if (matchAdd(routerArr)) {
        isPageHide = true;
      } 
    });
  }
}
//身份证号正则验证
export function CHECKID(val){
  var check18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;  //大陆18位
  var check15 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/; //大陆15位
  var TW = /^[A-Z][0-9]{9}/; //台湾
  var HK = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(([0−9aA])|([0-9aA]))$/;  //香港
  var AM = /^[1|5|7][0-9]{6}\([0-9Aa]\)/; //澳门
     if(check18.test(val)||check15.test(val)||HK.test(val)||AM.test(val)||TW.test(val)){
         return true;
     }else{
         return false;
     }
}
//下载地址
export function downLoad(){
    let ua = navigator.userAgent;
    let downUrl = ``;
    if (window.location.host == "ivywap.i-weiying.com") {//正式域名
           downUrl = 'http://www.i-weiying.com';
    } else {//预正式域名
           downUrl = 'http://prewww.i-weiying.com';
    }
    if(ua.match(/iPhone|iPod|iPad/)){
      window.location.href= "https://itunes.apple.com/cn/app/i%E5%BE%AE%E5%BD%B1/id1436251288?mt=8"
    }else{
      if(ua.match(/MicroMessenger/i)){
        Toast({
          message: '请点击右上角按钮选择在浏览器打开此页面！',
          position: 'middle',
          duration: 2000
        });
      }else{
          window.location.href = downUrl;
         // window.location.href = 'http://192.168.1.11:8081';
      }
    }
    
  // MessageBox.alert('', {
  //   message: '更多功能请下载“i微影”APP进行体验',
  //   title: '下载提示',
  //   confirmButtonText:'去下载',
  //   closeOnClickModal:true
  //   }).then(action => {
  //       window.location.href="http://www.i-weiying.com";
  //   });
}
//base64解码的方法
export function base64decode(str){
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
    
    do {
        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c1 == -1);
    if(c1 == -1)
        break;
    
    do {
        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c2 == -1);
    if(c2 == -1)
        break;
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
    
    do {
        c3 = str.charCodeAt(i++) & 0xff;
        if(c3 == 61)
        return out;
        c3 = base64DecodeChars[c3];
    } while(i < len && c3 == -1);
    if(c3 == -1)
        break;
    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
    
    do {
        c4 = str.charCodeAt(i++) & 0xff;
        if(c4 == 61)
        return out;
        c4 = base64DecodeChars[c4];
    } while(i < len && c4 == -1);
    if(c4 == -1)
        break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
//人民币小写转大写
export function smalltoBIG(n)     
    {    
        var fraction = ['角', '分'];    
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];    
        var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];    
        var head = n < 0? '欠': '';    
        n = Math.abs(n);    
      
        var s = '';    
      
        for (var i = 0; i < fraction.length; i++)     
        {    
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');    
        }    
        s = s || '整';    
        n = Math.floor(n);    
      
        for (var i = 0; i < unit[0].length && n > 0; i++)     
        {    
            var p = '';    
            for (var j = 0; j < unit[1].length && n > 0; j++)     
            {    
                p = digit[n % 10] + unit[1][j] + p;    
                n = Math.floor(n / 10);    
            }    
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;    
        }    
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');    
    } 