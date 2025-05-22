"use client";

import { useParams } from "next/navigation";
// import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";

const page = () => {

  const [user, setUser] = useState();
 
  //  const paramsObj = use(params);
      const params = useParams();
       const slug = params?.slug;
       console.log(slug)



  if (!slug) {
    return <h1>Product Not Found !</h1>;
  }

  useEffect(() => {
    async function fetchUser() {

      try {
        const res = await fetch(`/api/description/${slug}`,{
          method:"GET",
         cache: "no-store"
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
    

    fetchUser()
    console.log(user)

  }, [slug]);

  console.log(user);

  return (
    <>
 <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        {/* Product Title */}
        <h1 className="text-3xl font-semibold mb-6 border-b border-gray-300 pb-3 text-gray-800">
          {user?.name || "Loading..."}
        </h1>
        
        {/* Product Image */}
        <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={user?.image}
            alt={user?.name || "Product"}
            className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Price and Category Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg">
              <span className="font-medium text-orange-500 block mb-1">Price:</span>
              <span className="text-2xl font-bold text-gray-800">
                {user?.price || "Loading..."}
              </span>
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg">
              <span className="font-medium text-orange-500 block mb-1">Category:</span>
              <span className="text-xl text-gray-800">
                {user?.category || "Loading..."}
              </span>
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 pt-6 border-t border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="w-1 h-6 bg-orange-500 mr-3 rounded"></span>
            Description
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-base leading-relaxed whitespace-pre-line text-gray-700">
              {user?.description || "No description available."}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md">
            Add to Cart
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 transition duration-200">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>

    </>
  );
};

export default page;
