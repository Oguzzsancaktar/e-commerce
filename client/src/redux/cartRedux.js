import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    
    increaseQuantity: (state, action) => {
      state.products[action.payload.index].quantity += 1;
      state.total = 0;
      state.products.every(product=>{
        state.total += product.price * product.quantity;
      })
    },
    decreaseQuantity: (state, action) => {
      if(state.products[action.payload.index].quantity !== 0) state.products[action.payload.index].quantity -= 1
      state.total = 0;
      state.products.every(product=>{
        state.total += product.price * product.quantity;
      })
    }
  }
});

export const { addProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
