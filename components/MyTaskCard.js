import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import * as React from 'react';

const MyTaskCard = ({ task, refetch }) => {
  const {setEditID}=useContext(AuthContext);
  const router=useRouter();
  const { title, image, description } = task;

  const handleDeleteTask = (data) => {
    const proceed = window.confirm("Delete Task?");
    if (proceed) {
fetch(`https://task-manager-server-phi.vercel.app/deleteTask/${data?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            refetch();
          }
        });
    }
    fetch(``, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleComplete =(data) =>{
    fetch(`https://task-manager-server-phi.vercel.app/tasks/completed/${data?._id}`,{
      method: "PUT"
    })
    .then(res => res.json())
    .then(data =>{ 
      console.log(data)
      toast("Task completed")
      refetch()
    })
  }

//   const gotoNewRout=(data)=>{
//     setEditID(data)
//     router.push('/UpdateTask');
// }

  return (
    
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt="image"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            {
              task?.confirm ? <button disabled className="bg-transparent text-zinc-400 font-semibold  py-1 px-2 border border-zinc-400 rounded text-xs  mr-2">
              Completed
            </button> :
            <Link href="/completedtask">
            <button onClick={() => handleComplete(task)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs  mr-2">
              Complete
            </button></Link>
            }
            
            <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs mr-2">
              Update
            </button>
            <button
              onClick={() => handleDeleteTask(task)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTaskCard;
