import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "首页",
        icon: "home",
        link: "/",
    },
    {
        text: "使用教程",
        icon: "lightbulb",
        link: "/basic",
    },
    {
        text: "Bot",
        icon: "robot",
        link: "https://t.me/GLBetabot",
    },
    {
        text: "加入妙妙屋",
        icon: "comments",
        children: [
            {text: "梓澪の妙妙屋", link: "https://t.me/mio_house"},
            {text: "梓澪の妙妙屋频道", link: "https://t.me/mio_room"},
        ],
    },
]);
