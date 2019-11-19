const products = []

for (let i = 0; i < 12; i++) {
    products.push({
        id: i,
        name: `Name ${i}`,
        description: 'Lorem ipsum delorean back to the future',
        prize: (Math.random() * Math.random() * i + i)
    })
}

const state = {
    products
}

const getters = {}

const actions = {}

const mutations = {}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  