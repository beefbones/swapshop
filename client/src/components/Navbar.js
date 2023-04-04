import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
// import Auth from "../services/AuthService";



function Navbar({ currentPage }) {
  return (
    <div className="text-xl nav-top fixed flex flex-nowrap lg:flex-start items-center z-20 top-0 left-0 right-0 overflow-y-auto max-h-screen lg:overflow-visible lg:max-h-full bg-orange-400">
        <img
          src={Logo}
          className="mx-auto w-40 h-auto ml-5"
          alt="SwapShop Logo"
        ></img>
      
      <nav className="container mx-auto px-4 xl:max-w-6xl ">
        <ul className="flex flex-row justify-end py-3">
          <li className="relative">
            <Link
              to="/"
              className={
                currentPage === "Home"
                  ? "block py-3 px-4 text-blue-500 hover:text-blue-500 focus:text-blue-500"
                  : "block py-3 px-4 text-slate-100 hover:text-blue-500 focus:text-blue-500"
              }
            >
              Home
            </Link>
          </li>

          <li className="relative">
            <Link
              to="/MyShop"
              className={
                currentPage === "MyShop"
                  ? "block py-3 px-4 text-blue-500 hover:text-blue-500 focus:text-blue-500"
                  : "block py-3 px-4 text-slate-100 hover:text-blue-500 focus:text-blue-500"
              }
            >
              My Shop
            </Link>
          </li>

          <li className="relative">
            <Link
              to="/Login"
              className={
                currentPage === "Login"
                  ? "block py-3 px-4 text-blue-500 hover:text-blue-500 focus:text-blue-500"
                  : "block py-3 px-4 text-slate-100 hover:text-blue-500 focus:text-blue-500"
              }
            >
              Login
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;