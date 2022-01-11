import { SatelliteSharp } from "@material-ui/icons";
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
      let found = false;
      state.products.forEach((product, index) => {
        if (product._id === action.payload._id) {
          state.products[index].quantity += action.payload.quantity;
          state.total += action.payload.quantity * state.products[index].price;
          found = true;
        }
      });
      if (!found) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    updateProduct: (state, action) => {
      state.products.forEach((product, index) => {
        if (product._id === action.payload) {
          state.products[index].quantity += 1;
          state.total += state.products[index].price;
        }
      });
    },
    decreaseProduct: (state, action) => {
      state.products.forEach((product, index) => {
        if (product._id === action.payload) {
          state.products[index].quantity -= 1;
          state.total -= state.products[index].price;
        }
      });
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter((product) => {
        if (action.payload === product._id)
          state.total -= product.quantity * product.price;
        return action.payload !== product._id;
      });
    },
  },
});

export const { addProduct, deleteProduct, decreaseProduct, updateProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
