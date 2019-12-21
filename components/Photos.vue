<template>
  <div class="photo-container">
    <section id="photos">
      <div class="photo">
        <img src="~/assets/images/image-1@2x.png" />
      </div>
      <div class="photo">
        <img src="~/assets/images/image-2@2x.png" />
      </div>
      <div class="photo">
        <img src="~/assets/images/image-3@2x.png" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.photo-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 900px;

  .photo {
    padding-top: 50px;
    vertical-align: top;

    &:not(:first-of-type) {
      display: inline-block;
      max-width: 100%;
      width: 440px;
    }

    &:last-of-type {
      margin-left: 15px;
    }

    img {
      max-width: 100%;
    }
  }
}

$breakpoint-tablet: 768px;
@media (max-width: $breakpoint-tablet) {
  .photo-container {
    .photo {
      margin: 0 !important;
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      width: 100% !important;
    }
  }
}
</style>
