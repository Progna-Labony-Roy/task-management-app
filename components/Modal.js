import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const Modal = ({isVisible, onClose}) => {
  const {user}= useContext(AuthContext);
  

  const imageApiKey = "1c8965dc26bd746bd8af1064041d57c5";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [inputs, setInputs]= useState({ title:"", image:"", email:user?.email, description:"" });

const handleAddTask = data =>{
  const image=data.image[0];
  const formData =new FormData();
  formData.append('image', image);
  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageApiKey}`;
  fetch(url,{
    method: 'POST',
    body: formData
})
.then(res => res.json())
.then(imgData =>{
  if(imgData.success){
    // console.log(imgData.data.url);
     
    const tasks ={
      title: data.title,
      email: data.email,
      description: data.description,
      image: imgData.data.url,
      comment:"",
      confirm: false
    }

    fetch('https://task-manager-server-phi.vercel.app/tasks',{
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(tasks)
            })
            .then(res => res.json())
            .then(result =>{
              console.log(result);
              toast.success(`Task is added successfully`);
            })
  }
})
}
  
  if(!isVisible) return null;

  return (     
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="lg:mx-96 md:mx-16 mx-10 mt-24 mb-16 w-full max-w-2xl md:h-auto">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between px-4 py-2 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button onClick={()=>onClose()}  type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
            </div>
            <div className="px-4 py-2 space-y-6">
            <form onSubmit={handleSubmit(handleAddTask)}>
            <label className="leading-7 text-sm text-gray-600">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="text"
            name="email"
            value={user?.email}
            // readOnly
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <br />
        <label className="leading-7 text-sm text-gray-600">
            <span className="label-text">Task title</span>
          </label>
          <input
            {...register("title", { required: "Please write your title" })}
            type="text"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
          />
          {errors.title && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
          <br />
        <label className="leading-7 text-sm text-gray-600">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: "Add description" })}
              type="text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
              name="description"
              placeholder="description"
            ></textarea>
            {errors.description && (
            <span className="text-red-500 text-xs">{errors.description.message}</span>
          )}
          <br />
        <label className="leading-7 text-sm text-gray-600">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", { required: "Photo is required" })}
            type="file"
            name="image"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
          />
          {errors.image && (
            <span className="text-red-500 text-xs">T{errors.image.message}</span>
          )}
          <br />
          <button data-modal-toggle="defaultModal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
      </form>
            </div>
        </div>
    </div>
    </div>

    
  );
};

export default Modal;
