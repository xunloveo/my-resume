import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'fullpage.js/dist/fullpage.min.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import VueParticles from 'vue-particles'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueFullPage)
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
