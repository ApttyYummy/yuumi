import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'hello',
        component: () => import('@/views/hello.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/login.vue')
    },
    {
        path: '/cat',
        name: 'cat',
        component: () => import('@/views/animals/cat.vue')
    },
    {
        path: '/dog',
        name: 'dog',
        component: () => import('@/views/animals/dog.vue')
    },
    {
        path: '/pig',
        name: 'pig',
        component: () => import('@/views/animals/pig.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/views/404.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    console.log(`from ${from.name} to ${to.name}`);

    next();
})

export default router