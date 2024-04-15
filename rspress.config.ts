import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  lang: 'zh',
  root: path.join(__dirname, 'docs'),
  title: `andy7076's blog`,
  description: 'Just a technical sharing.',
  icon: '/rspress-icon-round.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/andy7076' },
    ],
    footer: {
      message: '© 2023 wuyuezhan. All Rights Reserved.'
    },
    lastUpdated: true
  },
  globalUIComponents: [
    [
      path.join(__dirname, 'components', 'CustomFooter.tsx'),
      {},
    ]
  ],
});
