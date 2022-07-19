<template>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
nav {
  position: fixed;
  left: 0%;
  width: 100%;
  padding: 27px;
  background-color: rgb(27, 26, 26);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>