import React, { useState } from "react";
import MyTaskCard from "../components/MyTaskCard";


const mytask = () => {
  const [data, setData] = useState();
  const sendRequest = () => {
    fetch("/api/tasks/")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((e) => console.log(e));
  };

  useState(() => {
    sendRequest();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data?.length &&
          data.map((item, index) => (
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
  );
};

export default mytask;
