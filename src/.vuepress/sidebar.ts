import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "快速开始",
      icon: "lightbulb",
      prefix: "quick/",
      link: "quick/",
      children: "structure",
    },
  ],
});
