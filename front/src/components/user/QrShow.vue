<template>
    <div class="wrapAll">
        <div class="logo">
            <p>기린아</p>
        </div>
        <div class="qrSec">
            <qr-gen></qr-gen>
        </div>
        <div class="userInfo">
            
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
    .wrapAll {overflow: hidden; width: 60%; background-color: #fff; text-align: center; margin: 0 auto;}
    .wrapAll .logo {float: right; margin:  0 50px 0;}

    .wrapAll .qrSec {float: center; margin: 100px 0 0;}
</style>