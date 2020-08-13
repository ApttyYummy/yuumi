<template>
    <div class="page">
        <base-peak></base-peak>
        <!-- 筛选 -->
        <screen></screen>
        <!-- 商品 -->
        <goods :list="goodsList" @getGoodsPrice="_getGoodsPrice"></goods>
        <!-- 价格计算 -->
        <div class="calc">
            <div class="calc-item">
                <div class="calc-item-text">Goods Price</div>
                <div class="calc-item-value">{{goodsPrice | fixPrice}}</div>
            </div>
            <div class="calc-item calc-coupon" @click="$refs.couponPopup.show = !$refs.couponPopup.show">
                <div class="calc-coupon-text">Coupon Amount</div>
                <div class="calc-coupon-value">{{couponAmount | fixPrice}}</div>
            </div>
            <div class="calc-item">
                <div class="calc-item-text">Total</div>
                <div class="calc-item-value">{{total | fixPrice}}</div>
            </div>
        </div>
        <!-- 优惠券弹窗 -->
        <popup ref="couponPopup" :title="`选择优惠券`">
            <coupon ref="couponList" :list="couponList" @getCouponAmount="_getCouponAmount"></coupon>
        </popup>
    </div>
</template>

<script>
import mock from "@/common/mock/index";
import axios from "axios";
export default {
    name: 'store',
    components: {
        screen: () => import('./components/screen.vue'),  //条件筛选
        goods: () => import('./components/goods.vue'),    //商品列表
        popup: () => import('./components/popup.vue'),    //弹窗
        coupon: () => import('./components/coupon.vue'),  //优惠券列表
    },
    data() {
        return {
            goodsList: [],    //商品列表
            _goodsList: [],   //商品列表缓存
            goodsPrice: 0,    //商品总价
            couponList: [],   //优惠券列表
            couponAmount: 0,  //优惠金额
        };
    },
    computed: {
        /* 总计 */
        total: {
            get() {
                return this.goodsPrice - this.couponAmount;
            },
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        /* 初始化数据 */
        init() {
            this.getGoodsData();
            this.getCouponData();
        },
        /* 获取商品数据 */
        getGoodsData() {
            axios.post('/getGoodsList').then(({data,}) => {
                this.goodsList = data.data;
                this._goodsList = data.data;
            });
        },
        /* 获取优惠券数据 */
        getCouponData() {
            axios.post('/getCouponList').then(({data,}) => {
                this.couponList = data.data;
            });
        },
        /* 获取商品价格 */
        _getGoodsPrice: function(goodsPrice) {
            this.goodsPrice = goodsPrice;
        },
        /* 获取折扣价 */
        _getCouponAmount: function(couponAmount) {
            this.couponAmount = couponAmount;
        },
        /* 查询数据 */
        queryData(query) {
            this.sortPriceSection(query.section);
            this.sortGoodsPrice(query.sort);
        },
        /* 排序商品价格 */
        sortGoodsPrice(sortType) {
            // console.log('parent sort type', sortType);
            this.goodsList.sort((a, b) => {
                if (sortType === 'U') return a.price - b.price;
                else if (sortType === 'D')  return  b.price - a.price;
            });
        },
        /* 筛选价格区间 */
        sortPriceSection(section) {
            // console.log('parent section', section);
            if (section) {
                const 
                    min = section.split('-')[0],
                    max = section.split('-')[1];
                this.goodsList = this._goodsList.filter(item => item.price >= min && item.price <= max); 
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.calc {
    @include base-box(90%, 90px);
    margin: 5px auto;
    $height: 30px;
    &-item {
        @include flex-box(row, center);
        @include base-box(100%, $height);
        &-text {
            @include set-font(10px, $height, #7FE7F0, right);
        }
        &-value {
            @include set-font(10px, $height, #7FE7F0, right);
            @include flex-space(1);
        }
    }
    &-coupon {
        @include set-border(#61EB8F, $dirs: ('bottom'));
        &-text {
            @include set-font(10px, $height, #61EB8F, right);
        }
        &-value {
            @include set-font(10px, $height, #61EB8F, right);
            @include flex-space(1);
        }
    }
}
</style>