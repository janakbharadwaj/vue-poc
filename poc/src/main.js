import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = new VueRouter({
  routes:router,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:routes
}).$mount('#app')
