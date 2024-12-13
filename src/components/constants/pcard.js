import React from "react";

function pcard() {
  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-48 m-4 rounded h-52 md:h-auto md:w-48"
          src="https://images.pexels.com/photos/2035729/pexels-photo-2035729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
            Orange Pie
          </h3>
          <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: $10
          </h5>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
          >
            Buy Now
          </button>
        </div>
      </a>
    </>
  );
}

export default pcard;
