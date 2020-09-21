import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import WorkProjects from '../views/WorkProjects.vue'
import Totodo from '../views/Projects/Totodo.vue'
import Devcv from '../views/Projects/Devcv.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  { path: '*', component: About },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/work-projects',
    name: 'WorkProjects',
    component: WorkProjects,
  },
  {
    path: '/totodo',
    name: 'Totodo',
    component: Totodo,
  },
  {
    path: '/devcv',
    name: 'Devcv',
    component: Devcv,
  },
  {
    path: '/work-projects/:project',
    name: 'Project',
    component: Project,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
