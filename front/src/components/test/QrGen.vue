<template>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: this.$store.state.user.goods,
        size: 300,
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>