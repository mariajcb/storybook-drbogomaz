<template>
  <div class="slide hero is-fullheight-with-navbar has-background" v-editable="blok">
    <img class="hero-background" :src="blok.image | cdn">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ blok.title }}</h1>
        <p class="subtitle">{{ blok.text }}</p>
        <nuxt-link class="button is-medium" to="/contact">Contact Me</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
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

.hero.is-fullheight-with-navbar {
  min-height: 0;
  @media (min-width: 1036px) {
    min-height: calc(100vh - 3.25rem);
  }
}

.button {
  background-color: #ffffff;
  color: #718FCB;
  font-weight: 500;
  &:hover {
    background-color: #718FCB;
    color: #ffffff;
  }
<<<<<<< HEAD
}

.container {
  padding-top: 70%;
}

=======
}

.container {
  padding-top: 70%;
}

>>>>>>> 8eccb607d2620a16831dcff64327998ea8aaba56
@media (min-width: 1000px) {
  .container {
    padding-top: 20%;
  }

  .subtitle {
    max-width: 50%;
  }
}

</style>
