import React from "react";

const MyTaskCard = ({ _id,title, image, description }) => {

 
  return (
   
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog"/>
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs  mr-2">
                Complete
              </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs mr-2">
                Update
              </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs">
                Delete
              </button>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default MyTaskCard;
