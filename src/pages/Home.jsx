import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Home = ({ productData, setProductData }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productData.length == 0) {
      getAllProducts();
    }
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const apiResponse = await axios.get("https://fakestoreapi.com/products");
      setProductData(apiResponse.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while getting all products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <img
          src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center m-10 mt-30">
        <h1 className="text-4xl font-bold text-center font-serif ms-20 flex-1">
          Products
        </h1>

        <Link
          to="/addProduct"
          className="bg-black flex items-center gap-2 me-2 text-white font-serif p-3 rounded-2xl ml-4 cursor-pointer hover:bg-green-700 hover:text-black transition-colors duration-300"
        >
          Add Product <FaPlus />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 m-20 ">
        {productData?.length > 0 ? (
          productData.map((eachProduct) => (
            <div
              key={eachProduct.id}
              className="bg-white border-2 rounded-lg shadow-md flex flex-col items-center p-6  "
            >
              <img
                src={eachProduct.image}
                alt=""
                className="w-32 h-32 object-contain mx-auto mb-4 3 hover:scale-125"
              />

              <h3 className="text-center text-lg font-semibold font-serif ">
                {eachProduct.title}
              </h3>

              <h3 className="text-center text-xl font-bold mt-4 text-green-700">
                <span className="font-bold">Price : </span>
                Rs. {eachProduct.price}
              </h3>

              <Link
                to={`/product/${eachProduct.id}`}
                className="bg-black font-serif text-white mt-5 px-4 py-2 rounded-lg 
                           hover:bg-green-600 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                View Product Details
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-center text-xl font-serif font-bold">
            No Products Available
          </h1>
        )}
      </div>
    </>
  );
};

export default Home;
