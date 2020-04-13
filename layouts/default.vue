<template>
  <div>
    <!-- <TopHeader/> -->
    <main id="main" role="main">
      <nuxt/>
    </main>
    <BottomFooter/>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    // TopHeader,
    BottomFooter
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
</style>
