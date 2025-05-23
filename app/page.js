// app/page.jsx
import Link from 'next/link';

const HomePage = () => {
  return (
   <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#FAFAFB]-100 via-[#FAFAFB]-200 to-[#FAFAFB]-200 p-6 sm:p-8">
  <div className="text-center max-w-4xl mx-auto">
   
    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in">
      Manage Your Products Effortlessly
    </h1>
    <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-in-delay-1">
      Streamline your inventory, add new items with ease, and get a clear overview of your products.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
      <Link href="/products">
        <button className="bg-[#1E2939]-600 hover:bg-gray-300 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
          View All Products
        </button>
      </Link>
      <Link href="/addproduct">
        <button className="bg-[#1E2939]-600 hover:bg-gray-300 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
          Add New Product
        </button>
      </Link>
    </div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-300 animate-fade-in-delay-3">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Overview</h3>
        <p className="text-gray-700">See all your product details at a glance on a dedicated page.</p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-300 animate-fade-in-delay-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Entry</h3>
        <p className="text-gray-700">Add new products to your inventory in just a few simple steps.</p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-300 animate-fade-in-delay-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Always Up-to-Date</h3>
        <p className="text-gray-700">Keep your product information current with easy editing features.</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default HomePage;