<template>
    <div class="product-list">
        <home-product-list-item v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import HomeProductListItem from './HomeProductListItem';

export default {
    name: 'HomeProductList',
    components: {
        HomeProductListItem
    },
    data() {
        const products = []

        for (let i = 0; i < 12; i++) {
            products.push({
                id: i,
                name: `Name ${i}`,
                description: 'Lorem ipsum delorean back to the future',
                prize: (Math.random() * Math.random() * i + i)
            })
        }

        return {
            products
        }
    }
}
</script>