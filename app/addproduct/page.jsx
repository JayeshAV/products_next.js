"use client";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "../globals.css";

const AddProduct = () => {
  const [activeField, setActiveField] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      image: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required !"),
      price: Yup.string().required("Price is Required !"),
      description: Yup.string().required("description is Required !"),
      category: Yup.string().required("category is Required !"),
      image: Yup.string().required("imgage is reuired"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => alert("Product added Successful !"))
        .catch((Err) => console.log(Err));
      resetForm();
    },
  });

  const {
    handleBlur,
    handleReset,
    handleSubmit,
    handleChange,
    errors,
    touched,
    values,
  } = formik;

  const categories = ["All", "Mobile", "Laptop", "Headphones", "Smartwatch"];

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-[#EDEEF1] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Product Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                activeField === "name" ? "text-blue-600" : "text-gray-700"
              }`}
            >
              Product Name
            </label>
            <div
              className={`relative rounded overflow-hidden transition-all duration-300 ${
                activeField === "name"
                  ? "ring-2 ring-blue-500"
                  : "border border-gray-300"
              }`}
            >
              <input
                type="text"
                placeholder="Enter product name"
                onChange={handleChange}
                value={values.name}
                name="name"
                id="name"
                onBlur={handleBlur}
                className="w-full p-3 outline-none bg-white text-gray-800"
              />
              {activeField === "name" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
              )}
            </div>
            {touched.name && errors.name && (
              <h1 className="text-md text-red-400">{errors.name}</h1>
            )}
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                activeField === "description"
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              Category
            </label>
            <div
              className={`relative rounded overflow-hidden transition-all duration-300 ${
                activeField === "description"
                  ? "ring-2 ring-blue-500"
                  : "border border-gray-300"
              }`}
            >
              {/* <input
                placeholder="Enter category description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                name="category"
                id="category"
                className="w-full p-3 outline-none bg-white text-gray-800 resize-none"
              ></input> */}

              <select
                className="w-full p-3 outline-none bg-white text-gray-800 resize-none text-left"
                name="category"
                value={values.category}
                onChange={handleChange}
                id="category"
              >
                <option value="all">All</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="headphones">Headphones</option>
                <option value="smartwatch">Smartwatch</option>
              </select>

              {activeField === "category" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
              )}
            </div>
            {touched.category && errors.category && (
              <h1 className="text-md text-red-400">{errors.category}</h1>
            )}
          </div>
          <div className="mb-4">
            <label
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                activeField === "description"
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              Product Image URL
            </label>
            <div
              className={`relative rounded overflow-hidden transition-all duration-300 ${
                activeField === "description"
                  ? "ring-2 ring-blue-500"
                  : "border border-gray-300"
              }`}
            >
              <input
                placeholder="Enter image description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                name="image"
                id="image"
                className="w-full p-3 outline-none bg-white text-gray-800 resize-none"
              ></input>
              {activeField === "image" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
              )}
            </div>
            {touched.image && errors.image && (
              <h1 className="text-md text-red-400">{errors.image}</h1>
            )}
          </div>
          <div className="mb-4">
            <label
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                activeField === "price" ? "text-blue-600" : "text-gray-700"
              }`}
            >
              Price
            </label>
            <div
              className={`relative rounded overflow-hidden transition-all duration-300 ${
                activeField === "price"
                  ? "ring-2 ring-blue-500"
                  : "border border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <span className="pl-3 text-gray-500">₹</span>
                <input
                  type="text"
                  placeholder="0.00"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="price"
                  id="price"
                  value={values.price}
                  className="w-full p-3 outline-none bg-white text-gray-800"
                />
              </div>
              {activeField === "price" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
              )}
            </div>
            {touched.price && errors.price && (
              <h1 className="text-md text-red-400">{errors.price}</h1>
            )}
          </div>

          <div className="mb-6">
            <label
              className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                activeField === "description"
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              Description
            </label>
            <div
              className={`relative rounded overflow-hidden transition-all duration-300 ${
                activeField === "description"
                  ? "ring-2 ring-blue-500"
                  : "border border-gray-300"
              }`}
            >
              <textarea
                placeholder="Enter product description"
                rows="4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
                id="description"
                className="w-full p-3 outline-none bg-white text-gray-800 resize-none"
              ></textarea>
              {activeField === "description" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
              )}
            </div>
            {touched.description && errors.description && (
              <h1 className="text-md text-red-400">{errors.description}</h1>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
