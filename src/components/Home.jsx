import React from "react";
import Product from "./Product";
import{ products }from '../api'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { STATUS, fetchProducts } from "../redux/productSlice";

import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  // const dispatch = useDispatch();
  // const { products,status } = useSelector((state) => state.products);
  
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  return (
    <>
 <ToastContainer position="top-center"  autoClose={1000} newestOnTop={false} pauseOnHover={false}/>


    <div className="container mt-6 mx-auto">
    
      <h1 className=" text-center text-2xl px-4 ">
        Welcome To Product Page Feel Free to Explore and Buy !
      </h1>

      <div className="container mx-auto mt-2  ">
        {status === STATUS.Loading ?  <h1 className={` ${status === STATUS.Loading ? ' text-gray-900' : ''} h-screen m-10`}>{status}</h1>:  

         status === STATUS.Error
        
        ?
        
        <div className="bg-gray-100 px-2 text-center w-full mt-4">
          <div className=" flex h-[400px] flex-col justify-center items-center ">
            <h1 className="text-8xl font-extrabold text-gray-500">500</h1>
               <p className="text-4xl font-medium text-gray-800">Internal Server Error</p>
               <p className="text-xl text-gray-800 mt-4">We apologize for the inconvenience. Please try again later or Check Your Connection.</p>
           </div>
         </div>
          
        :
      
        
        
        <div className="grid p-9 lg:grid-cols-3 md:grid-cols-2 md:gap-4 md:ml-6 lg:ml-14 ml-3 "> 
        
         
         { products.map((products) => (
            <Product products={products} />
          ))}
        </div>

        }
        
        
       </div> 
    </div>
    </>
  );
};

export default Home;


         