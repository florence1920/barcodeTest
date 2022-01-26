import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Home from '../views/test/Home.vue'
import Generate from '../views/test/Generate.vue'
import QrGenerator from '../views/test/QrGenerator.vue'
import QrReader from '../views/test/QrReader.vue'
import QrShowView from '../views/user/QrShowView.vue'
import QrScannerView from '../views/admin/QrScannerView.vue'
import AdminView from '../views/admin/AdminView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/test',
    name: 'Home',
    component: Home
  },
  {
    path: '/test/generate',
    name: 'Generate',
    component: Generate
  },
  {
    path: '/test/qrgenerate',
    name: 'QrGenerator',
    component: QrGenerator
  },
  {
    path: '/test/reader',
    name: 'QrReader',
    component: QrReader
  },
  {
    path: '/qrshow',
    name: 'QrShowView',
    component: QrShowView
  },
  {
    path: '/qrscanner',
    name: 'QrScannerView',
    component: QrScannerView
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
