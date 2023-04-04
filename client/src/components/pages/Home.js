import React from "react";
import { useQuery } from "@apollo/client";
import { LISTEDITEM } from "../../utils/queries";

export default function Home() {
  const { data } = useQuery(LISTEDITEM, {
    fetchPolicy: "no-cache",
  });

  const Item = data?.listedItems || [];



  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

  return (
    <div>
      <div
        id="item-grid"
        className="mt-auto relative py-20 md:py-24 bg-amber-100"
      >
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
                        {/* modal start */}
                        <div className="Modal">
                          <button
                            className="bg-blue-900 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setModalData(items);
                              setShowModal(true);
                            }}
                          >
                            Check Details
                          </button>
                          {showModal ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                  {/*content*/}
                                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                      <h3 className="text-3xl font-semibold">
                                        {modalData.title}
                                      </h3>
                                      <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                      >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                          ×
                                        </span>
                                      </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {modalData.description}
                                      </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                                      <div>
                                        <h3>
                                          Contact Seller: {modalData.userEmail}
                                        </h3>
                                      </div>
                                      <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
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
