import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css';
import TheToolbar from './components/TheToolbar.vue'
import ZUploader from './components/ZUploader.vue';
import TheFooter from './components/TheFooter.vue'
import './global.scss'
Vue.config.productionTip = false
Vue.component('TheToolbar', TheToolbar)
Vue.component('ZUploader', ZUploader)
Vue.component('TheFooter', TheFooter)

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
