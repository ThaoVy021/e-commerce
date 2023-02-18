import { configureStore } from '@reduxjs/toolkit'
import amountProductsInCart from './slices/amountProductsInCart'
import allProductsSlice from './slices/allProducts'

export default configureStore({
  devTools: true,
  reducer: {
    counter: amountProductsInCart,
    allProducts: allProductsSlice
  }
})
