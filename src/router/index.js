import Vue from 'vue'
import VueRouter from 'vue-router'
import contenido from '../components/contenido.vue'
import navbar from '../components/navbar.vue'
import carrito from '../components/carrito.vue'
import login from '../components/modal.vue'
import admin from '../components/admin.vue'
import about from '../components/about.vue'
import prueba from '../components/prueba.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/contenido',
    name: 'Contenido',
    component: contenido
  },

  {
    path: '/navbar',
    name: 'navbar',
    component: navbar
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/carrito',
    name: 'carrito',
    component: carrito
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: prueba
  }
]

const router = new VueRouter({
  routes
})

export default router
