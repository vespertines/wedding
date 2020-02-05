<template>
  <div>
    <Nav />
    <Cover />
    <Contents />
    <Photos />
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Cover from "~/components/Cover.vue";
import Contents from "~/components/Contents.vue";
import Photos from "~/components/Photos.vue";
import Footer from "~/components/Footer.vue";
import "~/assets/scss/simple-grid.scss";

export default {
  components: {
    Nav,
    Cover,
    Contents,
    Photos,
    Footer
  },
  head: {
    title: "Na-Yeon and Kwang-Su Tie the Knot."
  }
};
</script>
