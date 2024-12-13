import React from "react";
import Pcard from "../constants/pcard";

function products() {
  return (
    <section className="dark:bg-gray-900">
      <div className="px-2 mb-12 mx-auto py-8 max-w-4xl">
        <header>
          <h2 className="mb-4 font-semibold dark:text-gray-100 text-2xl text-center">
            Books You May Like
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <Pcard />
          <Pcard />
          <Pcard />
          <Pcard />
          <Pcard />
          <Pcard />
        </div>
      </div>
    </section>
  );
}

export default products;
