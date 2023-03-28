import React from "react";


function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="nav-top fixed flex flex-nowrap lg:flex-start items-center z-20 top-0 left-0 right-0 overflow-y-auto max-h-screen lg:overflow-visible lg:max-h-full bg-orange-400">
      <nav className="container mx-auto px-4 xl:max-w-6xl ">
        <ul className="flex flex-row justify-between py-3">
          <li className="relative">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home"
                  ? "block py-3 px-4 text-red-500 hover:text-red-500 focus:text-red-500"
                  : "block py-3 px-4 text-slate-100 hover:text-red-500 focus:text-red-500"
              }
            >
              Home
            </a>
          </li>

          <li className="relative">
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Projects"
                  ? "block py-3 px-4 text-red-500 hover:text-red-500 focus:text-red-500"
                  : "block py-3 px-4 text-slate-100 hover:text-red-500 focus:text-red-500"
              }
            >
              Projects
            </a>
          </li>
          <li className="relative">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact"
                  ? "block py-3 px-4 text-red-500 hover:text-red-500 focus:text-red-500"
                  : "block py-3 px-4 text-slate-100 hover:text-red-500 focus:text-red-500"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;