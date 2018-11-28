<template>
    <div class="wrapper">
        <!-- <div style="color:red;font-size:.3rem" @click="saveEv">保存</div> -->
      <!-- <header>
          <nav>
              <ul>
                  <li><img src="./images/back.png" @click="toAPP(1)"/></li>
                  <li v-bind:class="{check_li:tab=='1'}" @click="checkTab('1')">股份认购协议</li>
                  <li v-bind:class="{check_li:tab=='2'}" @click="checkTab('2')">股份证书</li>
                  <li  @click="toAPP(2)">修改资料</li>
                  <li  @click="toAPP(3)" v-bind:class="{NOClick:isClick==false}">下载</li>
              </ul>
          </nav>
      </header> -->
      <!--股份证书-->
      <div>
         <section class="page6" id="page6">
           <img src="./images/businessCard1.jpg"/>
           <div class="card_name">
               <p>企业名称：深圳亿凯颠覆宇宙传媒有限公司</p>
               <p>产品名称：i微影 记录人生社会应用软件</p>
               <p>公司地址：深圳市南山区南头街道马家龙金龙工业城2号厂房5层510A</p>
               <p>企业注册日期：2014年6月27日</p>
               <p>企业注册资金：5000.0000万元整</p>
               <span class="name">投股人姓名：{{info.user_name}}</span>
               <span>身份证号/护照号：{{info.id_card}}</span>
           </div>
           <div class="card_info">
                <h3>兹证明</h3>
                <p><span class="span" style="margin-right:.15rem;">{{info.user_name}}</span>先生/女士于<span class="span" style="margin-right:.15rem;padding-right:.2rem;">{{y}}</span>年<span class="span" style="margin-right:.15rem;padding-right:.2rem;">{{m}}</span>月<span class="span" style="margin-right:.15rem;padding-right:.2rem;">{{d}}</span>日投资人民币<span class="span" style="margin-right:.15rem;padding-right:.5rem">{{info.total_funds}}</span>元（大写）<span class="span" style="width:4rem;margin-right:.15rem;">{{bigMoney}}</span>入股i微影（个人股）<span class="span" style="margin-right:.15rem;padding-right:.3rem">{{info.share}}</span>股，占i微影产品总股份额的<span class="span" style="margin-right:.15rem;padding-right:.2rem;">{{info.ratio}}</span>%（总份额5000万股为100%）成为合伙股东，依此据享有本产品带来的收益。</p>
           </div>
           <div class="card_date">
               <img src="./images/tiger.png"/>
               <img src="./images/yin.png"/>
           </div>
           <p class="right_date" style="margin-top:.5rem;">日期：<span class="span" style="width:.8rem;">{{y}}</span>年<span class="span" style="width:.5rem;">{{m}}</span>月<span class="span" style="width:.8rem;margin-right:.15rem;">{{d}}</span>日</p>        
         </section>
         <section class="page7" id="page7">
               <img src="./images/businessCard2.jpg"/>
               <div  class="back_img" style="">
                 <img style="width:50%;height:100%;border-right:1px solid #e5e5e5;display:inline-block" :src="info.positive_card"/>
                 <img style="width:48%;height:100%;display:inline-block" :src="info.opposite_card"/>
             </div>
         </section>
      </div>
    </div>
