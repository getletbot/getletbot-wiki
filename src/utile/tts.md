---
title: TTS文本转语音
icon: t
---

::: info 功能信息
**指令**: `/tts`  
**触发:** `指令` / `指令回复`   
**支持:** `文本` / `文件`
<Badge text="指令映射✅"/> <Badge text="REPL模式✅"/>
:::

::: tip 功能说明

| 参数名称 | 参数说明                   |
|------|------------------------|
| `-v` | 发音人                    |
| `-r` | 语速                     |
| `-s` | 音量                     |
| `-o` | 输出格式 `ogg(默认)` / `mp3` |

参数都是可选的

<Badge text="指令示例:" type="tip"/>
- `/tts 呀哈喽`  
- `/tts 呀哈喽 -v zh-TW-HsiaoChenNeural -o mp3`  
- `/tts 呀哈喽 -v zh-CN-XiaoyiNeural -r +100`  
- `/tts 呀哈喽 -r -100 -s +100`

查看支持的地区:
[【常用】](https://telegra.ph/%E5%B8%B8%E7%94%A8%E5%9C%B0%E5%8C%BA-07-22)
[【1】](https://telegra.ph/%E5%8F%8B%E5%A5%BD%E5%90%8D%E7%A7%B0Microsoft-Adri-Online%E8%87%AA%E7%84%B6%E7%89%88-%E5%8D%97%E9%9D%9E%E8%8D%B7%E5%85%B0%E8%AF%AD%E5%8D%97%E9%9D%9E-07-20)
[【2】](https://telegra.ph/%E6%94%AF%E6%8C%81%E7%9A%84%E5%9C%B0%E5%8C%BA-2-07-20)  
可以使用页内搜索来快速查找

配合[指令映射](../system/map.md)食用更佳

```markdown
/map `tjp` `tts -v ja-JP-NanamiNeural`
```

```markdown
/map `txn` `tts -v zh-CN-XiaoyiNeural -r +100`
```

:::

## 功能预览

![](https://img.155155155.xyz/i/2024/03/6608efce05fa1.webp)

## 鸣谢

- [rany2/edge-tts](https://github.com/rany2/edge-tts)