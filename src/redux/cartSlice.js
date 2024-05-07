import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    subTotal: 0,
    Discount: "",
    ShppingFee: 99,
    show: true,
  },
  reducers: {
    add: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    increment: (state, action) => {
    
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decrement: (state, action) => {
     
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity === 1) {
            return { ...item, quantity: (item.quantity = 1) };
          }

          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    calculateTotal: (state) => {
      state.totalPrice = state.cart.reduce((cardTotal, item) => {
        cardTotal += item.quantity * item.price;

        return cardTotal
      
       
      }, 0);

      
      state.subTotal = state.cart.reduce((subTotal, item) => {
        subTotal += item.quantity * item.price;
       
        return subTotal;
      }, 0);

    },
    setShow: (state) => {
      state.show = !state.show;
    },
    getItemsFromLocalStorage: (state, action) => {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      if (cartItems) {
        state.cart = cartItems;
      } else {
        [];
      }
    },

    applyDiscount: (state, action) => {
      let index = 1;
         state.Discount = action.payload
      if (state.Discount === action.payload && index < 2) {
        const total = state.totalPrice - 100;
        state.totalPrice = total;
        index++;
    
      }
      return;
    },
    removeDiscount: (state, action) => {
      
       state.Discount = null
    },
  },
});

export const {
  add,
  remove,
  increment,
  decrement,
  calculateTotal,
  setShow,
  getItemsFromLocalStorage,
  applyDiscount,
  removeDiscount
  

} = cartSlice.actions;

export default cartSlice.reducer;
