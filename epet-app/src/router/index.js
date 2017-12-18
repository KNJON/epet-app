import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home/home.vue'
import classify from '../pages/classify/classify.vue'
import shopcart from '../pages/shopcart/shopcart.vue'
import personal from '../pages/personal/personal.vue'
import tab1 from '../pages/classify/tab1/tab1.vue'
import tab2 from '../pages/classify/tab2/tab2.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      'redirect': '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: '/classify',
          'redirect': '/classify/tab1'
        },
        {
          path: '/classify/tab1',
          component: tab1
        },
        {
          path: '/classify/tab2',
          component: tab2
        }
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/personal',
      component: personal
    },

  ]
})
