import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false
};


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    init: (state, action) => {
      state.loading = true
    }
    ,complete: (state, action) => {
        state.loading = false
    }
    ,fetched: (state, action) => {
        state.products = action.payload
    }
  }
});

export const { init , complete, fetched } = productSlice.actions;

export default productSlice.reducer;