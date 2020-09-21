import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import WorkProjects from '../views/WorkProjects.vue'
import Project from '../views/Project.vue'

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
    component: WorkProjects,
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
  base: '/v1',
  routes
})

export default router
