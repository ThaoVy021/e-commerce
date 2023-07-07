import { createSlice } from '@reduxjs/toolkit'

const productsInCart =
  localStorage.getItem('productsInCart') !== null
    ? JSON.parse(localStorage.getItem('productsInCart'))
    : []

const productsInLovesPage =
  localStorage.getItem('productsInLovesPage') !== null
    ? JSON.parse(localStorage.getItem('productsInLovesPage'))
    : []

const setItem = (item) => {
  localStorage.setItem('productsInCart', JSON.stringify(item))
  localStorage.setItem('productsInLovesPage', JSON.stringify(item))
}

export const cart = createSlice({
  name: 'cart',
  initialState: {
    productsInCart,
    productsInLovesPage,
    amountDeleteMultiProducts: 0,
    increaseQuantityPageDetail: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.productsInCart.push(action.payload)
      setItem(
        state.productsInCart.map((item) => item),
        state.productsInLovesPage.map((item) => item),
      )
    },

    addToLovesPage: (state, action) => {
      state.productsInLovesPage.push(action.payload)
      setItem(
        state.productsInCart.map((item) => item),
        state.productsInLovesPage.map((item) => item),
      )
    },

    removeInCarts: (state, action) => {
      state.productsInCart = state.productsInCart.filter(
        (item) => item.id !== action.payload.id,
      )

      setItem(
        state.productsInCart.map((item) => item),
        state.productsInLovesPage.map((item) => item),
      )
    },

    removeInLovesPage: (state, action) => {
      state.productsInLovesPage = state.productsInLovesPage.filter(
        (item) => item.id !== action.payload.id,
      )

      setItem(
        state.productsInCart.map((item) => item),
        state.productsInLovesPage.map((item) => item),
      )
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

      setItem(
        state.productsInCart.map((item) => item),
        state.productsInLovesPage.map((item) => item),
      )
    },
  },
})

export const {
  decrementProductsInCart,
  addToCart,
  addToLovesPage,
  removeInCarts,
  removeInLovesPage,
  removeSelectedItems,
} = cart.actions
export const selectIncreaseQuantityPageDetail = (state) =>
  state.carts?.increaseQuantityPageDetail
export const selectProductsInCart = (state) => state.carts?.productsInCart
export const selectProductsInLovesPage = (state) =>
  state.carts?.productsInLovesPage
export default cart.reducer
