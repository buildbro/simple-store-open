import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import LoginView from '../views/LoginView.vue'
import RegView from '../views/RegView.vue'
import AddItemView from '../views/AddItemView.vue'
import Logout from '../views/Logout.vue'
import DetailView from '../views/DetailView.vue'
import DashboardView from '../views/DashboardView.vue'
import InventoryView from '../views/InventoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegView
    },
    {
      path: '/dashboard/add',
      name: 'add',
      component: AddItemView
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/dashboard/inventory',
      name: 'inventory',
      component: InventoryView
    }
  ]
})

export default router
