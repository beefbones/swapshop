import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="bg-blue-900 text-gray-100 mx-auto">
        <div id="footer-content" class="relative">
          <div class="container xl:max-w-6xl mx-auto px-4 py-8 border-t border-gray-200 border-opacity-10">

                  {/* row */}
                  <div class="flex flex-wrap flex-row -mx-4">
                    {/* copyright text */}
                    <div class="flex-shrink max-w-full px-4 w-full lg:w-1/2 text-center lg:ltr:text-left lg:rtl:text-right mb-6 lg:mb-0">
                      <p>© SwapShop | All Rights Reserved.</p>
                    </div>
                    {/* footer nav */}
                    <div class="flex-shrink max-w-full px-4 w-full lg:w-1/2 self-center">
                      <ul class="space-x-6 text-center lg:ltr:text-right lg:rtl:text-left">
                        <li class="inline-block">
                          <Link to="/" className="">
                            Home
                          </Link>
                        </li>
                        <li class="inline-block">
                          <Link to="/Messages">Messages</Link>
                        </li>
                        <li class="inline-block">
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
