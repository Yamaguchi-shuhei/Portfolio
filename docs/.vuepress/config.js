module.exports = {
  base: '/', // base URL
  locales: {
    '/': {
      lang: 'ja', // 言語設定
      title: 'Portfolio', // タイトルの設定
      description: 'vuepress-demoです',  // meta descriptionの設定
    }
  },
  head: [
    ['meta', { // meta keywordsの設定
      name: "keywords", content: "vuepress, netlify"
    }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Blog', link: 'https://imawa841.hateblo.jp/' },
      {
        text: 'SNS',
        items: [
          { text: 'Twitter', link: 'https://mobile.twitter.com/itero1191' },
          { text: 'Instagram', link: 'https://www.instagram.com/shuhei_1412/' },
          { text: 'GitHub', link: 'https://github.com/imawa841' }
        ]
      }
    ]
  }
}