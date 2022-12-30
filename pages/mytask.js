import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import MyTaskCard from "../components/MyTaskCard";


const mytask = () => {
//   const [data, setData] = useState();
//   const sendRequest = () => {
//     fetch("/api/tasks/")
//       .then((res) => res.json())
//       .then((data) => setData(data.message))
//       .catch((e) => console.log(e));
//   };

//   useEffect(() => {
//     sendRequest();
//   }, []);
const { user } = useContext(AuthContext);
const [myTask,setMyTask] =useState();

  const url = `http://localhost:5000/tasks?email=${user?.email}`;

  const { data: tasks = [] ,refetch} = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });


  return (
   <div className="lg:mb-72 md:mb-10 mb-1">
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-20 mx-auto">
      <div className="flex flex-wrap -m-4">
        {tasks?.length ===0 ? "No task added" :
            tasks.map((task, index) => (
                <MyTaskCard
                task={task}
                key={index}
                refetch={refetch}
                ></MyTaskCard>
            ))}
      </div>
      </div>
    </section>
   </div>
  );
};

export default mytask;
