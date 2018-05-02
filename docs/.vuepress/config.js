module.exports = {
    title: 'VLC',
    description: 'VuePressのレイアウトをカスタマイズしてみる',
    locales: {
        '/': {
          lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#3eaf7c' }
    ],
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    ],
    port: 8080,
    base: '/',
    serviceWorker: false,
    themeConfig: {
        repo: 'nakanakamu0828/custom-layout-vuepress',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: {
            '/blog/': [
                ''
            ],
        }
    }
}