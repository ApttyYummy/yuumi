<template> 
    <div class="page">
        <base-peak></base-peak>
        <div v-if="$store.state.token == 1" class="login">{{$store.state.token | formatToken}}</div>
        <div v-else-if="$store.state.token == 0" class="logout">{{$store.state.token | formatToken}}</div>
    </div>
</template>

<script>
export default {
    name: "hello",
    components: {
        basePeak: () => import("@/common/components/base-peak.vue"),
    },
    data() {
        return {
        };
    },
    methods: {
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
.login {
    $height: 20px;
    @include base-box(30%, $height);
    @include set-font($height - 8, $height, #09F, center);
    border: 1px solid #09F;
    margin: 10px auto;
}
.logout {
    $height: 20px;
    @include base-box(30%, $height);
    @include set-font($height - 8, $height, #F90, center);
    border: 1px solid #F90;
    margin: 10px auto;
}
</style>