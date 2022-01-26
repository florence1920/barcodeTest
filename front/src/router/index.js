import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Home from '../views/test/Home.vue'
import Generate from '../views/test/Generate.vue'
import QrGenerator from '../views/test/QrGenerator.vue'
import QrReader from '../views/test/QrReader.vue'
import QrShowView from '../views/user/QrShowView.vue'

import AdminView from '../views/admin/AdminView.vue'
import QrScanner from '../views/admin/QrScannerView.vue'
import PurchaseView from '../views/user/PurchaseView.vue'
import StoreInfoView from '../views/admin/StoreInfoView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  //test
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
  //user
  {
    path: '/user/purchase',
    name: 'PurchaseView',
    component: PurchaseView
  },
  //
  {
    path: '/qrshow',
    name: 'QrShowView',
    component: QrShowView
  },

  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/admin/qrscanner',
    name: 'QrScanner',
    component: QrScanner
  },
  {
    path: '/admin/storeinfo',
    name: 'StoreInfoView',
    component: StoreInfoView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
