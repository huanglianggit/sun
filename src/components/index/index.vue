<!--视频详情-->
<template>
  <div class="news_details" >
      <div class="author">
      <!--发布者-->
        <div class="user" >
          <img :src="data.avatar" @click="downLoadAll"/>
          <div @click="downLoadAll">
              <span class="name">{{data.uname}}<i></i></span>
              <span class="time">微影号：<span>{{data.uid}} | {{data.location}}</span></span>
          </div>
          <span class="right" @click="downLoadAll">+关注</span>
        </div>
      </div>
      <!-- 视频播放 -->
      <div id="video_bg" v-if="false"></div>
      <div v-else style="position:relative">
        <div class="video_div">
          <video id="video"   :src="data.media" :poster="data.cover" class="play"  x-webkit-airplay="true"  style="object-fit:fill;">
              暂不支持h5播放器
          </video>
        </div>
        <!--视频遮罩层-->
        <div class="float_video" @click="isPlay()" >
          <i></i>
        </div>
      </div>
      <div class="video_title">
        <!-- {{data.title}} -->
        <div class="title">
          <div>{{data.title}}</div>
        </div>
        <!-- <div class="download"><a :href="data.media" :download="data.title">下载</a></div> -->
        <div class="download" @click="download_video" v-show="isShow">下载</div>
      </div>
      <div class="remark" @click="downLoadAll">
        <img src="./images/apptb.png" alt="">
        <div>去i微影观看更多精彩视频</div>
        </div>
  </div>
</template>
<script type="text/babel">
import {http} from "./../../common/js/axios_api"
import {downLoad,getQueryString} from "./../../common/js/base-method"
import {Toast,Indicator,MessageBox} from "mint-ui"
// 微信jssdk的配置
import {wxConfig,share} from "./../../common/js/wx_config"
export default {
  data() {
    return {
      //视频id
      id:``,
      //正文内容
      data:{},
      //评论集合
      commentList:[],
      is4G:false,
      videoPlay:false,
      //设备标示
      UA:``,
      isShow:false,
      
    }
  },
  created() {
    //window.location.href= 'ivy://splash';
    this.UA = navigator.userAgent;
    wxConfig();
    this.id = getQueryString("id")
    this.shareVideo();
    this.browser();
  },
  methods: {
    //视频分享地址
    shareVideo:function(){
             let _this = this;
             Indicator.open({
              text: '加载中···',
              spinnerType: 'fading-circle'
            });
             let params = {
                type:'POST',
                url:'sharing_details',
                data:{
                  id:_this.id,
                }
              }
              http(params,(data)=>{
                  _this.data = data.data;
                  //设置分享内容
                  let link = window.location.href.split("#")[0];
                  let obj = {
                    title:`i微影`,
                    desc: _this.data.title,
                    link: link,
                    imgUrl: _this.data.cover
                  }
                  share(obj);
              })
    },
    //下载视频
    download_video:function(){
      // micromessenger
      let a = document.createElement('a');
      if(this.UA.match(/iPhone|iPod|iPad/)){
        let href1 = "https://itunes.apple.com/cn/app/i%E5%BE%AE%E5%BD%B1/id1436251288?mt=8" //需要是英文名称
        a.setAttribute('href', href1);
        a.click();
      }else{
        let href = this.data.media //需要是英文名称
        a.setAttribute('href', href);
        a.download = this.data.title;//下载到本地的文件名称
        a.click();
      }
    },
    //判断浏览器
    browser:function(){
      if(this.UA.match(/micromessenger/i)){
        this.isShow = false;
      }else{
        this.isShow = true;
      }
    },
    //点击遮罩播放暂停视频
    isPlay:function(){
       let ev = document.getElementById('video');
       let network = this.isInter();
       if(this.videoPlay==false){
        ev.play();
        this.videoPlay=true;
        this.is4G=true;
       }else{
            ev.pause();
            this.videoPlay=false;
       }
    },
    //判断网络状态
    isInter:function(){
            var ua = navigator.userAgent;
            var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
            networkStr = networkStr.toLowerCase().replace('nettype/', '');
            var networkType;
            switch (networkStr) {
                case 'wifi':
                    networkType = 'wifi';
                    break;
                case '4g':
                    networkType = '4g';
                    break;
                case '3g':
                    networkType = '3g';
                    break;
                case '3gnet':
                    networkType = '3g';
                    break;
                case '2g':
                    networkType = '2g';
                    break;
                default:
                    networkType = 'other';
            }
            return networkType;
    },
    downLoadAll:function(){
       downLoad();
    },
  },
  beforeDestroy() {
      MessageBox.close(false);
      // share();
  },
}
</script>
<style lang="scss" scoped>
 .news_details{
    .video_title{
      display: flex;
      padding: .2rem;
      color: #fff;
      font-size: .3rem;
      .title{
        flex: 1;
      }
      .download{
        width: 1.2rem;
        height: .62rem;
        background: #ff4855;
        border-radius: 0.05rem;
        text-align: center;
        line-height: .62rem;
      }
    }
     #video_bg{
       width:13.34rem;
       height:7.5rem;
       background-size: contain;
       background-repeat: no-repeat;
       transform: rotate(90deg);
      // border:1px solid red;
     }
     .float_video{
       position: absolute;
       z-index: 9999 !important;
       left:.8rem;
       top:.7rem;
       height:3rem;
       width:80%;
       text-align: center;
       i{
         display: inline-block;
         position: relative;
         top:30%;
         width:.99rem;
         height:.98rem;
         background: url('./images/play2.png') no-repeat center;
         background-size:.99rem .98rem;
       }
     }
      .play{
         width:100%;
         height:4.26rem;
      }
     .author{
       background-color: #07000d;
       padding:.28rem;
        .user{
            // margin-top:.2rem;
            display: flex;
            align-items: center;
            // padding: .3rem 0;
            img{
              margin-right:.28rem;
              width:.8rem;
              height:.8rem;
              border-radius: .4rem;
            }
            div{
              flex:1;
              display: flex;
              flex-direction: column;
              .name{
                display: inline-block;
                font-size:.34rem;
                color:#b5b3b3;
                font-weight: 600;
                justify-content: center;
              }
              .time{
                // margin-top:.15rem;
                display: inline-block;
                font-size:.26rem;
                color:#a9a7a7;
                overflow: hidden;
                // text-overflow:ellipsis;
                // white-space: nowrap;
                span{
                  color:#a9a7a7;
                }
              }
            }
            .right{
              display: inline-block;
              width:1.2rem;
              height:.62rem;
              line-height: .62rem;
              border-radius: .1rem;
              text-align: center;
              // border:1px solid #fff;
              background-color: #ff4855;
              color:#fff;
              font-size:.26rem;
              margin-left: .1rem;
            }
          }
     }
   .remark{
     color:#fff;
     background-color: #ff4855;
     opacity: 0.9;
     font-size:.34rem;
     text-align: center;
     width:6.88rem;
     border-radius: .1rem;
     margin: 1.18rem auto;
     padding:.1rem;
     img{
       display: inline-block;
       width: .8rem;
       height: .8rem;
       position: relative;
       top: 0.05rem;
     }
     div{
       display: inline-block;
       vertical-align: bottom;
       height: .8rem;
       line-height: .8rem;
     }
   }
   .other{
     margin:.1rem 0;
     height:1.4rem;
     width:100%;
     text-align: center;
     textarea{
       text-align: left;
       padding:.1rem;
       width:80%;
       height:80%;
     }
   }
 }
</style>
<style>

</style>
