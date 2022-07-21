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
<style>
#footer {
  left: 0px;
  bottom: 0px;
  position: fixed;
  height: 10vh;
  width: 100%;
  background-color: rgb(27, 26, 26);
  color: #92989f;
}
</style>