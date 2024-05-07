import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { getItemsFromLocalStorage, setShow } from "../redux/cartSlice";
import { BiHeart,} from "react-icons/bi";
import { getWishListFromLc } from "../redux/WhishListSlice";


const Navbar = () => {
  const { cart, show } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishList);


  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShow());
  };

  useEffect(()=>{
    dispatch(getItemsFromLocalStorage())
    dispatch(getWishListFromLc())
  },[])

  return (
    <header className=" mt-6 inset-x-0 top-0  mx-auto w-full max-w-screen-sm border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg ">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 justify-center items-center gap-2 cursor-pointer">
            <NavLink to="/" aria-current="page" className="flex items-center">
              <img
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
              />
              <p className="sr-only">SkyMart</p>
              <h1 className="ml-2">SkyMart</h1>
            </NavLink>
          </div>
          <div className="  hidden md:flex md:items-center md:justify-center md:gap-5 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100" : "text-gray-500"
                } `
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100" : "text-gray-500"
                } `
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100" : "text-gray-500"
                } `
              }
            >
              Contact
            </NavLink>
          </div>

          {/* _______________________________________Mobile Menu________________________________ */}

          <div
            className={`md:hidden text-center bg-white/90 border-gray-900 absolute top-[-30px] duration-800  h-screen z-10 flex flex-col w-[280px] p-20 gap-6 ${
              show ? "right-[800px] " : "  left-[0] "
            } `}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100" : "text-gray-500"
                } `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100" : "text-gray-500"
                } `
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100" : "text-gray-500"
                } `
              }
            >
              Contact
            </NavLink>


            <span
                onClick={handleShow}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer absolute top-10 right-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
          </div>

          <div className="flex items-center justify-end gap-3">
            {show ? (
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                  onClick={handleShow}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            ) : (
              <span
                onClick={handleShow}
                className="hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            )}

            {/* __________________________________________MobileMenu End______________________________ */}
            <NavLink to="/wishlist">
             
              <BiHeart className={`${ wishList.length > 0 ? 'text-red-600' : ''} cursor-pointer`} size={35} />
            </NavLink>

           

            <NavLink
              to="/cart"
              className="items-center justify-center rounded-xl bg-white px-3 py-2 text-1xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex "
            >
              <IoCartOutline size={30} className=" relative" />
              {cart?.length ? (
                <span className="bg-gray-100 rounded-full px-3 py-1 absolute  bottom-10 right-2 text-gray-500 text-center">
                  {cart?.length}
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
