/**
 * plugin mixin 
 * @author yummy
 */

const mixin = {
	filters: {
		/* 价格 */
		fixPrice(price) {
            if (price < 0) price = 0;
			return Number(price).toFixed(2); 
		},
	},
}
export default mixin
