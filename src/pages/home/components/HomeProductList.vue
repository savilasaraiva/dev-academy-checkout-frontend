<template>
    <div class="home-product-list">
        <h2 class="title">Produtos</h2>
        <home-product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
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

.title
    text-align left
    // margin 0
    padding 0px 20px

.product-item + .product-item
    border-top 1px solid #e6e6e6

</style>