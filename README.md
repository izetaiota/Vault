# 工具箱知识库

基于 [VitePress](https://vitepress.dev/zh/) 搭建的工具箱知识库，记录日常开发中实用的工具、命令与技巧。

线上地址：<https://izetaiota.github.io/Vault/>

## 本地开发

需要 Node.js 22 及以上版本。

```bash
npm install
npm run docs:dev
```

启动后访问 <http://localhost:5173/Vault/>。

| 命令 | 说明 |
| --- | --- |
| `npm run docs:dev` | 启动本地开发服务器，支持热更新 |
| `npm run docs:build` | 构建生产版本，输出到 `docs/.vitepress/dist` |
| `npm run docs:preview` | 本地预览构建结果 |

## 目录结构

```
docs/
├─ .vitepress/
│  └─ config.ts       # 站点配置：导航、侧边栏、搜索等
├─ guide/             # 指南
├─ toolbox/           # 工具箱，按分类存放工具笔记
└─ index.md           # 站点首页
```

## 新增内容

1. 在 `docs/toolbox/<分类>/` 下新建 Markdown 文件，页面模板见[写作指南](https://izetaiota.github.io/Vault/guide/)。
2. 在 `docs/.vitepress/config.ts` 的 `sidebar` 中登记新页面。

## 部署

推送到 `master` 分支后，[GitHub Actions](.github/workflows/deploy.yml) 会自动构建站点并发布到 GitHub Pages。
