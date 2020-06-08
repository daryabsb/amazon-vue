<template>
  <!-- BEGIN: Content-->
  <div class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row"></div>
      <div class="content-body">
        <!-- Dashboard Ecommerce Starts -->
        <section id="dashboard-ecommerce">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-primary p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-users text-primary font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">92.6k</h2>
                  <p class="mb-0">Subscribers Gained</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-success p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-credit-card text-success font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">97.5k</h2>
                  <p class="mb-0">Revenue Generated</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-2"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-danger p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-shopping-cart text-danger font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">36%</h2>
                  <p class="mb-0">Quarterly Sales</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-3"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-warning p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-package text-warning font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">97.5K</h2>
                  <p class="mb-0">Orders Received</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-end">
                  <h4 class="card-title">Revenue</h4>
                  <p class="font-medium-5 mb-0">
                    <i class="feather icon-settings text-muted cursor-pointer"></i>
                  </p>
                </div>
                <div class="card-content">
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-start">
                      <div class="mr-2">
                        <p class="mb-50 text-bold-600">This Month</p>
                        <h2 class="text-bold-400">
                          <sup class="font-medium-1">$</sup>
                          <span class="text-success">86,589</span>
                        </h2>
                      </div>
                      <div>
                        <p class="mb-50 text-bold-600">Last Month</p>
                        <h2 class="text-bold-400">
                          <sup class="font-medium-1">$</sup>
                          <span>73,683</span>
                        </h2>
                      </div>
                    </div>
                    <div id="revenue-chart"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-end">
                  <h4 class="mb-0">Goal Overview</h4>
                  <p class="font-medium-5 mb-0">
                    <i class="feather icon-help-circle text-muted cursor-pointer"></i>
                  </p>
                </div>
                <div class="card-content">
                  <div class="card-body px-0 pb-0">
                    <div id="goal-overview-chart" class="mt-75"></div>
                    <div class="row text-center mx-0">
                      <div
                        class="col-6 border-top border-right d-flex align-items-between flex-column py-1"
                      >
                        <p class="mb-50">Completed</p>
                        <p class="font-large-1 text-bold-700">786,617</p>
                      </div>
                      <div class="col-6 border-top d-flex align-items-between flex-column py-1">
                        <p class="mb-50">In Progress</p>
                        <p class="font-large-1 text-bold-700">13,561</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Browser Statistics</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Google Chrome</p>
                        <h4>73%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>
                          800
                          <i class="feather icon-arrow-up text-success"></i>
                        </span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="73"
                        aria-valuemin="73"
                        aria-valuemax="100"
                        style="width:73%"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Opera</p>
                        <h4>8%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>
                          -200
                          <i class="feather icon-arrow-down text-danger"></i>
                        </span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="8"
                        aria-valuemin="8"
                        aria-valuemax="100"
                        style="width:8%"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Firefox</p>
                        <h4>19%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>
                          100
                          <i class="feather icon-arrow-up text-success"></i>
                        </span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-2">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="19"
                        aria-valuemin="19"
                        aria-valuemax="100"
                        style="width:19%"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Internet Explorer</p>
                        <h4>27%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>
                          -450
                          <i class="feather icon-arrow-down text-danger"></i>
                        </span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-50">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="27"
                        aria-valuemin="27"
                        aria-valuemax="100"
                        style="width:27%"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8 col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Client Retention</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div id="client-retention-chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-end">
                  <h4>Sessions By Device</h4>
                  <div class="dropdown chart-dropdown">
                    <button
                      class="btn btn-sm border-0 dropdown-toggle px-0"
                      type="button"
                      id="dropdownItem1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Last 7 Days</button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownItem1">
                      <a class="dropdown-item" href="#">Last 28 Days</a>
                      <a class="dropdown-item" href="#">Last Month</a>
                      <a class="dropdown-item" href="#">Last Year</a>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="card-body pt-0">
                    <div id="session-chart" class="mb-1"></div>
                    <div class="chart-info d-flex justify-content-between mb-1">
                      <div class="series-info d-flex align-items-center">
                        <i class="feather icon-monitor font-medium-2 text-primary"></i>
                        <span class="text-bold-600 mx-50">Desktop</span>
                        <span>- 58.6%</span>
                      </div>
                      <div class="series-result">
                        <span>2%</span>
                        <i class="feather icon-arrow-up text-success"></i>
                      </div>
                    </div>
                    <div class="chart-info d-flex justify-content-between mb-1">
                      <div class="series-info d-flex align-items-center">
                        <i class="feather icon-tablet font-medium-2 text-warning"></i>
                        <span class="text-bold-600 mx-50">Mobile</span>
                        <span>- 34.9%</span>
                      </div>
                      <div class="series-result">
                        <span>8%</span>
                        <i class="feather icon-arrow-up text-success"></i>
                      </div>
                    </div>
                    <div class="chart-info d-flex justify-content-between mb-50">
                      <div class="series-info d-flex align-items-center">
                        <i class="feather icon-tablet font-medium-2 text-danger"></i>
                        <span class="text-bold-600 mx-50">Tablet</span>
                        <span>- 6.5%</span>
                      </div>
                      <div class="series-result">
                        <span>-5%</span>
                        <i class="feather icon-arrow-down text-danger"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card chat-application">
                <div class="card-header">
                  <h4 class="card-title">Chat</h4>
                </div>
                <div class="chat-app-window">
                  <div class="user-chats">
                    <div class="chats">
                      <div class="chat">
                        <div class="chat-avatar">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="right"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-2.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Cake sesame snaps cupcake gingerbread</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar mt-50">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="left"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-5.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Apple pie pie jujubes chupa chups muffin</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat">
                        <div class="chat-avatar">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="right"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-2.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Chocolate cake</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar mt-50">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="left"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-5.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Donut sweet pie oat cake dragée fruitcake</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat">
                        <div class="chat-avatar mt-50">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="right"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-2.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Liquorice chocolate bar jelly beans icing</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar mt-50">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="left"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-5.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Powder toffee tootsie roll macaroon cupcake.</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat">
                        <div class="chat-avatar">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="right"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-2.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Apple pie oat cake brownie cotton candy cupcake chocolate bar dessert.</p>
                          </div>
                        </div>
                      </div>
                      <div class="chat chat-left">
                        <div class="chat-avatar mt-50">
                          <a
                            class="avatar m-0"
                            data-toggle="tooltip"
                            href="#"
                            data-placement="left"
                            title
                            data-original-title
                          >
                            <img
                              src="/app-assets/images/portrait/small/avatar-s-5.jpg"
                              alt="avatar"
                              height="40"
                              width="40"
                            />
                          </a>
                        </div>
                        <div class="chat-body">
                          <div class="chat-content">
                            <p>Biscuit cake jujubes carrot cake topping sweet cake.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-footer">
                    <div class="card-body d-flex justify-content-around pt-0">
                      <input type="text" class="form-control mr-50" placeholder="Type your Message" />
                      <button type="button" class="btn btn-icon btn-primary">
                        <i class="feather icon-navigation"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between pb-0">
                  <h4 class="card-title">Customers</h4>
                  <div class="dropdown chart-dropdown">
                    <button
                      class="btn btn-sm border-0 dropdown-toggle px-0"
                      type="button"
                      id="dropdownItem3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Last 7 Days</button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownItem3">
                      <a class="dropdown-item" href="#">Last 28 Days</a>
                      <a class="dropdown-item" href="#">Last Month</a>
                      <a class="dropdown-item" href="#">Last Year</a>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="card-body py-0">
                    <div id="customer-chart"></div>
                  </div>
                  <ul class="list-group list-group-flush customer-info">
                    <li class="list-group-item d-flex justify-content-between">
                      <div class="series-info">
                        <i class="fa fa-circle font-small-3 text-primary"></i>
                        <span class="text-bold-600">New</span>
                      </div>
                      <div class="product-result">
                        <span>890</span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                      <div class="series-info">
                        <i class="fa fa-circle font-small-3 text-warning"></i>
                        <span class="text-bold-600">Returning</span>
                      </div>
                      <div class="product-result">
                        <span>258</span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                      <div class="series-info">
                        <i class="fa fa-circle font-small-3 text-danger"></i>
                        <span class="text-bold-600">Referrals</span>
                      </div>
                      <div class="product-result">
                        <span>149</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Dashboard Ecommerce ends -->
      </div>
    </div>
  </div>
  <!-- END: Content-->
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  head: {
    script: [
      // BEGIN: Dashboard Admin JS
      { src: "/app-assets/vendors/js/charts/apexcharts.min.js", body: true },
      { src: "/app-assets/js/scripts/pages/dashboard-ecommerce.js", body: true }
      // BEGIN Vendor JS
    ]
  }
};
</script>

