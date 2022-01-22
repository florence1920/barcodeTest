<template>
  <div class="about">
      <!-- <input v-model="barcodeValue" /><br> -->
      <barcode v-bind:value="barcodeValue" v-bind:format="format">
      </barcode>
      <div v-on:click="generateBar">바코드 생성</div>
      <input type="text" v-model="userName">
      <input type="text" v-model="phoneNumber">
      <input type="text" v-model="goodsNumber">
      <div class="box" v-on:click="checkUser">
        사용자 확인
      </div>
      
      <p class="result">굿</p>
  </div>
</template>

<script>
import VueBarcode from 'vue-barcode';

export default {
  components: {
      'barcode': VueBarcode
  },
 data() {
   return {
     barcodeValue: '',
     format : 'CODE128',
     userName : 'lsh',
     phoneNumber : '1',
     goodsNumber : '2022010111111111'
   }
 },
 methods: {
   checkUser() {
     this.barcodeValue = '';
     const user = {
        userName : this.userName,
        phoneNumber : this.phoneNumber,
        goodsNumber : this.goodsNumber
     }
     this.$store.dispatch('GET_CHECK',user);
    
   },
   generateBar(){
    if(this.$store.state.check.auth == true){
      this.barcodeValue = this.$store.state.check.goodsNumber;
      console.log('여기야');
     }else{
       this.barcodeValue = '';
     }
   }
 },
}
</script>

<style scoped>
  .box { padding:0 0 0 35px; margin:50px 0; width: 160px; height: 100px; line-height: 100px; background: #42b983; color: rgb(202, 202, 202); font-weight: bold; border-radius: 3px; cursor: pointer;}
  .box:hover {background: #00ff8c; color: #fff;}
  .result {height:100px; line-height: 100px; font-size: 40px; font-weight: bold; color: #00ff8c;}
  input {margin: 10px;}
</style>