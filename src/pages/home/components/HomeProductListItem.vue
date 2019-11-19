<template>
    <div class="product-list-item">
        <h3 class="name">{{ product.name }}</h3>
        <p class="description">{{ product.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'HomeProductListItem',
    props: {
        product: Object
    }
}
</script>

<style lang="stylus" scoped>
.product-list-item
    padding 10px 20px
    text-align left

.name
    margin 0
    font-size 1rem

.description
    margin 10px 0
</style>