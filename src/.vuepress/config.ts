import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
    ],
    // 可以继续添加其他 head 元素
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
