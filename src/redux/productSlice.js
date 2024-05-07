import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze(
  {
    Success:'Success',
    Error:'An Error accured. . .',
    Loading:'Fetching Products. . . .'
  }
)
export const productSlice = createSlice({
  name: "products",
  initialState: {
     products: [],
     singleProduct: [],
     status: STATUS.Success
  },
  reducers :{
     setProducts : (state,action) =>{
          state.products.push(...action.payload)
     },
     setStatus : (state,action) =>{
          state.status = action.payload
     },
     setSingleProduct : (state,action) =>{
     
          state.singleProduct = action.payload 
     },
     removeSingleProduct : (state,action) =>{
     
          state.singleProduct = {}
     },


   
  }
    
});


export const { setProducts,setStatus,setSingleProduct,removeSingleProduct} = productSlice.actions;

export default productSlice.reducer;



export function fetchProducts() {
  
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUS.Loading))
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      dispatch(setProducts(data))
      dispatch(setStatus(STATUS.Success))
    } catch (error) {
      dispatch(setStatus(STATUS.Error))
    }
  }
}


export function fetchSingleProduct(id){
     return async function fetchSingleProductThunk(dispatch){
      dispatch(setStatus(STATUS.Loading))
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
      
        dispatch(setSingleProduct(data))
        dispatch(setStatus(STATUS.Success))
      } catch (error) {
        dispatch(setStatus(STATUS.Error))
      }
     }
}
