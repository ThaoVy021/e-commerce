import { createSlice } from "@reduxjs/toolkit";

export const amountProductsInCart = createSlice({
  name: "counter",
  initialState: {
    amount: 0,
    productsInCart: [],
    totalPrice: 0,
    amountChoosedProducts: 0,
  },
  reducers: {
    incrementProductsInCart: (state) => {
      state.amount += 1;
    },

    decrement: (state) => {
      state.amount -= 1;
    },

    addToCart: (state, action) => {
      state.productsInCart.push(action.payload);
      state.totalPrice += action.payload.price;
      state.amountChoosedProducts += 1;
    },
  },
});

export const { incrementProductsInCart, decrement, addToCart } = amountProductsInCart.actions;
export const selectCount = (state) => state.counter.amount;
export const selectProductsInCart = (state) => state.counter.productsInCart;
export const selectTotalPrice = (state) => state.counter.totalPrice;
export const selectAmountChoosedProducts = (state) => state.counter.amountChoosedProducts;
export default amountProductsInCart.reducer;
