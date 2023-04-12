import { createSlice } from '@reduxjs/toolkit'

const productsInCart =
  localStorage.getItem('productsInCart') !== null
    ? JSON.parse(localStorage.getItem('productsInCart'))
    : []

const setItem = (item) => {
  localStorage.setItem('productsInCart', JSON.stringify(item))
}

export const cart = createSlice({
  name: 'cart',
  initialState: {
    productsInCart,
    amountDeleteMultiProducts: 0,
    increaseQuantityPageDetail: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.productsInCart.push(action.payload)
      setItem(state.productsInCart.map((item) => item))
    },

    removeInCarts: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (item) => item.id !== action.payload.id,
      )

      setItem(state.productsInCart.map((item) => item))
    },

    removeSelectedItems: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (item) => !action.payload.removedItems.includes(item.id),
      )
      state.amountDeleteMultiProducts = action.payload.amount
        .filter((item) => {
          return !state.productsInCart.find((i) => i.id === item.id)
        })
        .reduce((acc, item) => acc + item.amount, 0)

      setItem(state.productsInCart.map((item) => item))
    },
  },
})

export const {
  decrementProductsInCart,
  addToCart,
  removeInCarts,
  removeSelectedItems,
} = cart.actions
export const selectIncreaseQuantityPageDetail = (state) =>
  state.carts?.increaseQuantityPageDetail
export const selectProductsInCart = (state) => state.carts?.productsInCart
export default cart.reducer
