import Mock from 'mockjs';

/* 生成商品列表 */
Mock.mock('/getGoodsList', {
    "data|8": [{
        'goodsId|+1': 1001,
        'name': '@first',
        'price|10-20': 10,
        'checked': false,
    }],
});

/* 生成优惠券列表 */
Mock.mock('/getCouponList', {
    "data|5": [{
        'name': '@name',
        'amount|1-10': 1,
        'couponId|1000-9999': 1000,
        'checked': false,
    }],
});
