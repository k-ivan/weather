import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import './registerServiceWorker'

Vue.config.productionTip = false

window.axios = axios;

new Vue({
  render: h => h(App)
}).$mount('#app')
