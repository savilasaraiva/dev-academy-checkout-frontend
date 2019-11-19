<template>
    <div class="home-product-list">
        <h2 class="title">Produtos</h2>
        <home-product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import HomeProductListItem from './HomeProductListItem';

export default {
    name: 'HomeProductList',
    components: {
        HomeProductListItem
    }
}
</script>

<style lang="stylus" scoped>
.home-product-list
    width 100%

.title
    text-align left
    margin 0

.product-item + .product-item
    border-top 1px solid #e6e6e6

</style>