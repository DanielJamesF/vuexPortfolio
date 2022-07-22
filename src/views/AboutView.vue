<template>
  <div id="about" class="row">
    <div class="col">
      <h1 class="display-4">About...</h1>
      <br />
      <div id="row" class="row justify-content-center">
        <div class="col-8">
          <div>
            <img
              id="image"
              class="img-fluid rounded-circle"
              src="../assets/aboutImage.png"
              alt="daniel"
            />
          </div>
          <br />
          <div>
            <div>
              <h2>bio...</h2>
              <p class="border border-2 rounded-3 p-1">
                I am a student at life Choices Academy where I am studying
                coding in order to become a Web Developer in the future. My
                passsion for coding stems from my love of technology and
                anything related to it. I am a hard worker and am able to work
                well in groups as I believe that I am able to get along with
                people pretty well.
              </p>
            </div>

            <br />
            <div>
              <h2>hobbies...</h2>
              <p class="border border-2 rounded-3 p-1">
                I enjoy playing soccer, whether it's eleven a side or five a
                side, listening to music, mostly rap however I do enjoy listing
                to other genres as well, reading manga, watching anime, and
                going out with friends, I esecially enjoy spending time with
                those that I am close with.
              </p>
            </div>
          </div>
          <br />
            <h2>other...</h2>
          <div class="border border-2 rounded-3 p-1">
            <div class="row">
              <div class="col-5">Date Of Birth</div>
              <div class="col-1">:</div>
              <div class="col">02-01-07</div>
            </div>
            <div class="row">
              <div class="col-5">Phone number</div>
              <div class="col-1">:</div>
              <div class="col">+27 658 057 987</div>
            </div>
            <div class="row">
              <div class="col-5">Location</div>
              <div class="col-1">:</div>
              <div class="col">Cape Town</div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
export default {};
</script>

<style scoped>
#about {
  padding-top: 10vh;
  min-height: 100vh;
  padding-bottom: 10vh;
}
#image {
  width: auto;
  aspect-ratio: 1;
  object-fit: cover;
  height: 200px;
}
</style>
