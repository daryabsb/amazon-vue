<template>
  <div class="a-row a-spacing-top-micro filterResultBar">
    <div id="FilterItemView_all_summary" class="a-column a-span8 filterSummaryBar">
      <div data-widgetid="100" class="a-row a-spacing-small filterItem">
        <div class="a-row a-spacing-micro">
          <span class="a-text-bold"></span>
        </div>

        <span>Showing 1-48 of 421 results for</span>

        <span class="a-text-bold">3 Availability Options</span>

        <span class="a-text-bold"></span>

        <span class="a-declarative" data-action="gbfilter-clear-all" data-gbfilter-clear-all="{}">
          <a
            aria-label="Clear filters"
            class="a-link-normal a-text-bold"
            title="Clear filters"
            href="#"
          >
            &nbsp;
            <i
              data-value="[object Object]"
              class="a-icon a-icon-close a-icon-medium aok-align-center"
              role="img"
              aria-label="Clear filters"
            ></i>
          </a>
        </span>
      </div>
    </div>

    <div id="FilterItemView_sortOrder_dropdown" class="a-column a-span4 a-text-right a-span-last">
      <div data-widgetid="100" class="a-row a-spacing-small filterItem">
        <div class="a-row a-spacing-micro">
          <span class="a-text-bold"></span>
        </div>

        <span class="a-size-base">Sort by&nbsp;&nbsp;</span>
        <span
          class="a-declarative"
          data-action="gbfilter-dropdown"
          data-gbfilter-dropdown="{&quot;attribute&quot;:&quot;sortOrder&quot;}"
        >
          <span class="a-dropdown-container">
            <select
              name="sortOptions"
              autocomplete="off"
              id="dropdown-049934464110418464"
              tabindex="-1"
              class="a-native-dropdown a-declarative"
              aria-pressed="true"
            >
              <option value="BY_SCORE" selected>Featured</option>

              <option value="BY_PRICE_ASCENDING">Price - Low to High</option>

              <option value="BY_PRICE_DESCENDING">Price - High to Low</option>

              <option value="BY_DISCOUNT_ASCENDING">Discount - Low to High</option>

              <option value="BY_DISCOUNT_DESCENDING">Discount - High to Low</option>
            </select>
            <span
              tabindex="-1"
              data-a-class="sortOrderDropdown"
              class="a-button a-button-dropdown a-button-small sortOrderDropdown"
              style="min-width: 0%;"
            >
              <span class="a-button-inner">
                <span
                  class="a-button-text a-declarative"
                  data-action="a-dropdown-button"
                  role="button"
                  tabindex="0"
                  aria-hidden="true"
                >
                  <span class="a-dropdown-prompt">Featured</span>
                </span>
                <i class="a-icon a-icon-dropdown"></i>
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>




