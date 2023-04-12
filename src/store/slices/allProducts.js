import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  allProducts: [],
  status: '',
  error: null,
  advertisementProducts: [],
  id: '',
  image: '',
  title: '',
  description: '',
  price: 0,
}

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllproducts',
  async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const json = await response.json()
    return json
  },
)

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allProducts = action.payload
        state.advertisementProducts = action.payload

        state.advertisementProducts = state.advertisementProducts
          .slice(0, 3)
          .map((product) => {
            state.id = product.id
            state.title = product.title
            state.image = product.category.image
            state.description = product.description
            state.price = product.price
            return {
              id: product.id,
              title: product.title,
              image: product.category.image,
              description: product.description,
              price: product.price,
            }
          })
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const advertisementProducts = (state) =>
  state.allProducts?.advertisementProducts
export default allProductsSlice.reducer
