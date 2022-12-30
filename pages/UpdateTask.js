import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import UpdateTaskForm from "../components/UpdateTaskForm";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/tasks?email=${user?.email}`;

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  

  //   const handleUpdateTask = (data) => {
  // console.log("dhurmatha",data)
  //     fetch(`https://daily-task-server-eta.vercel.app/editTask`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(data2),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         router.push("/EditPage");
  //         toast("Edit done");
  //       });
  //   };
  return (
    <div>
      <UpdateTaskForm
        tasks={tasks}
        refetch={refetch}
      ></UpdateTaskForm>
    </div>
  );
};

export default UpdateTask;
