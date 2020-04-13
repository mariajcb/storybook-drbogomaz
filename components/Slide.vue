<template>
  <div class="slide hero is-fullheight-with-navbar has-background" v-editable="blok">
    <TopHeader />
    <img class="hero-background" :src="blok.image">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ blok.title }}</h1>
        <p class="subtitle">{{ blok.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from './TopHeader'
export default {
  components: {
    TopHeader
  },
  props: ['blok'],
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    }
  }
}
</script>

<style lang="scss">
.hero.has-background {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
}

.subtitle {
  max-width: 50%;
}

//
// .slide {
//   position: relative;
// }
//
// .slide-text {
//   text-align: left;
//   position: absolute;
//   top: 33%;
//   margin-left: 2rem;
// }
//
// p {
//   max-width: 50%;
// }
//
// @media screen and (min-width: 501px) {
//   .slide-text {
//     margin-left: 5rem;
//   }
//
//   h1 {
//     font-size: 3rem;
//   }
// }
//
// @media screen and (min-width: 690px) {
//   p {
//     font-size: 1.5rem;
//   }
// }
</style>
