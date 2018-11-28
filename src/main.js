import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from "./router/router.js"
// import fastclick from "fastclick"
import 'mint-ui/lib/style.css'
import MintUi from "mint-ui"
import 'vue-ydui/dist/ydui.base.css';
import 'vue-ydui/dist/ydui.rem.css';
// 引入公用样式
import '../static/css/global.css';
// 图片懒加载
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   loading: require('./common/images/lazy_load.png'),
//   error: require('./common/images/lazy_load.png'),
//   preLoad: 1.5
// })
//列表
import {CellItem} from 'vue-ydui/dist/lib.rem/cell';
Vue.component(CellItem.name, CellItem);
//开关组建
import {CellGroup} from 'vue-ydui/dist/lib.rem/cell';
Vue.component(CellGroup.name, CellGroup);
import {Switch} from 'vue-ydui/dist/lib.rem/switch';
Vue.component(Switch.name, Switch);
// 配置title
Vue.use(require('vue-wechat-title'))
// 中间件use
Vue.use(MintUi);
// Vue.use(require('vue-scroller'))
// 微信jssdk的配置
import WX_config from "./common/js/wx_config"
// 刷新页面时清除掉session，页面缓存有用到session保存标志位刷新页面时清除掉session，页面缓存有用到session保存标志位
window.onunload = function () {
  sessionStorage.clear()
}
new Vue({
  el: '#app',
  router: router.routerGroup,
  // 全局数据管理
  data: {
    eventHub: new Vue()
  },
  render: h => h(App)
})
