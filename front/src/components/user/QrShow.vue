<template>
    <div class="wrapAll">
        <div class="logo">
            <p>기린아 강릉투어</p>
        </div>
        <!-- // logo end -->

        <div class="section">
            <!-- <div class="timer">
                <p>48:00:00</p>
            </div> -->
            <!-- //timer end -->
            <div class="qrSec">
                <qr-gen></qr-gen>
                <p class="num">2022012611111</p>
            </div>
            <!-- // qrSec end -->

            <div class="userInfo">
                <p class="name">구매자 이름 : 이승헌</p>
                <p class="phoneNum">휴대폰번호 : 01011114444</p>
            </div>
            <!-- // userInfo end -->
        </div>
        <!-- // section end -->
    </div>
    
</template>

<script>
import QrGen from '../test/QrGen.vue'
export default {
    components: { QrGen },


}
</script>

<style scoped>
    .wrapAll {overflow: hidden; width: 30%; background-color: #FF6A6A; text-align: center; margin: 0 auto;}
    .wrapAll p {color: #fff; font-size: 20px;}

    .wrapAll .logo {float: right; margin: 0 50px 0;}
    .wrapAll .logo p {font-size: 30px;}

    .wrapAll .section .timer {margin: 50px 0;}
    .wrapAll .section .timer p {font-size: 60px;}

    .wrapAll .section .qrSec {float: center; margin: 50px 0; }
    .wrapAll .section .qrSec .num {margin: 20px 0; font-weight: 600;}

    .wrapAll .section .userInfo {}
</style>