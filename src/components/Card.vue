<template>
  <div id="projects" class="row">
    <h2 class="display-4">Projects...</h2>
    <div v-for="project in Projects" :key="project">
      <div
        class="
          col
          d-flex
          flex-wrap
          justify-content-center
          p-4
          gap-4
        "
      >
        <div class="card rounded-4 text-dark" style="width: 17rem">
          <img
            :src="project.image"
            style="height: 15em"
            class="card-img-top"
            :alt="project.title"
          />
          <div class="card-body">
            <h5 class="card-title p-1">{{ project.title }}</h5>
            <p class="card-text">
              {{ project.desc }}
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="{{ project.live }} "
                target="_blank"
                class="btn btn-primary w-50 m-1"
                >Live</a
              >
              <a
                href="{{ project.github }}"
                target="_blank"
                class="btn btn-secondary w-50 m-1"
                >Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style>
#projects {
  padding-top: 10vh;
  min-height: 100vh;
  padding-bottom: 10vh;
}
img{
  object-fit: cover;
}
</style>