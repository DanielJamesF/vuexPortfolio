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
    name: 'Footer'
  }
</script>
<style scope>
#footer{
position: fixed;
bottom: 0;
width: 100vw;
}
</style>