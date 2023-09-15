import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import internoStore from "@/store/store.js"

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store(internoStore);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
