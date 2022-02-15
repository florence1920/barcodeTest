import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/test/Home.vue'
import Generate from '../views/test/Generate.vue'
import QrGenerator from '../views/test/QrGenerator.vue'
import QrReader from '../views/test/QrReader.vue'
import QrShowView from '../views/user/QrShowView.vue'
import ChartView from '../views/test/ChartView.vue'

import AdminView from '../views/admin/AdminView.vue'
import QrScanner from '../views/admin/QrScannerView.vue'
import StoreInfoView from '../views/admin/StoreInfoView.vue'
import SalesInfoView from '../views/admin/SalesInfoView.vue'

Vue.use(VueRouter)

const routes = [
  //user
  {
    path: '/',
    name: 'QrShowView',
    component: QrShowView
  },
  //admin
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
  {
    path: '/admin/salesinfo',
    name: 'SalesInfoView',
    component: SalesInfoView
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
  {
    path: '/test/chart',
    name: 'ChartView',
    component: ChartView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
