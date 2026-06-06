import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDetails = ({ productData, setProductData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const changedProduct = productData.find(
      (product) => product.id === Number(id),
    );

    if (changedProduct) {
      setData(changedProduct);
    } else {
      getSingleProduct(id);
    }
  }, [id, productData]);

  const getSingleProduct = async (id) => {
    try {
      let apiResponse = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      setData(apiResponse.data);
    } catch (error) {
      toast.error("Something went wrong while fetching");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await axios.delete(
        `https://fakestoreapi.com/products/${id}`,
      );

      const updatedProducts = productData.filter(
        (prod) => prod.id !== Number(id),
      );
      setProductData(updatedProducts);
      toast.success("Successfully Deleted");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong while deleting");
    }
  };

  return (
    <>
      <div className="mt-35 px-4">
        <h1 className="text-center text-3xl font-bold font-serif mb-10">
          Product Details
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={data.image}
              alt=""
              className="w-40 h-40 md:w-60 md:h-60 object-contain"
            />
          </div>

          <div className="border rounded-lg w shadow p-6 flex-1 mt-5 mx-30">
            <h2 className="text-xl font-semibold mb-4">
              <span className="font-bold">Title : </span>
              {data.title}
            </h2>
            <p className="text-black font-semibold  mb-4">
              <span className="font-bold">Category : </span>
              {data.category}
            </p>
            <p className="text-black font-semibold  mb-4">
              <span className="font-bold">Description :</span>
              {data.description}
            </p>
            <p className="font-bold text-lg">Price: Rs.{data.price}</p>
            <div className="mt-20 flex  gap-3 items-center">
              <Link
                to={`/product/${id}/edit`}
                className="bg-blue-600 ms-40 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-800"
              >
                Edit
              </Link>

              <button
                onClick={() => onDeleteClick(id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
