import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import section1 from './components/infoSection/section1'
import section2 from './components/infoSection/section2'

import './assets/css/reset.css'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: section1
    },
    {
      path: '/skills', component: section2
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
