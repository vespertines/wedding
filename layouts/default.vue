<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
$white: #ffffff;
$grey: #505050;

html {
  min-height: 100%;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.v-center-container {
  position: relative;
  height: 100%;

  .v-center {
    position: absolute;
    top: 50%;
    width: 100%;
  }
}
</style>
