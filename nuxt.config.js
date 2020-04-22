require('dotenv').config()
const axios = require('axios')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Mrs+Saint+Delafield&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [{ src: '~/assets/main.scss', lang: 'scss' }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    ['storyblok-nuxt', {accessToken: process.env.PREVIEW_TOKEN, cacheProvider: 'memory'}]
  ],
  router: {
    middleware: 'languageDetection'
  },
  /*
  ** Generate with Links API
  */
  generate: {
    routes: function (callback) {
      const token = `PREVIEW_TOKEN`
      const version = 'published'
      let cache_version = 0


       // other routes that are not in Storyblok with their slug.
      let routes = ['/'] // adds / directly

       // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

         // timestamp of latest publish
        cache_version = space_res.data.space.version

         // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (res.data.links[key].slug != 'home') {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          callback(null, routes)
        })
      })
    }
  }
}
