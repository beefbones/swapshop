import React from "react";
import { useQuery } from "@apollo/client";
import { LISTEDITEM } from "../../utils/queries";

export default function Home() {
  const { data } = useQuery(LISTEDITEM, {
    fetchPolicy: "no-cache",
  });

  const Item = data?.listedItems || [];
  console.log(Item);
  
  return (
    <div>
      <div id="item-grid" className="mt-auto relative py-20 md:py-24 bg-amber-100">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl leading-normal mb-2 font-bold text-black">
              Welcome to the SwapShop!
            </h2>
                      <hr className="block w-12 h-0.5 mx-auto my-5 bg-indigo-900 border-indigo-900"></hr>
                      <h3 className="font-bold">Checkout what's selling!</h3>
                  </header>
                  
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* item */}
            {
              Item.map((items) => {
                return (
                  <div className="flex mb-12 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
                    <div className="flex flex-col bg-white rounded overflow-hidden shadow">
                      <div className="relative overflow-hidden">Image here</div>
                      <div className="flex flex-shrink py-6 px-8 flex-1">
                        <div className="mb-2">
                          <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                            {items.title}
                          </h3>
                          <div className="text-gray-600">
                            <p className="text-gray-500">Insert Filler Here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
