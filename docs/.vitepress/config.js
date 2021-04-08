/*
 * @Version: 
 * @Company: Venus
 * @Date: 2021-04-08 10:00:33
 * @LastEditors: Kian_
 * @LastEditTime: 2021-04-08 10:47:15
 */
module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  editLink: true,
  markdown: {
    lineNumbers: true
  },
  $site:{
    base: '/',
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    head: [],
    locales: {},
    themeConfig:{
      locales: {},
      repo: 'vuejs/vitepress',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: true,
      sidebar: 'auto'
    }
  },
  
}