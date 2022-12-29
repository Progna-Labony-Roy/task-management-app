import React, { useState } from "react";
import Modal from "../components/Modal";

const addtask = () => {
  const [showModal, setShowModal] = useState(false);

  return (
   <>
    <div className="pb-72">
      <h2 className="lg:mx-96 md:mx-20 mx-20 my-10 font-semibold">
        For adding your daily task please click here
      </h2>

      {/* Modal toggle  */}
      <button onClick={()=> setShowModal(true)}
        className="lg:mx-96 md:mx-20 mx-20 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center"
      >
        Add Task
      </button>
    </div>
    <Modal isVisible={showModal} onClose={()=>setShowModal(false)}></Modal>
   </>
  );
};

export default addtask;
