<template>
  <div class="slide" v-editable="blok">
    <img :src="blok.image">
    <div class="slide-text">
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.slide img {
  width: 100%;
}

.slide {
  position: relative;
}

.slide-text {
  text-align: left;
  position: absolute;
  top: 33%;
  margin-left: 2rem;
}

@media screen and (min-width: 501px) {
  .slide-text {
    margin-left: 5rem;
  }

  h1 {
    font-size: 3rem;
  }
}

@media screen and (min-width: 690px) {
  p {
    font-size: 1.5rem;
  }
}

p {
  max-width: 50%;
}
</style>
