export const state = () => ({
    cart: [],
    cartLength: 0
})

export const actions = {
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
    pushProductToCart(state, product) {
        product.quantity = 1
        state.cart.push(product)
    },

    incrementProductQty(state, product) {
        cartProduct.quantity++;
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
        state.cart.map(product =>{
            total += product.price * product.quantity;

        });

        return total;
    }
}