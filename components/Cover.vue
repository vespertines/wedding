<template>
  <div class="container">
    <div class="row">
      <div class="col-12 image">
        <img src="~/assets/images/cover.svg" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 delay">
        <p>
          Due to the unforeseen circumstances regarding Coronavirus,
          <br />the wedding of
          <span>Na-Yeon & Kwang-Su</span> has been postponed.
        </p>
        <p>
          We apologise for any inconvenience this may have caused.
          <br />Please await for further updates.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$grey: #505050;

.image {
  padding-top: 50px;
  text-align: center;

  img {
    max-width: 100%;
  }
}

.delay {
  padding-bottom: 150px;

  p {
    margin-bottom: 30px;
    color: $black;
    font-size: 15px;
    letter-spacing: 0.025em;
    line-height: 1.75em;
    text-align: center;
    text-transform: uppercase;
  }

  span {
    text-decoration: underline;
  }
}

.text {
  padding-bottom: 150px;
  color: $black;
  font-size: 15px;
  letter-spacing: 0.025em;
  line-height: 1.75em;
  text-align: center;
  text-transform: uppercase;
}
</style>
