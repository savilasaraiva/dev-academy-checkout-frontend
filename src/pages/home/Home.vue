<template>
  <div class="home">
    <home-product-list />
    <home-payment-summary />
  </div>
</template>

<script>
import HomeProductList from './components/HomeProductList';
import HomePaymentSummary from './components/HomePaymentSummary';

export default {
  name: 'Home',
  components: {
    HomeProductList,
    HomePaymentSummary
  }
}
</script>

<style lang="stylus">
  .home
    width 100%
    height 100%
    display flex

  .home-product-list
    width 100%

  .home-payment-summary
    width 100%
</style>
