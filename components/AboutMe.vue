<template lang="html">
  <section v-editable="blok" class="about-me">
    <div class="container">
      <div class="content">
        <h2 class="title has-text-centered">{{blok.title}}</h2>
        <p class="subtitle" v-html="$options.filters.markdown(blok.text)"></p>
      </div>
    </div>
    <blockquote class="quote-card">
      <p class="has-text-centered">{{blok.quote}}</p>
    </blockquote>
    <div class="container">
      <div class="content">
        <p class="subtitle" v-html="$options.filters.markdown(blok.text2)"></p>
      </div>
      <div class="button-box has-text-centered">
        <nuxt-link class="button is-medium" to="/en/blog">{{ blok.call_to_action_btn }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 20px;
    max-width: 750px;
    margin: 40px auto;
  }

  .title {
    color: #718FCB;
    font-family: 'Mrs Saint Delafield', cursive;
    font-size: 3rem;
  }

  .quote-card {
    background: #fff;
    padding: 20px;
    padding-left: 50px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(34, 34, 34, 0.12);
    position: relative;
    overflow: hidden;
    min-height: 120px;
    max-width: 800px;
    margin:10px auto;

    p {
      font-size: 22px;
      line-height: 1.5;
      margin: 0;
      max-width: 80%;
    }
  }

  .quote-card::before {
    font-family: Georgia, serif;
    content: '“';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 5em;
    color: #E8EFF5;
    font-weight: normal;
  }

  .quote-card::after {
    font-family: Georgia, serif;
    content: '”';
    position: absolute;
    bottom: -110px;
    line-height: 100px;
    right: -32px;
    font-size: 25em;
    color: #E8EFF5;
    font-weight: normal;
  }

  @media (max-width: 640px) {
    .quote-card:after {
      font-size: 22em;
      right: -25px;
    }
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
