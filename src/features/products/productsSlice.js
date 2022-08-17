import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  products: [],
  error: ''
}

//Creating asynchronous actions for fetching data from API endpoint
export const fetchProducts = createAsyncThunk('user/fetchProducts', () => {
  return axios
    .get('https://fakestoreapi.com/products')
    .then(response => response.data)
})

const productsSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})


export default productsSlice.reducer;