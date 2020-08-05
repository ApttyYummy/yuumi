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
## 在 router.js 的 router.beforeEach 方法中执行逻辑判断
## 后续重写 VueRouter 的 push 方法（去除不影响使用的重定向报错 Error: Redirected when going from X to Y via a navigation guard. 问题）
