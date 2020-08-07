import Vue from 'vue';

const files = require.context('.', true, /\.vue$/);
const components = {};
files.keys().forEach((key) => {
    const name = key.replace(/(\.\/|\.vue$)/g, '');
    components[name] = files(key).default;
});

Vue.use({
    install(Vue) {
        Object.keys(components).forEach((key) => {
            Vue.component(key, components[key]);
        })
    }
});

export default components;