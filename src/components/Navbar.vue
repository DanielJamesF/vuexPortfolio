<template>
  <nav class="navbar navbar-expand-lg text-light navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img id="logo" class="rounded-circle border border-dark" src="../assets/DJF.png" alt=""></a>
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link class="p-1" to="/">Home</router-link> |
        <router-link class="p-1" to="/about">About</router-link> |
        <router-link class="p-1" to="/resume">Resume</router-link> |
        <router-link class="p-1" to="/projects">Projects</router-link> |
        <router-link class="p-1" to="/testimonials">Testimonials</router-link> |
        <router-link class="p-1" to="/contact">Contact</router-link>
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
  position: fixed;
  /* left: 0%; */
  width: 100%;
  padding: 27px;
  background-color: rgb(27, 26, 26);
}

nav a {
  font-weight: bold;
  color: #92989f;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#logo{
  aspect-ratio: 1;
  height: 5rem;
}
</style>