import React from "react";

const MyTaskTable = ({ title, image, description }) => {

  return (
    <div class="flex flex-wrap -m-4">
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog"/>
        <div class="p-6">
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p class="leading-relaxed mb-3">{description}</p>
          <div class="flex items-center flex-wrap ">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded text-xs">
                Complete
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyTaskTable;
