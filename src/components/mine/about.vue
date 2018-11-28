<template>
    <div>
        <!-- <h3>关于i微影</h3> -->
        <!-- <p>{{isabout}}</p> -->
        <img src="./images/ivy.png" width="100%"/>
    </div>
</template>
<script>
import {http} from "./../../common/js/axios_api";
import { Indicator,Toast} from 'mint-ui';
export default {
    data(){
        return{
            isabout:``
        }
    },
    // created(){
    //     this.abouts()
    // },
    methods:{
        // abouts:function(){
        //      let _this = this;
        //     Indicator.open({
        //         text: '加载中···',
        //         spinnerType: 'fading-circle'
        //     });
        //     let users = {
        //         type:'GET',
        //         url:'about_us',
        //         data:{
        //         }
        //     }
        //     http(users,function(data){
        //         console.log("axios返回结果>>>>" + JSON.stringify(data));
        //         _this.isabout = data.data[0].content;
        //         console.log(_this.isabout)
        //     })
        // }
    }
    
}
</script>
<style lang="scss" scoped>
div{
    //padding: .2rem;
    color: #fff;
    h3{
        font-size: .36rem;
        text-align: center;
    }
    p{
        font-size: .28rem;
        padding: .2rem 0;
        text-indent:.5rem;
        line-height: .35rem;
    }
}

</style>


