<template>
    <div class="product-list-item">
        <div class="name">{{ product.name }}</div>
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