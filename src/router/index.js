/*
 * @Author: xiongziting
 * @Date: 2020-03-20 10:22:56
 * @LastEditors: xiongziting
 * @LastEditTime: 2020-03-20 15:37:59
 * @Description:
 * @FilePath: \vue-h5-pro\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/auditH5/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
