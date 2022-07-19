<template>
  <div id="footer">
    <v-footer v-bind="localAttrs">
      {{ new Date().getFullYear() }} —
      <strong>Copywright &copy</strong>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scope>
#footer {
    left: 0px;
  bottom: 0px;
  position: fixed;
  padding: 30px;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  color: #3b5772;
}
</style>