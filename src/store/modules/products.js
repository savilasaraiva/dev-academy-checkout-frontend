import { productsService, saleService } from '@/services'

const state = {
    products: [],
    creditCardForm: {
        cardNumber: '',
        cardHolder: '',
        expirationMonth: 1,
        expirationYear: 2019,
        cvvCode: ''
    }
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + product.quantity * product.price, 0)
    },
    years() {
        const years = []

        for (let i = 2031; i > 2018; i--) {
            years.push(i)
        }

        return years
    },
    months() {
        const months = []

        for (let i = 1; i < 13; i++) {
            months.push(i)
        }

        return months
    }
}

const actions = {
    fetchAllProducts({ commit }) {
        return productsService.getAll().then(response => {
            const products = [...response.data].map(product => ({ ...product, quantity: 0 }))
            commit('setProducts', products)
        })
    },
    saveSale({ state }) {
        return saleService.save(state.creditCardForm).then(response => {
            console.log(response)
        })
    }
}

const mutations = {
    decreaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        if (product.quantity > 0)
            product.quantity--
    },
    increaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        product.quantity++
    },
    setProducts(state, payload) {
        state.products = payload
    }
}


export default {
    id: 0,
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  