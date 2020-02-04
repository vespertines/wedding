<template>
  <nav>
    <ul>
      <li>
        <a v-bind:href="'mailto:lee.nayeon90@gmail.com, atelier.jullian@gmail.com'">Contact</a>
      </li>
      <li>
        <a v-bind:href="'https://prezola.com/wishlists/10217304/'" target="_blank">Register</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$black: #000000;
$white: #ffffff;

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  border-top: solid 1px $black;
  background-color: $white;

  ul {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 1400px;
    max-width: 100%;

    li {
      margin: 0;
      padding: 0;
      display: inline-block;
      width: 50%;
      list-style: none;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.075em;
      text-transform: uppercase;

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

      a {
        color: $black;
        text-decoration: none;
      }
    }
  }
}
</style>
