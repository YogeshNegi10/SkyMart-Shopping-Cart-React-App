import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  applyDiscount,
  calculateTotal,
  getItemsFromLocalStorage,
  removeDiscount
} from "../redux/cartSlice";
import cartlogo from "../assets/empty.png";
import { ToastContainer } from "react-toastify";
import { notify } from "../redux/Notification";

const Cart = () => {
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [inputData, setInputData] = useState('');
  const [errorMsg, setErrorMsg] = useState("");
  const { cart, totalPrice, subTotal, ShppingFee } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
 

  useEffect(() => {

    dispatch(calculateTotal());
  }, [cart]);

  let intervalid1;

  const getNotify = () => {
    if(cart.length > 0){
        if(intervalid1){
          clearTimeout(intervalid1)
        }else{
          intervalid1 = setTimeout(() => {
            notify('Use "Yogesh10" For 100rs Off on Your First order Above 300');
          }, 3000)
        }
    }
  }  
  
  useEffect(() => {
    getNotify()
 
    dispatch(getItemsFromLocalStorage());
    return () =>{
      getNotify()
    }
  },[]);

  let intervalid2;
  
  const handleDiscount = () => {
    if (!inputData) {

      return;

    } else if (inputData != "Yogesh10") {

      setErrorMsg("Invalid Coupon");

      if (intervalid2) {
        clearInterval(intervalid2);
      }
      intervalid2 = setTimeout(() => {
        setDisabled(true);
      }, 2000);
      setDisabled(false);
      return;
    }
    
    else if(inputData === "Yogesh10") {
      notify(' Yay ! Coupon Applied 100rs Off');
      dispatch(applyDiscount(inputData));
      setInputData(-100);
      setShow(true)
     
    }
  };



  const handleRemove = () => {
       dispatch(removeDiscount())
       dispatch(calculateTotal());
       setShow(false)
setInputData('')
       notify(' Coupon removed !');

       
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        pauseOnHover={false}
      />

      <div className="container mt-6 mx-auto">
        <h1 className="mb-10 text-center text-3xl ">
          Cart Items ({cart.length})
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          {cart.length === 0 ? (
            <div className="container flex flex-col items-center">
              <img className="" src={cartlogo} width={300} alt="cart empty" />
              <h3 className=" text-2xl mb-10">Your Cart is Empty</h3>
            </div>
          ) : (
            <>
              <div className="rounded-lg md:w-2/3 ">
                {cart.map((items) => (
                  <CartProduct key={items.id} items={items} setShow={setShow} setInputData = {setInputData} />
                ))}
              </div>

              <div className="mt-6 mb-16  h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">Rs {subTotal.toFixed(2)} </p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">
                    {subTotal < 100 ? "Rs 99" : "Free"}
                  </p>
                </div>
                <div
                  className="flex justify-between
                
                 items-center"
                >
                
  {/* <------------------------------------------ Coupon Code Section --------------------------------------- */}
              
              
                  <span className="text-sm">Have A Coupon Code ?</span>
                  <input
                  readOnly={subTotal < 300 || show ? true  : false}
                    onChange={(e) => setInputData(e.target.value)}
                    value={inputData}
                    className={`w-[120px] md:w-[90px] h-[30px] bg-gray-100 text-black p-2 text-sm outline-none border-2 ${ show ? ' text-right' : '' }`}
                    type="text"
                  />
                </div>
                
                <div className="btn flex justify-end items-center mt-2">
                  
                  <button
                    disabled={subTotal < 300 ?  'disabled' : ''}
                    onClick={handleDiscount}
                    className={`  text-[14px] px-3 rounded-sm bg-blue-500 font-normal text-blue-50 ${
                      subTotal < 300
                        ? " opacity-50 bg-gray-500 "
                        : "hover:bg-blue-600 "
                    }`}
                  >
                    {show ? 'Applied' : 'Apply'}
                  </button>
                 {show ? <span onClick={handleRemove} className=" cursor-pointer text-sm ml-2 px-3 rounded-sm bg-blue-500 font-normal text-blue-50  ">x</span> : ''}

                </div>
                <span
                  className={`${
                    disabled ? "hidden" : ""
                  } text-[14px] px-2 bg-red-500 text-white rounded-sm`}
                >
                  {errorMsg}
                </span>


   {/* <------------------------------------------ Coupon Code Section --------------------------------------- */}
               
               
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold text-right">
                      Rs {subTotal < 100 ? (totalPrice + ShppingFee).toFixed(2) : totalPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-700">including Tax</p>
                  </div>
                </div>
                <button className=" mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
               
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
