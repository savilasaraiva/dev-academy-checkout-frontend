<template>
    <div class="home-product-list">
        <h2 class="title">Produtos</h2>
        <div class="product-list-container">
            <home-product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HomeProductListItem from './HomeProductListItem'

const { mapState } = createNamespacedHelpers('products')

export default {
    name: 'HomeProductList',
    components: {
        HomeProductListItem
    },
    computed: {
        ...mapState(['products'])
    }
}
</script>

<style lang="stylus" scoped>
.home-product-list
    width 100%
    background-color #fff
    border-radius 4px

.product-list-container
    max-height 60vh
    overflow-y auto

.title
    text-align left
    padding 0px 20px

.product-item + .product-item
    border-top 1px solid #e6e6e6

</style>