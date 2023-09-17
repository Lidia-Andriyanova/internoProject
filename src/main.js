import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import internoStore from "@/store/store.js"
import VueRouter from 'vue-router';
import routes from '@/router/router.js';


Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
})

const store = new Vuex.Store(internoStore);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
