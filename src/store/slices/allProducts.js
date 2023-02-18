import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toQueryString from "../../utils/toQueryString";

const initialState = {
  allProducts: [],
  inforProductsNewArrivals: [],
  idProductsNewArrivals: "",
  imageProductsNewArrivals: "",
  nameProductsNewArrivals: "",
  priceProductsNewArrivals: 0,
  status: "",
  error: null,
  advertisementProducts: [],
  idAdvertisementProducts: "",
  imageAdvertisementProducts: "",
  titleAdvertisementProducts: "",
  describeAdvertisementProducts: "",
  priceAdvertisementBigProducts: 0,
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllproducts",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await response.json();
    return json;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchAllproducts",
  async (input) => {
    const query = toQueryString(input ?? ""); // { offset: 0, limit: 10 }
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?${query}`
    );
    const json = await response.json();
    return json;
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProducts = action.payload;
        state.advertisementProducts = action.payload;

        state.advertisementProducts = state.advertisementProducts
          .slice(0, 3)
          .map((product) => {
            state.idAdvertisementProducts = product.id;
            state.titleAdvertisementProducts = product.title;
            state.imageAdvertisementProducts = product.category.image;
            state.describeAdvertisementProducts = product.description;
            state.priceAdvertisementBigProducts = product.price;
            return {
              idAdvertisementProducts: product.id,
              titleAdvertisementProducts: product.title,
              imageAdvertisementProducts: product.category.image,
              describeAdvertisementProducts: product.description,
              priceAdvertisementBigProducts: product.price,
            };
          });

        state.inforProductsNewArrivals = state.allProducts.map((product) => {
          state.idProductsNewArrivals = product.id;
          state.nameProductsNewArrivals = product.category.name;
          state.imageProductsNewArrivals = product.category.image;
          state.priceProductsNewArrivals = product.price;
          return {
            idProductsNewArrivals: product.id,
            nameProductsNewArrivals: product.category.name,
            imageProductsNewArrivals: product.category.image,
            priceProductsNewArrivals: product.price,
          };
        });
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { showProducts } = allProductsSlice.actions;
export const advertisementProducts = (state) =>
  state.allProducts.advertisementProducts;
export const inforProductsNewArrivals = (state) =>
  state.allProducts.inforProductsNewArrivals;
export default allProductsSlice.reducer;
