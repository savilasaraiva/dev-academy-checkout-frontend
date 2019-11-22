<template>
  <div class="register">
    <h2 class="title">Cadastrar Produto</h2>
    <form @submit.prevent="addProductForm">
      <div class="form-group">
        <label for="product-name">Nome do Produto</label>
        <input type="text" v-model="form.nameProduct" id="product-name" />
      </div>
      <div class="form-group">
        <label for="product-brand">Marca</label>
        <input type="text" v-model="form.brandProduct" id="product-brand" />
      </div>
      <div class="form-group">
        <label for="product-description">Descrição</label>
        <input type="text" v-model="form.descriptionProduct" id="product-description" />
      </div>
      <div class="form-group">
        <label for="product-price">Preço</label>
        <input type="text" v-model="form.priceProduct" id="product-price" />
      </div>
      <button type="submit" class="submit-button">Cadastrar</button>
      <div class="button-container">
        <router-link to="/">
          <button class="submit-button">Voltar</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("register");

export default {
  name: "register",
  computed: {
    ...mapState({
      form: "addProductForm"
    })
  }
};
</script>

<style lang="stylus" scoped>
.register {
  padding: 0 20px;
  width: 50%;
  height: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
}

.title {
  text-align: left;
}

.form-group {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  label {
    display: block;
    margin: 10px 0;
  }

  input, select {
    width: 100%;
    height: 32px;
    border: 2px solid #eee;
    border-radius: 4px;
    background-color: #fff;
    padding: 1px 0;
    box-sizing: content-box;
  }
}

.expiration-date {
  .input-group {
    display: flex;
    justify-content: space-between;

    select {
      width: 48%;
    }
  }
}

.form-group-inline {
  display: flex;
}

.button-container {
  position: absolute;
  width: calc(100% - 38px);
  bottom: 20px;
}

.submit-button {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eee;
  background-color: #edeef2;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
}
</style>