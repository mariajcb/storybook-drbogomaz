<template>
  <div v-editable="blok" class="feature">
    <img :src="resizedIcon" class="feature__icon">
    <h2 class="title">{{ blok.name }}</h2>
    <p>
      {{ blok.description }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    resizedIcon () {
      if (typeof this.blok.icon !== 'undefined') {
        return '//img2.storyblok.com/80x80' + this.blok.icon.replace('//a.storyblok.com', '')
      }
      return null
    }
  },
  props: ['blok']
}
</script>

<style lang="scss">
.feature {
  text-align: center;
  padding: 4rem 2rem 6rem;
}

.feature__icon {
  max-width: 24px;
}
</style>
