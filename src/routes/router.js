import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ()=>import('../views/shopcar.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('../views/home.vue')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('../views/detail.vue')
    }
  ]
})
