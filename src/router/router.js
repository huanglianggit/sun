import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = (resolve) => {
  import ('./../components/index/index.vue').then((module) => {
    resolve(module)
  })
}
//用户协议
const agreement = (resolve) => {
  import('./../components/mine/agreement.vue').then((module) =>{
    resolve(module)
  })
}
//关于i微影
const about = (resolve) => {
  import('./../components/mine/about.vue').then((module) =>{
    resolve(module)
  })
}
/*
**协议合同 会员合同 APP端负责调用
*/
//会员证书
const VIPCard = (resolve) => {
  import('./../components/contract/VIPCard.vue').then((module) =>{
    resolve(module)
  })
}
//股份协议
const holder = (resolve) => {
  import('./../components/contract/holder.vue').then((module) =>{
    resolve(module)
  })
}
//股份证书
const holderCard = (resolve) => {
  import('./../components/contract/holderCard.vue').then((module) =>{
    resolve(module)
  })
}
// const router = new Router
const routerGroup = new Router({
  linkActiveClass: "active",
  mode: "hash",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // 首页部分
    {
      path: '/index',
      component: index,
      meta: {
        title: 'i微影',
        keepAlive: true
      },
    },
    {
      path:"/agreement",
      component:agreement,
      meta:{
        title:'用户协议'
      }
    },
    {
      path:"/about",
      component:about,
      meta:{
        title:'关于微影'
      }
    }, 
    {
      path: "/VIPCard",
      component: VIPCard,
      meta: {
        title: '会员证'
      },
    },
    {
      path: "/holder",
      component: holder,
      meta: {
        title: '股份认购协议'
      },
    },
    {
      path: "/holderCard",
      component: holderCard,
      meta: {
        title: '股份证书'
      },
    },
  ]
})

// 需要缓存的页面有两个设置
// 1、path添加至keepAliveGroup中
// 2、routes中对应的位置将keepAlive设为true
const keepAliveGroup = ['index','follow'];

// 需要每次返回都刷新的页面写在这里（主要针对支付）
const refreshGroup = ['videoDetails'];

// index
export default {
  routerGroup,
  keepAliveGroup,
  refreshGroup
}
