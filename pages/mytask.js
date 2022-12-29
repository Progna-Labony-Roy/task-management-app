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

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`https://task-manager-server-phi.vercel.app/tasks?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [user?.email]);


  return (
   <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {tasks?.length ===0 ? "No task added" :
            tasks.map((item, index) => (
                <MyTaskCard
                description={item.description}
                title={item.title}
                id={item.id}
                image={item.image}
                key={index}
                
                ></MyTaskCard>
            ))}
      </div>
      </div>
    </section>
   </div>
  );
};

export default mytask;
