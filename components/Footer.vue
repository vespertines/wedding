<template>
  <div id="footer" class="footer">
    <div
      class="v-center-container"
      :style="{'background-image': 'url(' + require('~/assets/images/footer@2x.png') + ')'}"
    >
      <p class="v-center font-cursive">We can't wait to celebrate our special day with you.</p>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  padding-top: 70px;

  .v-center-container {
    height: 380px;
    background-size: cover;
    background-position: center;

    p {
      color: #ffffff;
      font-size: 30px;
      line-height: 1em;
      text-align: center;
    }
  }
}
</style>
