<template>
  <div class="col-sm-4">
    <div class="card h-100 shadow-sm">
      <a href="#">
        <img :src="project.img" class="card-img-top" alt="project.title" />
      </a>
      <div class="label-top shadow-sm">
        <h5 class="card-title font-weight-bold">{{ project.title }}</h5>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a target="_blank" href="#">{{ project.desc }}</a>
        </h5>
        <div>
          <h5 class="card-title">
            <a target="_blank" href="#">
              {{ project.link.live }}
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
/* @import url("../assets/main.css"); */
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.button {
  background-color: #000000;
  color: rgb(255, 255, 255);
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0rem;
  border-radius: 10px;
}
.button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
</style>