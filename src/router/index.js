/*
 * @Date: 2021-12-08 11:52:39
 * @LastEditors: xxx
 * @LastEditTime: 2021-12-10 11:21:17
 * @FilePath: \metanovels-wap\src\router\index.js
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 书架
    path: '/',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/view/index.vue')
  },
  {
    // 书城
    path: '/bookCity',
    name: 'bookCity',
    component: () => import('@/view/bookCity.vue')
  },
  {
    // 发现
    path: '/welfare',
    name: 'welfare',
    component: () => import('@/view/welfare.vue')
  },
  {
    // 我的
    path: '/my',
    name: 'my',
    component: () => import('@/view/my.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