<style>
.apexcharts-canvas {
  position: relative;
  user-select: none;
  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
}

/* scrollbar is not visible by default for legend, hence forcing the visibility */
.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
}
.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
.apexcharts-canvas.dark {
  background: #343f57;
}

.apexcharts-inner {
  position: relative;
}

.legend-mouseover-inactive {
  transition: 0.15s ease all;
  opacity: 0.2;
}

.apexcharts-series-collapsed {
  opacity: 0;
}

.apexcharts-gridline,
.apexcharts-text {
  pointer-events: none;
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: 0.15s ease all;
}
.apexcharts-tooltip.light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, 0.96);
}
.apexcharts-tooltip.dark {
  color: #fff;
  background: rgba(30, 30, 30, 0.8);
}
.apexcharts-tooltip * {
  font-family: inherit;
}

.apexcharts-tooltip .apexcharts-marker,
.apexcharts-area-series .apexcharts-area,
.apexcharts-line {
  pointer-events: none;
}

.apexcharts-tooltip.active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px;
}
.apexcharts-tooltip.light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd;
}
.apexcharts-tooltip.dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #333;
}

.apexcharts-tooltip-text-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  font-weight: 600;
  margin-left: 5px;
}

.apexcharts-tooltip-text-z-label:empty,
.apexcharts-tooltip-text-z-value:empty {
  display: none;
}

