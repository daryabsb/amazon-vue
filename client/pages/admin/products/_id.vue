<template>
  <main>
    <div class="cointainer-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new product</h2>
            <form>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label for>Category</label>
                <select class="a-select-option">
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                    :selected="selectedCategory(category.id)"
                  >{{category.name}}</option>
                </select>
              </div>
              <!-- Category Tags -->
              <div class="a-spacing-top-medium">
                <label for>Tags</label>
                <select class="a-select-option">
                  <option
                  desabled 
                  v-for="tag in tags"
                  :key="tag.id" 
                  :value="tag.id"
                  :selected="selectedTag(tag.id)"
                  >{{tag.name}}</option>
                </select>
              </div>
              <!-- Titel Text -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 8px;" for="title">Title</label>
                <input type="text" class="a-input-text" style="width: 100%;" v-model="productTitle" :placeholder="product.title" />
              </div>
              <!-- Description Text -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 8px;" for="description">Description</label>
                <textarea type="text" 
                rows="25" class="a-input-text" 
                style="width: 100%;" 
                v-model="productDescription"
                :placeholder="product.description"
                ></textarea>
              </div>
              <!-- Stock Text -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 8px;" for="stock">Stock</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%;"
                  v-model="productStock"
                  :placeholder="product.stock"
                />
              </div>
              <!-- Price Text -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 8px;" for="price">Price</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%;"
                  v-model="productPrice"
                  :placeholder="product.price"
                />
              </div>
              <!-- Featured Label -->
                <div class="a-spacing-top-medium">
                  <label for="ap_customer-supplier" class="a-form-label">Label as featured product:</label>
                  <input
                    type="checkbox"
                    id="ap_featured_product"
                    class="a-checkbox-label a-radio-label"
                    v-model="productFeatured"
                  />
                </div>
              <!-- Photo file -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 8px;" for="price">Image</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px;">{{ fileName }}</p>
                  </label>
                </div>
              </div>
              <hr />
              <div class="row">
                
                <!-- Update Button -->
                <div class="col-sm-3 col-3">
                  <span class="a-button-register">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onUpdateProduct">Update Product</span>
                    </span>
                  </span>
                </div>
                <!-- Delete Button -->
                <div class="col-sm-3 col-3">
                  <span class="a-button-register">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onDeleteProduct">Delete Product</span>
                    </span>
                  </span>
                </div>
                 <!-- Home Button -->
                <div class="col-sm-3 col-3">
                  <span class="a-button-register">
                    <span class="a-button-inner">
                      <a href="/" class="a-button-text">Backe to Home</a>
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
  </main>
</template>

<script>
var product = [];
export default {
  
  async asyncData({ $axios, params }) {
    try {
      let categories = $axios.$get('/product/categories/')
      let tags = $axios.$get('/product/tags/')
      product = $axios.$get(`/product/products/${ params.id }`)

      const [catResponse, tagResponse, productResponse] = await Promise.all([categories, tags, product])

      // console.log(catResponse);
      // console.log(tagResponse);
      // console.log(productResponse);

      return {
        categories: catResponse,
        tags: tagResponse,
        product: productResponse
      }
    } catch (err) {
      console.log(err)
      console.log('Please check that your api server is running!')
    }

  },
  data() {
    return {
      categoryID: '',
      tagID: [],
      productTitle: '',
      productDescription: '',
      productStock: product.stock,
      productPrice: null,
      productFeatured: false,
      selectedFile: null,
      fileName: ''
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      //   console.log(this.selectedFile);
      this.fileName = event.target.files[0].name
      //   console.log(this.fileName);
    },
    async onUpdateProduct() {
      
      
      // console.log('tags', this.tagID);
      const id = this.product.slug;
      try {
      console.log({
        'product': this.productDetail,
        "title": this.productTitle,
        "description": this.productDescription,
        'category': this.categoryID,
        "tags": this.tagID,
        "featured": this.productFeatured,
        "stock": this.productStock,
        "price": this.productPrice,
        "image": (this.selectedFile, this.fileName)
        });

     let formData = new FormData()
        formData.append("title", this.productTitle);
        formData.append("description", this.productDescription);
        formData.append('category', this.categoryID);
        formData.append("tags", this.tagID);
        formData.append("featured", this.productFeatured);
        formData.append("stock", this.productStock);
        formData.append("price", this.productPrice);
        formData.append("image", this.selectedFile, this.fileName);

        
      
      
        let result = await this.$axios.$put(`/product/products/${ id }/`, formData)
        console.log("SUCCESS");
        this.$router.push('/')
      } catch (err) {
        console.log('Cannot access the api!')
        console.log(err)
      }
    },
    async onDeleteProduct() {
      // console.log('tags', this.tagID);
      const id = this.product.id;
      try {
        let result = await this.$axios.$delete(`/product/products/${ id }/`)
        console.log("SUCCESS");
        this.$router.push('/')
      } catch (err) {
        console.log('Cannot access the api!')
        console.log(err)
      }
    },
    selectedCategory (catID) {
      // `this` points to the vm instance
      return this.categoryID = catID
    },
    selectedTag (tid) {
      // `this` points to the vm instance
      return this.tagID = tid
    }
  }
}
</script>