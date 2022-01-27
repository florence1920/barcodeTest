<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">MainPage</router-link> |
      <router-link to="/test">Test Home</router-link> |
      <router-link to="/test/generate">Barcode Gen</router-link> |
      <router-link to="/test/qrgenerate">QR Gen</router-link> |
      <router-link to="/test/reader">QR Reader</router-link> |
      <router-link to="/qrShow">QR Show</router-link> |
      <router-link to="/user/purchase">TourPass 구매</router-link> |
    </div> -->
    <div class="routerWrap">
      <div class="wrapAll">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
@import './assets/css/reset.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: calc((100vh - 900px)/2) 0;
  min-height: 100vh;
  background-color: rgb(214, 214, 214);
  color: #2c3e50;
  
}

.routerWrap {width: 440px; height: 900px; background-color: #fff; border-radius: 30px; padding: 50px 0; margin: 0 auto; }
.routerWrap .wrapAll {color: #000; }
.wrapAdmin {padding: 1% 10%;}
</style>
