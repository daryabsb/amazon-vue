export const state = () => ({
  cart: [],
  cartLength: 0,
});

export const actions = {
  async nuxtServerInit({ state, commit }) {

    try {

      const allCart = await this.$axios.get(
        "http://127.0.0.1:8000/api/order/carts/"
      );
      
      commit("getCartApiFilled", allCart);
      

    } catch (err) {
      console.log(err);
    }
    
  },
  
  async addProductToCart({ state, commit }, { prod, qty }) {
      
    const cartProduct = state.cart.find((product) => product.id === prod.id);
    
    
    if (!cartProduct) {
      try {

        let data = {
          product: prod.id,
          quantity: qty,
        };

        let prodRes = await this.$axios.post(
          "http://127.0.0.1:8000/api/order/carts/",
          data
        );

        commit("getCartApiUpdate", prodRes);
        commit("incrementCartLength");

      } catch (err) {
        console.log(err);
      }

    } else {
        var prodCartId = cartProduct.cartId;
        var prodQuantity = cartProduct.quantity

      try {
        let data = {
          product: prod.id,
          quantity: parseInt(prodQuantity) + parseInt(qty),
        };
        let prodRes = await this.$axios.put(
          `http://127.0.0.1:8000/api/order/carts/${prodCartId}/`,
          data
        );

        commit("incrementProductQty", prodRes);
        commit("incrementCartLength");
        
      } catch (err) {
        console.log(err);
      }
    }
    
  },
  async changeQuantity({ state, commit }, { id, qty }) {
    //   console.log(id, qty)
    let cartProduct = state.cart.find(prod => prod.id === id);
    if (cartProduct){
        var prodCartId = cartProduct.cartId;
    }
    
      try {
        let data = {
          product: id,
          quantity: qty,
        };
        // console.log(data)
        let prodRes = await this.$axios.put(
          `http://127.0.0.1:8000/api/order/carts/${prodCartId}/`,
          data
        );
            // console.log(prodRes)
        commit("incrementProductQty", prodRes);
        commit("incrementCartLength");
    } catch (err) {
        console.log(err);
      }

    }

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
      
      state.cart.ordered = el.ordered;
      state.cart.product = el.product;
    });
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map((p) => {
        state.cartLength += p.quantity;
      });
    }
    
    
  },
  getCartApiUpdate(state, prodRes) {
      
    var prod = prodRes.data.product_id;

    prod.quantity = prodRes.data.quantity;
    prod.ordered = prodRes.data.ordered;
    prod.product = prodRes.data.product;
    prod.cartId = prodRes.data.id;
    prod.dateAdded = prodRes.data.date_added;
    state.cart.unshift(prod);
    
    state.cartLength = state.cart.length;
  },

//   async pushProductToCart(state, prodRes) {
    // prodRes.data.product_id.cartId = prodRes.data.id;
    // prodRes.data.product_id.quantity = qty;
    // prodRes.data.product_id.ordered = prodRes.data.quantity;
    // prodRes.data.product_id.totalPrice = prodRes.data.total_item_price;
    // prodRes.data.product_id.dateAdded = prodRes.data.date_added;

    // state.cart.unshift(prodRes.data.product_id);
    // console.log()
    // state.cart.push(product)
//   },

  async incrementProductQty(state, prodRes) {
      
    const prodForQtyUpdate = state.cart.find((p) => 
        p.id === prodRes.data.product
        );

        prodForQtyUpdate.cartId = prodRes.data.id
        prodForQtyUpdate.quantity = prodRes.data.quantity;
        prodForQtyUpdate.dateAdded = prodRes.data.date_added;
        prodForQtyUpdate.totalItemPrice = prodRes.data.total_item_price;
        prodForQtyUpdate.product = prodRes.data.product;
        prodForQtyUpdate.ordered = prodRes.data.ordered;

        let indexOfProduct = state.cart.indexOf(prodForQtyUpdate);
        state.cart.splice(indexOfProduct, 1, prodForQtyUpdate);
        
        // prodForQtyUpdate.quantity = prodRes.data.quantity;
    
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
//   changeQty(state, { product, qty }) {
//     let cartProduct = state.cart.find(prod => prod.id === product.id);
//     cartProduct.quantity = qty;

//     console.log(cartProduct)

    // state.cartLength = 0;
    // if (state.cart.length > 0) {
    //   state.cart.map((product) => {
    //     state.cartLength += product.quantity;
    //   });
    // }

    // let indexOfProduct = state.cart.indexOf(cartProduct);
    // state.cart.splice(indexOfProduct, 1, cartProduct);
//   },
  async removeProduct(state, product, cartId) {
    try {
      state.cartLength -= product.quantity;
      let indexOfProduct = state.cart.indexOf(product);
      state.cart.splice(indexOfProduct, 1);

      await this.$axios.delete(
        `http://127.0.0.1:8000/api/order/carts/${product.cartId}/`
      );
    } catch (err) {
      console.log(err);
    }
  },
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },
  getCartTotalPrice(state) {
    let total = 0;
    state.cart.map((product) => {
      total += parseInt(product.price) * parseInt(product.quantity);
    });

    return total;
  },
};
