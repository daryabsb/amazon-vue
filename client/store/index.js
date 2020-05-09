export const state = () => ({
    cart: [],
    prodQty: [],
    cartLength: 0,
    cartProdApi: [],

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
    addProductToCart({ state, commit }, id) {
        
        const cartProduct = state.cart.find(product_id => product_id.id === id);

        if (!cartProduct) {
            commit("pushProductToCart", id);
        } else {
            commit("incrementProductQty", cartProduct)
        }

        commit("incrementCartLength");
    }
};

export const mutations = {
    async getCartApiFilled(state, allCart) {

    const [cartProductsResponse] = await Promise.all([
        allCart.data
        ])

       
        cartProductsResponse.forEach(el => {
            el.product_id.quantity = el.quantity;
            el.product_id.ordered = el.ordered;
            el.product_id.product = el.product;
            state.cart.push(el.product_id);
            // state.cart.push.push('quantity')
            
            state.cart.ordered = el.ordered;
            state.cart.product = el.product;
        });
        state.cartLength = state.cart.length
        // console.log(state.cartLength) 
    },
    
    async pushProductToCart(id, qty=1) {
        let data = {
            "product": st,
            "quantity": qty
        };
            // console.log(data)
        let productData = await this.$axios.post(
            'http://127.0.0.1:8000/api/order/carts/', data
        );
        // console.log()
        // state.cart.push(product)
    },

    async incrementProductQty(state, id) {
        var qty = 0;
        var i=[];
        for (i in state.cart) {
            if (state.cart[i].product_id.id === id.product_id.id) {
                qty = state.cart[i].product_id.quantity
            }
            // console.log(state.cart[i].product_id.id === id.product_id.id)
        }
        
        
        console.log('The quantity is: ', qty)
        // product.quantity++;
        // let indexOfProduct = state.cart.indexOf(product);
        // state.cart.splice(indexOfProduct, 1, product)
        let data = {
            "ordered": false,
            "product": id.product_id.id,
            "quantity": qty + 1
        };
            console.log(data)
        let productData = await this.$axios.put(
            'http://127.0.0.1:8000/api/order/carts/', data
        );

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
    changeQty(state, { id, qty }) {
        let cartProduct = state.cart.find(prod => prod.id === id);
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
        console.log(state.cart)
        return state.cart;
    },
    getCartTotalPrice(state) {
        let total = 0
        console.log(state.cart.price)
        state.cart.map(product => {
            total += parseInt(product.price) * parseInt(product.quantity);
        })
        
            console.log(total)
        
        return total;
    }
}