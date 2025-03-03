import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddPackage from './components/AddPackage'
import PackageList from './components/PackageList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/addpackage',
      name: 'addpackage',
      component: AddPackage
    },
    {
      path: '/packagelist',
      name: 'packagelist',
      component: PackageList
    }
  ]
})
