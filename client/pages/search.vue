<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <b-col cols="4" xl="2" lg="3" md="4" sm="4">
          <!-- Sidebar -->
        </b-col>
        <!-- Main Content -->
        <b-col col xl="10" lg="9" md="8" sm="8">
          <!-- <FeaturedProduct /> -->
          <div class="mainResults">
            <ul class="s-result-list">
              <template>
                <li class="s-result-item celwidget">
                  <div class="s-item-container">
                    <!-- Best Seller -->
                    <div class="bestSeller my-2">
                      <a href="#">Best Seller</a>
                    </div>
                    <div>
                      <div class="row">
                        <!-- Image -->
                        <b-col col sm="3" class="text-center">
                          <nuxt-link :to="`/products/${1}`">
                            <b-img class="prodImage" src="/img/anything.jpg" fluid></b-img>
                          </nuxt-link>
                        </b-col>
                        <b-col col sm="9">
                          <b-row>
                            <!-- Title and Date -->
                            <b-col>
                              <nuxt-link :to="`/products/${1}`" class="a-link-normal">
                                <h2 class="a-size-medium">
                                  Hand Sanitizer
                                  <span class="a-letter-space"></span>
                                  <span class="a-letter-space"></span>
                                  <span class="a-size-small a-color-secondary">Sep 3, 2020</span>
                                </h2>
                              </nuxt-link>
                            </b-col>
                          </b-row>
                          <!-- Author's name -->
                          <b-row>
                            <b-col>
                              <span class="a-size-small a-color-secondary">by</span>
                              <span class="a-size-small a-color-secondary">
                                <a href="#" class="a-link-normal a-text-normal">By Darya Ibrahim</a>
                              </span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col>
                              <span class="a-size-small">Ships to USA</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col col sm="7">
                              <div>
                                <!-- <b-link href="#">Hardcover</b-link> -->
                                <a href="" class="a-link-normal a-text-normal">Hardcover</a>
                              </div>
                              <!-- Price -->
                              <div>
                                <a href="#" class="a-link-normal a-text-normal">
                                  <span class="a-offscreen">$35</span>
                                  <span class="a-color-base sx-zero-spacing">
                                    <span class="sx-price sx-price-large">
                                      <span class="sx-price-currency">$</span>
                                      <span class="sx-price-whole">35</span>
                                      <sup class="sx-price-fractional">00</sup>
                                    </span>
                                  </span>
                                </a>
                                <span class="a-letter-space"></span>
                                <span class="a-size-base-plus a-color-secondary a-text-strike">
                                  $28.00
                                </span>
                              </div>

                              <div>
                                <!-- Audible Trail -->
                                <b-col cols="12" class="border-bottom pb-1 px-0">
                                  <span class="a-size-small a-color-secondary">Free with Audible trial</span>
                                </b-col>
                                <!-- Other Formats -->
                                <b-col cols="12" class="pt-1 px-0 a-size-small a-color-secondary">
                                  Other Formats:
                                  <span class="a-letter-space"></span>
                                  <a href="#" class="a-size-small a-link-normal a-text-normal">Audio CD</a>
                                </b-col>
                              </div>

                            </b-col>
                            <!-- Ratings -->
                            <b-col col sm="5">
                              <div class="a-row a-spacing-mini">
                                <!-- Star Ratings -->
                                <client-only>
                                  <star-rating
                                    :rating="3"
                                    :show-rating="false"
                                    :glow="1"
                                    :increment="0.5"
                                    :border-width="1"
                                    :rounded-corners="true"
                                    :read-only="true"
                                    :star-size="18"
                                    :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]"
                                  >
                                  </star-rating>
                                </client-only>
                              </div>
                            </b-col>
                          </b-row>
                        </b-col>
                      </div>
                    </div>
                  </div>
                </li>
              </template>
              <template>
                <li class="s-result-item celwidget">
                  <div class="s-item-container">
                    <div>
                      <div class="row">
                        <!-- Image -->
                        <b-col cols="12" class="col-sm-5 offset-sm-2 text-center text-dark">
                          <h3>
                            Sorry <strong><i class="far fa-frown h3"></i></strong>
                          </h3>
                          No Results found for the search term <strong class="text-warning h5">No found</strong> <br>
                          Please try with other search terms.
                        </b-col>
                      </div>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </b-col>
      </div>
    </div>
  </main>
</template>