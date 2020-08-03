import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/cat',
        name: 'Cat',
        component: () => import('@/views/animals/cat.vue')
    },
    {
        path: '/dog',
        name: 'Dog',
        component: () => import('@/views/animals/dog.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router