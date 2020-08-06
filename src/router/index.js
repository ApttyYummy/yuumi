import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'hello',
        component: () => import(/* webpackChunkName: "hello" */ '@/views/hello.vue'),
        meta: {
            keepAlive: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/auth/login.vue'),
    },
    {
        path: '/cat',
        name: 'cat',
        component: () => import(/* webpackChunkName: "cat" */ '@/views/animals/cat.vue'),
        meta: {
            requireAuth: true,
            keepAlive: true,
        },
    },
    {
        path: '/dog',
        name: 'dog',
        component: () => import(/* webpackChunkName: "dog" */ '@/views/animals/dog.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/pig',
        name: 'pig',
        component: () => import(/* webpackChunkName: "pig" */ '@/views/animals/pig.vue'),
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    console.log(`从路由（from） ${from.name} 到路由（to） ${to.name}`);
    // 如果匹配到需要登录的页面
    if (to.matched.some(item => item.meta.requireAuth)) {
        if (!store.state.token) {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
})

/* 重写push方法 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
}

export default router