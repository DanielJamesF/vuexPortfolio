<template>
  <Card />
  <!-- <div id="projects" class="row">
    <div class="col">
      <div>
        <h2 class="text-decoration-underline display-4">Projects...</h2>
      </div>
      <div
        class="
          d-flex
          flex-wrap
          justify-content-center
          p-4
          gap-4
          rounded-4
          text-dark
        "
      >
        <div class="card" style="width: 17rem">
          <img
            src="../assets/JSCalculator.png"
            style="height: 15em"
            class="card-img-top"
            alt="calculator"
          />
          <div class="card-body">
            <h5 class="card-title p-1">Calculator</h5>
            <p class="card-text">
              This is a calculator made using HTML and CSS
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="https://graceful-toffee-220d3a.netlify.app/"
                target="_blank"
                class="btn btn-primary w-50"
                >Live</a
              >
              <a
                href="https://github.com/DanielJamesF/Javascript_Calculator"
                target="_blank"
                class="btn btn-secondary w-50"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/holidaydestination.png"
            style="height: 15em"
            class="card-img-top"
            alt="holiday_destination"
          />
          <div class="card-body">
            <h5 class="card-title p-1">Holiday_destination</h5>
            <p class="card-text">
              This is a holiday destination with a contact page made using HTML
              and CSS
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="https://dapper-praline-4dabc1.netlify.app"
                target="_blank"
                class="btn btn-primary w-50"
                >Live</a
              >
              <a
                href="https://github.com/DanielJamesF/holiday_destination"
                target="_blank"
                class="btn btn-secondary w-50"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/rainbow.png"
            style="height: 15em"
            class="card-img-top"
            alt="rainbow"
          />
          <div class="card-body">
            <h5 class="card-title p-1">Rainbow</h5>
            <p class="card-text">This is rainbow made using HTML and CSS</p>
            <div class="d-flex justify-content-center">
              <a
                href="https://peaceful-hamster-c0a214.netlify.app"
                target="_blank"
                class="btn btn-primary w-50"
                >Live</a
              >
              <a
                href="https://github.com/DanielJamesF/Rainbow"
                target="_blank"
                class="btn btn-secondary w-50"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/Website.png"
            style="height: 15em"
            class="card-img-top"
            alt="website"
          />
          <div class="card-body">
            <h5 class="card-title p-1">Website</h5>
            <p class="card-text">This is website made using HTML and CSS</p>
            <div class="d-flex justify-content-center">
              <a
                href="https://delicate-tartufo-8fde53.netlify.app"
                target="_blank"
                class="btn btn-primary w-50"
                >Live</a
              >
              <a
                href="https://github.com/DanielJamesF/website"
                target="_blank"
                class="btn btn-secondary w-50"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/keyboard.png"
            style="height: 15em"
            class="card-img-top"
            alt="keyboard"
          />
          <div class="card-body">
            <h5 class="card-title p-1">Keyboard</h5>
            <p class="card-text">
              This is keyboard made using HTML, CSS, and JavaScript
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="https://glittering-bavarois-894489.netlify.app/"
                target="_blank"
                class="btn btn-primary w-50"
                >Live</a
              >
              <a
                href="https://github.com/DanielJamesF/keyboard"
                target="_blank"
                class="btn btn-secondary w-50"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/ToDoApp.png"
            style="height: 15em"
            class="card-img-top"
            alt="keyboard"
          />
          <div class="card-body">
            <h5 class="card-title p-1">To do App</h5>
            <p class="card-text">
              This is to do app made using HTML, CSS, and JavaScript
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="https://spontaneous-cannoli-d39645.netlify.app/"
                target="_blank"
                class="btn btn-primary w-50"
                >Live</a
              >
              <a
                href="https://github.com/DanielJamesF/ToDoApp"
                target="_blank"
                class="btn btn-secondary w-50"
                >Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div id="projects">
    <div class="col-md-12 pt-5">
      <div class="site-heading text-center">
        <h2 class="text-decoration-underline display-4">Projects...</h2>
      </div>
    </div>
    <div class="container">
      <div v-if="projects" class="row my-5">
        <Card
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div v-else>Loading....</div>
    </div>
  </div> -->
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
};
</script>

<style scoped>
/* #projects {
  padding-top: 10vh;
  min-height: 100vh;
  padding-bottom: 10vh;
} */
</style>
