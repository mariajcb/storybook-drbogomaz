<template lang="html">
  <div v-editable="blok" class="bio">
    <div class="card">
      <div class="card-image is-hidden-tablet">
        <figure class="image is-225X255">
          <img :src="blok.image_mobile | cdn" :alt="blok.image_mobile.description">
        </figure>
      </div>
      <div class="card-content">
        <h2 class="title has-text-centered">{{blok.title}}</h2>
        <div class="media">
          <div class="media-left is-hidden-touch">
            <figure class="image is-400X600">
              <img :src="blok.image | cdn" :alt="blok.image.description">
            </figure>
          </div>
          <div class="media-content">
            <div class="content" v-html="$options.filters.markdown(blok.text)"></div>
          </div>
        </div>
        <div class="button-box has-text-centered">
          <nuxt-link class="button is-medium" to="/contact">{{ blok.call_to_action_btn }}</nuxt-link>
        </div>
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
.title {
  color: #718FCB;
  font-family: 'Mrs Saint Delafield', cursive;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.button {
  background-color: #718FCB;
  margin-top: auto;
  color: #ffffff;
  font-weight: 500;
  &:hover {
    background-color: #ffffff;
    color: #718FCB;
  }
}
</style>
