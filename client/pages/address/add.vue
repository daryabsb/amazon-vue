<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>New Address</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Add a new address</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>
                  Or pick up your packages at your convenience from our self-service locations. To add an Amazon Pickup Point or Locker, click
                  <a
                    href="#"
                  >here</a>.
                </b>
              </div>
              <!-- Error Message -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b></b>
              </div>
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                  <!-- Country / Region -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Country/Region</label>
                    <select class="a-select-option"
                    v-model="country"
                    >
                      <option
                      v-for="country in countries"
                      :key="country.code"
                      >{{country.name}}</option>
                      <option></option>
                    </select>
                  </div>
                  <!-- Full name -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">House Number</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="houseNumber" />
                  </div>
                  <!-- Street Address -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">District</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%;"
                      placeholder="Street and number, P.O. box, c/o."
                      v-model="district"
                    />
                  </div>
                  <!-- City -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">City</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="city" />
                  </div>
                  <!-- State -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">State / Province / Region</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="state" />
                  </div>
                  <!-- Zip Code -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Zip Code</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="pinCode" />
                  </div>
                  <!-- Phone Number -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Phone Number</label>
                    <input type="text" class="a-input-text" style="width: 100%;" v-model="mobile" />
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      <span class="a-size-mini">May be used to assist delivery</span>
                    </div>
                  </div>
                  <div class="a-spacing-base a-spacing-top-medium">
                    <h3>Add delivery instructions</h3>
                  </div>
                  <!-- Delivery Instruction -->
                  <div class="a-spacing-top-medium">
                    <label
                      style="margin-bottom: 0px;"
                    >Do we need additional instructions to find this address?</label>
                    <textarea
                      placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"
                      style="height:6em; width: 100%;"
                      v-model="deliveInstructions"
                    ></textarea>
                  </div>

                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px;">Weekend delivery</label>
                    <a href="#">
                      <i class="fas fa-angle-down"></i> Which days can you receive packages?
                    </a>
                  </div>
                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Make sure your address is correct</b>
                    </span>
                  </div>
                  <div>
                    <span>If the address contains typos or other errors, your package may be undeliverable.</span>
                  </div>
                  <div class="a-spacing-top-small">
                    <span>
                      <a href="#">Tips for entering addresses</a>
                    </span>
                    <span>|</span>
                    <span>
                      <a href="#">APO/FPO address tips</a>
                    </span>
                  </div>
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text" @click="onAddAddress">Add address</span>
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>
<script>
const base = 'http://127.0.0.1:8000/api'
export default {
  async asyncData({$axios}) {
    try {
      let response = await $axios.$get(
        `https://restcountries.eu/rest/v2/all`
      );
    //  console.log(this.country.value)
      return {
        countries: response
      }
    
      } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      // fullName: '',
      country: 'IQ',
      mobile: '',
      pinCode: '',
      houseNumber: '',
      district: '',
      street: '',
      city: '',
      state: '',
      deliveInstructions: ''
    }
    
  },
  methods: {
    async onAddAddress() {
      try {
        let data = {
          // fullname: this.fullName,
          country: this.country,
          mobile: this.mobile,
          pincode: this.pinCode,
          house_number: this.houseNumber,
          district: this.district,
          street: this.street,
          city: this.city,
          state: this.state,
          deliver_instructions: this.deliveInstructions
        }
        // console.log(data)
        let response = await this.$axios.$post(
          `${base}/address/addresses/`,
          data
        )
        
        if (response) {
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>