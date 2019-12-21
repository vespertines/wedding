<template>
  <div class="container">
    <Nav />
    <Cover />
    <Before />
    <Photos />
    <After />
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Cover from "~/components/Cover.vue";
import Before from "~/components/Before.vue";
import Photos from "~/components/Photos.vue";
import After from "~/components/After.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Nav,
    Cover,
    Before,
    Photos,
    After,
    Footer
  },
  head: {
    title: "Nayeon and Kwangsu Tie the Knot."
  }
};
</script>

<style lang="scss">
$white: #ffffff;
$grey: #505050;

.container {
  position: relative;
  margin: 0 auto;
}

.font-cursive {
  font-family: "La Belle Aurore", cursive;
  letter-spacing: -0.025em;
}
</style>
