<template>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: 'hi',
        size: 500,
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>