import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '93c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '25e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd20'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ce4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'cca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '33f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c38'),
    exact: true
  },
  {
    path: '/tutorial',
    component: ComponentCreator('/tutorial', '41f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '322'),
    routes: [
      {
        path: '/docs/architecture',
        component: ComponentCreator('/docs/architecture', '90f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '066'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/category/guides',
        component: ComponentCreator('/docs/category/guides', '224'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/category/plugins',
        component: ComponentCreator('/docs/category/plugins', 'e23'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/faq',
        component: ComponentCreator('/docs/faq', '465'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/configuration',
        component: ComponentCreator('/docs/getting-started/configuration', 'c8e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/development',
        component: ComponentCreator('/docs/getting-started/development', '825'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', '727'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/playground',
        component: ComponentCreator('/docs/getting-started/playground', '568'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/guides/events',
        component: ComponentCreator('/docs/guides/events', '0b0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/guides/playbacks',
        component: ComponentCreator('/docs/guides/playbacks', '80a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/guides/plugins/building',
        component: ComponentCreator('/docs/guides/plugins/building', '13e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/guides/plugins/built-in',
        component: ComponentCreator('/docs/guides/plugins/built-in', '077'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/guides/plugins/external',
        component: ComponentCreator('/docs/guides/plugins/external', '3ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/guides/plugins/intro',
        component: ComponentCreator('/docs/guides/plugins/intro', 'def'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '6e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/supported_formats',
        component: ComponentCreator('/docs/supported_formats', 'e22'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1dd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
