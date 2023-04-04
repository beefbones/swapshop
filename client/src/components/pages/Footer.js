import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-blue-900 text-gray-100 mx-auto">
        <div id="footer-content" className="relative">
          <div className="container xl:max-w-6xl mx-auto px-4 py-8 border-t border-gray-200 border-opacity-10">
            {/* row */}
            <div className="flex flex-wrap flex-row -mx-4">
              {/* copyright text */}
              <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 text-center lg:ltr:text-left lg:rtl:text-right mb-6 lg:mb-0">
                <p>© SwapShop | All Rights Reserved.</p>
              </div>
              {/* footer nav */}
              <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 self-center">
                <ul className="space-x-6 text-center lg:ltr:text-right lg:rtl:text-left">
                  <li className="inline-block">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link to="/MyShop">My Shop</Link>
                  </li>
                  <li className="inline-block">
                    <Link to="/Login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
