import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthProvider from "./AuthProvider";

const CompletedTask = ({ task, refetch }) => {
    const { title, image, description } = task;
   
    const router = useRouter();

  const handleDeleteTask = (data) => {
    const proceed = window.confirm("Delete Task?");
    if (proceed) {
fetch(`http://localhost:5000/deleteTask/${data?._id}`, {
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

  const route=(data)=>{
    setUserTask(data)
    router.push('/mytask');
}

    return (
        <div className="p-4 md:w-1/3">
            {
                task?.confirm && 
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            
            {/* <Link href="/mytask">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs mr-2">
              Not Completed
            </button>
            </Link> */}
            <button
              onClick={() => handleDeleteTask(task)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
            }
      
    </div>
    );
};

export default CompletedTask;