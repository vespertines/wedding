<template>
  <div class="container">
    <Nav />
    <Cover />
    <Contents />
    <!-- <Photos /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Cover from "~/components/Cover.vue";
import Contents from "~/components/Contents.vue";
// import Photos from "~/components/Photos.vue";
// import Footer from "~/components/Footer.vue";

export default {
  components: {
    Nav,
    Cover,
    Contents
    // Photos,
    // Footer
  },
  head: {
    title: "Nayeon and Kwang-Su Tie the Knot."
  }
};
</script>

<style lang="scss">
$white: #ffffff;
$grey: #505050;

body {
  min-height: 100%;
}

.container {
  position: relative;
  margin: 0 auto;
}

.font-cursive {
  font-family: "Work Sans", sans-serif;
  letter-spacing: -0.025em;
}
</style>
