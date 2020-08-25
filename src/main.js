import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import '../public/iconfont/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
=======
import "../public/设计图/iconfont/iconfont.css"
>>>>>>> 41f319240753e9ab761452ed19f4b81bd1aef23b

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
