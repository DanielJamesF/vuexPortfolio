<template>
  <div id="projects" class="row">
    <h2 class="display-4">Projects...</h2>
    <div v-for="project in Projects" :key="project">
      <div class="col">
        <div></div>
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
              :src="project.image"
              style="height: 15em"
              class="card-img-top"
              alt="calculator"
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
                  class="btn btn-primary w-50"
                  >Live</a
                >
                <a
                  href="{{ project.github }}"
                  target="_blank"
                  class="btn btn-secondary w-50"
                  >Github</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
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

<style scoped>
#projects {
  padding-top: 10vh;
  min-height: 100vh;
  padding-bottom: 10vh;
}
</style>