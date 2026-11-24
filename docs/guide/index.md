# 开始使用

这里介绍工具箱知识库的组织方式，以及如何新增一篇工具笔记。

## 目录结构

```
docs/
├─ .vitepress/
│  └─ config.ts       # 站点配置：导航、侧边栏、搜索等
├─ guide/             # 指南：知识库的使用与写作规范
├─ toolbox/           # 工具箱：按分类存放工具笔记
│  ├─ index.md        # 工具箱总览（分类目录、收录标准、使用说明）
│  ├─ ai/             # AI 工具集
│  ├─ network/        # 网络与访问工具
│  ├─ desktop/        # 桌面效率工具
│  ├─ dev/            # 开发工具集
│  │  ├─ index.md     # 分类首页，列出该分类下的工具
│  │  └─ git.md       # 一篇工具笔记
│  ├─ online/         # 在线服务
│  ├─ scripts/        # 脚本与自动化
│  └─ resources/      # 素材与资源
└─ index.md           # 站点首页
```

`.vitepress` 目录之外的 Markdown 文件都会生成对应页面，路径与文件路径一致。例如 `toolbox/dev/git.md` 对应页面 `/toolbox/dev/git.html`。

## 新增一篇工具笔记

1. 在对应分类目录下新建 Markdown 文件，例如 `docs/toolbox/dev/vscode.md`。
2. 按下面的模板填写内容。
3. 在 `docs/.vitepress/config.ts` 的 `sidebar` 中登记新页面，让它出现在侧边栏。
4. 如果分类首页有工具列表，在列表中补上一行。

### 页面模板

````md
---
title: 工具名称
description: 一句话说明这个工具是用来做什么的
---

# 工具名称

简要介绍工具的用途和适用场景。

## 安装

安装方式或获取入口。

## 常用操作

按使用频率列出常用操作，命令放进代码块，方便复制。

## 注意事项

记录容易出错的地方和版本差异。

## 参考链接

- [官方文档](https://example.com)
````

## 新增分类

1. 在 `docs/toolbox/` 下新建分类目录，并添加 `index.md` 作为分类首页。
2. 在 [工具箱总览](/toolbox/) 的分类列表中加上入口。
3. 在 `docs/.vitepress/config.ts` 的 `sidebar` 中，为工具箱增加一组侧边栏条目。

## 本地预览与发布

需要 Node.js 22 及以上版本。

```bash
npm install       # 首次使用时安装依赖
npm run docs:dev  # 启动本地开发服务器
```

修改推送到 GitHub 的 `master` 分支后，GitHub Actions 会自动构建并发布站点。
