import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {
      name: "",
      description: "",
      category: "",
      expiryDate: "",
      costPrice: "",
      discount: "",
      discountSellPrice: "",
      sellPrice: "",

      finalPrice: "",
    },
  },
  reducers: {
    getproduct: (state, action) => {
      state.product = state.products.find((el) => el.id == action.payload);
    },
    clearproduct: (state) => {
      state.products = [];
    },
    addproduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    updateproduct: (state, action) => {
      state.products = state.products.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    sortProduct: (state) => {
      state.product = state.products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },

    deleteproduct: (state, action) => {
      state.products = state.products.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getproduct,
  clearproduct,
  addproduct,
  updateproduct,
  deleteproduct,
  sortProduct,
  filterProducts,
} = productSlice.actions;

export default productSlice.reducer;
