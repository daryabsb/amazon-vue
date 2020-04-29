<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <nuxt-link to="/">
              <img src="/img/logo-black.png" />
            </nuxt-link>
          </div>

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Create Account</h1>
                <!-- Your Name -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer-name" class="a-form-label">Your name</label>
                  <input
                    type="text"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="name"
                  />
                </div>
                <!-- Your Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer-email" class="a-form-label">Email:</label>
                  <input
                    type="email"
                    id="ap_customer_email"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="email"
                  />
                </div>
                <!-- Password -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer-password" class="a-form-label">Password:</label>
                  <input
                    type="password"
                    id="ap_customer_password"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="password"
                  />
                  <div class="a-alert-container">
                    <div class="a-alert-content">
                      <p>
                        - Your password can’t be too similar to your other
                        personal information.
                      </p>
                      <p>- Your password must contain at least 8 characters.</p>
                      <p>- Your password can’t be a commonly used password.</p>
                      <p>- Your password can’t be entirely numeric.</p>
                    </div>
                  </div>
                </div>
                <!-- Password Confirmation -->
                <!-- <div class="a-row a-spacing-base">
                  <label for="ap_customer-name" class="a-form-label">Password Confirmation:</label>
                  <input
                    type="password"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                  />
                  <div class="a-alert-container">
                      <div class="a-alert-content">
                        <p>- Enter the same password as before, for verification.</p>
                      </div>
                  </div>
                </div>-->
                <!-- Supplier Label -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer-supplier" class="a-form-label">Are you a Suppllier:</label>
                  <input
                    type="checkbox"
                    id="ap_customer_supplier"
                    class="a-checkbox-label a-radio-label"
                    v-model="is_supplier"
                  />
                </div>
                <!-- Signup Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignup">Create your amazon account</span>
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      By creating an account, you agree to Amazon's
                      <a href="#">Conditions of use</a> and
                      <a href="#">Privacy Policy</a>
                    </b>
                  </div>
                </div>
                <hr />
                <div class="a-row">
                  <b>
                    Already have an account?
                    <nuxt-link to="/login" class="a-link-emphasis">Sign in</nuxt-link>
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  layout: 'none',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      is_supplier: false
    }
  },
  methods: {
    async onSignup() {
      try {
        let data = {
          email: this.email,
          password: this.password,
          name: this.name,
          is_supplier: this.is_supplier
        }
        console.log(data)
        let response = await this.$axios.$post(
          'http://127.0.0.1:8000/api/users/create/',
          data
        )
        if (response.status) {
          console.log(response.status)
        }
        
        let loginfo = this.$auth.loginWith('local', {
          data: data
        })

        console.log(loginfo)

        // console.log('CREATED!')
        this.$router.push('/')
        // console.log('PUSHED')
      } catch (err) {
        console.log(err)
      }
    },
    async userLogin(cur_email, cur_password) {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            email: cur_email,
            password: cur_password
          }
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>