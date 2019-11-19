const products = [
    {
        id: 0,
        name: 'Suco de uva tinto integral aliança garrafa 1l',
        brand: 'Aliança',
        description: 'Garrafa 1 litro',
        price: 13.96,
        quantity: 0
    },
    {
        id: 1,
        name: 'Suco do bem todo dia caju 200ml',
        brand: 'Do Bem',
        description: 'Caixa 200ml',
        price: 1.66,
        quantity: 0
    },
    {
        id: 2,
        name: 'Suco maratá uva embalagem 200ml',
        brand: 'Maratá',
        description: 'Embalagem 200ml',
        price: 1.90,
        quantity: 0
    },
    {
        id: 3,
        name: 'Suco pronto Del Valle fresh limão 250ml',
        brand: 'Del Valle',
        description: 'Pet 250ml',
        price: 2.34,
        quantity: 0
    },
    {
        id: 4,
        name: 'Suco pronto jandaia caju caixa 1l',
        brand: 'Jandaia',
        description: 'Caixa 1 litro',
        price: 6.59,
        quantity: 0
    },
    {
        id: 5,
        name: 'Suco pronto tampico uva garrafa 330ml',
        brand: 'Tampico',
        description: 'Garrafa 330ml',
        price: 1.96,
        quantity: 0
    }

]

const state = {
    products
}

const getters = {
    totalValue(state) {
        return state.products.reduce((total, product) => total + product.quantity * product.price, 0)
    }
}

const actions = {}

const mutations = {
    decreaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        if (product.quantity > 0)
            product.quantity--
    },
    increaseProductQuantity(state, productId) {
        const product = state.products.find(product => product.id === productId)
        product.quantity++
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
  