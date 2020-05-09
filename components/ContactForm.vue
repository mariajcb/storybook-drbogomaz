<template lang="html">
  <div class="container">
    <form v-if="!status" @submit="sendForm">
      <h1 class="title">Contact Me</h1>
      <p class="subtitle">Please use this form for general information purposes only. DO NOT send personal health information through this form. Specific client care will be addressed during your appointment. If this is an emergency, please call 911.</p>

      <div class="field">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <label class="label">Name</label>
          <div class="control">
            <input
              required
              :class=" errors[0] ? 'input is-danger' : 'input' "
              v-model="name"
              name="name"
              type="text"
              placeholder="Type your name here">
          </div>
          <p class="help is-danger">{{ errors[0] }}</p>
        </ValidationProvider>
      </div>

      <div class="field">
        <ValidationProvider rules="required" v-slot="{ errors }">
        <label class="label">Phone</label>
        <div class="control">
          <input
            required
            :class=" errors[0] ? 'input is-danger' : 'input' "
            v-model="phone"
            name="phone"
            type="text"
            placeholder="(xxx)xxx-xxxx">
        </div>
          <p class="help is-danger">{{ errors[0] }}</p>
        </ValidationProvider>
      </div>

      <div class="field">
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <label class="label">Email</label>
          <div class="control">
            <input
              required
              :class=" errors[0] ? 'input is-danger' : 'input' "
              v-model="email"
              name="email"
              type="email"
              placeholder="youremail@domain.com">
          </div>
          <p class="help is-danger">{{ errors[0] }}</p>
        </ValidationProvider>
      </div>

      <div class="field">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              required
              :class=" errors[0] ? 'textarea is-danger' : 'textarea' "
              v-model="message"
              type="textarea"
              name="message"
              placeholder="Leave a message...">
            </textarea>
          </div>
          <p class="help is-danger">{{ errors[0] }}</p>
        </ValidationProvider>
      </div>
      <button type="submit" class="button is-success">Submit</button>
    </form>
    <h2 v-if="status === 'success'">Thank you, we got your submission!</h2>
    <h2 v-if="status === 'error'">
      Oops, something went wrong. Please try again.
    </h2>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'ContactForm',
  data: function() {
    return {
      status: null,
      name: null,
      phone: null,
      email: null,
      message: null
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
    sendForm: function(event) {
      event.preventDefault()
      fetch('https://formcarry.com/s/mskpCnP2jVxt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          phone: this.phone,
          email: this.email,
          message: this.message })
      })
        .then(response => response.json())
        .then(response => {
          if (response.code === 200) {
            this.status = 'success'
          } else {
            // Formcarry error
            this.status = 'error'
          }
        })
        // network error
        .catch(() => (this.status = 'error'))
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 60px;
}
</style>
