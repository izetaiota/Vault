---
outline: deep
---

# Markdown 语法示例

本页展示 VitePress 内置的部分 Markdown 扩展语法，编写文档时可以对照使用。

## 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 提供语法高亮，还支持行高亮等额外功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一条信息。
:::

::: tip
这是一个提示。
:::

::: warning
这是一条警告。
:::

::: danger
这是一条危险警告。
:::

::: details
这是一个可折叠的详情块。
:::
```

**输出**

::: info
这是一条信息。
:::

::: tip
这是一个提示。
:::

::: warning
这是一条警告。
:::

::: danger
这是一条危险警告。
:::

::: details
这是一个可折叠的详情块。
:::

## 表格

**输入**

```md
| 命令 | 说明 |
| --- | --- |
| `git status` | 查看文件状态 |
| `git add .` | 暂存所有变更 |
```

**输出**

| 命令 | 说明 |
| --- | --- |
| `git status` | 查看文件状态 |
| `git add .` | 暂存所有变更 |

## 更多

完整的扩展语法请查阅官方文档：[Markdown 扩展](https://vitepress.dev/zh/guide/markdown)。
