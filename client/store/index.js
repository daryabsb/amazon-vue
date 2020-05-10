export const state = () => ({
  cart: [],
  prodQty: [],
  cartLength: 0,
  cartProdApi: [],
});

export const actions = {
  async nuxtServerInit({ state, commit }) {
    try {
      const allCart = await this.$axios.get(
        "http://127.0.0.1:8000/api/order/carts/"
      );
      //    console.log(allCart.data)
      // if(state.cartApi){
      commit("getCartApiFilled", allCart);
    } catch (err) {
      console.log(err);
    }

    // } else {
    // console.log('What the hell!')
    // }
  },

  // nuxtServerInit({state, commit}, {req}) {
  //     state.cart = []
  //     console.log(state.cart)
  //  },
  async addProductToCart({ state, commit }, { prod, qty }) {
    //   console.log(qty)
    const cartProduct = state.cart.find((product) => product.id === prod.id);

    if (!cartProduct) {

        try {
            let data = {
              product: prod.id,
              quantity: qty,
            };
            // console.log(data)
            let prodRes = await this.$axios.post(
              "http://127.0.0.1:8000/api/order/carts/",
              data
            );
            
            commit("getCartApiUpdate", prodRes);
            commit('incrementCartLength')
        
            //
          } catch (err) {
            console.log(err);
          }



    //   commit("pushProductToCart", { product: prod, qty: qty });
    //   console.log(addedItem)
    } else {
      commit("incrementProductQty", prod, qty);

     
      
      commit("getCartApiUpdate", prodRes);
    }

    // commit("getCartApiUpdate", prodRes);
    // commit("incrementCartLength");
  },
};

export const mutations = {
  async getCartApiFilled(state, allCart) {
    const [cartProductsResponse] = await Promise.all([allCart.data]);

    cartProductsResponse.forEach((el) => {
      el.product_id.quantity = el.quantity;
      el.product_id.ordered = el.ordered;
      el.product_id.product = el.product;
      el.product_id.cartId = el.id;
      state.cart.push(el.product_id);
      // state.cart.push.push('quantity')

      state.cart.ordered = el.ordered;
      state.cart.product = el.product;
    });
    state.cartLength = state.cart.length;
    // console.log(state.cartLength)
  },
  getCartApiUpdate(state, prodRes) {
    // console.log(prodRes.data)
    var prod = prodRes.data.product_id;

    prod.quantity = prodRes.data.quantity;
    prod.ordered = prodRes.data.ordered;
    prod.product = prodRes.data.product;
    prod.cartId = prodRes.data.id;
    prod.dateAdded = prodRes.data.date_added;
    state.cart.unshift(prod);

    console.log(state.cart)
    state.cartLength = state.cart.length;
  },

  async pushProductToCart(state, prodRes) {


    
    prodRes.data.product_id.cartId = prodRes.data.id;
    prodRes.data.product_id.quantity = qty;
    prodRes.data.product_id.ordered = prodRes.data.quantity;
    prodRes.data.product_id.totalPrice = prodRes.data.total_item_price;
    prodRes.data.product_id.dateAdded = prodRes.data.date_added;

    state.cart.unshift(prodRes.data.product_id);
    // console.log()
    // state.cart.push(product)
  },

  async incrementProductQty(state, prod, qty) {
    let indexOfProduct = state.cart.indexOf(prod);
    state.cart.splice(indexOfProduct, 1);

    try {
      let cartResponse = await this.$axios.get(
        "http://127.0.0.1:8000/api/order/carts/"
      );

      const [cartItems] = await Promise.all([cartResponse.data]);
      // console.log(qty)

      cartItems.forEach((el) => {
        // console.log(el.quantity)
        prod.cartId = el.id;
        prod.quantity = el.quantity;
      });
      // console.log(state.cart)
      let data = {
        product: prod.id,
        quantity: prod.quantity + parseInt(qty),
      };
      // console.log(data)
      await this.$axios.put(
        `http://127.0.0.1:8000/api/order/carts/${prod.cartId}/`,
        data
      );
    } catch (err) {
      console.log(err);
    }
  },

  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map((product) => {
        state.cartLength += product.quantity;
      });
    }
  },
  /*
      1. Find the product in the cart
      2. Change the quantity of the product
      3. Update length of the cart
      4. Replace the old product with the updated product
      */
  changeQty(state, { product, qty }) {
    let cartProduct = state.cart.find((prod) => prod.id === product.id);
    cartProduct.quantity = qty;

    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map((product) => {
        state.cartLength += product.quantity;
      });
    }

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },
  /*
      1. remove the product quantity from the cartLength
      get the index of the product that we delete
      3. remove that product by using splice
      */
  async removeProduct(state, product, cartId) {
    try {
      state.cartLength -= product.quantity;
      let indexOfProduct = state.cart.indexOf(product);
      state.cart.splice(indexOfProduct, 1);
      console.log(product.cartId);

      await this.$axios.delete(
        `http://127.0.0.1:8000/api/order/carts/${product.cartId}/`
      );
    } catch (err) {
      console.log(err);
    }

    // state.cartLength -= product.quantity;
    // let indexOfProduct = state.cart.indexOf(product);
    // state.cart.splice(indexOfProduct, 1);
  },
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    // console.log(state.cart);
    return state.cart;
  },
  getCartTotalPrice(state) {
    let total = 0;
    // console.log(state.cart.price);
    state.cart.map((product) => {
      // console.log(product);
      total += parseInt(product.price) * parseInt(product.quantity);
    });

    // console.log(total);

    return total;
  },
};
