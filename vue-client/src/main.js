import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import routes from './routes';
import VueRouter from 'vue-router'
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')