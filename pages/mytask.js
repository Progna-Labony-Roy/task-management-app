import React, { useState } from 'react';
import MyTaskTable from '../components/MyTaskTable';

const mytask = () => {
    const [data,setData]=useState();
    const sendRequest = () =>{
        fetch("/api/tasks/")
        .then((res) => res.json())
        .then((data)=> setData(data.message))
        .catch((e)=> console.log(e))
    }

    useState(()=>{
        sendRequest();
    },[])
    return (
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  {data && data.map((item, index)=>(
                <MyTaskTable description={item.description} title={item.title} id={item.id} image={item.image} key={index}></MyTaskTable>
            ))}
  </div>
</section>
       
         
            
       
    );
};

export default mytask;