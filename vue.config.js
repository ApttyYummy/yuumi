module.exports = {
    /* 开发服务相关 */
    devServer: {
        open: true,           //启动后浏览器自动打开页面
        host: 'localhost',
        port: 8088,           //指定端口
        overlay: {           
            warnings: false,  //关闭警告
            errors: true
        },
    }, 
    /* css配置相关 */
    css: {
        extract: true,        //在生产环境中将组件内的 css 提取到单独的 css 文件中
        sourceMap: false,     //是否开启 CSS source map
        modules: false,     
        loaderOptions: {
            /* 配置px转换rem */
            // postcss: {
            //     plugins: [
            //         require('postcss-px2rem')({
            //             remUnit: 75
            //         })
            //     ]
            // },
            /* 全局引用 scss 文件 */
            sass: {
                prependData: `@import "@/common/style/base.scss";`
            },
        },
    },
}