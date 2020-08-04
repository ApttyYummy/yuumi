<template> 
    <div class="page">
        <base-peak></base-peak>
        <div v-if="$store.state.token == 1" class="login" @click="_logout()">{{$store.state.token | formatToken}}</div>
        <div v-else-if="$store.state.token == 0" class="logout" @click="_login()">{{$store.state.token | formatToken}}</div>
    </div>
</template>

<script>
export default {
    name: "login",
    components: {
        basePeak: () => import("@/common/components/base-peak.vue"),
    },
    data() {
        return {
        };
    },
    methods: {
        _login() {
            this.$store.commit('login');
        },
        _logout() {
            this.$store.commit('logout');
        },
    },
    filters: {
        formatToken(token) {
            if (token) return '已登录';
            else return '未登录';
        }
    }
};
</script>

<style lang="scss" scoped>
.login, .logout {
    $height: 20px;
    @include base-box(30%, $height, #36F);
    @include set-font($height - 8, $height, #FFF, center);
    border-radius: $height;
    margin: 10px auto;
}
.logout {
    background: #F63;
}
</style>