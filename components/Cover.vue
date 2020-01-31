<template>
  <div class="cover-container">
    <div class="image">
      <img src="~/assets/images/cover.svg" />
    </div>
    <div class="text">
      Kwang-Su Kim and Nayeon Lee
      <br />invite you to join them at the celebration <br />of their marriage
      <br />Saturday 16 May 2020 <br />at 2:00 pm <br />Gurume Resort
      <br />Andong-Si, South Korea
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$grey: #505050;

.cover-container {
  height: 100%;
  text-align: center;

  .image {
    padding-top: 50px;
    padding-left: 50px;
  }

  .text {
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 600px;
    max-width: 100%;
    color: $grey;
    font-size: 15px;
    letter-spacing: 0.025em;
    line-height: 1.75em;
    text-transform: uppercase;
  }
}
</style>
