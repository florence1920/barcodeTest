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
                <p class="num">{{this.$store.state.user.goods}}</p>
            </div>
            <!-- // qrSec end -->

            <div class="userInfo">
                <p class="name">구매자 이름 : {{this.$store.state.user.userName}}</p>
                <p class="phoneNum">휴대폰번호 : {{this.$store.state.user.phone}}</p>
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

</style>