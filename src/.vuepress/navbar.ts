import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  }, 
  {
    text: "使用教程",
    icon: "home",
    link: "/quick/",
  }, 
  {
    text: "加入我们",
    icon: "comments",
    children: [
      { text: "梓澪の妙妙屋", link: "https://t.me/mio_house" },
      { text: "梓澪の妙妙屋频道", link: "https://t.me/mio_room" },
    ],
  },
]);
