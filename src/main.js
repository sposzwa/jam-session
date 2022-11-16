import Vue from 'vue'
//import VueRouter from 'vue-router'
//import App from './App.vue'
import LoginPage from './views/SignInPage.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*const routes = {
  '/': App,
  '/home': HomePage,
}
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})*/

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//App.use(router)

new Vue({
  render: (h) => h(LoginPage),
}).$mount('#app')
