import { configureStore } from '@reduxjs/toolkit'
import inforProductsInCart from './slices/cart'
import allProductsSlice from './slices/allProducts'

export default configureStore({
  devTools: true,
  reducer: {
    carts: inforProductsInCart,
    allProducts: allProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
