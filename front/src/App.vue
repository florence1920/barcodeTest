<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">MainPage</router-link> |
      <router-link to="/test">Test Home</router-link> |
      <router-link to="/test/generate">Barcode Gen</router-link> |
      <router-link to="/test/qrgenerate">QR Gen</router-link> |
      <router-link to="/test/reader">QR Reader</router-link> |
      <router-link to="/qrShow">QR Show</router-link>
    </div>
    <div class="routerWrap">
      <router-view/>
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

#nav {
  padding: 30px; background-color: #FF6A6A;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.routerWrap { background-color: #fff; padding: 30px;}
</style>
