import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increment, decrement } from "../redux/cartSlice";
import { addWishListItem, } from "../redux/WhishListSlice";

import { notify } from '../redux/Notification';

const CartProduct = ({ items,setShow,setInputData  }) => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
    setShow(false)
    setInputData('')
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
    setShow(false)
    setInputData('')
  };

  

  const handleAdd = (id) => {
    let product;

    cart.forEach((item) => {
      if (item.id === id) {
        product = item;
      }
    });
    notify('Added to WishList !')
    dispatch(addWishListItem(product));
    setToggle(!toggle);
    dispatch(remove(id))
  
  
  };

  return (
    <div className=" relative  justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={items.image}
        alt="product-image"
        className="w-full rounded-lg sm:w-40 m-4"
      />
      <div className=" sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{items.title}</h2>
          <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              onClick={() => {
                handleDecrement(items.id);
              }}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              -
            </span>
            <span className="h-8 w-8 border bg-white flex items-center justify-center text-center text-xs outline-none ">
              {items.quantity}
            </span>
            <span
              onClick={() => {
                handleIncrement(items.id);
              }}
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              +
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Rs {items.price}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={() => {
                handleRemove(items.id);
              }}
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <button
        data-tool-tip-target="element"
          onClick={() => handleAdd(items.id)}
          className={` ${
            toggle ? " text-red-500" : ""
          } cursor-pointer float-right mr-3 absolute left-2 top-0 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4`}
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
  

        
      </div>
    </div>
  );
};

export default CartProduct;

