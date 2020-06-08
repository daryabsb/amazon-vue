<template>
  <div>
    <Header />
    <Menu />
    <nuxt />
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Menu from "~/components/Menu";
import Footer from "~/components/Footer";
export default {
  components: {
    Header,
    Menu,
    Footer
  },
  head() {
    return {
      bodyAttrs: {
        class:
          "horizontal-layout horizontal-menu 2-columns ecommerce-application navbar-floating footer-static"
      }
    };
  }
};
</script>


<style>
</style>
