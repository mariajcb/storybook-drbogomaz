<template>
  <section class="util__container">
    <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>
