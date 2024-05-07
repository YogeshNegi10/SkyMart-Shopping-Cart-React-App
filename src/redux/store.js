import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/cartSlice'
import productReducer from '../redux/productSlice'
import WishListReducer from './WhishListSlice'

export const store = configureStore({
  reducer: {
   cart: cartReducer,
   products: productReducer,
   wishList:WishListReducer,
  },
})