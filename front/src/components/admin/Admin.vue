<template>
    <div class="adminMainWrap">
        
        <ul class="menuWrap">
            <li>
                <p class="tit store">강릉 투어패스 <span class="b"> 금송아지 </span> </p>
            </li>
            <router-link to='/admin/qrscanner'>
                <li class="box scBox">
                        <p class="sub">QR Scanner</p>
                        <p class="arrow">＞</p>
                </li>
            </router-link>
            <li class="box">
                <p class="tit menuTit">패스 이용자 수</p>
                <p class="count">172명</p>
                <div class="userCount">
                    <p class="more">자세히 보기</p>
                    <p class="arrow">＞</p>
                </div>
            </li>
            <li class="box chartBox">
                <p class="tit menuTit">패스 이용자 추세</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
    .tit {font-size: 15px;}
    .count {margin: 0 0 25px 0; font-size: 25px; font-weight:900;}
    .sub {font-size:30px;}
    .more {float: left; font-size: 20px; font-weight: bold;}
    .menuTit {margin:0 0 25px 0; font-weight:300; color: #828282;}
    .sign {float: right;}
    .b {font-weight: 900;}
    .menuWrap {float: left; margin: 80px 0 0; width: 100%;}
    .menuWrap .box {width: 100%; height: 180px; margin: 0 0 40px 0;  padding: 20px 4%;  border-radius: 10px; background: rgb(253, 253, 253); box-shadow: 0 2px 5px rgba(0, 0, 0, .33);}
    .menuWrap li:nth-child(1) {margin:0 0 20px;}
    .menuWrap .scBox {overflow: hidden; height: 75px; padding: 0 4%; line-height: 75px; background: #3B579D; color:#fff; box-shadow: none;}
    .menuWrap .scBox a {color:#fff;}
    .menuWrap .sub {float: left; }
    .menuWrap .arrow {float: right;}
    .menuWrap .userCount {padding:25px 0 0; height: 20px; line-height: 20px; border-top: 1px solid rgb(207, 207, 207);}
    .menuWrap .chartBox {height: 300px;}
    .menuWrap a {display: block; margin:0 0 40px;}
</style>