import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/components/LandingView.vue'
import SemesterView from '@/components/SemesterView.vue'

import SemesterDetail from '@/components/SemesterDetail.vue'
import ModuleList from '@/components/ModuleList.vue'

import ModuleSummary from '@/components/ModuleSummary.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingView
    },
    { path: "/semester", component: SemesterView },
    {
      path: "/semester/:id",
      component: SemesterDetail
    },
    {
      path: "/course/:id",
      component: ModuleList
    },
    {
      path: "/modul/:courseId/:moduleId",
      component: ModuleSummary
    }    
  ],
})

export default router
