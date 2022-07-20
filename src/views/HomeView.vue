<template>
  <div id="home" class="container-fluid">
    <div id=box class="row">
      <div id="box" class="col pb-5">
        <div class="row">
          <div class="col-2"></div>
          <div class="col border-top border-start border-end p-2
          ">
            <h1 class="h1">Hi I am Daniel Fredericks</h1>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col border-bottom">
            <h2 id="col2" class="h2">Aspiring Web Developer</h2>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
#home {
  height: 90vh;
  background-image: url("../assets/mountain.jpg");
  background-size: cover;
  background-position: center;
}
#box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}
</style>