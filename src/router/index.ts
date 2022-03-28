import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import InicioApp from '../views/Inicio.vue'
import RegistroApp from '../views/Registro.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: {
      requiresAuth:true
    }
  },
 
  {
    path:'/Inicio',
    name: 'Inicio',
    component: InicioApp
  },
  {
    path:'/Registro',
    name: 'Registro',
    component: RegistroApp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
