<template>
  <div v-editable="blok" class="feature">
    <!-- <img :src="resizedIcon" class="feature__icon"> -->
    <h2 class="title">{{ blok.name }}</h2>
    <p>
      {{ blok.description }}
    </p>
    <button class="button is-medium">Learn More</button>
  </div>
</template>

<script>
export default {
  // computed: {
  //   resizedIcon () {
  //     if (typeof this.blok.icon !== 'undefined') {
  //       return '//img2.storyblok.com/80x80' + this.blok.icon.replace('//a.storyblok.com', '')
  //     }
  //     return null
  //   }
  // },
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.feature__icon {
  max-width: 24px;
}

.button {
  background-color: #718FCB;
  margin-top: auto;
  color: #ffffff;
}

.button:hover {
  background-color: #ffffff;
  color: #718FCB;
}

.feature {
  height: 350px;
  text-align: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
}

h2, p {
  margin: 0;
}
</style>
