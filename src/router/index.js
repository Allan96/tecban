import Vue from 'vue'
import VueRouter from 'vue-router';

import Index from '../pages/index/Index.vue';
import LoginPage from '../pages/login/Index.vue';
import Dashboard from '../pages/dashboard/Index.vue';
import Profile from '../pages/profile/Index.vue';

Vue.use(VueRouter);


const routes = [{
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/profile',
        component: Profile
    },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router