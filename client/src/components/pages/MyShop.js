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
        className="py-20 pl-10 bg-amber-100"
      >
        <div className="text-xl pt-5 mb-4 font-bold text-gray-800">My items</div>
        <div className="container xl:max-w-6xl px-4">
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* item */}
            {Item.map((items) => {
              return (
                <div
                  className="flex mb-12 px-4 sm:w-1/3 lg:w-1/6 lg:px-6"
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

        <div className="text-xl pt-5 mb-4 font-bold text-gray-800">Add item</div>
        <section class="max-w-4xl p-6 bg-white rounded-md border border-gray-300 shadow-xl">
          <form>
            <div class="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label class="text-gray-700" for="username">Title</label>
                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="text-gray-700" for="imageURL">Image Url</label>
                <input id="iconURL" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>

            <div class="pt-3">
              <label for="Description" class="text-gray-700">Description</label>
              <textarea class="block mt-2 w-full  rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>

            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
      </div>

    </div>
  );
}