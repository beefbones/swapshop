import React from "react";
import { useQuery } from "@apollo/client";
import { LISTEDITEM } from "../../utils/queries";
import AddItem from "./AddItem";


export default function MyShop() {
  const { data } = useQuery(LISTEDITEM, {
    fetchPolicy: "no-cache",
  });

  const Item = data?.listedItems || [];

  return (
    <div>
      <div className="text-xl pl-10 pt-28 font-bold text-gray-800 bg-amber-100">My items</div>
      <div
        className="flex bg-amber-100 justify-center"
      >
        <div className="container xl:max-w-6xl pt-10">
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* item */}
            {Item.map((items) => {
              return (
                <div
                  className="flex mb-12 px-4 sm:w-1/3 lg:w-1/5 lg:px-6"
                  key={items._id}
                >
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative overflow-hidden">
                      <img
                        className="max-w-full h-full"
                        src={items.iconURL}
                        alt="item"
                      ></img>
                    </div>
                    <div className="py-3 px-2">
                      <h3 className="text-md leading-normal mb-4 font-bold text-gray-800">
                        {items.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AddItem />
    </div>
  );
}
