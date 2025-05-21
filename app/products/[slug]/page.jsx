"use client";

// import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";

const page = ({ params }) => {

  const [user, setUser] = useState();
 
   const paramsObj = React.use(params);
const id = paramsObj.slug;


  if (!id) {
    return <h1>Product Not Found !</h1>;
  }

  useEffect(() => {
    async function fetchUser() {

      try {
        const res = await fetch(`/api/products/${id}`,{
          method:"GET"
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setUser(data);

      } catch (error) {
        console.log(error);
      }
    }
    
    if(id){
          fetchUser()
    }

  }, [id]);

  console.log(user);

  return (
    <>
      <div className="bg-gray-600">
        <h1>{user?.name}</h1>
      </div>
    </>
  );
};

export default page;
