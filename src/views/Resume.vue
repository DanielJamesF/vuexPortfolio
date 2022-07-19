<template >
  <div id="resume" class="container-fluid">
    <h1 class="text-decoration-underline display-1">Resume...</h1>
    <br />
    <div>
      <h3 class="text-decoration-underline">education...</h3>
    </div>
    <div class="row p-1 g-1">
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
          where we recently covered HTML, CSS, Bootstrap, mySQL, JavaScript and
          Vuex
        </p>
      </div>
    </div>
    <br />
    <div class="row p-1 g-1">
      <div class="col-2">
        <p>2015 - 2019</p>
      </div>
      <div class="col-3">
        <h4>Grassy Park High School</h4>
      </div>
      <div class="col">
        I attended and got my NQ4 form Grassy Park High School from which I
        matriculated with a Diploma pass
      </div>
    </div>
    <br />
    <div>
      <h3 class="text-decoration-underline">skills...</h3>
    </div>
    <div class="row p-1">
      <div>
        <h4 class="p-2">Technical Skills:</h4>
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
              class="progress-bar"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="70%"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">CSS</h6>
          <div class="progress m-1">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 55%"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">Bootstrap</h6>
          <div class="progress m-1">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 65%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">mySQL</h6>
          <div class="progress m-1">
            <div
              class="progress-bar"
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
              class="progress-bar"
              role="progressbar"
              style="width: 65%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h6 class="p-1">Vuex</h6>
          <div class="progress m-1">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 65%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
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
      </div>
      <br />
      <div class="row d-flex justify-content-center p-1">
        <h4 data-aos="fade-right" class="p-1">Soft Skills:</h4>
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
</template>

<script>
export default {};
</script>

<style scoped>
#resume {
  padding-top: 8%;
  padding-bottom: 8%;
}
.row {
  border: solid black 1px;
}
</style>