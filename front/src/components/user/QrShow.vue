<template>
    <div class="qrWrap">
        <img src="" alt="" class="logo"> 
        
        <div class="timerSec">
            <p class="explain">48시간이 지나면 사용이 불가능 합니다</p>
            <div class="line"></div>
            <p class="time">48:00:00</p>
        </div>

        <div class="userInfo">
            <div class="qrSec">
                <qr-gen></qr-gen>
                <!-- <p class="num">{{this.$store.state.user.goods}}</p> -->
            </div>
            <p class="tit">[강릉투어패스] 강릉투어패스 48시간 프리패스</p>
            <div class="box">
                <p>성인 : 1명</p>
            </div>
            <div class="info">
                <p class="name">구매자 이름 : {{this.$store.state.user.userName}}</p>
                <p class="phoneNum">휴대폰번호 : {{this.$store.state.user.phone}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import QrGen from '../test/QrGen.vue'
export default {
    components: { QrGen },


}
</script>

<style scoped>
    .wrapAll .qrWrap {overflow: hidden; width: 100%; height: 900px; text-align: center; background-color: #3b579d; color: #fff; font-weight: 600; border-radius: 30px; padding: 50px 10px;}

    .wrapAll .qrWrap .timerSec {margin: 0 0 20px 0;}
    .wrapAll .qrWrap .timerSec > p {margin: 10px 0;}
    .wrapAll .qrWrap .timerSec .explain {}
    .wrapAll .qrWrap .timerSec .line {width: 300px; border-inline: #3b579d;}
    .wrapAll .qrWrap .timerSec .time {font-size: 70px; font-weight: 600;}
    
    .wrapAll .qrWrap .userInfo {width: 90%; height: auto; background-color: #fff; text-align: center; border-radius: 15px; padding: 30px 10px; margin: 0 auto;}
    .wrapAll .qrWrap .userInfo .qrSec {width: 65%; height: auto; border: 3px solid #3b579d; border-radius: 10px; padding: 5px 0; margin: 0 auto;}
    .wrapAll .qrWrap .userInfo p {color: #000;}
    .wrapAll .qrWrap .userInfo .tit {margin: 20px 0;}
    .wrapAll .qrWrap .userInfo .box {width: 90%; height: auto;border: 2px solid #3b579d; padding: 10px 0; margin: 0 20px auto;}
    /* .wrapAll .qrWrap .userInfo .box p {color: #3b579d; font-weight: 600;} */

    .wrapAll .qrWrap .userInfo .info {margin: 20px 0 0;}
    .wrapAll .qrWrap .userInfo .info > p {margin: 5px 0 0 0;}


</style>