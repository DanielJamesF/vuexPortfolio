<template>
  <!-- <carousel/> -->
  <div id="testimonials" class="row">
    <div class="col">
      <div>
        <h2>Testimonials</h2>
      </div>
      <br />
      <div
        id="carouselIndicators"
        class="carousel slide shadow"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            class="active bg-black"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            class="bg-black"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            class="bg-black"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="3"
            class="bg-black"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="4"
            class="bg-black"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/Joel.png"
              style="object-fit: cover"
              alt="Joel"
              id="image"
              class="rounded-circle"
            />
            <h5>Joel Mukanya</h5>
            <div id="comments">
              <p>
                Daniel is respectful and takes his studies seriously. Daniel has
                demonstrated a key grasp of the Web Design topics we have
                covered in class. He continues to be an excellent student. Your
                organization would benefit from his skills. Joel Mukanya- Coding
                Lecturer.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/Clayton.png"
              style="object-fit: cover"
              alt="Clayton"
              id="image"
              class="rounded-circle"
            />
            <h5>Clayton Adonis</h5>
            <div id="comments">
              <p>
                Daniel is an absolute delight to work with and he always makes
                any room he is in better.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/Muddathir.png"
              style="object-fit: cover"
              alt="Muddathir"
              id="image"
              class="rounded-circle"
            />
            <h5>Muddathir Dawood</h5>
            <div id="comments">
              <p>
                Daniel is a developer with potential to become something great
                in the future. It is a pleasure watching his skill grow with
                each project he is given and motivates me and other to do
                better. He will add an enormous amount of value to any team
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/Jared.png"
              style="object-fit: cover"
              alt="Jared"
              id="image"
              class="rounded-circle"
            />
            <h5>Jared Isaacs</h5>
            <div id="comments">
              <p>
                Daniel is an outgoing, hardworking, creative web developer. Who
                sets out to achieve his goals through perseverance and
                determination. As his colleague I see a bright future filled
                with prosperity being set in front of him, with his iron will to
                overcome any impediments that comes he way. As such he has the
                set skills to fulfill any task that will be given to him, making
                him a great asset to any business or company.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/Reagan1.jpg"
              style="object-fit: cover"
              alt="Reagan"
              id="image"
              class="rounded-circle"
            />
            <h5>Reagan Carolussen</h5>
            <div id="comments">
              <p>
                Daniel is a trustworthy, multi-talented individual that shows
                the ability to learn and grasp new concepts quickly. He is
                focused and works will with others. I highly recommend him to
                any team or organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '../components/carousel.vue';
export default {
  // components: {carousel}
};
</script>

<style>
#testimonials {
  min-height: 100vh;
  padding: 80px;
}
#image {
  aspect-ratio: 1;
  object-fit: cover;
  width: 20%;
  height: auto;
}
#comments {
  min-height: 200px;
}
h2 {
  font-size: 70px;
  text-shadow: 2px 2px grey;
}
</style>