<template> 
    <div class="page">
        <base-peak></base-peak>

        <div v-if="token == 0" class="login" @click="goLogin()">{{token | formatToken}}</div>
        <div v-else-if="token == 1" class="logout" @click="logout()">{{token | formatToken}}</div>
        <div class="block" :class="[blockColor]" @click="toggleStyle()">{{this.state}}</div>
        <div class="block" :style="{background: `hsl(${state % 360 + 120}, 50%, 75%)`}" @click="toggleStyle()">{{this.state}}</div>
        <div class="block" @click="showLoading = !showLoading">Show Loading</div>
        
        <loading v-if="showLoading" @close="showLoading = false"/>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "hello",
    components: {
    },
    data() {
        return {
            state: 0,
            blockColor: '',
            showLoading: false,
        };
    },
    computed: {
        /* 引用 vuex state */
        ...mapState(["token"]),
    },
    watch: {
        state(val) {
            const classMap = [
                'block-one',
                'block-two',
                'block-three',
            ];
            const size = classMap.length;
            classMap.forEach((item, index) => {
                if (val % size === index) this.blockColor = item;
            });
            immediate: true
        },
    },
    mounted() {
        this.toggleStyle();
    },
    methods: {
        /* 导入 vuex mutations */
        ...mapMutations(['logout']),
        /* 切换class */
        toggleStyle() {
            this.state += 5;
        },
        /* 去登录 */
        goLogin() {
            this.$router.push('/login');
        },
    },
    filters: {
        formatToken(token) {
            if (token === 0) return '去登录';
            else if (token === 1) return '退出登录';
        }
    }
};
</script>

<style lang="scss" scoped>
.login, .logout {
    $height: 20px;
    @include base-box(30%, $height);
    @include set-font($height - 8, $height, #09F, center);
    margin: 10px auto;
    border: 1px solid #09F;
}
.logout {
    color: #F90;
    border: 1px solid #F90;
}
.block {
    @include base-box(30%, 22px);
    @include set-font(12px, 22px, #FFF, center);
    margin: 10px auto;
    &-one {
        background-color: #F36;
    }
    &-two {
        background-color: #F69;
    }
    &-three {
        background-color: #f9c;
    }
}
</style>