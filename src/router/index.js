import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'hello',
        component: () => import('@/views/hello.vue'),
        meta: {
            keepAlive: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/login.vue'),
    },
    {
        path: '/cat',
        name: 'cat',
        component: () => import('@/views/animals/cat.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/dog',
        name: 'dog',
        component: () => import('@/views/animals/dog.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/pig',
        name: 'pig',
        component: () => import('@/views/animals/pig.vue'),
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/views/404.vue'),
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
            next({
                path: '/login'
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

/* 去除重定向报错 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
}

export default router