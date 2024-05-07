import { createSlice } from "@reduxjs/toolkit";

 

export const wishListSlice= createSlice({
  name:"wishList",
  initialState: {
    wishList: [],
   
  },
  reducers: {
    addWishListItem: (state, action) => {
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        return;
      } else {
        
        state.wishList.push({...action.payload});
        localStorage.setItem('wishList' , JSON.stringify(state.wishList))
        
      }
    },
   

    removeWishlistItem: (state, action) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload);
      localStorage.setItem('wishList', JSON.stringify(state.wishList))

    },

    getWishListFromLc: (state,action) =>{
      const wishListItems = JSON.parse(localStorage.getItem('wishList'))
          if(wishListItems){
            state.wishList = wishListItems
          }else{
            []
          }
}
  
  },
});


export const {addWishListItem, removeWishlistItem,  getWishListFromLc } =
wishListSlice.actions;

export default wishListSlice.reducer;



