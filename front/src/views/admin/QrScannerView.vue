<template>
    <div class="wrapAll">
        <div class="qrSec">
            <qr-scanner></qr-scanner>
            <div class="turnCam">
                <p></p>
            </div>
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
    /* .qrSec .turnCam {width: 100%; height: 100px; background-color: rgb(241, 121, 121); border-bottom-left-radius: 20px;} */
    .qrSec .turnCam > p {font-size: 30px; text-align: center; line-height: 100px;}

</style>