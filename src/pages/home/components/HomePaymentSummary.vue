<template>
  <div class="home-payment-summary">
    <h2 class="title">Resumo</h2>
    <p
      class="description"
    >Abaixo é possível verificar as taxas, descontos e o cáculo do valor de vendas</p>
    <div class="billing-info">
      <div class="discount">
        <p class="key">Desconto</p>
        <p class="value">0,00</p>
      </div>
      <div class="tax">
        <p class="key">Acréscimo</p>
        <p class="value">0,00</p>
      </div>
      <div class="tax">
        <p class="key">Taxa de Serviço</p>
        <p class="value">0,00</p>
      </div>
    </div>
    <div class="total-value">
      <p class="total">Valor total</p>
      <p class="value">{{ totalValue | toMoney }}</p>
    </div>
    <div class="button-container">
      <router-link to="/checkout">
        <button class="checkout-button">Checkout</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("products");

export default {
  name: "HomePaymentSummary",
  computed: {
    ...mapGetters(["totalValue"])
  }
};
</script>

<style lang="stylus" scoped>
.home-payment-summary {
  position: relative;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
}

.title, .description {
  text-align: left;
}

.billing-info {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    justify-content: space-between;

    p {
      margin: 10px 0;
    }
  }

  .key {
    text-align: left;
  }

  .value {
    text-align: right;
  }
}

.total-value {
  text-align: right;
  font-size: 1.1rem;

  .total {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .value {
    margin: 0;
  }
}

.button-container {
  position: absolute;
  width: calc(100% - 40px);
  bottom: 20px;
}

.checkout-button {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #edeef2;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
}
</style>