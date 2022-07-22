<template>
  <footer id="footer" class="container-fluid">
    <div class="bg-black h-100 border-dark border-2 rounded-3">
      <div>
        <div class="row p-2">
          <div class="col">
            <a
              class="text-decoration-none"
              href="https://github.com/DanielJamesF"
            >
              <i class="bi bi-github"></i> Github</a
            >
          </div>
          <div class="col">
            <a
              class="text-decoration-none"
              href="https://app.netlify.com/teams/danieljamesf/overview"
            >
              <i class=""></i> Netlify</a
            >
          </div>
          <div class="col">
            <a
              class="text-decoration-none"
              href="https://www.linkedin.com/in/daniel-fredericks-85744023a/"
              ><i class="bi bi-linkedin"></i> Linkedin</a
            >
          </div>
          <div class="col">
            <a
              class="text-decoration-none"
              href="mailto:fredericksd17@gmail.com"
            >
              <i class="bi bi-envelope"> Email</i>
            </a>
          </div>
          <div class="col">
            <a class="text-decoration-none" href="tel: 0658057987"><i class="bi bi-telephone"></i> Phone</a>
          </div>
        </div>
        <br>
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
  color: rgb(206, 30, 30);
}

a {
  color: rgb(206, 30, 30);
}
</style>