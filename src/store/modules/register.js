const state = {
  isLoading: false,
  addProductForm: {
    idProduct: null,
    nameProduct: "",
    brandProduct: "",
    descriptionProduct: "",
    priceProduct: 0.0
  }
};

export default {
  namespaced: true,
  state
};
