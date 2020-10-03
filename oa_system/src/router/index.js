import Vue from 'vue'
import Router from 'vue-router'
import notice from '@/view/notice'
import home from '@/view/home'
import Login from '@/view/Login'
import index from '@/view/index'
import mailbox from '@/view/mailbox'
import department from '@/view/department'
import user_info from '@/view/user_info'
import calendar from '@/view/calendar'
import employee_user from '@/view/employee_user'
import personage_center from '@/view/personage_center'
import employee_user_update from '@/view/employee_user_update'
import departmentupdate from '@/components/departmentupdate'
import departmentadd from '@/components/departmentadd'


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
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/employee_user',
          name: 'employee_user',
          component: employee_user,
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
          path: '/department',
          name: 'department',
          component: department

        },
        {
          path: '/mailbox',
          name: 'mailbox',
          component: mailbox
        },
        {
          path: '/employee_user_update',
          name: 'employee_user_update',
          component: employee_user_update
        },{
          path: '/departmentupdate',
          name: 'departmentupdate',
          component: departmentupdate
        },
        {
          path: '/departmentadd',
          name: 'departmentadd',
          component: departmentadd
        }
      ]
    },
  ]
})

