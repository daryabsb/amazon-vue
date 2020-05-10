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
  addProductToCart({ state, commit }, product ) {
    //   console.log(product)
    const cartProduct = state.cart.find((prod) => prod.id === product.id);

    if (!cartProduct) {
      commit("pushProductToCart", product);
     
    } else {
      // console.log(qty)
      commit("incrementProductQty", cartProduct);
    }
    commit("getCartApiUpdate", product);

    
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
  getCartApiUpdate(state, product) {

    state.cart.push(product)
    // const [cartProductResponse] = await Promise.all([product]);

    // cartProductsResponse.forEach((el) => {
    //   el.product_id.quantity = el.quantity;
    //   el.product_id.ordered = el.ordered;
    //   el.product_id.product = el.product;
    //   state.cart.push(el.product_id);
    //   // state.cart.push.push('quantity')

    //   state.cart.ordered = el.ordered;
    //   state.cart.product = el.product;
    // });
    state.cartLength = state.cart.length;
    // console.log(state.cart)
  },

  async pushProductToCart(state, {product, qty}) {
    try {
      let data = {
        product: product.id,
        quantity: qty,
      };
      // console.log(data)
      let productData = await this.$axios.post(
        "http://127.0.0.1:8000/api/order/carts/",
        data
      );

     
      
    } catch (err) {
      console.log(err);
    }

    // console.log()
    // state.cart.push(product)
  },

  async incrementProductQty(state, prod) {
    const newQty = parseInt(prod.quantity) + 1;
    console.log(newQty)
    try {
      console.log(state.cart)
      let data = {
        product: prod.id,
        quantity: prod.quantity + 1
      };
      console.log(data)
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
          state.cart.map(product => {
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
  removeProduct(state, product) {
    state.cartLength -= product.quantity;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1);
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
    state.cart.map(product => {
        // console.log(product);
      total += parseInt(product.price) * parseInt(product.quantity);
    });

    // console.log(total);

    return total;
  },
};
