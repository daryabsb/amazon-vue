export const state = () => ({
    cart: [],
    cartLength: 0,
    cartApi: []
})

export const actions = {
    async nuxtServerInit({ state, commit }) {
        const allCart = await this.$axios.get(
            'http://127.0.0.1:8000/api/order/carts/'
        )
    //    console.log(allCart.data)
        // if(state.cartApi){
        commit("getCartApiFilled", allCart);
        // } else {
            // console.log('What the hell!')
        // }        
    },

    // nuxtServerInit({state, commit}, {req}) {
    //     state.cart = []
    //     console.log(state.cart)
    //  },
    addProductToCart({ state, commit }, product) {
        
        const cartProduct = state.cart.find(prod => prod.id === product.id);

        if (!cartProduct) {
            commit("pushProductToCart", product);
        } else {
            commit("incrementProductQty", cartProduct)
        }

        commit("incrementCartLength");
    }
};

export const mutations = {
    getCartApiFilled(state, allCart) {
        
        // console.log(allCart.data[0].product_id)
      
    var i = 0;
    var cl = 0;
    for (i in allCart.data) {
        // console.log(allCart.data[i].quantity)
        state.cart.push(allCart.data[i])
        state.cart[i].product_id.quantity = state.cart[i].quantity
        cl += state.cart[i].quantity
    }
    state.cartLength = cl
    // console.log(state.cart)
       
        
        
    },
    
    async pushProductToCart(state, product) {
        let data = {
            "ordered": false,
            "product": product.id,
            "quantity": 1
        };
            // console.log(data)
        let productData = await this.$axios.post(
            'http://127.0.0.1:8000/api/order/carts/', data
        );
        // console.log(product)
        // state.cart.push(product)
    },

    incrementProductQty(state, product) {
        product.quantity++;
        let indexOfProduct = state.cart.indexOf(product);
        state.cart.splice(indexOfProduct, 1, product)
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
        let cartProduct = state.cart.find(prod => prod.id === product.id);
        cartProduct.quantity = qty;

        state.cartLength = 0;
        if (state.cart.length > 0) {
            state.cart.map(product => {
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
    }
};

export const getters = {
    getCartLength(state) {
        return state.cartLength;
    },
    getCart(state) {
        return state.cart;
    },
    getCartTotalPrice(state) {
        let total = 0
        // console.log(state.cart[0].product_id)
        state.cart.map(product_id =>{
            // console.log(product_id.product_id)
            total += product_id.product_id.price * product_id.product_id.quantity ;
        
        });
        
        return total;
    }
}