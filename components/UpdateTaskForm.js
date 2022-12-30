import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";

const UpdateTaskForm = ({ refetch }) => {
  const { user,editID} = useContext(AuthContext);
  console.log(editID._id)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateTask = (data) => {
    const id = editID._id;
    console.log(id);
    const newData = { ...data, id };
    console.log(newData);
    fetch(
      `https://task-manager-server-phi.vercel.app/updateTask`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        router.push("/mytask");
        toast("Task Updated");
        refetch();
      });
  };

  return (
    <div className="mx-auto mt-10 mb-16 w-75 max-w-2xl md:h-auto">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="px-4 py-2 space-y-6">
          <form onSubmit={handleSubmit(handleUpdateTask)}>
            <label className="leading-7 text-sm text-gray-600">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              name="email"
              value={user?.email}
              readOnly
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <br />
            <label className="leading-7 text-sm text-gray-600">
              <span className="label-text">Task title</span>
            </label>
            <input
              {...register("title", { required: "Please write your title" })}
              type="text"
              defaultValue={editID?.title}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
            <br />
            <label className="leading-7 text-sm text-gray-600">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: "Add description" })}
              type="text"
              defaultValue={editID?.description}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-xs"
              name="description"
              placeholder="description"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-xs">
                {errors.description.message}
              </span>
            )}
            <br />
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white my-3 py-1 px-2 border border-blue-500 hover:border-transparent rounded text-sm mr-2"
            >
              Update Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskForm;
