<template> 
    <div class="page">
        <div class="list">
            <div class="goods" :class="[item.checked ? 'goods-checked' : '']" v-for="(item, index) in list" :key="item.goodsId" @click="chooseGoods(item, index)">
                <div class="goods-space" />
                <div class="goods-name">{{item.name}}</div>
                <div class="goods-price">{{item.price | fixPrice}}</div>
                <div class="goods-space" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "goods",
    props: {
        list: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
        };
    },
    computed: {
        /* 商品价格 */
        goodsPrice: {
            get() {
                let sum = 0;
                this.list.filter(item => item.checked).forEach(item => sum += item.price);
                return sum;
            },
        },
    },
    watch: {
        /* 商品总价变化后传递给父组件 */
        goodsPrice: function(newVal, oldVal) {
            this.$emit('getGoodsPrice', newVal);
        },
    },
    mounted() {
    },
    methods: {
        chooseGoods(item) {
            this.$set(item, 'checked', !item.checked);
        },
    },
};
</script>

<style lang="scss" scoped>
.list {
    @include flex-box(row, flex-start, null, wrap);
    margin: 5px auto;
    .goods {
        @include base-box(40%, 60px, #C9F8FF);
        @include flex-box(column, center);
        margin: 2px 5%;
        border-radius: 4px;
        &-checked {
            background-color: #7FE7F0;
        }
        &-space {
            @include flex-space(1);
        }
        &-name {
            @include set-font(12px, 12px, #FFF, center);
        }
        &-price {
            @include set-font(12px, 12px, #FFF, center);
            margin-top: 5px;
        }
    }
}
</style>
