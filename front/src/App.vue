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
@import './assets/css/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.routerWrap {width: 800px; height: 900px; background-color: #222; border-radius: 10px; margin: 0 auto;}
.routerWrap .wrapAll {color: #fff;}

</style>
