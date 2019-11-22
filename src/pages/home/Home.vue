<template>
  <div class="home">
    <home-product-list class="product-list" />
    <home-payment-summary class="payment-summary"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeProductList from "./components/HomeProductList.vue";
import HomePaymentSummary from "./components/HomePaymentSummary.vue";

export default {
  name: "home",
  components: {
    HomeProductList, HomePaymentSummary
  }
};
</script>

<style lang="stylus">
.home {
  width: 100%;
}

@media screen and (min-width: 950px) {
  .home {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .product-list {
    margin-right: 2%;
  }
}

@media screen and (min-width: 1300px) {
  .home {
    display: flex;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
