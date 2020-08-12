import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* 移动端适配 */
import 'lib-flexible';

/* 引用公共组件 */
import './common/components';

/* mixin */
import mixin from './common/mixin';
Vue.mixin(mixin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');