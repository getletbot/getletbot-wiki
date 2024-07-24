import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import * as path from "node:path";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "妙妙小工具 WIKI",
    description: "妙妙小工具使用文档",
    theme,
    head: [
        // 引入文楷屏幕版字体
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://registry.npmmirror.com/lxgw-wenkai-screen-web/latest/files/lxgwwenkaiscreen/result.css',
            },
        ]
        // 可以继续添加其他 head 元素
    ],

    // 和 PWA 一起启用
    // shouldPrefetch: false,

    // 自动注册自定义组件
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components"),
        }),
    ],
});
