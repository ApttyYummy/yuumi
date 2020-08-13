<template> 
    <div class="peak">
        <div class="peak-main" @click="showList = !showList">{{this.$route.name}}</div>
        <div class="peak-size" />
        <transition name="slide-fade">
            <div class="peak-menu" v-show="showList">
                <div class="peak-menu-item" v-for="(item, index) in routerList" :key="index" @click="goPage(item.path)">{{item.name}}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "peak",
    data() {
        return {
            showList: false,
            routerList: [],
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        /* 初始化 */
        init() {
            this.routerList = this.$router.options.routes.filter(item => item.name != this.$route.name);
        },
        /* 前往页面 */
        goPage(path) {
            this.$router.push({path});
        },
    }
};
</script>

<style lang="scss" scoped>
.peak {
    $height: 30px;
    @include set-Z(1000, relative);
    &-main {
        @include locat-box(fixed);
        @include base-box(100%, $height, #39E);
        @include set-font($height - 10, $height, #FFF, center);
        @include set-Z(600);
    }
    &-size {
        @include base-box(100%, $height);
    }
    &-menu {
        @include base-box(100%, null);
        @include set-Z(500, absolute);
        &-item {
            @include base-box(100%, $height, #6CE);
            @include set-font($height - 14, $height, #FFF);
            @include set-border(#9FE);
            padding: 0 10px;
        }
    }
}
</style>
