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
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: "keywords", content: "vuepress, netlify"}]// meta keywordsの設定
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Blog', link: 'https://note.com/yamarico9492' },
      {
        text: 'SNS',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/yamarico9492' },
          { text: 'Instagram', link: 'https://www.instagram.com/shuhei_1412/' },
          { text: 'GitHub', link: 'https://github.com/yamarico' },
          { text: 'AtCoder', link: 'https://atcoder.jp/users/yamarico' },
          { text: 'kaggle', link: 'https://www.kaggle.com/yamaguchishuhei' },
          { text: 'Speakerdeck', link: 'https://speakerdeck.com/yamarico' },

        ]
      }
    ]
  }
}