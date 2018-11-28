<template>
  <div class="mainPage">
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
    <div class="tab" id="tabBar" v-show="false" ref="tabBar">
        <div class="tab-item" @click="goTab('index')" v-bind:class="{'checked_bg':checked_tab=='index'}">
          <i class="index"></i>
          <span class="text">首页</span>
        </div>
        <div class="tab-item" @click="goTab('Record')">
          <i class="shoot" ></i>
          <span class="text">记录</span>
        </div>
        <div class="tab-item" @click="goTab('mine')" v-bind:class="{'checked_bg':checked_tab=='mine'}">
          <i class="mine" ></i>
          <span class="text">我的</span>
        </div>
    </div>
  </div>
</template>
<script>
import router from "./router/router";
import { scrollTo, backRefresh,getSession,downLoad} from "./common/js/base-method";
import { Toast,} from "mint-ui"
import {share} from "./common/js/wx_config"
export default {
  data() {
    return {
      isShowTabBar: false,
      isVIP:false,
      // 需要缓存的页面
      keepAliveGroup: router.keepAliveGroup,
      // 缓存页面的高度
      keepAliveGroupPos: {},
      // 每次返回需要刷新页面的路由
      refreshGroup: router.refreshGroup,
      routeShow:false,
      checked_tab:`index`
    };
  },
  created() {
    this.tabBarStatus(this.$route.path);
    // 绑定事件，在router.js中定义好的路由，会在每次返回本页面时进行刷新（绑定的是页面切换事件，不是路由切换事件）
    backRefresh(this.refreshGroup);
  },
  //组件被更新时
  updated() {
      let url = window.location.href.split("?")[0];
      let path = window.location.href.split("#")[1];
      let link = url+"?"+path+"share";
      let obj = {
       link:link,
      }
     share(obj);
  },
  methods: {
    //切换底部tab
    goTab(path){
      if(path=='Record'){
        downLoad()
      }else{
        if (navigator.userAgent.toLowerCase().includes("micromessenger")) {//在微信中打开
            this.checked_tab = path;
            this.$router.push({
              path:path
            })
        }else{//在其他浏览器打开
          if(path=='mine'){
             downLoad()
          }else{
            this.checked_tab = path;
            this.$router.push({
              path:path
            })
          }
        } 
      } 
    },
    tabBarStatus(path) {
       if (path == "/index"||path == "/mine") {
          if(getSession("showTab")=='1'){
                this.isShowTabBar = false; //显示TabBar 
          }else{
                this.isShowTabBar = true; //显示TabBar 
          }
        }
        else{
          this.isShowTabBar = false;
        }
        if(!navigator.userAgent.toLowerCase().includes("micromessenger")){
        }
    },
  },
  watch: {
    //监控路由的更改
    $route: function(newValue, oldVal) {
      this.checked_tab = newValue.path.substr(1); //切换底部导航索引
      // 监控路由控制底下的tabBar
      this.tabBarStatus(newValue.path);
      // 若不是被缓存的页面，则使scrollTop强制归零,若是被缓存的页面，回到之前的高度
      let resetScrollTop = () => {
        // 判断是否从被缓存的页面离开
        for (let i = 0; i < router.keepAliveGroup.length; i++) {
          if (oldVal.path.includes(router.keepAliveGroup[i])) {
            // 如果是的话，保存高度
            let scrollTop =
              document.body.scrollTop ||
              document.documentElement.scrollTop ||
              window.pageYOffset;
            this.keepAliveGroupPos[router.keepAliveGroup[i]] = {
              scrollTop: scrollTop
            };
            break;
          }
        }
        let isToKP = false;
        // 判断是否要跳转到缓存的页面，如果是的话，读取保存下来的scrollTop
        for (let i = 0; i < router.keepAliveGroup.length; i++) {
          if (newValue.path.includes(router.keepAliveGroup[i])) {
            // 如果是的话，读取高度并跳转
            if (this.keepAliveGroupPos[router.keepAliveGroup[i]]) {
              this.$nextTick(() => {
                scrollTo(
                  this.keepAliveGroupPos[router.keepAliveGroup[i]].scrollTop
                );
              });
              isToKP = true;
              break;
            }
          }
        }
        // 如果不是跳去被缓存的页面，则重置为0;
        if (!isToKP) {
          scrollTo(0);
        }
      };
      resetScrollTop();
    }
  }
};
</script>
<style lang="scss" scoped rel="stylesheet/scss">
.tab {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  bottom: 0;
  z-index: 10;
  box-shadow: 0 0 0.05rem #adadad;
  height:.98rem;
  .tab-item {
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:.98rem;
    color: #333;
    .text {
      display: inline-block;
      margin-top: .1rem;
      font-size: 0.22rem;
    }
  }
  .tab-item:nth-child(2){
     .text {
       display: inline-block;
       margin-top: -.3rem;
       margin-bottom: .1rem;
       font-size: 0.22rem;
    }
  }
}
  .index {
    display: inline-block;
    width: 0.42rem;
    height: 0.42rem;
    background-image: url("./assets/images/tab_index.png");
    background-repeat: round;
  }
  .shoot {
    position: relative;
    top:-.3rem;
    display: inline-block;
    width: 0.92rem;
    height: 0.92rem;
    background-image: url("./assets/images/Record2x.png");
    background-repeat: round;
  }
  .mine {
    display: inline-block;
    width: 0.42rem;
    height: 0.42rem;
    background-image: url("./assets/images/tab_mine.png");
    background-repeat: round;
  }
  .checked_bg{
    .index {
      background-image: url("./assets/images/tab_index_active.png");
    }
    .mine {
       background-image: url("./assets/images/tab_mine_active.png");
    }
    .text{
      color:#f95a33;
    }
  }
</style>
<style lang='scss'>
// body,.mainPage{
//   background:#090013;
// }
</style>
