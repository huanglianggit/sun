<template>
    <div class="wrapper" id="vip_bg">
        <!-- <div style="color:red">{{phone}}</div>-->
         <!-- <div style="color:red" >{{aaa}}</div> -->
        <img class="bg" src="./images/vip_bg.jpg"/>
        <div class="user">
            <div class="user_img" @click="checkImg">
                <img class="img" :src="imgSrc" id="user_img" />
                <input type="file" id="card_back" accept="image/*" class="input" @change="onFileChange('card_back')" v-show="false" ref="img">
                <canvas id="canvas" v-show="false"></canvas>
                <span v-show="isUpdate=='1'">上传头像</span>
            </div>
            <div class="user_info">
               <div>
                   <span>姓名 Name</span>
                   <span class="input_txt">{{user.name}}</span>
               </div>
               <div>
                   <span>日期 Department</span>
                   <span class="input_txt">{{user.created_at}}</span>
               </div>
               <div>
                   <span>编号 Position</span>
                   <span class="input_txt">{{user.number}}</span>
               </div>
            </div>
            <!-- <div @click="creatPng" style="color:red">上传图片</div> -->
            <!-- <div @click="toBase" style="color:red">上传图片</div> -->
        </div>
    </div>
</template>
<script>
import {http} from "./../../common/js/axios_api";
import {getQueryString,setCookie,base64decode} from "./../../common/js/base-method";
import {Toast,Indicator,MessageBox} from "mint-ui";
import html2canvas from 'html2canvas';
export default {
    data(){
        return{
            //用户信息
            user:{},
            //url获取用户手机号
            phone:``,
            base64:``,
            imgSrc:`./../../../static/images/base_img.png`,
            //是否可修改头像  1可以  0不可以
            isUpdate:`1`,
            //设备标示
            UA:``,
        }
    },
    created() {
         //当前设备类型 android/ios
        this.UA = navigator.userAgent;
        this.getInfo()
    },
    mounted() {
        // 将backToday方法绑定到window下面，提供给外部调用
        window['creatPng'] = () => {
             this.creatPng();
             return `1`;
        },
        //修改资料
        window['isUpdateImg'] = () => {
             this.isUpdateImg();
             return `1`;
        },
         //获取会员信息
        window['getInfo'] = () => {
             this.getInfo();
             return `1`;
        },
         //修改头像不可点击
        window['NOImg'] = () => {
             this.NOImg();
             return `1`;
        },
        window['AndroidImg'] = (path) =>{
            this.AndroidImg(path);
            return "1";
        },
        window['IOSImg'] =(path) =>{
            this.IOSImg(path);
            return '1'
        }
    },
    methods: {
        getInfo:function(){
             let _this = this;
             _this.phone = getQueryString("phone");
             let params = {
                type:'POST',
                url:'extension_members',
                data:{
                  mobile:_this.phone,
                }
              }
              http(params,(data)=>{
                  if(data.status == '1'){
                        _this.user = data.data;
                        if(data.data.certificate == ''){
                            _this.isUpdate = `1`;
                            grapefs.initHeader(false)
                        }else{
                            _this.isUpdate = `0`;
                            _this.imgSrc = data.data.member_avatar;
                            if(_this.UA.match(/iPhone|iPod|iPad/)){//ios
                                window.webkit.messageHandlers.appBack.postMessage('1');
                            }else{ //android
                                grapefs.initHeader(true);
                            } 
                        }
                  }else{
                       Toast({
                            message: data.info,
                            position: 'middle',
                            duration: 1500
                        });
                          if(_this.UA.match(/iPhone|iPod|iPad/)){//ios
                                //window.webkit.messageHandlers.appBack.postMessage('1');
                            }else{ //android
                               grapefs.initHeader(true);
                               // grapefs.onPageError();
                            }

                  }  
              })
        },
        //选择图片回调
        onFileChange: function(event) {
			let _this = this;
			let fileObj = document.getElementById(event);
			let reader = new FileReader();
			reader.readAsDataURL(fileObj.files[0]);
			reader.onloadend = function(ev) {
				console.log("```````````````" + JSON.stringify(ev.target))
				let image = new Image();
                image.src = ev.target.result;
                image.onload = function() { //创建一个image对象，给canvas绘制使用  
                    let canvas = document.getElementById("canvas");
                    canvas.width = (image.width * 0.8);
                    canvas.height = (image.height * 0.8); //计算等比缩小后图片宽高   
                    let ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                    let newImageData = canvas.toDataURL("image/jpeg", 0.8); //重新生成图片      
                    _this.imgSrc = image.src;
                }	
			};
        },
        //选择头像
        checkImg:function(){
            let _this = this;
            //this.$refs.img.click();
            if(_this.isUpdate == '1'){
               if(_this.UA.match(/iPhone|iPod|iPad/)){//iphone
                  window.webkit.messageHandlers.appBack.postMessage('2');
               }else{//android
                  grapefs.takePhoto();
               } 
            }
        },
        //上传服务器
        toBase:function(){
            let _this = this;
            _this.isUpdate = 0;
             let params = {
                type:'POST',
                url:'index_fileUpload',
                data:{
                  type:`membership`,
                  img_url:_this.base64,
                }
              }
              http(params,(data)=>{
                    if(data.status == '1'){
                         _this.isUpdate = '0';
                         if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                            window.webkit.messageHandlers.appBack.postMessage('1');
                         }else{ //android回调
                            grapefs.saveSuccess();
                         } 
                   }else{
                         if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                            window.webkit.messageHandlers.appBack.postMessage('0');
                         }else{ //android回调
                            grapefs.saveFail();
                         }
                   }
              })
        },
        //网页生成图片
        creatPng:function(){
            let _this = this;
            _this.isUpdate = `0`;
            let event = document.getElementById("vip_bg");
            html2canvas(event ,{
               // async:false,
                //allowTaint:false,
                useCORS: true,
               })
            .then(canvas=> {
                _this.base64 = canvas.toDataURL("image/jpeg",0.5);
                _this.toBase();
            });
        },
        AndroidImg:function(path){
            this.imgSrc = path;
        },
        IOSImg:function(path){
            this.imgSrc = path;
        },
        //用于app判断是否修改资料  启用/禁用修改头像
        isUpdateImg:function(){
            this.isUpdate = '1';
        },
        //android返回调用方法
        NOImg:function(){
            this.isUpdate = '0';
        },
    }
}
</script> 
<style lang="scss" scoped>
    .wrapper{
        // width:100%;
         height:100%;
         .bg{
            width:100%;
            height:auto;
         }
         .user{
           position: absolute;
           left:5.5vw;
           top:72vh;
           display: flex;
           color:#000;
           width:4rem;
           height:4rem;
           //border:1px solid green;
           .user_img{
               width:1.38rem;
               padding-top: .1rem;
             .img{
               width:1.38rem;
               height:1.56rem;
              //  opacity: 0.5;
             }
             span{
                 width:100%;
                 margin-top:.1rem;
                 text-align: center;
                 display: inline-block;
                 font-size:.22rem;
                 color:#525251;
             }
           }
           .user_info{
             flex:1;
             margin-left:.24rem;
             div{
                 color:#525251;
                 font-size:.2rem;
                 border-bottom: 1px solid #525251;
                 padding: .1rem 0;
                 margin-right:.3rem;
                 span{
                     display: block;
                 }
                 .input_txt{
                     margin-top:.18rem;
                     font-size:.22rem;
                     color:#000000;
                 }
             }
           }
         }
    }    
</style>