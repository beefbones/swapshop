import React from "react";


function Navbar({ currentPage }) {
  return (
    <div className="nav-top fixed flex flex-nowrap lg:flex-start items-center z-20 top-0 left-0 right-0 overflow-y-auto max-h-screen lg:overflow-visible lg:max-h-full bg-orange-400">
      <nav className="container mx-auto px-4 xl:max-w-6xl ">
        <ul className="flex flex-row justify-between py-3">
          <li className="relative">
            <a
              href="/"
              className={
                currentPage === "Home"
                  ? "block py-3 px-4 text-blue-500 hover:text-blue-500 focus:text-blue-500"
                  : "block py-3 px-4 text-slate-100 hover:text-blue-500 focus:text-blue-500"
              }
            >
              Home
            </a>
          </li>

          <li className="relative">
            <a
              href="/Login"
              className={
                currentPage === "Login"
                  ? "block py-3 px-4 text-blue-500 hover:text-blue-500 focus:text-blue-500"
                  : "block py-3 px-4 text-slate-100 hover:text-blue-500 focus:text-blue-500"
              }
            >
              Login
            </a>
          </li>
          <li className="relative">
            <a
              href="/Messages"
              className={
                currentPage === "Messages"
                  ? "block py-3 px-4 text-blue-500 hover:text-blue-500 focus:text-blue-500"
                  : "block py-3 px-4 text-slate-100 hover:text-blue-500 focus:text-blue-500"
              }
            >
              Messages
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;