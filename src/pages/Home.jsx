import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Home = ({productData,setProductData}) => {
//   const [productData, setProductData] = useState([]);

 useEffect(() => {
  if (productData.length === 0) {
    getAllProducts();
  }
}, []);

  const getAllProducts = async () => {
    try {
      let apiResponse = await axios.get("https://fakestoreapi.com/products");
      console.log(apiResponse.data)
      setProductData(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center m-10 mt-30">
        <h1 className="text-4xl font-bold text-center ms-20 flex-1">
          Products
        </h1>
        <Link to={"/addProduct"} className="bg-black text-white p-3 rounded-2xl ml-4 cursor-pointer hover:bg-green-700 hover:text-black transition-colors duration-300">
          Add New Product
        </Link>
      </div>

      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-6 m-20">
        {productData?.length > 0 ? (
          productData.map((eachProduct) => (
            <div
              key={eachProduct.id}
              className="border-2 rounded-lg shadow flex flex-col items-center p-4"
            >
              <img
                src={eachProduct.image}
                alt={eachProduct.title}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-center text-xl font-semibold">
                {eachProduct.title}
              </h3>
              <h3 className="text-center text-xl font-bold mt-4">
                <span className="font-bold">Price : </span>Rs.
                {eachProduct.price}
              </h3>
              <Link to={`/product/${eachProduct.id}`}  className="bg-black text-white mt-5 p-3 rounded  hover:bg-green-700 hover:text-black transition-colors duration-300cursor-pointer">
                View Product Details
              </Link>
            </div>
          ))
        ) : (
          <h1>No Products Available</h1>
        )}
      </div>
    </>
  );
};

export default Home;