.apexcharts-tooltip-text-value,
.apexcharts-tooltip-text-z-value {
  font-weight: 600;
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0px;
  margin-right: 10px;
  border-radius: 50%;
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center;
}

.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {
  opacity: 1;
}
.apexcharts-tooltip-series-group.active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px;
}
.apexcharts-tooltip-series-group-hidden {
  opacity: 0;
  height: 0;
  line-height: 0;
  padding: 0 !important;
}
.apexcharts-tooltip-y-group {
  padding: 6px 0 5px;
}
.apexcharts-tooltip-candlestick {
  padding: 4px 8px;
}
.apexcharts-tooltip-candlestick > div {
  margin: 4px 0;
}
.apexcharts-tooltip-candlestick span.value {
  font-weight: bold;
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px;
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777;
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.apexcharts-xaxistooltip {
  opacity: 0;
  padding: 9px 10px;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae;
  transition: 0.15s ease all;
}

.apexcharts-xaxistooltip.dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.apexcharts-xaxistooltip:after {
  border-color: rgba(236, 239, 241, 0);
  border-width: 6px;
  margin-left: -6px;
}
.apexcharts-xaxistooltip:before {
  border-color: rgba(144, 164, 174, 0);
  border-width: 7px;
  margin-left: -7px;
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%;
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%;
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1;
}
.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae;
}

