<template lang="html">
  <div v-editable="blok" class="card about-me">
    <h2>{{blok.title}}</h2>
    <p>{{blok.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>

</style>
