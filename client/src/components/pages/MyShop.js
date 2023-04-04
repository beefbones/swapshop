import React from "react";
import { useQuery } from "@apollo/client";
import { LISTEDITEM } from "../../utils/queries";


export default function MyShop() {
  const { data } = useQuery(LISTEDITEM, {
    fetchPolicy: "no-cache",
  });

  const Item = data?.listedItems || [];

  return (
    <div>
      <div
        id="item-grid"
        className="mt-auto relative py-20 md:py-24 bg-amber-100"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* item */}
            {Item.map((items) => {
              return (
                <div
                  className="flex mb-12 px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
                  key={items._id}
                >
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                      <img
                        className="max-w-full h-full"
                        src={items.iconURL}
                        alt="item"
                      ></img>
                    </div>
                    <div className="flex flex-shrink py-6 px-8 flex-1">
                      <div className="mb-2 px-12">
                        <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                          {items.title}
                        </h3>
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

