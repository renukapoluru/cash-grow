import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import LenderTabs from '../views/Lender/Tabs.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin'
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
    path: '/signin',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/signup/step1',
    component: () => import('@/views/SignUpSteps/Step1.vue')
  },
  {
    path: '/lender/loans/:id',
    component: () => import('@/views/Lender/LoanRequest/LoanRequestDetails.vue')
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
    path: '/loan-application',
    component: () => import('@/views/LoanApplication.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
