import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import shoesReducer from './shoes/reducer'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shoes: shoesReducer,
  }, 
  
})