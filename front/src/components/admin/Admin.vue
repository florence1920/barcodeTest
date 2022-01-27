<template>
<div class="wrapAll">
<div class="top">
    <p class="tit">기린아 매장님 좋은 하루 되세요.</p>
</div>
<ul class="menu">
    <li><router-link to="/admin/storeinfo"> 매장 정보 </router-link></li>
    <li><router-link to='/admin/qrscanner'> QR 스캐너 </router-link></li>
    <li><router-link to="/admin/salesinfo"> 히스토리 </router-link></li>
    <li><router-link to=""> 업데이트 예정 </router-link></li>
    
</ul>
</div>
</template>

<script>

export default {

}
</script>

<style scoped>
    .wrapAll .top {margin: 0 20px ;}
    .wrapAll .top .tit {font-size: 20px;}
    .wrapAll .menu {overflow: hidden; width: 100%; margin: 30px 0 0;}
    .wrapAll .menu li {float: left; width: 40%; height: 100px; background-color: #3b579d; text-align: center; margin: 50px 20px 20px;}
    .wrapAll .menu li a {width: 100%; height: 100%; line-height: 100px; color: #fff; font-weight: 600;}
</style>