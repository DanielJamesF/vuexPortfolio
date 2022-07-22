<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand" href="#"
        ><img
          id="logo"
          class="img-fluid rounded-circle"
          src="../assets/DJF.png"
          alt=""
      /></div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bg-black p-1" id="navbarNav">
        <router-link class="p-3" to="/">Home</router-link> |
        <router-link class="p-3" to="/about">About</router-link> |
        <router-link class="p-3" to="/resume">Resume</router-link> |
        <router-link class="p-3" to="/projects">Projects</router-link> |
        <router-link class="p-3" to="/testimonials">Testimonials</router-link> |
        <router-link class="p-3" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  width: 100%;
  height: 10vh;
}

nav a {
  font-weight: bold;
  color: #92989f;
}

nav a.router-link-exact-active {
  color: rgb(206, 30, 30);
}

#logo {
  aspect-ratio: 1;
  scroll-padding-left: 1px;
  width: 100px;
  height: auto;
  background-color: rgb(111, 19, 19);
}
</style>