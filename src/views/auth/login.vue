<template> 
    <div class="page">
        <base-peak></base-peak>
        <div v-if="token === 1" class="login" @click="logout()">{{token | formatToken}}</div>
        <div v-else-if="token === 0" class="logout" @click="login()">{{token | formatToken}}</div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "login",
    components: {
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["token"]),
    },
    mounted() {
    },
    methods: {
        /* 导入vuex mutations */
        ...mapMutations(["login", "logout"]),
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