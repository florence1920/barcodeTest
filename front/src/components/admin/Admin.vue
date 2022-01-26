<template>
<ul class="menu">
    <li><router-link to="/admin/storeinfo"> 매장 정보 </router-link></li>
    <li><router-link to='/admin/qrscanner'> QR 스캐너 </router-link></li>
    <li><router-link to="/admin/salesinfo"> 매출 정보 </router-link></li>
    
</ul>
</template>

<script>

export default {

}
</script>

<style scoped>
    .menu {overflow: hidden; width: 100%;}
    .menu li {float: left; width: 30%; height: 150px; background-color: rgb(241, 121, 121); text-align: center; line-height: 150px; margin: 0 5% 20px 0;}
    .menu li:nth-child(3n) {margin: 0 0 20px 0;}
    .menu li a {width: 100%; height: 100%; color: #fff; font-weight: 600;}
</style>