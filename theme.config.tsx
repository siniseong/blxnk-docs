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
    { title: 'Frontend', path: '/frontend' },
    { title: 'Backend', path: '/backend' },
    { title: 'Security', path: '/security' },
    { title: 'Embedded', path: '/embedded' }
  ],
  title: {
    className: 'mr-8'
  }
} as const;
