<template>
  <nav>
    <ul>
      <li>Contact</li>
      <li>Register</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$grey: #505050;

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  border-top: solid 1px $grey;
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
        color: $grey;
        text-decoration: none;
      }
    }
  }
}
</style>
