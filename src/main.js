import Vue from 'vue'
import App from './App.vue'

import Notifications from 'vue-notification'

import { firestorePlugin } from 'vuefire'


import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

Vue.use(Notifications)
Vue.use(firestorePlugin)

Vue.component('modal', {
  template: '#modal-template'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    showModal: false
  },


  router,
  render: h => h(App)
}).$mount('#app')

