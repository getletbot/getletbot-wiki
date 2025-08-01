---
title: 指令映射
icon: arrow-right
---

::: info 功能信息
**指令**: `/map`  
**触发:** `指令`   
**支持:** `文本`
<Badge text="指令映射❎"/> <Badge text="REPL模式❎"/>
:::

::: tip 功能说明
指令格式: /map `自定义指令` `原指令`

- 必须给 `自定义指令` 和 `原指令` **分别添加** `格式`，比如: `等宽`、`斜体`... 建议使用`等宽`
- `自定义指令` 可以自定义前缀，默认为 `/`. 只能使用符号当前缀, 设置了前缀依旧可以使用 `/` 触发  
- `自定义指令` 会自动同步到你的菜单列表，只有你可用，全局生效  

例如`原指令`是: `/ist r` - 去除图片背景并转为贴纸  
你不想每次使用都输入指令又输入参数, 那么你可以添加一个映射, 映射这条指令到你的`自定义指令`，例如: `/isr`

<Badge text="指令示例:" type="tip"/>

```markdown
/map `isr` `ist r`
```

```markdown
/map `2cn` `/gpt 翻译为中文:`
```

```markdown
/map `/tjp` `/tts -v ja-JP-NanamiNeural`
```

```markdown
/map `,me` `/get me`
```

```markdown
/map `/ping` `/wt https://status.getletbot.com`
```

:::

## 功能预览

![](https://img.155155155.xyz/i/2024/03/66091c6924294.webp)
![](https://img.155155155.xyz/i/2024/03/66091c9865c73.webp)
![](https://img.155155155.xyz/i/2024/03/66091ca3b5d67.webp)
