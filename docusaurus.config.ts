import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ActonOS Documentation',
  tagline: 'The AI-Native Autonomous Operating System & Multi-Agent Swarm Hub',
  favicon: 'img/favicon.ico',

  url: 'https://docs.actonos.org',
  baseUrl: '/',

  organizationName: 'actonos',
  projectName: 'actonos-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      vi: {
        label: 'Tiếng Việt',
        htmlLang: 'vi-VN',
      },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/actonos/actonos-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/actonos/actonos-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/actonos_logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ActonOS',
      logo: {
        alt: 'ActonOS Logo',
        src: 'img/actonos_logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/getting-started/overview',
          label: 'Quickstart',
          position: 'left',
        },
        {
          to: '/docs/developer-reference/api-endpoints',
          label: 'API Reference',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/actonos/actonos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/overview',
            },
            {
              label: 'User Guides',
              to: '/docs/user-guide/dashboard',
            },
            {
              label: 'Advanced Architecture',
              to: '/docs/advanced-architecture/dual-runtime-hal',
            },
            {
              label: 'API & Developer Reference',
              to: '/docs/developer-reference/rest-api-overview',
            },
          ],
        },
        {
          title: 'Community & Ecosystem',
          items: [
            {
              label: 'Discord Community',
              href: 'https://discord.gg/actonos',
            },
            {
              label: 'Telegram Channel',
              href: 'https://t.me/actonos',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/actonos/actonos/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Release Notes (v0.1)',
              to: '/blog',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/actonos/actonos',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ActonOS Contributors. Released under the Apache 2.0 License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'toml', 'docker', 'go', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