.apexcharts-xaxistooltip-bottom.dark:after {
  border-bottom-color: rgba(0, 0, 0, 0.5);
}
.apexcharts-xaxistooltip-bottom.dark:before {
  border-bottom-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1;
}
.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae;
}
.apexcharts-xaxistooltip-top.dark:after {
  border-top-color: rgba(0, 0, 0, 0.5);
}
.apexcharts-xaxistooltip-top.dark:before {
  border-top-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip.active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-yaxistooltip {
  opacity: 0;
  padding: 4px 10px;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae;
}

.apexcharts-yaxistooltip.dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.apexcharts-yaxistooltip:after {
  border-color: rgba(236, 239, 241, 0);
  border-width: 6px;
  margin-top: -6px;
}
.apexcharts-yaxistooltip:before {
  border-color: rgba(144, 164, 174, 0);
  border-width: 7px;
  margin-top: -7px;
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%;
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%;
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1;
}
.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae;
}
.apexcharts-yaxistooltip-left.dark:after {
  border-left-color: rgba(0, 0, 0, 0.5);
}
.apexcharts-yaxistooltip-left.dark:before {
  border-left-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1;
}
.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae;
}
.apexcharts-yaxistooltip-right.dark:after {
  border-right-color: rgba(0, 0, 0, 0.5);
}
.apexcharts-yaxistooltip-right.dark:before {
  border-right-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip.active {
  opacity: 1;
}
.apexcharts-yaxistooltip-hidden {
  display: none;
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: 0.15s ease all;
}

.apexcharts-xcrosshairs.active,
.apexcharts-ycrosshairs.active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0;
}

.apexcharts-zoom-rect {
  pointer-events: none;
}
.apexcharts-selection-rect {
  cursor: move;
}

.svg_select_points,
.svg_select_points_rot {
  opacity: 0;
  visibility: hidden;
}
.svg_select_points_l,
.svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible;
  fill: #888;
}
.apexcharts-canvas.zoomable .hovering-zoom {
  cursor: crosshair;
}
.apexcharts-canvas.zoomable .hovering-pan {
  cursor: move;
}

.apexcharts-xaxis,
.apexcharts-yaxis {
  pointer-events: none;
}

.apexcharts-zoom-icon,
.apexcharts-zoom-in-icon,
.apexcharts-zoom-out-icon,
.apexcharts-reset-zoom-icon,
.apexcharts-pan-icon,
.apexcharts-selection-icon,
.apexcharts-menu-icon,
.apexcharts-toolbar-custom-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center;
}

.apexcharts-zoom-icon svg,
.apexcharts-zoom-in-icon svg,
.apexcharts-zoom-out-icon svg,
.apexcharts-reset-zoom-icon svg,
.apexcharts-menu-icon svg {
  fill: #6e8192;
}
.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(0.76);
}

.dark .apexcharts-zoom-icon svg,
.dark .apexcharts-zoom-in-icon svg,
.dark .apexcharts-zoom-out-icon svg,
.dark .apexcharts-reset-zoom-icon svg,
.dark .apexcharts-pan-icon svg,
.dark .apexcharts-selection-icon svg,
.dark .apexcharts-menu-icon svg,
.dark .apexcharts-toolbar-custom-icon svg {
  fill: #f3f4f5;
}

.apexcharts-canvas .apexcharts-zoom-icon.selected svg,
.apexcharts-canvas .apexcharts-selection-icon.selected svg,
.apexcharts-canvas .apexcharts-reset-zoom-icon.selected svg {
  fill: #008ffb;
}
.light .apexcharts-selection-icon:not(.selected):hover svg,
.light .apexcharts-zoom-icon:not(.selected):hover svg,
.light .apexcharts-zoom-in-icon:hover svg,
.light .apexcharts-zoom-out-icon:hover svg,
.light .apexcharts-reset-zoom-icon:hover svg,
.light .apexcharts-menu-icon:hover svg {
  fill: #333;
}

.apexcharts-selection-icon,
.apexcharts-menu-icon {
  position: relative;
}
.apexcharts-reset-zoom-icon {
  margin-left: 5px;
}
.apexcharts-zoom-icon,
.apexcharts-reset-zoom-icon,
.apexcharts-menu-icon {
  transform: scale(0.85);
}

.apexcharts-zoom-in-icon,
.apexcharts-zoom-out-icon {
  transform: scale(0.7);
}

