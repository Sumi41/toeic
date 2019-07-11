import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router' //追加
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router, //追加
  render: h => h(App),
}).$mount('#app')


