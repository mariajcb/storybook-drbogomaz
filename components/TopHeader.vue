<template>
  <header class="top-header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <!-- <ul class="navbar-item navbar-start">
        <li class="navbar-item" v-for="(navitem, index) in $store.state.settings.main_nav" :key="index">
          <nuxt-link :to="navitem.link.cached_url">
            {{ navitem.name }}
          </nuxt-link>
        </li>
      </ul> -->
      <ul class="navbar-start">
        <li class="navbar-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link to="/en/blog">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  .top-header {
    justify-content: space-between;
    padding: 25px 50px;
    max-width: 75em;
  }
  .top-header__logo {
    text-align: center;
    position: absolute;
    left: 50%;
    text-decoration: none;
    color: #718FCB;
    // img {
    //   position: relative;
    //   max-height: 60px;
    //   left: -50%;
    //   top: -15px;
    // }
    span {
      font-family: 'Mrs Saint Delafield', cursive;
      font-size: 2.75rem;
      position: relative;
      max-height: 60px;
      left: -50%;
    }
  }
  a {
    color: black;
    font-weight: bold;
    letter-spacing: .5px;
    font-size: 24px;
  }

  a:hover {
    color: #718FCB;
  }
</style>