.apexcharts-zoom-out-icon {
  margin-right: 3px;
}

.apexcharts-pan-icon {
  transform: scale(0.62);
  position: relative;
  left: 1px;
  top: 0px;
}
.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2;
}
.apexcharts-pan-icon.selected svg {
  stroke: #008ffb;
}
.apexcharts-pan-icon:not(.selected):hover svg {
  stroke: #333;
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  top: 0px;
  right: 3px;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0px 6px 2px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.apexcharts-toolbar svg {
  pointer-events: none;
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: 0.15s ease all;
  pointer-events: none;
}

.apexcharts-menu.open {
  opacity: 1;
  pointer-events: all;
  transition: 0.15s ease all;
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer;
}
.light .apexcharts-menu-item:hover {
  background: #eee;
}
.dark .apexcharts-menu {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

@media screen and (min-width: 768px) {
  .apexcharts-toolbar {
    /*opacity: 0;*/
  }

  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1;
  }
}

.apexcharts-datalabel.hidden {
  opacity: 0;
}

.apexcharts-pie-label,
.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value {
  cursor: default;
  pointer-events: none;
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.apexcharts-canvas .hidden {
  opacity: 0;
}

.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-area-series
  .apexcharts-series-markers
  .apexcharts-marker.no-pointer-events,
.apexcharts-line-series
  .apexcharts-series-markers
  .apexcharts-marker.no-pointer-events,
.apexcharts-radar-series path,
.apexcharts-radar-series polygon {
  pointer-events: none;
}

/* markers */

.apexcharts-marker {
  transition: 0.15s ease all;
}

@keyframes opaque {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/*========================================================
        DARK LAYOUT
=========================================================*/
.chat-application .chat-app-window .user-chats {
  padding: 10px 20px;
  position: relative;
  text-align: center;
  height: 415px;
}
.chat-application .chat-app-window .user-chats .chats {
  padding: 0;
}
.chat-application .chat-app-window .user-chats .chats .chat-body {
  display: block;
  margin: 10px 30px 0 0;
  overflow: hidden;
}
.chat-application .chat-app-window .user-chats .chats .chat-body .chat-content {
  text-align: left;
  display: block;
  float: right;
  padding: 0.75rem 1rem;
  margin: 0 20px 10px 0;
  clear: both;
  color: #fff;
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.chat-application
  .chat-app-window
  .user-chats
  .chats
  .chat-body
  .chat-content
  p {
  margin: 0;
}
.chat-application .chat-app-window .user-chats .chats .chat-avatar {
  float: right;
}
.chat-application .chat-app-window .user-chats .chats .chat-left .chat-avatar {
  float: left;
}
.chat-application .chat-app-window .user-chats .chats .chat-left .chat-body {
  margin: 0;
}
.chat-application .chat-app-window .user-chats .chats .chat-left .chat-content {
  text-align: left;
  float: left;
  margin: 10px 10px 10px 20px;
  color: #626262;
  background: none;
  background-color: white;
  border: 1px solid #dae1e7;
}
.customer-info.list-group .list-group-item:last-child {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.customer-info.list-group .list-group-item .series-info i {
  top: 0;
  margin-right: 0.3rem;
}

.avg-sessions .progress {
  margin-top: 0.5rem;
}

.analytics-list.list-group .list-group-item {
  border: 0;
}
.analytics-list.list-group .list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.analytics-list.list-group .list-group-item .btn {
  display: none;
}
.analytics-list.list-group .list-group-item:hover .btn {
  display: inline-block;
}

.chart-dropdown .btn {
  font-size: 0.8rem;
  font-weight: 500;
}
.chart-dropdown .btn:after {
  left: 0;
  position: relative;
}

@media only screen and (max-width: 992px) and (min-width: 768px) {
  .analytics-list .float-left,
  .analytics-list .float-right {
    display: block;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  #dashboard-analytics .avatar .avatar-content,
  #statistics-card .avatar .avatar-content {
    padding: 0 !important;
  }
}
</style>
