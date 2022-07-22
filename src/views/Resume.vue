<template >
  <div class="row" id="resume">
    <div class="col">
      <div class="heading">
        <h1 class="display-4">Resume...</h1>
      </div>
      <br />
      <div>
        <h3 class="text-decoration-underline">education...</h3>
      </div>
      <div class="row p-1 g-1 border border-3">
        <br />
        <div class="col-2">
          <p>March 2022 - present</p>
        </div>
        <div class="col-4">
          <h4>Life Choices Academy</h4>
        </div>
        <div class="col-6">
          <p>
            I am attendiing Life Choices Academy where I am learning to code,
            where we recently covered HTML, CSS, Bootstrap, mySQL, JavaScript
            and Vuex
          </p>
        </div>
      </div>
      <br />
      <div class="row p-1 g-1 border border-3">
        <div class="col-2">
          <p>2015 - 2019</p>
        </div>
        <div class="col-4">
          <h4>Grassy Park High School</h4>
        </div>
        <div class="col-6">
          I attended and got my NQ4 form Grassy Park High School from which I
          matriculated with a Diploma pass
        </div>
      </div>
      <br />
      <br />
      <div>
        <h3 class="text-decoration-underline">skills...</h3>
      </div>
      <div id="border" class="row p-1 g-1 border border-3">
        <div>
          <h4 class="p-2">Technical Skills:</h4>
        </div>
        <div class="progress">
          <div
            class="progress-bar rounded-pill bg-dark"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100%"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <br />
        <div class="col text-start">
          <h6 class="p-1">Html</h6>
          <div class="progress m-1">
            <div
              class="progress-bar rounded-pill"
              role="progressbar"
              style="width: 77%"
              aria-valuenow="70%"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">CSS</h6>
          <div class="progress m-1">
            <div
              class="progress-bar rounded-pill"
              role="progressbar"
              style="width: 71%"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">Bootstrap</h6>
          <div class="progress m-1">
            <div
              class="progress-bar rounded-pill"
              role="progressbar"
              style="width: 69%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">mySQL</h6>
          <div class="progress m-1">
            <div
              class="progress-bar rounded-pill"
              role="progressbar"
              style="width: 65%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">JavaScript</h6>
          <div class="progress m-1">
            <div
              class="progress-bar rounded-pill"
              role="progressbar"
              style="width: 55%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">Vuex</h6>
          <div class="progress m-1">
            <div
              class="progress-bar rounded-pill"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <br />
      <div class="row d-flex justify-content-center p-1 g-1 border border-3">
        <div>
          <h4 data-aos="fade-right" class="p-1">Soft Skills:</h4>
        </div>
        <div class="progress">
          <div
            class="progress-bar rounded-pill bg-dark"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="col text-center">
          <ul class="list-group">
            <li class="list-group-item m-1 p-2">Creativity</li>
            <li class="list-group-item m-1 p-2">Critical thinking</li>
            <li class="list-group-item m-1 p-2">Time management</li>
            <li class="list-group-item m-1 p-2">Communication</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- <resumecomp /> -->
</template>

<script>
// import Resume from "../components/ResumeComponent.vue";
// export default {
//   components: { Resume },
// };
</script>

<style scoped>
#resume {
  padding-top: 10vh;
  min-height: 100vh;
  padding-bottom: 10vh;
}
</style>