---
title: zlib CLI — Z-Library 命令行工具
description: 基于 Go 的 Z-Library 命令行工具，支持搜索下载电子书、推送 Kindle 与微信读书、集成 AI 智能体
---

# zlib CLI — Z-Library 命令行工具

基于 Go 开发的 Z-Library 命令行工具：终端内搜索、浏览与下载电子书，支持推送到 Kindle 和微信读书书架、查看每日额度，可集成 Claude Code 等 AI 智能体，单二进制跨平台。

## 核心功能

| 功能 | 说明 |
| --- | --- |
| 搜索 | 按年份、语言、格式过滤，支持排序 |
| 浏览 | 收藏、推荐、热门书籍与下载历史 |
| 下载 | 查看书籍详情，自选下载目录，终端显示封面 |
| 推送 Kindle | 将文件投递到 Kindle 地址 |
| 推送微信读书 | 导入微信读书书架 |
| 元数据 | 查询与编辑电子书元数据 |
| 网络与镜像 | 检测可用镜像，支持自定义镜像与代理 |
| AI 智能体集成 | 提供 Claude Code、Codex 等 Agent 插件 |

## 安装

macOS / Linux（Homebrew）：

```bash
brew install heartleo/tap/zlib-cli
```

Windows 及其他平台可从 GitHub Releases 下载预编译二进制，安装后命令名为 `zlib`。

## 使用提示

- 需要自己的 Z-Library 账号，登录后可用 `profile` 命令查看每日下载额度
- 默认镜像不可用时，先用网络检测命令查看可用镜像，或配置代理
- 想让 AI 智能体代为搜书下载，参考仓库 README 的 Agent Setup 章节

## 参考链接

- [GitHub 仓库](https://github.com/heartleo/zlib)
- [项目主页](https://zlib.heartleo.dev/)
