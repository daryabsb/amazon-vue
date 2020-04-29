<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <nuxt-link to="/profile">
                      <span>Your Account</span>
                    </nuxt-link>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 class="a-spacing-medium a-spacing-top-medium">Your Addresses</h1>
              <!-- Message from Server -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{message}}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <nuxt-link
                      to="/address/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration:none;"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Add Address</h2>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- Address -->
                  <div
                    class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                    v-for="(address, index) in addresses"
                    :key="address.id"
                  >
                    <div class="a-box a-spacing-none normal-desktop-address-tile">
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h5>
                                  <!-- Address Fullname -->
                                  <b>{{address.fullname}}</b>
                                </h5>
                              </li>
                              <li>
                                <h5>
                                  <!-- Address Fullname -->
                                  <b>{{address.house_number}}</b>
                                </h5>
                              </li>
                              <!-- Address street address -->
                              <li>{{address.district}}</li>
                              <!-- Address city state zip code -->
                              <li>{{address.city}}, {{address.state}}, {{address.pincode}}</li>
                              <!-- Address country -->
                              <li>{{address.country.name}}</li>
                              <!-- Address Phone number -->
                              <li>Phone number: {{address.mobile}}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Delete Button -->
                      <div class="edit-address-desktop-link">
                        <a href="/address">Edit</a>
                        &nbsp; | &nbsp;
                        <a
                          href="/address"
                          @click="onDeleteAddresses(address.id, index)"
                        >Delete</a>
                        &nbsp; | &nbsp;
                        <!-- Set Address as Default -->
                        <a href="#">Set as Default</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
const baseApi = 'http://127.0.0.1:8000/api'
export default {
  async asyncData({ $auth }) {
    let relatedAddresses = await $auth.user.address

    return {
      addresses: relatedAddresses
    }
    console.log(this.$auth.user)
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    // async onDeleteAddresses(id, index) {
    //   try {
    //     let response = await this.$axios.$delete(
    //       `${baseApi}/address/addresses/${id}`
    //     )
    //       this.message = 'You have just deleted an address from the list!'
    //       this.addresses.splice(index, 1);
    //       await this.$auth.fetchUser();
    //   } catch (err) {
    //     consloe.log(err)
    //   }
    // },
    async onDeleteAddresses(id, index) {

    try {
      let response = await this.$axios.$delete(
        `${baseApi}/address/addresses/${id}`
      )

      if (response.status) {
        this.message = 'You have just deleted an address from the list!'
        this.products.splice(index, 1);
        await this.$auth.fetchUser()
      } 

    } catch (err) {
      console.log(err)
    }
    
  }
  }
}
</script>



