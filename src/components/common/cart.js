import React from "react";

const cart = ({ toggleCart }) => {
  return (
    <div className="fixed inset-0 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] font-sans">
      <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-screen overflow-hidden">
        <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
          {/* Header */}
          <div className="flex items-center gap-4 text-gray-800">
            <h3 className="text-2xl font-bold flex-1">Shopping Cart</h3>
            <svg
              onClick={toggleCart}
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          {/* Items */}
          <div className="space-y-4 mt-12">
            {/* Item 1 */}
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base max-sm:text-sm font-bold text-gray-800">
                    Velvet Sneaker
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    Size: MD
                  </p>
                  <button
                    type="button"
                    className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-current inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"
                      ></path>
                      <path d="M11 17v-" data-original="#000000"></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm max-sm:text-xs">$90.00</h3>
                <div className="flex items-center gap-2 max-sm:mt-1">
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    -
                  </button>
                  <p className="font-bold text-sm text-gray-800 max-sm:text-xs">
                    1
                  </p>
                  <button className="font-bold text-gray-500 hover:text-gray-700 border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* Add more items here */}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Subtotal</h3>
            <h3 className="font-bold text-lg">$90.00</h3>
          </div>
          <button className="mt-4 w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;
