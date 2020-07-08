import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from './router/router.js'
import './assets/css/index.css'
import './assets/css/base.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
