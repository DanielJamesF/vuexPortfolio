<template>
  <div id="about" class="container-fluid bg-dark text-light">
    <div class="about">
      <h1 class="text-decoration-underline display-4">About...</h1>
    </div>
    <br />
    <div id="row" class="row justify-content-center">
      <div class="col-7">
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
          <h2>bio...</h2>
        </div>
        <div>
          <p>
            I am a student at life Choices Academy where I am studying coding in
            order to become a Web Developer in the future. My passsion for
            coding stems from my love of technology and anything related to it.
            I am a hard worker and am able to work well in groups as I believe
            that I am able to get along with people pretty well.
          </p>
          <br />
          <div>
            <h2>hobbies...</h2>
          </div>
          <p>
            I enjoy playing soccer, whether it's eleven a side or five a side,
            listening to music, mostly rap however I do enjoy listing to other
            genres as well, reading manga, watching anime, and going out with
            friends, I esecially enjoy spending time with those that I am close
            with.
          </p>
        </div>
        <br>
        <div>
          <h2>other...</h2>
        </div>
        <div class="row">
          <div class="col">Date Of Birth</div>
          <div class="col">:</div>
          <div class="col">02-01-07</div>
        </div>
        <div class="row">
          <div class="col">Phone number</div>
          <div class="col">:</div>
          <div class="col">+27 658 057 987</div>
        </div>
        <div class="row">
          <div class="col">Location</div>
          <div class="col">:</div>
          <div class="col">Cape Town</div>
        </div>
        <br>
        <div>
          <h2>accounts...</h2>
        </div>
        <div class="row">
          <div class="col">
            <a href="https://github.com/DanielJamesF">Github</a>
          </div>
          <div class="col">
            <a href="https://www.linkedin.com/in/daniel-fredericks-85744023a/"
              >Linkedin</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  min-height: 100vh;
  padding-bottom: 8%;
  padding-top:10%;
}
#image {
  width: auto;
  aspect-ratio: 1;
  object-fit: cover;
  height: 200px;
}
</style>
