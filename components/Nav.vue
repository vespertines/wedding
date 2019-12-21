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
        <nuxt-link v-scroll-to="{ el: '#contact' }" :to="{ path: '/' }">Contact</nuxt-link>
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
  z-index: 100;

  ul {
    margin: 0;
    padding: 0;
    width: 50%;

    &:first-of-type {
      float: left;
      padding-left: 40px;
      text-align: left;
    }

    &:last-of-type {
      float: right;
      padding-right: 40px;
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
