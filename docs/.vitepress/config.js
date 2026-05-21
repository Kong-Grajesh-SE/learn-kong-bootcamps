import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kong Enablement Bootcamps',
  description: 'Central dashboard for all Kong partner enablement bootcamps - API Gateway, AI Gateway, Agentic AI, APIOps, Developer Portal, Insomnia, and more.',

  srcDir: '..',
  outDir: '../dist',
  cacheDir: '../.vitepress-cache',

  base: '/learn-kong-bootcamps/',

  appearance: 'force-dark',
  cleanUrls: true,
  ignoreDeadLinks: true,

  srcExclude: [
    'node_modules/**',
    'dist/**',
    'docs/.vitepress/**',
    '.vitepress-cache/**',
    'README.md',
    '.github/**',
  ],

  head: [
    ['link', { rel: 'icon',           href: '/learn-kong-bootcamps/favicon.png', type: 'image/png', sizes: '32x32' }],
    ['link', { rel: 'shortcut icon',  href: '/learn-kong-bootcamps/favicon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/learn-kong-bootcamps/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#000F06' }],
    ['meta', { property: 'og:title', content: 'Kong Enablement Bootcamps' }],
    ['meta', { property: 'og:description', content: 'Central dashboard for all Kong partner enablement bootcamps' }],
    ['meta', { property: 'og:image', content: '/learn-kong-bootcamps/kong-gateway-logo.svg' }],
  ],

  markdown: {
    theme: { light: 'github-light', dark: 'one-dark-pro' },
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/kong-logomark-lime.svg',
    siteTitle: 'Kong Bootcamps',

    nav: [
      { text: '🏠 Dashboard', link: '/' },
      {
        text: '🚀 Bootcamps',
        items: [
          {
            text: 'Live',
            items: [
              { text: '🔀 API Gateway',        link: 'https://kong-grajesh-se.github.io/learn-kong-gateway/', target: '_blank' },
              { text: '🤖 AI Gateway',         link: 'https://kong-grajesh-se.github.io/learn-kong-ai-gateway/', target: '_blank' },
              { text: '🛠️ Agentic AI',          link: 'https://kong-grajesh-se.github.io/learn-kong-agentic-bootcamp/', target: '_blank' },
              { text: '🔄 APIOps',             link: 'https://kong-grajesh-se.github.io/learn-kong-apiops-bootcamp/', target: '_blank' },
              { text: '🌐 Developer Portal',   link: 'https://kong-grajesh-se.github.io/learn-kong-dev-portal/', target: '_blank' },
              { text: '🎮 Insomnia',           link: 'https://kong-grajesh-se.github.io/learn-insomnia/', target: '_blank' },
            ],
          },
          {
            text: 'Coming Soon',
            items: [
              { text: '🤝 Bring Your Own Agent', link: 'https://kong-grajesh-se.github.io/bring-your-own-agent/', target: '_blank' },
              { text: '🌋 Volcano SDK',        link: 'https://kong-grajesh-se.github.io/learn-volcano-sdk/', target: '_blank' },
            ],
          },
        ],
      },
      {
        text: '🔗 Resources',
        items: [
          { text: '📖 Kong Docs',    link: 'https://developer.konghq.com/gateway/', target: '_blank' },
          { text: '🧩 Plugin Hub',   link: 'https://developer.konghq.com/plugins/', target: '_blank' },
          { text: '☁️ Konnect',      link: 'https://cloud.konghq.com', target: '_blank' },
        ],
      },
    ],

    sidebar: false,

    editLink: {
      pattern: 'https://github.com/Kong-Grajesh-SE/learn-kong-bootcamps/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Updated',
      formatOptions: { dateStyle: 'medium' },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kong-Grajesh-SE/learn-kong-bootcamps' },
    ],

    footer: {
      message: 'Kong Enablement Bootcamps - Partner Enablement Dashboard',
      copyright: '© Kong Inc. 2026 - The API Connectivity Company',
    },

    search: { provider: 'local' },
  },
})
