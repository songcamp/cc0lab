module.exports = {
  extends: 'next/core-web-vitals',
  plugins: [
    'header'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'app'],
    'header/header': [
      'warn',
      'line',
      [
        ' songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>',
        '',
        {
          pattern: ' Written in \\d{4} by <[^>]+> <[^>]+>',
          template: ' Written in 2022 by <Author Name> <Author Email>',
        },
        '',
        ' To the extent possible under law, the author(s) have dedicated all copyright',
        ' and related and neighboring rights to this software to the public domain',
        ' worldwide. This software is distributed without any warranty.',
      ],
      2
    ]
  },
  overrides: [
    {
      files: ['@zora-drops-utils/**'],
      rules: {
        'header/header': 'off',
      }
    }
  ]
}
