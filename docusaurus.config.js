// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Homarr Docs',
  tagline: 'A modern and lightweight homepage for your server',
  url: 'https://homarr.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ajnart', // Usually your GitHub org/user name.
  projectName: 'homarr-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ajnart/homarr-docs/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: 'Homarr',
        logo: {
          alt: 'Homarr Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            label: 'Documentation',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://homarr.ajnart.fr/',
            label: 'Demo',
            position: 'right',
          },
          {
            href: 'https://discord.com/invite/aCsmEV5RgA',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/ajnart/homarr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Installation',
                to: '/docs/introduction/installation',
              },
              {
                label: 'Modules',
                to: '/docs/modules/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/aCsmEV5RgA',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ajnart/homarr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: "Ajnart's Website",
                href: 'https://ajnart.fr/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Homarr`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'Homarr, Dashboard, Selfhosted, Hosting, Modules, Open-Source',
        },
      ],
    },
  plugins: [require.resolve('@cmfcmf/docusaurus-search-local'), 'plugin-image-zoom'],
};

module.exports = config;
