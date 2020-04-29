<template>
  <!--MAIN-->
  <main>
    <!--REVIEW ADDRESS-->
    <div class="reviewPage mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="a-spacing-top-medium">
              <h1 class="a-spacing-base">
                <b>Create Review</b>
              </h1>
              <div class="row">
                <!-- Product Photo -->
                <div class="col-md-2 col-sm-3 col-3">
                  <img :src="product.image" style="width: 80px" />
                </div>
                <!-- Product Title -->
                <div class="col-md-10 col-sm-9 col-9 m-auto">
                  <h4>
                    <b>{{product.title}}</b>
                  </h4>
                </div>
              </div>
              <div class="a-spacing-top-medium"></div>
              <hr />
              <h2 class="a-spacing-base">Overall Rating</h2>
              <div class="a-row">
                <!-- Rating -->
                <client-only>
                  <star-rating v-model="rating"></star-rating>
                </client-only>
              </div>
              <div class="a-row a-spacing-top-large">
                <h2>Add photo or video</h2>
                <p
                  style="font-size: 14px; font-weight: 700;"
                >Shoppers find images and videos more helpful than text alone.</p>
              </div>
              <div class="a-row a-spacing-top-medium">
                <!-- Choose a Photo -->
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" @change="onFileSelected" />
                </label>
                <p>{{ fileName }}</p>
              </div>
              <div class="a-spacing-top-large"></div>
              <hr />

              <!-- Review -->
              <div class="a-spacing-base">
                <h2 class="a-spacing-base">Write your review</h2>
                <textarea
                  placeholder="What do you like or dislike? What did you see this product for?"
                  style="height:6em; width: 100%;"
                  v-model="review"
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div class="a-spacing-top-medium">
              <p
                style="font-size: 14px; font-weight: 700;"
              >This is how you'll appear to other customers:</p>
              <div class="media a-spacing-top-large">
                <div class="media-left">
                  <img :src="this.$auth.user.image" class="img-fluid" style="width: 50px;" />
                </div>
                <div class="media-body pl-3 pt-2">
                  <input
                    type="text"
                    class="a-input-text"
                    style="width: 100%;"
                    :value="this.$auth.user.name"
                  />
                </div>
              </div>
            </div>
            <div class="a-row a-spacing-top-medium">
              <span class="a-color-tertiary">Don't worry, you can always change this on your profile</span>
            </div>
            <div class="a-row text-right a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddReview">Submit</span>
                </span>
              </span>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="a-spacing-large pb-5"></div>
        <hr />
      </div>
    </div>
    <!--/REVIEW ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
import StarRating from 'vue-star-rating';
const base = 'http://127.0.0.1:8000/api';
export default {
  components: {
    StarRating
  },
   
  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(
        `${base}/product/products/${params.id}`
      )
      console.log(response)
      return {
        product: response
      }

      // console.log(product)
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      rating: 0,
      review: '',
      selectedFile: null,
      fileName: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      //   console.log(this.selectedFile);
      this.fileName = event.target.files[0].name
      //   console.log(this.fileName);
    },
    async onAddReview() {
      const id = this.product.slug
      
      let formData = new FormData()
        formData.append('rating', this.rating);
        formData.append('review', this.review);
        if(this.selectedFile){
          formData.append('image', this.selectedFile, this.fileName);
        }
        

      try {
       
        let result = await this.$axios.$post(
          `${base}/product/products/${id}/review/`,
          formData
        );

        // if (result) {
          console.log('SUCCESS')
          console.log(id)
          this.$router.push(`/products/${id}`)
        // }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>