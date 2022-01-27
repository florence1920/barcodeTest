<template>
    <div class="cam">
        <p class="error">{{ error }}</p>
        <div class="qrSec">
            <div class="barrier hor hor1"></div>
            <div class="barrier ver v1"></div>
            <div class="barrier hor hor2"></div>
            <div class="barrier ver v2"></div>
            <qrcode-stream @decode="onDecode" @init="onInit" class="scanner" />
            <!-- // 화면  -->
        </div>
            <router-link to="/admin" class="back"><img src="../../assets/icon/back.png" alt="" width="100%"></router-link>
        <p class="decode-result">QR정보:  <b>{{ result }}</b></p>
        <!-- //결과 정보 -->
    </div>    
</template>

<script>

import { QrcodeStream } from 'vue-qrcode-reader'

export default {

components: { QrcodeStream },

data () {
    return {
    result: '',
    error: ''
    }
},

methods: {
    onDecode (result) {
    this.result = result
    },

    async onInit (promise) {
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
        }
    }
    }
}
</script>

<style scoped>
    .cam {width: 100%; height: 100%; position: relative;}
    .cam .error {color: red; font-weight: 600;}
    p {color: #000;}
    .cam a {color: #fff; font-weight: 600;}
    .cam .back {position: absolute;top: 20px;left: 0; width: 40px; height: 40px; background-color: #aaa; border-radius: 30px; padding: 5px; z-index: 2;}
    .cam .qrSec {border-radius: 30px;}
    .cam .barrier.hor1 {position: absolute;top: 0;left: 0; width: 100%; height: 200px; background-color: rgba(0,0,0,.5); z-index: 1;}
    .cam .barrier.hor2 {position: absolute;bottom: 0;left: 0; width: 100%; height: 200px; background-color: rgba(0,0,0,.5); z-index: 1;}
    .cam .barrier.v1 {position: absolute;top: 200px;left: 0; width: 100px; height: 316px; background-color: rgba(0,0,0,.5); z-index: 1;}
    .cam .barrier.v2 {position: absolute;top: 200px;right: 0; width: 100px; height: 316px; background-color: rgba(0,0,0,.5); z-index: 1;}
    /* .cam .barrier.b1 {width: 100%; height: 50px;} */
    .cam .scanner {width: 100%; height: 700px;}
</style>