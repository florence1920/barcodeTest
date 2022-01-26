<template>
  <div class="home">
    <HelloWorld/>
    <link-gen></link-gen>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/test/HelloWorld.vue'
import LinkGen from '../../components/test/LinkGen.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LinkGen
  }
}
</script>
