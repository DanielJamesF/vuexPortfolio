<template>
  <div class="home conatiner-fluid">
    <div id="box">
       <div class="row">
        <div class="col-2"></div>
        <div id="col1" class="col">
          <h1 class="h1">Hi I am Daniel Fredericks</h1>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <h2 id="col2" class="h2">An Aspiring Web Developer</h2>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    </div>
</template>

<script>
export default {

  components: {

  }
}
</script>

<style scoped>
.home{
  height: 85vh;
  /* min-height: 100vh; */
  background-color: rgb(0, 0, 0);
}
#box{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}
#col1{
  border-top: solid white;
  border-left: solid white;
  border-right: solid white;

}
#col2{
  border-bottom: solid white;
}
</style>