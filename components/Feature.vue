<template>
  <div v-editable="blok" class="feature">
    <!-- TODO: find 80X80 icon -->
    <!-- <img :src="resizedIcon" class="feature__icon"> -->
    <h2 class="title">{{ blok.name }}</h2>
    <p>
      {{ blok.description }}
    </p>
    <button class="button is-medium" @click="isOpen = !isOpen">Learn More</button>

    <div class="modal" v-bind:class="{'is-active': isOpen}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ blok.name }}</p>
          <button class="delete" aria-label="close" @click="isOpen = !isOpen"></button>
        </header>
        <section class="modal-card-body" v-html="$options.filters.markdown(blok.modal)">
        </section>
        <footer class="modal-card-foot">
          <button class="button button-cancel" @click="isOpen = !isOpen"><strong>Cancel</strong></button>
          <nuxt-link class="button" to="/contact">Book Session</nuxt-link>
        </footer>
      </div>
    </div>
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
  props: ['blok'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
// .feature__icon {
//   max-width: 24px;
// }

.button {
  background-color: #718FCB;
  margin-top: auto;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #718FCB;
  }
}

.button-cancel {
  background-color: #ffffff;
  color: #718FCB;
  &:hover {
    background-color: #718FCB;
    color: #ffffff;
  }
}

.feature {
  height: 380px;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    padding: 3rem 6rem;
  }
}

h2, p {
  margin: 0;
}

.modal-card-head, .modal-card-foot {
  background-color: #E8EFF5;
}

.modal-card-body {
  padding: 2rem;
}
</style>
