import { configureStore } from '@reduxjs/toolkit'
import inforProductsInCart from './slices/cart'
import inforProductsInLovesPage from './slices/loves'
import allProductsSlice from './slices/allProducts'

export default configureStore({
  devTools: true,
  reducer: {
    carts: inforProductsInCart,
    loves: inforProductsInLovesPage,
    allProducts: allProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
