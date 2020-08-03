import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: 0,
    },
    mutations: {
        login(state) {
            state.token = 1;
        },
        logout(state) {
            state.token = 0;
        },
    },
    actions: {},
    modules: {}
})