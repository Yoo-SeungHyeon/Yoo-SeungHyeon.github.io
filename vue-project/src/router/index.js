import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResumeView from '@/views/ResumeView.vue'
import BlogsView from '@/views/BlogsView.vue'
import PostView from '@/views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'ProjectsView',
      component: ProjectsView,
    },
    {
      path: '/resume',
      name: 'ResumeView',
      component: ResumeView,
    },
    {
      path: '/blogs',
      name: 'BlogsView',
      component: BlogsView,
    },
    {
      path: '/blogs/:post_id',
      name: 'BlogPostDetail',
      component: PostView,
    },
  ],
})

export default router
