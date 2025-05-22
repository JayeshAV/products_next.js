"use client";

import Loader from "@/components/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";
import { date } from "yup";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [order, setorder] = useState("");

  const categories = ["all", "mobile", "laptop", "headphones", "smartwatch"];

  async function fetchProducts() {
    try {
      const res = await fetch(
        `/api/products?category=${selectedCategory}&order=${order}`
      );

      if (!res.ok) {
        // Check if the response was successful
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  // useEffect(() => {
  //   if (selectedCategory === "all") {
  //     setFiltered(products);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (selectedCategory === "all") {
  //     setFiltered(products);
  //   } else {
  //     const filtered = products.filter(
  //       (product) => selectedCategory === product.category
  //     );
  //     setFiltered(filtered);
  //   }
  // }, [selectedCategory]);

  const handledelete = async (id) => {
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Delted successful !");
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory,order]);

  if (!products) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">
          <Loader />
          ...
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">No products found. Add some!</p>
      </div>
    );
  }

  //  const FinalPRoducts = [...filtered].sort((a, b) => {
  //   if (order === "asc") {
  //     return a.price - b.price;
  //   } else {
  //     return b.price - a.price;
  //   }
  //   return 0;
  // });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[gray]-50 to-gray-100 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in-down">
        Our Awesome Products
      </h1>
      <div className="w-full flex flex-col md:flex-row md:justify-end gap-4 mb-6">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-[200px] border border-gray-400 rounded-sm outline-none text-lg p-3 bg-white text-gray-800"
          name="selectedCategory"
          value={selectedCategory}
          id="selectedCategory"
        >
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          name="order"
          id="order"
          className="w-full md:w-[200px] border border-gray-400 rounded-sm outline-none text-lg p-3 bg-white text-gray-800"
          value={order}
          onChange={(e) => setorder(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl border border-gray-100  hover:shadow-sm transition-all duration-300 flex flex-col"
          >
            <div className="w-full bg-[#FFFFFF] h-68 overflow-hidden rounded-t-2xl">
              <Link href={`/products/description/${product._id}`}>
              {/* /api/products?category=${selectedCategory}&order=${order} */}
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                )}
              </Link>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-medium  text-gray-900 truncate mb-3">
                  {product.name}
                </h2>

                <p className="text-xl flex justify-between font-bold text-blue-600">
                  ₹{parseFloat(product.price).toFixed(5)}
                  <button
                    onClick={() => handledelete(product._id)}
                    className="py-2  bg-gray-100 w-20  hover:bg-gray-600 text-black text-sm font-medium rounded-lg transition-all"
                  >
                    Delete
                  </button>
                </p>
              </div>

              {/* <Link  href={`/products/${product._id}`}> <button
              onClick={() => console.log("View product", product.name)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-17 rounded-lg transition-all"
            >
              View
            </button> </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
