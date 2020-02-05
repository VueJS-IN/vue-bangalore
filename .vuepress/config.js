const { events } = require('./plugins/events');

module.exports = {
  title: 'VueBLR',
  description: 'Vue Meetup in Bangalore, India',
  ga: 'UA-38503997-3',
  plugins: [require('./plugins/events')],
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/favicons/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicons/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/favicons/favicon-16x16.png'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/assets/favicons/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#4FC08D'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#4FC08D'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/icon-144x144.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#4FC08D'
      }
    ]
  ],
  serviceWorker: {
    updatePopup: true
  },
  themeConfig: {
    logo: '/logo.png',
    repo: 'vuejs-in/vue-bangalore',
    docsDir: '/',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          {
            text: 'Events',
            items: [
              {
                group: 'Events',
                items: [
                  ...events.slice(0, 5).map(event => ({
                    text: `#${event.id} ${event.title}`,
                    link: event.link
                  })),
                  {
                    text: 'All events',
                    link: '/events'
                  }
                ]
              }
            ]
          },
          {
            text: 'Propose a Talk',
            link: 'http://bit.ly/vueblrcfp'
          },
          {
            text: 'Newsletter',
            link: 'https://buttondown.email/VueBLR'
          },
          {
            text: 'Code of Conduct',
            link:
              'https://github.com/VueJS-IN/vue-bangalore/blob/master/CODE_OF_CONDUCT.md'
          },
          {
            text: 'Join Us',
            items: [
              {
                text: 'Meetup',
                link: 'https://meetup.com/vue-bangalore'
              },
              {
                text: 'Twitter',
                link: 'https://twitter.com/vueblr'
              },
              {
                text: 'WhatsApp',
                link: 'http://bit.ly/vueblr-whatsapp'
              },
              {
                text: 'LinkedIn',
                link: 'https://www.linkedin.com/company/vueblr'
              },
              {
                text: 'Facebook Page',
                link: 'https://www.facebook.com/vue.blr'
              },
              {
                text: 'Facebook Group',
                link: 'https://www.facebook.com/groups/vue.blr'
              }
            ]
          }
        ]
      }
    }
  }
};
