# yuumi

## https://github.com/ApttyYummy/yuumi.git
## github 上添加 collaborator

## 引用全局 scss 文件
## => 安装依赖 sass-resources-loader
## => 配置 vue.config.js -> css.loaderOptions.sass

## 使用 cnpm 安装
## => 解决 PowerShell 禁止运行脚本
## => vscode 右键属性 -> 兼容性 -> 下方勾选管理员运行 -> 控制台输入 set-ExecutionPolicy RemoteSigned

## 配置 px2rem 
## => 安装依赖 lib-flexible , postcss-px2rem
## => main.js 中导入 lib-flexible
## => 配置 vue.config.js -> css.loaderOptions.postcss

## 配置 路由守卫
## => 在 router.js 的 router.beforeEach 方法中执行逻辑判断
## => 后续重写 VueRouter 的 push 方法（去除不影响使用的重定向报错 Error: Redirected when going from X to Y via a navigation guard. 问题）

## vuex 辅助函数
## => 在 vue 文件中导入 mapState , mapGetters , mapMutations , mapActions from 'vuex'
## => 在 computed 中声明 ...mapState , ...mapGetters 后就可以直接使用 $store 里面的 state
## => 在 methods 中声明 ...mapMutations , ...mapActions 后就可以直接使用 $store 里面的函数

## 配置 keep-alive
## => 在 App.vue 使用 keep-alive 组件并在其中 include 需要缓存的 vue 文件中声明的 name
## => 或者结合路由中声明的 meta.keepAlive 为 true , 在 App.vue 中 router-view 使用 v-if 控制需要缓存的组件 （使用 v-show 会导致组件多次初始化）

## loading
## => 新增 loading 组件并封装编写动画

## 组件聚合 + 全局引用
## => 在 common/components 目录中的 index.js 对组件进行全局引用
## => 通过 require.context 获取目录下所有 vue 文件进行聚合然后注册
## => 在 main.js 中导入该 index.js

## store
## => 使用 mockjs + axios 模拟发送请求数据
## => 使用商品组件以及优惠券组件，动态获取商品价格，折扣价格以及计算总价

## TODO
## 防抖 节流
## z-index
## async await
## 深拷贝
## 策略