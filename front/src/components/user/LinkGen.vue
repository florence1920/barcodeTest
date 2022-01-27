<template>
  <div>
      <div class="box" v-on:click="linkGenerator">
        링크 생성
      </div>
      <router-link to="/qrshow">{{url}}</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            url: `http://localhost:8080/qrshow`,
            
        }
    },
    methods: {
        linkGenerator() {
            console.log('click');
            this.$store.dispatch('',this.user)
        }
    },
}
</script>

<style scoped>
    .box { padding:0 0 0 45px; margin:50px 0; width: 160px; height: 100px; line-height: 100px; background: #ff6a6a; color: rgb(202, 202, 202); font-weight: bold; border-radius: 3px; cursor: pointer;}
    .box:hover {background: #ff6a6a; color: #fff;}
</style>