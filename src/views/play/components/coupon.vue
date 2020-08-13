<template>
    <div>
        <div class="list" v-for="(item, index) in list" :key="item.id">
            <div class="coupon" @click="choose(item, index)">
                <div class="coupon-left">
                    <div class="coupon-left-price">
                        <div class="coupon-left-price-unit">￥</div>
                        <div class="coupon-left-price-value">{{item.amount}}</div>
                    </div>
                </div>
                <div class="coupon-right">
                    <div class="coupon-right-name">{{item.name}}</div>
                    <div class="coupon-right-use"></div>
                    <div class="coupon-right-space" />
                    <div class="coupon-right-date">ID: {{item.couponId}}</div>
                </div>
                <div class="coupon-check">
                    <div class="coupon-check-on">
                        <div v-show="item.checked" class="coupon-check-on-tick" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "peak",
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
        };
    },
    computed: {
        /* 优惠券金额 */
        couponAmount: {
            get() {
                let checkIndex = this.list.findIndex(item => item.checked === true);
                return checkIndex !== -1 ? this.list[checkIndex].amount : 0;
            },
        },
    },
    watch: {
        /* 优惠券金额变化后传递给父组件 */
        couponAmount: function(newVal, oldVal) {
            this.$emit('getCouponAmount', newVal);
        },
    },
    mounted() {},
    methods: {
        /* 勾选优惠券 */
        choose(item, index) {
            // 已选中的 index
            let checkedIndex = this.list.findIndex((value) => value.checked === true);
            if (checkedIndex === -1) { // 列表没有任何选中的
                this.$set(item, "checked", true);
            } else {
                if (checkedIndex === index) { // 点击的与选中的相同
                    this.$set(item, "checked", false);
                } else { // 点击的与选中的不同
                    this.$set(this.list[checkedIndex], "checked", false);
                    this.$set(item, "checked", true);
                }
            }
            this.$forceUpdate();
        },
    },
};
</script>

<style lang="scss" scoped>
.coupon {
    $theme: #61EB8F;
    $height: 40px;
    @include base-box(96%, $height);
    @include flex-box(row, center);
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    margin: 10px auto;
    &-left {
        @include base-box(30%, $height, $theme);
        @include flex-box(row, center);
        border-right: 1px dotted #fff;
        &-price {
            @include flex-box(row, baseline);
            margin: 0 auto;
            &-unit {
                @include set-font(10px, 10px, #fff);
            }
            &-value {
                @include set-font(15px, 15px, #fff);
            }
        }
    }
    &-right {
        @include base-box(null, $height, #eee);
        @include flex-box(column, flex-start);
        @include flex-space(1);
        @include set-Z(null, relative);
        box-sizing: border-box;
        padding: 8px;
        &-name {
            @include set-font(8px, 8px, #333);
        }
        &-use {
            @include set-font(8px, 8px, #333);
        }
        &-space {
            @include flex-space(1);
        }
        &-date {
            @include set-font(8px, 8px, #333);
        }
        $border-size: 5px;
        &::before,
        &::after {
            @include base-box($border-size * 2, $border-size, #fff);
            content: " ";
        }
        &::before {
            @include locat-box(absolute, 0, null, null, -$border-size);
            border-radius: 0 0 $border-size * 2 $border-size * 2;
        }
        &::after {
            @include locat-box(absolute, null, null, 0, -$border-size);
            border-radius: $border-size * 2 $border-size * 2 0 0;
        }
    }
    &-check {
        $size: 10px;
        $unit: $size / 10;
        @include base-box($size);
        @include locat-box(absolute, null, 8px);
        &-on {
            @include base-box($size);
            @include set-border($theme);
            border-radius: $size;
            &-tick {
                @include base-box($unit * 4, $unit * 6);
                @include transform(rotate(45deg));
                @include set-border($theme, $dirs: ('right', 'bottom'));
                margin: 0 auto;
            }
        }
    }
}
</style>
