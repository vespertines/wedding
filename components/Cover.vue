<template>
  <div
    class="cover-container"
    :style="{'background-image': 'url(' + require('~/assets/images/LNY_16-35_20190818_1763-v2.jpg') + ')'}"
  >
    <h1 class="font-cursive">Kwangsu Nayeon</h1>
  </div>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$grey: #505050;

.cover-container {
  height: 600px;
  background-size: cover;
  background-position: center;

  h1 {
    position: fixed;
    top: 35px;
    left: 0;
    z-index: 100;
    width: 100%;
    color: $white;
    font-size: 30px;
    font-weight: 400;
    line-height: 1em;
    text-align: center;
  }
}
</style>
