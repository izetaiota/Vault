import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '工具箱知识库',
  description: '收集整理日常开发中实用的工具、命令与技巧',
  // 站点部署在 https://<用户名>.github.io/<仓库名>/ 时，base 需设为 /<仓库名>/
  base: '/Vault/',

  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '工具箱', link: '/toolbox/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '开始使用', link: '/guide/' },
            { text: 'Markdown 语法', link: '/guide/markdown' }
          ]
        }
      ],
      '/toolbox/': [
        {
          text: '工具箱',
          items: [
            { text: '总览', link: '/toolbox/' },
            {
              text: '开发工具',
              items: [{ text: 'Git 常用命令', link: '/toolbox/dev/git' }]
            }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/izetaiota/Vault' }],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除搜索词',
            backButtonTitle: '返回',
            displayDetails: '显示详情',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },

    outline: { label: '页面导航' },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: { prev: '上一页', next: '下一页' },
    notFound: {
      title: '页面不存在',
      quote: '可能是链接写错了，或者页面已经被移动。',
      linkLabel: '返回首页',
      linkText: '返回首页'
    },

    editLink: {
      pattern: 'https://github.com/izetaiota/Vault/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
