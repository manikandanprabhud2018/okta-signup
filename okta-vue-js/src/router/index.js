import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'
import Home from '@/components/Home.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  'cors': true,
  routes: [
    { path: '/Home', component: Home },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/SignUp', component: SignUp },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
