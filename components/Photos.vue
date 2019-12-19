<template>
  <div class="container">
    <div class="photo-container">
      <div class="photo">
        <img src="~/assets/images/image-1@2x.png" />
      </div>
      <div class="photo">
        <img src="~/assets/images/image-2@2x.png" />
      </div>
      <div class="photo">
        <img src="~/assets/images/image-3@2x.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.photo-container {
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  .photo {
    padding-top: 40px;
    vertical-align: top;
    &:not(:first-of-type) {
      display: inline-block;
      width: 430px;
    }
    &:last-of-type {
      margin-left: 35px;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
