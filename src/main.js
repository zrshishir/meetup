import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import { store } from './store'
import App from './App.vue'


Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
