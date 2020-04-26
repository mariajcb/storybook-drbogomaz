<template>
  <div class="slide hero is-fullheight-with-navbar has-background" v-editable="blok">
    <img class="hero-background" :src="blok.image">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ blok.title }}</h1>
        <p class="subtitle">{{ blok.text }}</p>
        <button class="button is-medium">Contact Me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.button {
  background-color: #ffffff;
  color: #718FCB;
  &:hover {
    background-color: #718FCB;
    color: #ffffff;
  }
}

.container {
  padding-top: 70%;
}

@media (min-width: 1000px) {
  .container {
    padding-top: 20%;
  }

  .subtitle {
    max-width: 50%;
  }
}

</style>
