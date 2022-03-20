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
      // const updatedTotalAmount = state.total + action.payload.price;
      const existingCartItemIndex = state.products.findIndex(product => 
        product._id === action.payload._id && product.price === action.payload.price)

      const existingCartItem = state.products[existingCartItemIndex]

      let updatedItems;
      if (existingCartItem) {
        updatedItems = [...state.products]
        updatedItems[existingCartItemIndex] = {
            ...existingCartItem,
            quantity: Number(existingCartItem.quantity) + Number(action.payload.quantity)
        }

      } else {
        updatedItems = state.products.concat(action.payload)
      }  

      state.products = updatedItems
      state.total += action.payload.price * action.payload.quantity;
      state.quantity += 1;



      // state.products.push(action.payload);
      // state.quantity += 1;
      // state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
