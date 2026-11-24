---
title: Git 常用命令速查
description: Git 日常使用中的高频命令：配置、提交、分支、远程操作、撤销回退、储藏与标签
---

# Git 常用命令速查

整理 Git 日常使用中的高频命令，忘记参数时可以快速查阅。尖括号 `<...>` 表示需要替换的内容。

## 初始配置

```bash
git config --global user.name "<你的名字>"
git config --global user.email "<你的邮箱>"
git config --global init.defaultBranch main  # 新仓库的默认分支名（Git 2.28+）
git config --list                           # 查看当前生效的配置
```

## 创建仓库

```bash
git init                        # 把当前目录初始化为仓库
git clone <仓库地址>             # 克隆远程仓库
git clone -b <分支名> <仓库地址>  # 克隆指定分支
```

## 提交修改

```bash
git status                    # 查看文件状态
git add <文件>                 # 暂存指定文件
git add .                     # 暂存当前目录下的所有变更
git commit -m "<提交说明>"
git commit -am "<提交说明>"    # 暂存已跟踪文件的修改并提交，不含新文件
git log --oneline --graph     # 查看提交历史
```

## 分支

```bash
git branch                  # 列出本地分支
git switch <分支名>          # 切换分支
git switch -c <新分支名>     # 创建并切换到新分支
git merge <分支名>           # 把指定分支合并到当前分支
git branch -d <分支名>       # 删除已经合并的分支
```

## 远程操作

```bash
git remote -v                  # 查看远程仓库地址
git fetch                      # 拉取远程更新，但不合并
git pull                       # 拉取远程更新并合并到当前分支
git push                       # 推送当前分支
git push -u origin <分支名>    # 推送并建立跟踪关系，之后可以直接 git push
```

## 撤销与回退

| 场景 | 命令 |
| --- | --- |
| 丢弃文件尚未暂存的修改 | `git restore <文件>` |
| 取消暂存，保留修改 | `git restore --staged <文件>` |
| 修改最近一次提交的说明 | `git commit --amend` |
| 回退到某个提交，保留修改 | `git reset --soft <提交>` |
| 回退到某个提交，丢弃修改 | `git reset --hard <提交>` |
| 用一次新提交撤销某次提交 | `git revert <提交>` |

::: warning
`git reset --hard` 会永久丢弃未提交的修改。已经推送到远程的提交，应该用 `git revert` 撤销，而不是用 `git reset` 回退。
:::

## 储藏

临时保存当前修改，等切换分支等工作做完后再恢复。

```bash
git stash          # 储存当前修改
git stash list     # 查看储藏列表
git stash pop      # 恢复最近一次储藏，并把它从列表中删除
git stash drop     # 删除最近一次储藏
```

## 标签

```bash
git tag                   # 列出所有标签
git tag <标签名>           # 创建标签，例如 git tag v1.0.0
git push origin <标签名>   # 推送标签到远程
git tag -d <标签名>        # 删除本地标签
```

## 参考链接

- [Git 官方文档（Pro Git 中文版）](https://git-scm.com/book/zh/v2)
