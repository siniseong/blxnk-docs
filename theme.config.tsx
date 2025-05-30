export default {
  theme: {
    default: 'dark',
    forcedColorSchemes: 'media',
  },
  logo: 'blxnk Docs',
  project: {
    link: 'https://github.com/siniseong/blxnk-docs',
  },
  editLink: {
    content: '',
    component: () => null,
  },
  feedback: {
    content: '',
    component: () => null,
  },
  footer: {
    text: (
      <>
        © 2025 blxnk. All rights reserved. · Developed by siniseong
      </>
    ),
  },
  navigation: [
    { title: '/', path: '/' },
    { title: 'FE', path: '/frontend' },
    { title: 'BE', path: '/backend' },
    { title: 'Sec', path: '/security' },
    { title: 'Emb', path: '/embedded' }
  ],
  title: {
    className: 'mr-8'
  }
} as const;
