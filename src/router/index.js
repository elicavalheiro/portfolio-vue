import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import WorkProjects from '../views/WorkProjects.vue'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: { name: 'About' } },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/work-projects',
    name: 'WorkProjects',
    component: WorkProjects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
