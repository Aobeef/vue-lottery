import Vue from 'vue'
import App from './App.vue'
import lottery from './lottery'

Vue.use(lottery)
new Vue({
  el: '#app',
  render: h => h(App)
})
