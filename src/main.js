import '@babel/polyfill'
import Vue from 'vue'
import App from './components/app.vue'
import router from './router/index'
import store from './store/index'
import './sass/index.sass'

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})

window.vm = vm
