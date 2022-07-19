<template>
  <div id="contact" class="container-fluid">
    <div class="row p-1">
      <div class="col">
        <h1 class="text-decoration-underline display-1">Contact...</h1>
        <div class="row">
          <h2>get in touch...</h2>
          <div class="col">
            <form
              class="rounded p-4"
              id="fs-frm"
              name="simple-contact-form"
              accept-charset="utf-8"
              action="https://formspree.io/f/xdobpjrz"
              method="post"
            >
              <br />
              <fieldset id="fs-frm-inputs">
                <div class="row">
                  <div class="col">
                    <label for="full-name">Full Name</label>
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      id="full-name"
                      placeholder="Name Surname"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col">
                    <label for="email-address">Email Address</label>
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="email"
                      name="_replyto"
                      id="email-address"
                      placeholder="email@gmail.com"
                    />
                  </div>
                </div>
                <br />
                <div class="row justify-content-center">
                  <label for="message">Message</label>
                  <div class="col">
                    <textarea
                      class="form-control"
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Enter message"
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    name="_subject"
                    id="email-subject"
                    value="Contact Form Submission"
                  />
                </div>
              </fieldset>
              <br />
              <input
                type="submit"
                value="Submit"
                class="btn btn-outline-primary"
              />
            </form>
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
#contact {
  height: 100vh;
  padding-top: 8%;
  padding-bottom: 8%;
}
form {
  border: solid black 1px;
  padding: 0;
}

textarea {
  width: 100%;
}
</style>