</template>
<script>
import {http} from "./../../common/js/axios_api";
import {getQueryString,smalltoBIG} from "./../../common/js/base-method";
import {Toast,Indicator,MessageBox} from "mint-ui";
import html2canvas from 'html2canvas';
export default {
    data(){
        return{
            //合同日期
            y:``,
            m:``,
            d:``,
            //合同相关信息
            info:{},
            //人民币大写
            bigMoney:``,
            //设备标示
            UA:``,
            //并发请求标识符
            isFlag:0,
            base64Url:[]
        }
    },
    created() {
        //当前设备类型 android/ios
       this.UA = navigator.userAgent;
       this.getInfo();
    },
     mounted() {
        // 将backToday方法绑定到window下面，提供给外部调用
        window['saveEv'] = () => {
             this.saveEv();
             return `1`;
        }
    },
    methods: {
        //获取股东信息
        getInfo:function(){
             let _this = this;
             _this.phone = getQueryString("phone");
             if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
               Indicator.open({
                text: '加载中···',
                spinnerType: 'fading-circle'
              });
             } 
             let params = {
                type:'POST',
                url:'shareholder_info',
                data:{}
              }
              http(params,(data)=>{
                  if(data.status == '1'){
                      if(data.data.shareholder_certificate_img.length=='0'){
                              if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                                    window.webkit.messageHandlers.appBack.postMessage('1');
                                }else{ //android回调
                                    grapefs.onPageFinished();
                                }
                        }else{
                              _this.base64Url = data.data.shareholder_certificate_img;
                              if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                                    window.webkit.messageHandlers.appBack.postMessage('1');
                                }else{ //android回调
                                    grapefs.onPageFinished();
                                }
                        }
                        _this.info = data.data;
                        let updateDate = new Date(data.data.updated_at * 1000);
                        _this.y = updateDate.getFullYear();
                        _this.m = (updateDate.getMonth()+1 < 10 ? '0'+(updateDate.getMonth()+1) : updateDate.getMonth()+1);
                        _this.d = updateDate.getDate() + ' ';
                        _this.bigMoney = smalltoBIG(_this.info.total_funds);
                  }else{
                        Toast({
                            message: data.info,
                            position: 'middle',
                            duration: 1500
                        });
                        if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                           // window.webkit.messageHandlers.appBack.postMessage('6');
                        }else{ //android回调
                            grapefs.onPageError();
                        }
                  }   
              })
        },
        saveEv:function(){
            let _this = this;
            if(_this.base64Url.length == '0'){
               for(let i = 1; i <=2; i++){
                    _this.creatPng('page'+(5+i),i);
                }
            }else{
                if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                    window.webkit.messageHandlers.appBack.postMessage('8');
                }else{ //android回调
                    grapefs.onSaveSuccess();
                } 
            }
            
        },
         //网页生成图片
        creatPng:function(ev,page){
            let _this = this;
            let event = document.getElementById(ev);
            html2canvas(event,{useCORS: true}).then(function(canvas) {
                let base64 = canvas.toDataURL("image/jpeg",0.5);
                _this.base64Url.push(base64)
                if(_this.base64Url.length=='2'){
                    _this.saveCard()
                }
            });
        },
        //保存股份证书
        saveCard:function(imgUrl,page){
            let _this = this;   
            if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
               Indicator.open({
                 text: '正在加载···',
                 spinnerType: 'fading-circle'
               });
             }
             let params = {
                type:'POST',
                url:'index_fileUpload',
                data:{
                  type:`shareholder_certificate`,
                  img_url:_this.base64Url,
                }
              }
              http(params,(data)=>{
                    if(data.status == '1'){
                            if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                                window.webkit.messageHandlers.appBack.postMessage('8');
                            }else{ //android回调
                                grapefs.onSaveSuccess();
                            } 
                   }else{
                        Toast({
                            message: data.info,
                            position: 'middle',
                            duration: 1500
                        });
                        _this.isFlag = 0;//如果有失败返回，标识符归零，从新开始上传
                         if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                            window.webkit.messageHandlers.appBack.postMessage('9');
                         }else{ //android回调
                            grapefs.onSaveFail();
                         }
                   }
              })
        },
    },
}
</script> 
<style lang="scss" scoped>
  .wrapper{
       width:100%;
       .span{
           display: inline-block;
           border-bottom:1px solid #e5e5e5;
           //border:1px solid red;
           text-align: center;
           color:#000;
       }
       p{
           font-size:.25rem;
           margin:.12rem 0;
           font-weight: 600;
       }
      .page6,.page7{
            position: relative;
            img{
               width:100%;
               height:auto; 
            }
           .card_name{
                position: absolute;
                color:#021929;
                top:30%;
                left:17%;
                //right:5%;
                font-size:.2rem;
                p{
                    font-family:"SimSun";
                    font-weight: 400;
                    opacity: 0.58;
                }
                span{
                    display: inline-block;
                    font-family:"SimSun";
                    font-weight: 400;
                    opacity: 0.58;
                    font-size:.25rem;
                }
                .name{
                    width:3rem;
                }
           }
           .card_info{
                position: absolute;
                top:51%;
                left:10%;
                right:10%;
                h3{
                    position: relative;
                    display: inline-block;
                    left:44%;
                    right:30%;
                    font-size:.5rem;
                    color:#050c26;
                    font-weight:600;
                }
                p{
                  position: relative;
                  margin-top:.3rem;
                  line-height: .6rem;
                  text-indent: .6rem;
                  color:#070e27;
                  font-size:.3rem;
                }
           }
           .card_date{
                position: absolute;
                top:75%;
                left:10%;
                img:nth-child(1){
                  position: relative;
                  top:.55rem;
                  left:2rem;
                  width:2.5rem;
                  height:1rem;
                }
                img:nth-child(2){
                  position: relative;
                  top:-1.5rem;
                  left:7rem;
                  width:3rem;
                  height:3rem;
                }
            }
            .right_date{
                position: absolute;
                top:90%;
                left:55%;
                font-family:"SimSun";
                font-weight: 400;
                opacity: 0.58;
            }
            .back_img{
                position: absolute;
                border:1px solid #e5e5e5;
                width:80%;
                top:65%;
                left:10%;
                height:4rem
            }
      }
  }
</style>