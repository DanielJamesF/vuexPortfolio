<template>
  <Navbar />
  <Main />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    Main,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
