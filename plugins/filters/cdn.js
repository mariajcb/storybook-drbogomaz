import Vue from 'vue'

Vue.filter('cdn', (image) => {
  if (typeof image !== 'undefined') {
    return '//img2.storyblok.com/' + image.replace('https://a.storyblok.com', '')
  }
  return null
})
