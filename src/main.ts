import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'fullpage.js/dist/fullpage.min.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js' // 全屏滚动插件
import VueParticles from 'vue-particles' // 小颗粒插件
import VueTypedJs from 'vue-typed-js'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueFullPage)
Vue.use(VueParticles)
Vue.use(VueTypedJs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
