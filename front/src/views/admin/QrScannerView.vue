<template>
    <div class="qrSec">
        <qr-scanner></qr-scanner>
        <div class="block"></div>
        <div class="turnCam">
            <p>카메라 전환</p>
        </div>
    </div>
</template>

<script>
import QrScanner from '../../components/admin/QrScanner.vue'
export default {
    components: { 
        QrScanner 
        },

}
</script>

<style scoped>
    .qrSec {position: relative; width: 100%; color: #fff;}
    .qrSec .turnCam {width: 100%; height: 100px; background-color: rgb(241, 121, 121);}
    .qrSec .turnCam > p {font-size: 30px; text-align: center; line-height: 100px;}


</style>