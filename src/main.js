import Vue from 'vue'
import App from './App.vue'
import Head from './components/Head.vue'
import List from './components/List.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component(Head.name, Head)
Vue.component(List.name, List)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
