/*
 * @Version: 
 * @Company: Venus
 * @Date: 2021-04-08 10:00:33
 * @LastEditors: Kian_
 * @LastEditTime: 2021-04-08 11:26:45
 */
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  editLink: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    locales: {},
    repo: 'vuejs/vitepress',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'vue', link: '/' },
      { text: 'css', link: '/test/' },
      { text: 'js', link: '/zhihu/' }
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
  },
}