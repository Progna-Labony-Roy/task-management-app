import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import CompletedTaskCard from "../components/CompletedTaskCard";
import MyTaskCard from "../components/MyTaskCard";

const completedtask = () => {
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

  return (
    <div className="mb-32">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-10 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {tasks?.length === 0
              ? "No task added"
              : tasks.map((task, index) => (
                  
                    <CompletedTaskCard
                    task={task}
                    key={index}
                    refetch={refetch}
                  ></CompletedTaskCard>
                  
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default completedtask;
