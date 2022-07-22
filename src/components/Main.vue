<template>
  <div id="main" class="container-fluid text-light">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
#main {
  min-height: 100vh;
  background-color: rgb(111, 19, 19);
}
</style>