<template>
  <div class="container footer">
    <div class="row">
      <div class="col-12 text">
        <p>We can’t wait to celebrate our special day with you</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 image">
        <img src="~/assets/images/footer@2x.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$grey: #505050;

.footer {
  padding-bottom: 120px;

  .text {
    padding-top: 30px;

    p {
      color: $grey;
      font-size: 15px;
      letter-spacing: 0.025em;
      line-height: 1.75em;
      text-align: center;
      text-transform: uppercase;
    }
  }

  .image {
    padding-top: 120px;
    padding-bottom: 90px;
    text-align: center;

    img {
      width: 230px;
      max-width: 100%;
    }
  }
}
</style>
