<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="{ path: '/' }" v-scroll-to="{ el: '#wedding' }">Wedding</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/' }" v-scroll-to="{ el: '#travel' }">Travel</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/' }" v-scroll-to="{ el: '#photos' }">Photos</nuxt-link>
      </li>
    </ul>
    <ul>
      <li>Registry</li>
      <li>
        <nuxt-link :to="{ path: '/', hash: 'footer' }" v-scroll-to="{ el: '#footer' }">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$grey: #505050;

nav {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;

  ul {
    position: absolute;
    left: 40px;
    margin: 0;
    padding: 0;
    z-index: 100;

    &:last-of-type {
      right: 40px;
      z-index: 200;
      text-align: right;
    }

    li {
      display: inline-block;
      list-style: none;
      font-size: 12px;
      letter-spacing: 0.075em;
      text-transform: uppercase;

      a {
        color: $grey;
        text-decoration: none;
      }
    }

    li + li::before {
      content: " | ";
    }
  }
}
</style>
