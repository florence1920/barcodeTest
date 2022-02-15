<template>
    <div class="scannerWrap">
        <p class="error">{{ error }}</p>
        <router-link to="/admin" class="back"><img src="../../assets/icon/back.png" alt="" width="100%"></router-link>
        <div class="qrSec">
            <ul class="blur">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <qrcode-stream @decode="onDecode" @init="onInit" class="scanner">
                <div class="loading-indicator" v-if="loading">
                    Loading...
                </div>
            </qrcode-stream>
            <!-- // 화면  -->
        </div>
        <!-- //결과 정보 -->
        <div class="infoBox" v-if="result">
            <p class="decode-result">패스번호:  <b>{{ result }}</b></p>
            <p>강릉투어패스 {{ this.$store.state.user.headCount }}</p>
        </div>
    </div>    
</template>

<script>

import { QrcodeStream } from 'vue-qrcode-reader'

export default {

components: { QrcodeStream },

data () {
    return {
        result: '',
        error: '',
        loading: false,
    }
},

methods: {
    onDecode (result) {
    this.result = result
    setTimeout(() => {
        this.result = '';
    }, 3000);
    },

    async onInit (promise) {
        this.loading = true
        try {
            await promise
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                this.error = "ERROR: you need to grant camera access permission"
            } else if (error.name === 'NotFoundError') {
                this.error = "ERROR: no camera on this device"
            } else if (error.name === 'NotSupportedError') {
                this.error = "ERROR: secure context required (HTTPS, localhost)"
            } else if (error.name === 'NotReadableError') {
                this.error = "ERROR: is the camera already in use?"
            } else if (error.name === 'OverconstrainedError') {
                this.error = "ERROR: installed cameras are not suitable"
            } else if (error.name === 'StreamApiNotSupportedError') {
                this.error = "ERROR: Stream API is not supported in this browser"
            } else if (error.name === 'InsecureContextError') {
                this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
            } else {
                this.error = `ERROR: Camera error (${error.name})`;
            }
        } finally {
            this.loading = false;
        }
    }
    }
}
</script>

<style scoped>

    .scannerWrap {width: 100%; height: 900px;}
    .scannerWrap .back {position: absolute;top: 40px;left: 20px; width: 40px; height: 40px; background-color: rgb(0, 0, 0, .3); border-radius: 30px; padding: 5px; z-index: 2;}

    .scannerWrap .qrSec {overflow: hidden; width: 100%; height: 100%; border-radius: 30px; position: relative;}
    .scannerWrap .qrSec .blur {overflow: hidden; position: absolute;top: 0;left: 0; width: 100%; height: 100%; z-index: 1;}
    .scannerWrap .qrSec .blur > li {float: left; }
    .scannerWrap .qrSec .blur > li:nth-child(1) {width: 100%; height: 30%; background-color: rgba(0,0,0,.5);}
    .scannerWrap .qrSec .blur > li:nth-child(2) {width: 20%; height: 40%;background-color: rgba(0,0,0,.5); }
    .scannerWrap .qrSec .blur > li:nth-child(3) {width: 60%; height: 40%; border:3px #dee756 dashed; padding: 10px;}
    .scannerWrap .qrSec .blur > li:nth-child(4) {width: 20%; height: 40%;background-color: rgba(0,0,0,.5);}
    .scannerWrap .qrSec .blur > li:nth-child(5) {width: 100%; height: 30%;background-color: rgba(0,0,0,.5);}
    .scannerWrap .qrSec .scanner {}

    .scannerWrap .infoBox {width: 250px; height: 100px; background: #dee756; border-radius: 10px; position: absolute; top: 100px; left: 50%; transform: translateX(-50%); z-index:2;}
    .scannerWrap .infoBox p {font-weight: 600; text-align: center; color: #000; margin: 20px 0 0;}
    .loading-indicator {line-height: 900px; font-size: 30px; font-weight: 600; text-align: center; color: black; }



</style>