import { saleService } from '@/services'

const state = {
    isLoading: false,
    creditCardForm: {
        cardNumber: '',
        cardHolder: '',
        expirationMonth: 1,
        expirationYear: 2019,
        cvvCode: ''
    }
}

const getters = {
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
    saveSale({ state, commit }) {
        commit('setLoading', true)
        return saleService.save(state.creditCardForm).then(response => {
            console.log(response)
        }).finally(() => {
            commit('setLoading', false)
        })
    }
}

const mutations = {
    setLoading(state, value) {
        state.isLoading = value
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  