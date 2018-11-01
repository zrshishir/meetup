import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import firebase from 'firebase'
import { store } from './store'
import App from './App.vue'


Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  firebase,
  render: h => h(App),
  // created(){
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyCj76FwWqBVB330ezwlW37Wo_XVcFGhH_k',
  //     authDomain: 'meetup-110105.firebaseapp.com',
  //     databaseURL: 'https://meetup-110105.firebaseio.com',
  //     projectId: 'meetup-110105',
  //     storageBucket: 'meetup-110105.appspot.com'
  // })
  // }
})
