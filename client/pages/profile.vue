<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" style="text-align: center"></div>
          <h2>Update Profile</h2>
          <a href="#" @click="onLogout">Logout</a>
          <form>
            <!-- Name -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%;"
                v-model="name"
                :placeholder="name"
              />
            </div>
            <!-- Email -->
            <div class="a-spacing-top-medium">
              <label>Email</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%;"
                v-model="email"
                :placeholder="email"
              />
            </div>
            <!-- Address -->
            <div class="a-spacing-top-medium">
              <label>Address</label>
              <textarea
                type="text"
                class="a-input-text"
                style="width: 100%;"
                
                :placeholder="Address"
              />
            </div>
            <!-- Password -->
            <div class="a-spacing-top-medium">
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
            <!-- Supplier Label -->
            <div class="a-spacing-top-medium">
              <label for="ap_customer-supplier" class="a-form-label">Suppllier Status</label>
              <input
                type="checkbox"
                id="ap_customer_supplier"
                class="a-checkbox-label a-radio-label"
                v-model="is_supplier"
                :value="is_supplier"
              />
            </div>
            <hr />
            <!-- Button -->
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                </span>
              </span>
            </div>
          </form>
          <div class="a-spacing-top-medium" style="text-align: center"></div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

  data() {
    return {
      name: this.$auth.user.name,
      email: this.$auth.user.email,
      address: this.$auth.user.address,
      password: this.$auth.user.password,
      is_supplier: this.$auth.user.is_supplier
    }
  },
  methods: {
    async onUpdateProfile() {
      let formData = new FormData()
      formData.append('email', this.email)
      formData.append('name', this.name)
      formData.append('password', this.password)
      formData.append('is_supplier', this.is_supplier)

        console.log(formData)

      try {
        let response = await this.$axios.$put(
          'http://127.0.0.1:8000/api/users/me/',
          formData
        )
        console.log('SUCCESS')

        if (response) {
        //   this.name = ''
        //   this.email = ''
        //   this.password = ''

          await this.$auth.fetchUser()
        }
      } catch (err) {
        console.log(err)
      }
    },
    async onLogout() {
        await this.$auth.logout()
    }
  }
}
</script>