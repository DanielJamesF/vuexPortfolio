<template>
  <footer id="footer" class="container-fluid bg-dark">
    <div class="bg-black p-1">
      <div>
        <div class="row">
          <div class="col">
            <a href="https://github.com/DanielJamesF">
              <i class="bi bi-github"></i> Github</a
            >
          </div>
          <div class="col">
            <a href="https://www.linkedin.com/in/daniel-fredericks-85744023a/"
              ><i class="bi bi-linkedin"></i> Linkedin</a
            >
          </div>
        </div>
      </div>
      <v-footer v-bind="localAttrs">
        {{ new Date().getFullYear() }} —
        <strong>Copywright &copy</strong>
      </v-footer>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style>
#footer {
  left: 0px;
  bottom: 0px;
  position: fixed;
  height: 10vh;
  width: 100%;
  /* background-color: rgb(27, 26, 26); */
  color: #92989f;
}
</style>