import Vue from 'vue'
import Router from 'vue-router'
import notice from '@/view/notice'
import home from '@/view/home'
import Login from '@/view/Login'
import index from '@/view/index'
import mailbox from '@/view/mailbox'
import sys_log from '@/view/sys_log'
import user_info from '@/view/user_info'
import calendar from '@/view/calendar'
import employee_user from '@/view/employee_user'
import personage_center from '@/view/personage_center'



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/employee_user',
          name: 'employee_user',
          component: employee_user
        },
        {
          path: '/personage_center',
          name: 'personage_center',
          component: personage_center
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: calendar
        },
        {
          path: '/notice',
          name: 'notice',
          component: notice
        },
        {
          path: '/user_info',
          name: 'user_info',
          component: user_info
        },
        {
          path: '/sys_log',
          name: 'sys_log',
          component: sys_log
        },
        {
          path: '/mailbox',
          name: 'mailbox',
          component: mailbox
        },
      ]
    },
  ]
})

