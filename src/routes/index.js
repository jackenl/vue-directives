import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: '指令集测试',
      component: () => import('@/views/index'),
    }
  ]
})

export default router
