<template>
    <div class="wrapper">
      <!-- <header>
           <div><img src="./images/back.png" @click="toBack"/></div>
          <div>股份认购协议</div> -->
          <!-- <div @click="aaa" style="color:red;font-size:.3rem">保存</div>
      </header>    -->
      <section class="page1" id="page1">
          <img src="./images/page1.png"/>
          <div>{{date}}</div>
      </section>
      <section class="page2" id="page2">
          <img src="./images/page_bg.png"/>
          <div>
            <h2>i(爱)微影原始股认购协议书</h2>
            <p>甲　　方：<span class="span" style="margin-right:.1rem;width:1.6rem;">{{info.user_name}}</span>          证件号码：<span class="span" style="width:3.7rem;">{{info.id_card}}</span></p>             
            <p>联系电话：<span class="span" style="margin-right:.1rem;width:1.6rem;">{{info.mobile}}</span>          住　　址：<span class="span" style="width:3.7rem;">{{info.address}}</span></p>
            <p>乙    方: 深圳亿凯颠覆宇宙传媒有限公司</p>
            <p>地    址: 深圳市南山区南头街道马家龙金龙工业城2号厂房5层510A</p>
            <p>法定代表人：王小虎</p>
            <p>鉴于：</p>
             <ul>
                 <li> 1、乙方是依法注册成立的企业法人，享有由股东投资形成的全部法人财产权，依法享有民事权力、承担民事责任，乙方成立时注册资本金为人民币5000万元。由于公司多年付出积累经验加之创新能力较强，现阶段推出一款名为：i微影 记录人生社会应用软件，乙方通过创始股东会议决定，现将此软件总股份的30%对外进行众筹，让更多的家庭享受产品带来的红利收益。</li>
                 <li> 2、i微影总份额为5000万股，乙方占比额为100%，并全权持有；</li>
                 <li>3、甲方已经详细了解了乙方举行的投资入股事宜，并愿意参与投资入股活动；     
   据此，为充分发挥资源优势，促进应用的快速发展，为投资股东谋求最大回报，以及根据投资相关法律法规的规定，现经甲、乙双方友好协商，在自愿、平等、公正、诚实的原则基础上，就甲方参与并投资认购i微影产品原始股份协议如下</li>
             </ul>
            <p>第一条  认股及投资目的</p>
              <ul>
                 <li>甲乙双方同意以充分发挥资源优势，快速发展，在长期的合作中利益共享为目的；</li>  
             </ul>
             <p>第二条  乙方新增投资原始股东入股额度</p>
              <ul>
                 <li>i微影社会应用系统原始股份总额为5000万股（大写：伍仟万股），每股股价按当阶段计算（每个家庭限一人入股）。投资入股后i微影股本不变，投资股东增加（500股起投20000股封顶）。</li>  
             </ul>
             <p>第三条  甲方认购份额:</p>
              <ul>
                 <li>甲方以现金或转账方式认购 详见股份证书 股；</li>  
             </ul>
             <p>第四条  认购价格</p>
              <ul>
                 <li>本期现金投资，每股价为 详见股份证书 元人民币；</li>  
             </ul>
             <p>第五条、资金到位时间：</p>
              <ul>
                 <li>1、甲方于<span class="span" style="width:.5rem;">{{y}}</span> 年<span class="span" style="width:.5rem;">{{m}}</span>月<span class="span" style="width:.5rem;">{{d}}</span>日一次性出资 详见股份证书 万元，占i微影产品总股份的 详见股份证书 ％；</li>  
             </ul>
             <p>第六条  账户指定：</p>
              <ul>
                 <li>甲方用于认购股份的全部资金直接汇入乙方指定的以下银行帐户上：</li>  
                 <li>公司账户：</li>
                 <li>账户名：深圳亿凯颠覆宇宙传媒有限公司</li>
                 <li>帐  号：442010 147000 5251 3722</li>
                 <li>开户行：中国建设银行股份有限公司深圳梅景支行</li>
                 <li>个人账户：</li>
                 <li>账户名：王小虎</li>
                 <li>账  号：6214 8378 5666 7518</li>
                 <li>开户行：中国招商银行深圳车公庙支行</li>
                 <li>账户名：王彦东</li>
                 <li>账  号：6230 9432 3000 5561 063</li>
             </ul>
          </div>
      </section>
      <section class="page3" id="page3">
          <img src="./images/page_bg.png"/>
          <div>  
            <ul>
                 <li>开户行：中国建设银行广东东莞寮步支行</li>
             </ul>
            <p>第七条  到账通知：</p>
              <ul>
                 <li>乙方应在收到甲方汇入认购款项后的 七 个工作日内，向甲方开出认购股份资金收据附协议一并寄出；</li>  
             </ul>
             <p>第八条  乙方承诺：</p>
              <ul>
                 <li>1、乙方为本协议所转让股份的唯一所有权人；</li>
                 <li>2、乙方已完全履行了公司注册资本的出资义务；</li>  
                 <li>3、保证所与本次转让股份有关的活动中所提及的文件完整、真实、且合法有效；</li>  
                 <li>4、保证转让的股份完整，未设定任何担保、抵押及其他第三方权益；</li>  
                 <li>5、保证其主体资格合法，有出让股份的权利能力与行为能力；</li>  
                 <li>6、保证因涉及股份交割日前的事实而产生的诉讼或仲裁由乙方承担；</li>  
                 <li>7、对于甲方向乙方汇入的认购i微影产品原始股股份的资金，由公司用于研发及现行业务开展及产品推广等各项开支及前期投入费用开支；</li>
                 <li>8、在本次认购股份的资金全部到位后 / 个工作日内，完成召开新老股东大会，汇报产品进展状况，以及下一阶段准备规划；</li>
                 <li>9、由于乙方的原因致使股份认购手续无法按期完成，乙方须保证全额退还甲方的认购款，并按银行同期利率支付甲方利息（根据甲方付款之日计算）；</li>
             </ul>
             <p>第九条  甲方承诺：</p>
              <ul>
                 <li>1、甲方在签订此协议时，已知悉认购i微影产品原始股的行为所带来的风险和利益；</li>
                 <li>2、甲方用于认购股份的资金来源正当；</li>  
                 <li>3、遵守乙方关于认购原始股股份的条件，积极配合乙方完成原始股东的各项工作；</li>  
                 <li>4、若甲方原因致使股份认购手续无法完成，导致股份无法登记到甲方名下，所造成的后果则由甲方自负；</li>  
                 <li>5、甲方持股不得擅自对外转让抛售或并购，由公司股东会议决定。否则由公司按原价收回；</li>  
                 <li>6、若甲方损害国家和公司名誉及利益的，公司将无条件（零补偿）收回其所持股份；</li>  
                 <li>7、甲方所持股份仅享受i微影产品带来的利益分红，不参与公司的任何决策与管理；</li>  
             </ul>
             <p>第十条  有关费用的负担：</p>
              <ul>
                 <li>在本次投资入股过程中发生的有关费用（如考察开支等费用）由 甲方自行 承担；</li>  
             </ul>
             <p>第十一条 有关股东权利义务：</p>
              <ul>
                 <li>1、从本协议生效之日起，甲方实际行使作为i 微影产品投资股东的权利，并履行相应的股东义务。必要时，乙方应协助甲方行使股东权利、履行股东义务。</li>
                 <li>2、从本协议生效之日起，甲方按其所持股比例依法享有产品盈利分红及承担投资失败的风险。</li>
                 <li>3、甲方有权申请组织股东团队在当地设立子公司配合总部开展各项业务，享受子公司的各项收益。</li>
             </ul>
             <p>第十二条 协议的变更和解除：</p>
              <ul>
                 <li>发生下列情况之一时，可变更或解除本协议，但甲乙双方需签订变更或解除协议书：</li>  
                 <li>1、由于不可抗力或由于一方当事人虽无过失但无法防止的外因（如发生意外），致使本协议无法履行；</li>
                 <li>2、一方当事人丧失实际履约能力；</li>
                 <li>3、由于一方违约，严重影响了另一方的经济利益，使合同履行成为不必要；</li>
                 <li>4、因情况发生变化，当事人双方经过协商同意；</li>
                 <li>5、合同中约定的其它变更或解除协议的情况出现；</li>
             </ul>
              <p>第十三条  关于退股说明：</p>
              <ul>
                 <li>1、犹豫期为7天（无条件退股），超过7日至30日内退股,公司将扣除10%的服务费，</li>  
             </ul>
          </div>
      </section>
      <section class="page4" id="page4">
          <img src="./images/page_bg.png"/>
          <div>  
            <ul>
                 <li>超过一个月的将扣除30%的违约金。按原价退回。</li>
             </ul>
            <p>第十四条  违约责任：</p>
              <ul>
                 <li>1、 本协议书签字盖章后一经生效，双方必须自觉履行，任何一方未按协议书的规定全面履行义务应当依照法律和本协议书的规定承担责任；</li>  
                 <li>2、如甲方不能按期支付股份认购款，乙方视为甲方无入股意愿，不接受预定入股；</li>  
                 <li>3、如由于乙方的原因，致使甲方不能如期办理入股的，甲方有权提出撤回入股的资本金；</li>  
             </ul>
             <p>第十五条  争议解决 ：</p>
              <ul>
                 <li>本协议履行如发生争议，双方应协商解决；协商不成，任意一方均可向所管辖权的人民法院提起诉讼。</li>
             </ul>
             <p>第十六条  其他 ：</p>
              <ul>
                 <li>本协议一式  贰  份，甲乙双方各持  壹  份，都具有同等法律效力。</li>
             </ul>
             <p>第十七条  广告等收入分红指定(与投资者一致）账户</p>
              <p>账户名：<span class="span" style="margin-right:1.5rem;width:2rem;">{{info.user_name}}</span>          账　　号：<span class="span" style="width:2.8rem;">{{info.bank_number}}</span></p>             
              <p>开户行：<span class="span" style="margin-right:1.5rem;width:2rem;">{{info.bank_name}}</span>          支　　行：<span class="span" style="width:2.8rem;">{{info.opening_bank}}</span></p>
             
              <p style="margin-top:.5rem;">甲方（签字）：<span style="display:inline-block;width:3.5rem;"></span> 乙   方（签章）：</p> 
              <div style="position:relative;left:0;top:0;height:2rem;width:100%;">
                  <div style="position:absolute;width:3rem;height:1.5rem;text-align:center;line-height:1.5rem;" @click="toNote" v-if="sign==''">点击签名</div>
                  <img :src="sign" style="position:absolute;width:3rem;height:1.5rem;text-align:center;line-height:1.5rem;" v-else/>
                  <div style="position:absolute;left:50%; width:4rem;">
                       <img src="./images/yin.png" style="position:absolute;left:10%;top:-1.3rem;width:3rem;height:3rem;"/>
                        <p>深圳亿凯颠覆宇宙传媒有限公司</p> 
                        <p>电   话：0755-2290 4978</p> 
                        <p style="margin-top:.2rem;"><span style="display:inline-block;width:5.2rem;"></span> 法人签字：<img src="./images/tiger.png" style="width:2.5rem;height:1rem;position:relative;top:-.7rem;left:1.3rem"/></p>

                  </div>
              </div>
              <p style="margin-top:.5rem;"><span class="span" style="width:.8rem;">{{y}}</span>年<span class="span" style="width:.5rem;">{{m}}</span>月<span class="span" style="width:.5rem;">{{d}}</span>日<span style="display:inline-block;width:3rem;"></span><span class="span" style="width:.8rem;">{{y}}</span>年<span class="span" style="width:.5rem;">{{m}}</span>月<span class="span" style="width:.5rem;">{{d}}</span>日</p>        
              <p></p>
             <p>附件：</p>
              <ul>
                 <li>1、甲方证件复印件；</li>  
                 <li>2、乙方营业执照复印件；</li>
             </ul>
             <div style="border:1px solid #e5e5e5;width:90%;top:104%;left:2%;height:4rem">
                 <img style="width:50%;height:100%;border-right:1px solid #e5e5e5;display:inline-block" :src="info.positive_card"/>
                 <img style="width:48%;height:100%;display:inline-block" :src="info.opposite_card"/>
             </div>
          </div>
      </section>
      <section class="page5">
           <img src="./images/business_license.jpg"/>
      </section>
      <!--签名弹出层-->
      <section class="note" v-show="isNote">
          <!-- <div class="sign_header">
               <div id="back" @click="signBack">返回</div>
               <div id="clear">清除</div>
               <div id="save">保存</div>
          </div> -->
          <canvas id="canvas" :width="WIDTH" :height="HEIGHT"></canvas>
      </section>
    </div>
</template>
<script>
import {http} from "./../../common/js/axios_api";
import {getQueryString,setCookie} from "./../../common/js/base-method";
import {Toast,Indicator,MessageBox} from "mint-ui";
import html2canvas from 'html2canvas';
import SignaturePad from 'signature_pad'
export default {
    data(){
        return{
            //合同日期
            date:``,
            y:``,
            m:``,
            d:``,
            //合同相关信息
            info:{},
            isNote:false,
            sign:``,
            signaturePad:``,
            WIDTH:``,
            HEIGHT:``,
            //设备标示
            UA:``,
            //并发请求标识符
            isFlag:0,
            //开始发送请求
            startRequest:false,
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
        window['addSign'] = () => {
             this.addSign();
             return `1`;
        },
        window['clearSign'] = () => {
             this.clearSign();
             return `1`;
        },
        window['signBack'] = () => {
             this.signBack();
             return `1`;
        },
        window['creatCard'] = () => {
             this.creatCard();
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
                      if(data.data.status == '2'){//已签名
                         _this.sign = data.data.sign_img;
                      }
                    _this.info = data.data;
                    let updateDate = new Date(data.data.updated_at * 1000);
                    _this.y = updateDate.getFullYear();
                    _this.m = (updateDate.getMonth()+1 < 10 ? '0'+(updateDate.getMonth()+1) : updateDate.getMonth()+1);
                    _this.d = updateDate.getDate() + ' ';
                    _this.date = _this.y+"年"+_this.m+"月";
                      if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                           // window.webkit.messageHandlers.appBack.postMessage('6');
                        }else{ //android回调
                            grapefs.onPageFinished();
                        }
                  }else{
                        Toast({
                            message: data.info,
                            position: 'middle',
                            duration: 1500
                        });
                        if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                           // window.webkit.messageHandlers.appBack.postMessage('6');
                        }else{ //android回调
                            grapefs.onPageFinished();
                        }
                  }
              })
        },
        //打开签名
        toNote:function(){
            let _this = this;
            _this.isNote = true;
            _this.WIDTH = document.body.clientWidth;
            _this.HEIGHT = document.body.clientHeight;
            if(this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                 window.webkit.messageHandlers.appBack.postMessage('2');
            }else{ //android回调
                 grapefs.changeHeader();
            }
            _this.signaturePad = new SignaturePad(document.getElementById('canvas'), {
                backgroundColor: '#e5e5e5',
                penColor: 'rgb(0, 0, 0)'
            });
            // let saveButton = document.getElementById('save');
            // let cancelButton = document.getElementById('clear');
            // saveButton.addEventListener('click', function (event) {
            //   //_this.sign = _this.signaturePad.toDataURL('image/png');
              
            //   _this.addSign();
            //     //console.info(data)
            //   // window.open(data);
            // });
            // cancelButton.addEventListener('click', function (event) {
            //   // _this.signaturePad.clear();
            //    _this.clearSign()
            // });
        },
        //清除签名
        clearSign:function(){
            this.signaturePad.clear();
        },
        //签名返回
        signBack:function(){
            this.isNote = false; 
        },
        //签名完成后显示保存
        addSign:function(){
            let _this = this;
            //判断签名是否为空
            let data = _this.signaturePad.isEmpty();
            if(data == true){//签名为空
                if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                    window.webkit.messageHandlers.appBack.postMessage('11');
                }else{ //android回调
                    grapefs.checkSaveTips();
                }
            }else{//签名不为空
                _this.isNote = false;
                _this.sign = _this.signaturePad.toDataURL('image/png');
                if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                    window.webkit.messageHandlers.appBack.postMessage('3');
                }else{ //android回调
                    grapefs.saveSignatureSuccess();
                }
            }
        },
        //服务器保存签名
        saveSign:function(){
           let _this = this;
             let params = {
                type:'POST',
                url:'index_fileUpload',
                data:{
                  type:`shareholder_sign`,
                  img_url:_this.sign,
                }
              }
              http(params,(data)=>{
                    if(data.status == '1'){
                         for(let i = 1;i <= 4; i ++){
                             _this.creatPng("page"+i,i);
                             }
                   }else{
                    //    Toast({
                    //         message: data.info,
                    //         position: 'middle',
                    //         duration: 1500
                    //     });
                       if(_this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                            window.webkit.messageHandlers.appBack.postMessage('6');
                        }else{ //android回调
                            grapefs.saveSignatureFail();
                        }
                   }
              })
        },
        //生成证书
        creatCard:function(){
            if(this.sign == ""){//未签名，提示去签名
                if(this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                     window.webkit.messageHandlers.appBack.postMessage('1');
                }else{ //android回调
                     grapefs.checkSaveTips();
                }
            }else{
                //保存协议 先保存签名，成功之后再回调保存股份协议
                 this.saveSign()
            }   
        },
        //保存股份协议
        saveCard:function(imgUrl,page){
            let _this = this;
             let params = {
                type:'POST',
                url:'index_fileUpload',
                data:{
                  type:`shareholder_agreement`,
                  img_url:_this.base64Url,
                }
              }
              http(params,(data)=>{
                    if(data.status == '1'){
                           _this.startRequest = false;
                           if(this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                                window.webkit.messageHandlers.appBack.postMessage('4');
                            }else{ //android回调
                                grapefs.saveSuccess();
                            }
                   }else{
                       Toast({
                            message: data.info,
                            position: 'middle',
                            duration: 1500
                        });
                        _this.isFlag = 0;//如果有失败返回，标识符归零，从新开始上传
                        if(this.UA.match(/iPhone|iPod|iPad/)){//ios回调
                            window.webkit.messageHandlers.appBack.postMessage('5');
                        }else{ //android回调
                            grapefs.saveFail();
                        }
                   }
              })
        },
        //网页生成图片
        creatPng:function(ev,page){
            let _this = this;
            let event = document.getElementById(ev);
            html2canvas(event,{useCORS: true}).then(function(canvas) {
                let base64 = canvas.toDataURL("image/jpeg",0.5);
                _this.base64Url.push(base64)
                if(_this.base64Url.length=='4'){
                     _this.saveCard()
                }
            });
        },
    },
}
</script> 
<style lang="scss" scoped>
  .wrapper{
       .span{
           display: inline-block;
           border-bottom:1px solid #e5e5e5;
           text-align: center;
           color:#000;
       }
       p{
           font-size:.25rem;
           margin:.08rem 0;
           font-weight: 600;
       }
       ul{
           li{
               font-size:.2rem;
           }
       }
      .page1{
            position: relative;
            //top:1rem;
            img{
               width:100%;
               height:auto; 
            }
            div{
                position: absolute;
                color:#000;
                top:90%;
                left:42%;
                font-size:.4rem;
                font-weight: 600;
            }
      }
      .page2,.page3,.page4,.page5{
            position: relative;
            //top:1rem;
            img{
               width:100%;
               height:auto; 
            }
            div{
                position: absolute;
                color:#000;
                top:.1rem;
                left:6%;
                right:5%;
                font-size:.5rem;
                h2{
                    text-align: center;
                    margin-bottom: .4rem;
                }
            }
      }
      .note{
          position: fixed;
          z-index: 999;
          left:0;
          top:0;
          width:100%;
          height:100%;
          background-color: #fff;
          .sign_header{
              width:100%;
              height:1rem;
              background-color: #282834;
              display: flex;
              font-size:.3rem;
              align-items: center;
              color:#fff;
              div{
                flex:1;
                margin-left:.3rem;
              }
              div:nth-child(1){
                  flex:6
              }
          }
          #canvas{
            // width:100%;
            // height:100%;
            left:0;
            top:0;
            background-color: #e5e5e5;
          }
      }
  }
</style>
<style>
.mint-indicator-wrapper,.mint-indicator-mask{
   z-index: 9999;
}
</style>