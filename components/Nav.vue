<template>
  <nav>
    <ul>
      <li>
        <nuxt-link v-scroll-to="{ el: '#wedding' }" :to="{ path: '/' }">Wedding</nuxt-link>
      </li>
      <li>
        <nuxt-link v-scroll-to="{ el: '#travel' }" :to="{ path: '/' }">Travel</nuxt-link>
      </li>
      <li>
        <nuxt-link v-scroll-to="{ el: '#photos' }" :to="{ path: '/' }">Photos</nuxt-link>
      </li>
    </ul>
    <ul>
      <li>Registry</li>
      <li>
        <nuxt-link v-scroll-to="{ el: '#footer' }" :to="{ path: '/', hash: 'footer' }">Contact</nuxt-link>
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
