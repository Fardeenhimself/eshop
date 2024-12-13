import React from "react";

const gallery = () => {
  return (
    <>
      <h1 className="text-4xl font-bold leading-tight mb-4 flex justify-center">
        Gallery
      </h1>
      <section className="pt-14 pb-10">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto  flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-40 w-60 sm:w-full sm:h-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-40 w-60 sm:w-full sm:h-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-40 w-60 sm:w-full sm:h-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-40 w-60 sm:w-full sm:h-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default gallery;
