<template>
  <div>
      <div class="box" v-on:click="linkGenerator">
        링크 생성
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            key: 'value'
        }
    },
    methods: {
        linkGenerator() {
            console.log('click');
        }
    },
}
</script>

<style scoped>
    .box { padding:0 0 0 45px; margin:50px 0; width: 160px; height: 100px; line-height: 100px; background: #42b983; color: rgb(202, 202, 202); font-weight: bold; border-radius: 3px; cursor: pointer;}
    .box:hover {background: #00ff8c; color: #fff;}
</style>