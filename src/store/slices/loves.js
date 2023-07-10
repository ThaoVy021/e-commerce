import { createSlice } from '@reduxjs/toolkit'

const productsInLovesPage =
  localStorage.getItem('productsInLovesPage') !== null
    ? JSON.parse(localStorage.getItem('productsInLovesPage'))
    : []

const setItem = (item) => {
  localStorage.setItem('productsInLovesPage', JSON.stringify(item))
}

export const loves = createSlice({
  name: 'loves',
  initialState: {
    productsInLovesPage,
  },
  reducers: {
    addToLovesPage: (state, action) => {
      state.productsInLovesPage.push(action.payload)
      setItem(state.productsInLovesPage.map((item) => item))
    },

    removeInLovesPage: (state, action) => {
      state.productsInLovesPage = state.productsInLovesPage.filter(
        (item) => item.id !== action.payload.id,
      )

      setItem(state.productsInLovesPage.map((item) => item))
    },
  },
})

export const { addToLovesPage, removeInLovesPage } = loves.actions
export const selectProductsInLovesPage = (state) =>
  state.loves?.productsInLovesPage
export default loves.reducer
