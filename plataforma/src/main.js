import Vue from 'vue'
import VueResource from 'vue-resource';
import './assets/css/main.scss'

import App from './App.vue'
import router from './router/index.js';
import store from './store/index.js'

Vue.use(VueResource);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})