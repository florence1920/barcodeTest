<template>
    <div>
        <router-link to="/admin"> 뒤로가기 </router-link>
        <store-info></store-info>
    </div>
</template>

<script>
import StoreInfo from '../../components/admin/storeInfo.vue'
export default {
    components: { StoreInfo },

}
</script>

<style scoped>
    .cam a {color: #fff; font-weight: 600;}
</style>