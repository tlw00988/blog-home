import { defineConfigWithTheme } from 'vitepress'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  name: string
  welcomeText: string
  motto: string
  social: { icon: qq; url: 2246714232 }[]

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
  ],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://vitepress-theme-bluearchive.vercel.app',
  },
  title: "alhsk's 部落格",
  description: "Sensei's 部落格",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    name: "Sensei's 部落格",
    welcomeText: 'Hello, VitePress',
    motto: '我也不知道写啥啊（（',
    social: [
      { icon: 'github', url: 'https://github.com/tlw00988' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/2050444007/' },
    ],

    //footer配置
    footerName: 'Sensei',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'netlify', url: 'https://www.netlify.com' },
      { name: 'peg195', url: 'https://peg195-blog.netlify.app'},
    ],

    //gitalk配置
    clientID: 'Ov23liSzw9mFlfBaZ4ds',
    clientSecret: '7f924e1170168a7593584c45d4f04ae268da3a15',
    repo: 'blog',
    owner: 'tlw00988',
    admin: ['tlw00988'],
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    math: true,
  },
})
