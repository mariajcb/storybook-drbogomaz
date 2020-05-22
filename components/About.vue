<template lang="html">
  <div v-editable="blok" class="card about">
    <h2>{{ blok.body }}</h2>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="css" scoped>
</style>
