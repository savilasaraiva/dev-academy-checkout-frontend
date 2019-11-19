<template>
    <div class="home">
        <home-product-list class="product-list" />
        <home-payment-summary class="payment-summary" />
    </div>
</template>

<script>
import HomeProductList from "./components/HomeProductList";
import HomePaymentSummary from "./components/HomePaymentSummary";

export default {
    name: "Home",
    components: {
        HomeProductList,
        HomePaymentSummary
    }
};
</script>

<style lang="stylus">
.home
    width 100%
    background-color #fff

@media screen and (min-width: 950px)
    .home
        display flex
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

    .product-list
        margin-right  5%

@media screen and (min-width: 1300px)
    .home
        display flex
        width 90%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>
