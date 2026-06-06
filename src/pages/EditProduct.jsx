import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = ({productData,setProductData}) => {
  const { id } = useParams();

  const navigate=useNavigate()

  const [editData, setEditData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      let apiResponse = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      if (apiResponse.status == 200) {
        setEditData(apiResponse.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onEditClick = async (id) => {
    try {
      let apiResponse = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        editData,
      );
    if(apiResponse.status==200){
        toast.success("Successfully updated")
         setEditData(apiResponse.data)

  const updatedProducts = productData.map((product) =>
    product.id == id ? apiResponse.data : product
  );

  setProductData(updatedProducts);
       
        navigate("/")
    }
    } catch (error) {
      toast.error("Something went wrong while editing");
    }
  };

  return (
    <div className="m-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 mt-30">
        <h1 className=" text-3xl font-bold text-center mb-6">Edit Details</h1>

        <div>
          <label className="block font-semibold" htmlFor="">
            Product Title
          </label>
          <input
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
            className="w-full border rounded-lg p-3 mt-2"
            type="text"
          />
        </div>
        <div className="mt-5">
          <label className="block font-semibold" htmlFor="">
            Price
          </label>
          <input
            value={editData.price}
            onChange={(e) =>
              setEditData({ ...editData, price: e.target.value })
            }
            className="w-full border rounded-lg p-3 mt-2"
            type="text"
            placeholder="Enter product price"
          />
        </div>
        <div className="mt-5">
          <label className="block font-semibold" htmlFor="">
            Category
          </label>
          <input
            value={editData.category}
            onChange={(e) =>
              setEditData({ ...editData, category: e.target.value })
            }
            className="w-full border rounded-lg p-3 mt-2"
            type="text"
            placeholder="Enter product price"
          />
        </div>
        <div className="mt-5">
          <label className="block font-semibold" htmlFor="">
            Image URL
          </label>
          <input
            value={editData.image}
            onChange={(e) =>
              setEditData({ ...editData, image: e.target.value })
            }
            className="w-full border rounded-lg p-3 mt-2"
            type="text"
            placeholder="Enter product price"
          />
        </div>
        <div className="mt-5">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            value={editData.description}
            onChange={(e) =>
              setEditData({ ...editData, description: e.target.value })
            }
            rows="4"
            placeholder="Enter product description"
            className="w-full border rounded-lg p-3"
          ></textarea>
          <div className="mt-3">
            <button
            onClick={()=>onEditClick(id)} className="mx-50    bg-green-900 p-2 rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
