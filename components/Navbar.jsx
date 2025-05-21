
"use client"; 

import Link from 'next/link'; 
import { useState } from 'react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <nav className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-4 shadow-md sticky top-0 z-999">
      <div className="container mx-auto flex justify-between items-center">
    
        <Link href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">
          My App
        </Link>

     
        <div className="hidden md:flex space-x-6"> 
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300 text-lg">
            Home
          </Link>
          <Link href="/products" className="text-gray-300 hover:text-white transition duration-300 text-lg">
            Products
          </Link>
          <Link href="/addproduct" className="text-gray-300 hover:text-white transition duration-300 text-lg">
            Add Product
          </Link>
         
        </div>

     
        <div className="md:hidden"> 
          <button
          onClick={()=>setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
           
            {isOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-2 pb-3 pt-2 sticky top-0 z-999"> 
          <Link href="/" className="block text-gray-300 hover:text-white transition duration-300 text-lg px-3 py-2 rounded-md bg-gray-700" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="block text-gray-300 hover:text-white transition duration-300 text-lg px-3 py-2 rounded-md hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link href="/addproduct" className="block text-gray-300 hover:text-white transition duration-300 text-lg px-3 py-2 rounded-md hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Add Product
          </Link>
          
        </div>

      )}

    </nav>
  );
};

export default Navbar;