import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import LenderTabs from '../views/Lender/Tabs.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/services/:type',
    component: () => import('@/views/Services.vue')
  },
  {
    path: '/directions/:name/:lat/:long',
    component: () => import('@/views/Directions.vue')
  },
  {
    path: '/apply',
    component: () => import('@/views/ApplyForLoan.vue')
  },
  {
    path: '/firstscreen',
    component: () => import('@/views/FirstScreen.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },    
    ]
  },
  {
    path: '/lender-tabs/',
    component: LenderTabs,
    children: [
      {
        path: '',
        redirect: '/lender-tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Lender/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Lender/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Lender/Tab3.vue')
      },    
    ]
  },
  {
    path: '/loan-application/:type',
    component: () => import('@/views/LoanApplication.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
