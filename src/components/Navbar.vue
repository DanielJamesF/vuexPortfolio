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
    name: 'Navbar'
}
</script>

<style>
nav {
position: fixed;
left: 0px;
top: 0px;
width: 100vw;
  padding: 30px;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: #3b5772;
  padding: 2%;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>