module.exports = {
  base: '/gua-ui-demo/',
  title: 'Gua UI',
  description: '这条信息会展示在 meta 里面',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/']
      },
      {
        title: '组件',
        children: ['/components/button']
      }
    ]
  }
}