<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
          <!-- <div v-if="$auth.loggedIn">{{$auth.user.name}}</div> -->
          <!-- NEW SIDEBAR -->

          <div class="qodef-column2">
            <div class="qodef-column-inner">
              <aside class="qodef-sidebar">
                <div class="widget woocommerce widget_price_filter">
                  <h4>Filter by price</h4>
                  <form
                    method="get"
                    action="https://suprema.qodeinteractive.com/product-category/men/men.html"
                  >
                    <div class="price_slider_wrapper">
                      <div
                        class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        style
                      >
                        <div
                          class="ui-slider-range ui-widget-header ui-corner-all"
                          style="left: 0%; width: 100%;"
                        ></div>
                        <span
                          class="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                          style="left: 0%;"
                        ></span>
                        <span
                          class="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                          style="left: 100%;"
                        ></span>
                      </div>
                      <div class="price_slider_amount">
                        <input
                          type="text"
                          id="min_price"
                          name="min_price"
                          value
                          data-min="35"
                          placeholder="Min price"
                          style="display: none;"
                        />
                        <input
                          type="text"
                          id="max_price"
                          name="max_price"
                          value
                          data-max="540"
                          placeholder="Max price"
                          style="display: none;"
                        />
                        <button type="submit" class="button">Filter</button>
                        <div class="price_label" style>
                          Price:
                          <span class="from">$35</span> —
                          <span class="to">$540</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="widget woocommerce widget_product_search">
                  <h4>Search The Store</h4>
                  <form
                    role="search"
                    method="get"
                    class="woocommerce-product-search"
                    action="https://suprema.qodeinteractive.com/"
                  >
                    <label
                      class="screen-reader-text"
                      for="woocommerce-product-search-field"
                    >Search for:</label>
                    <input
                      type="search"
                      id="woocommerce-product-search-field"
                      class="search-field"
                      placeholder="Search Products…"
                      value
                      name="s"
                      title="Search for:"
                    />
                    <input type="submit" value="U" />
                    <input type="hidden" name="post_type" value="product" />
                  </form>
                </div>
                <div class="widget woocommerce widget_product_categories">
                  <h4>Product Categories</h4>
                  <ul class="product-categories">
                    <li class="cat-item cat-item-60">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/accessories/"
                      >Accessories</a>
                      <span class="count">(6)</span>
                    </li>
                    <li class="cat-item cat-item-51">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/essentials/"
                      >Essentials</a>
                      <span class="count">(12)</span>
                    </li>
                    <li class="cat-item cat-item-47">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/headphones-earphones/"
                      >Headphones &amp; Earphones</a>
                      <span class="count">(12)</span>
                    </li>
                    <li class="cat-item cat-item-61 current-cat">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/men.html"
                      >Men</a>
                      <span class="count">(7)</span>
                    </li>
                    <li class="cat-item cat-item-57">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/new-collection/"
                      >New Collection</a>
                      <span class="count">(8)</span>
                    </li>
                    <li class="cat-item cat-item-24">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/premium-collection/"
                      >Premium Collection</a>
                      <span class="count">(12)</span>
                    </li>
                    <li class="cat-item cat-item-59">
                      <a href="https://suprema.qodeinteractive.com/product-category/shoes/">Shoes</a>
                      <span class="count">(8)</span>
                    </li>
                    <li class="cat-item cat-item-56">
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/sportswear/"
                      >Sportswear</a>
                      <span class="count">(13)</span>
                    </li>
                    <li class="cat-item cat-item-58">
                      <a href="https://suprema.qodeinteractive.com/product-category/women/">Women</a>
                      <span class="count">(10)</span>
                    </li>
                  </ul>
                </div>
                <div class="widget woocommerce widget_layered_nav">
                  <h4>Color</h4>
                  <ul>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_color=37"
                      >Black</a>
                      <span class="count">(3)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_color=38"
                      >Blue</a>
                      <span class="count">(5)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_color=40"
                      >Gold</a>
                      <span class="count">(2)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_color=41"
                      >Gray</a>
                      <span class="count">(1)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_color=39"
                      >White</a>
                      <span class="count">(2)</span>
                    </li>
                  </ul>
                </div>
                <div class="widget woocommerce widget_layered_nav">
                  <h4>Size</h4>
                  <ul>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_size=45"
                      >Extra Large</a>
                      <span class="count">(2)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_size=44"
                      >Large</a>
                      <span class="count">(4)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_size=43"
                      >Medium</a>
                      <span class="count">(2)</span>
                    </li>
                    <li>
                      <a
                        href="https://suprema.qodeinteractive.com/product-category/men/?filter_size=55"
                      >One Size</a>
                      <span class="count">(3)</span>
                    </li>
                  </ul>
                </div>
                <div class="widget woocommerce widget_products">
                  <h4>Recently Viewed</h4>
                  <ul class="product_list_widget">
                    <li>
                      <div class="qodef-product-list-widget-image-wrapper">
                        <a
                          href="https://suprema.qodeinteractive.com/product/elastic-panel-sneakers/"
                          title="Elastic Panel Sneakers"
                        >
                          <img
                            width="100"
                            height="108"
                            src="/wp-content/uploads/2016/01/shop-masonry-image-4-100x108.jpg"
                            class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div class="qodef-product-list-widget-info-wrapper">
                        <div class="qodef-product-list-category">
                          <a
                            href="https://suprema.qodeinteractive.com/product-category/premium-collection/"
                            rel="tag"
                          >Premium Collection</a>
                        </div>
                        <div class="qodef-product-list-widget-title">
                          <a
                            href="https://suprema.qodeinteractive.com/product/elastic-panel-sneakers/"
                            title="Elastic Panel Sneakers"
                          >
                            <span class="qodef-product-title">Elastic Panel Sneakers</span>
                          </a>
                        </div>
                        <div class="qodef-product-list-widget-price-wrapper">
                          <span class="amount">$99.00</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="qodef-product-list-widget-image-wrapper">
                        <a
                          href="https://suprema.qodeinteractive.com/product/metallic-oxford-sandals/"
                          title="Metallic Oxford Sandals"
                        >
                          <img
                            width="100"
                            height="108"
                            src="/wp-content/uploads/2016/01/shop-masonry-image-10-100x108.jpg"
                            class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div class="qodef-product-list-widget-info-wrapper">
                        <div class="qodef-product-list-category">
                          <a
                            href="https://suprema.qodeinteractive.com/product-category/premium-collection/"
                            rel="tag"
                          >Premium Collection</a>
                        </div>
                        <div class="qodef-product-list-widget-title">
                          <a
                            href="https://suprema.qodeinteractive.com/product/metallic-oxford-sandals/"
                            title="Metallic Oxford Sandals"
                          >
                            <span class="qodef-product-title">Metallic Oxford Sandals</span>
                          </a>
                        </div>
                        <div class="qodef-product-list-widget-price-wrapper">
                          <del>
                            <span class="amount">$135.00</span>
                          </del>
                          <ins>
                            <span class="amount">$89.00</span>
                          </ins>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="qodef-product-list-widget-image-wrapper">
                        <a
                          href="https://suprema.qodeinteractive.com/product/cameo-white-35a/"
                          title="Cameo White 35A"
                        >
                          <img
                            width="100"
                            height="108"
                            src="/wp-content/uploads/2016/01/shop-product-image-3-100x108.jpg"
                            class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div class="qodef-product-list-widget-info-wrapper">
                        <div class="qodef-product-list-category">
                          <a
                            href="https://suprema.qodeinteractive.com/product-category/headphones-earphones/"
                            rel="tag"
                          >Headphones &amp; Earphones</a>
                        </div>
                        <div class="qodef-product-list-widget-title">
                          <a
                            href="https://suprema.qodeinteractive.com/product/cameo-white-35a/"
                            title="Cameo White 35A"
                          >
                            <span class="qodef-product-title">Cameo White 35A</span>
                          </a>
                        </div>
                        <div class="qodef-product-list-widget-price-wrapper">
                          <span class="amount">$315.00</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>

          <!-- SIDEBAR END -->
          <!-- <div v-else>Not logged in</div> -->
          <!-- Sidebar -->
        </div>
        <!-- Main Content -->
        <div class="col-xl-10 col-lg-9 md8 col-sm-8">
          <FeaturedProduct />

          <div class="mainResults">
            <ul class="s-result-list">
              <li class="s-result-item celwidget" v-for="product in products" :key="product.id">
                <div class="s-item-container">
                  <!-- Best Seller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Best Seller</a>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <!-- Image -->
                      <div class="col-sm-3 text-center">
                        <a href="#">
                          <img
                            :src="product.image"
                            class="img-fluid"
                            alt="best-photo"
                            style="width: 140px;"
                          />
                        </a>
                      </div>
                      <div class="col-sm-9">
                        <div class="a-row a-spacing-smal">
                          <!-- Title & Date -->
                          <nuxt-link :to="`/products/${product.slug}`" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{product.title}}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary">Sep 3, 2019</span>
                            </h2>
                          </nuxt-link>
                          <!-- Author's Name -->
                          <div class="a-row a-spacing-small">
                            <span class="a-size-small a-color-secondary">By</span>
                            <span class="a-size-small a-color-secondary">
                              <a
                                href="#"
                                class="a-link-normal a-text-normal"
                              >{{product.user['name']}}</a>
                            </span>
                          </div>
                          <!-- Shipment -->
                          <div class="a-row">
                            <span class="a-size-small">Ships to USA</span>
                          </div>
                          <div class="row">
                            <div class="col-sm-7">
                              <div class="a-row a-spacing-none">
                                <a href="#" class="a-link-normal a-text-normal">Hardcover</a>
                              </div>
                              <!-- Price -->
                              <div class="a-row a-spacing-none">
                                <a href="#" class="a-link-normal text-normal">
                                  <span class="a-offscreen">${{product.price}}</span>
                                  <span class="a-color-base sx-zero-spacing">
                                    <span class="sx-price sx-price-large">
                                      <sup class="sx-price-currency">$</sup>
                                      <span class="sx-price-whole">{{product.price}}</span>
                                      <sup class="sx-price-fractional">99</sup>
                                    </span>
                                  </span>
                                </a>
                                <span class="a-letter-space"></span>
                                <span
                                  class="a-size-base-plus a-color-secondary a-text-strike"
                                >$28.00</span>
                              </div>
                              <!-- Audible Trial -->
                              <div class="a-row a-spacing-none">
                                <span class="a-size-small a-color-secondary">Free with Audible Trial</span>
                              </div>
                              <hr />

                              <!-- Other Formats -->
                              <span class="a-size-small a-color-secondary">
                                Other Formats:
                                <span class="a-letter-space"></span>
                                <a
                                  href="#"
                                  class="a-size-small a-link-normal a-text-normall"
                                >Audio Cd</a>
                              </span>
                            </div>
                            <!-- Rating -->
                            <div class="col-sm-5">
                              <div class="a-row a-spacing-mini">
                                <!-- Star Ratings -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from '~/components/FeaturedProduct'
export default {
  components: {
    FeaturedProduct
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get(
        'http://127.0.0.1:8000/api/product/products/'
      )

      // console.log(response)

      return {
        products: response
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
.qodef-two-columns-75-25 .qodef-column2 {
  width: 25%;
  float: left;
}
</style>
