<template>
    <div class="home-payment-summary">
        <h2 class="title">Resumo</h2>
        <p class="description">Abaixo é possível verificar as taxas, os descontos e o cálculo do valor final da vendas </p>
        <div class="billing-info">
            <div class="discount">
                <p class="key">Desconto</p>
                <p class="value">R$ 0,00</p>
            </div>
            <div class="tax">
                <p class="key">Acréscimo</p>
                <p class="value">R$ 0,00</p>
            </div>
            <div class="tax">
                <p class="key">Taxa de serviço</p>
                <p class="value">R$ 0,00</p>
            </div>
        </div>
        <div class="total-value">
            <p class="total">Valor total</p>
            <p class="value">R$ {{ totalValue }}</p>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('products')

export default {
    name: 'HomePaymentSummary',
    computed: {
        ...mapGetters(['totalValue'])
    }
}
</script>

<style lang="stylus">
.home-payment-summary
    padding 0 20px
    background-color #fff
    border-radius 4px

.title, .description
    text-align left

.billing-info 
    border-top 1px solid #eee
    border-bottom 1px solid #eee
    
    div
        display flex
        justify-content space-between

        p
            margin 10px 0

    .key
        text-align left
    
    .value
        text-align right 

.total-value
    text-align right
    font-size 1.1rem

    .total
        font-weight 700
        margin-bottom 10px

    .value
        margin 0
</style>