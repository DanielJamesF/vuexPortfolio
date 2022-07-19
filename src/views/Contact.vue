<template>
  <div id="contact" class="container-fluid">
    <div>
        <h1 class="text-decoration-underline display-1">Contact...</h1>
    </div>
    <div class="row">
    <div>
      <h2>get in touch...</h2>
    </div>
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
          <div class="col-8">
            <input
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
          <div class="col-8">
            <input
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
          <div class="col-8">
            <textarea
            cols="50"
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
      <input type="submit" value="Submit" class="btn btn-outline-primary" />
    </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact{
    height: 100vh;
  padding-top: 8%;
  padding-bottom: 8%;

}
form {
  border: solid black 1px;
  padding: 0;
}
</style>