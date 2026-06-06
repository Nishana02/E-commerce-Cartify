import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = ({ setProductData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const onAddClick = async (e) => {
    e.preventDefault()
    
    let newErrors = {};
    if (formData.title=="") {
      newErrors.title = "Title is required";
    }

    if (formData.price=="") {
      newErrors.price = "Price is required";
    }
    if (formData.category=="") {
      newErrors.category = "Category is required";
    }
    if (formData.image=="") {
      newErrors.image = "Image URL is required";
    }
    if (formData.description=="") {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        let apiResponse = await axios.post(
          "https://fakestoreapi.com/products",
          formData,
        );
        if (apiResponse.status === 201) {
          toast.success("Product Added Successfully");
          setProductData((prevProducts) => [...prevProducts, apiResponse.data]);
          setFormData({
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error occurred while adding product");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 mt-30">
        <h1 className="text-3xl font-bold text-center mb-6">Add Product</h1>

        <form className="space-y-4" onSubmit={onAddClick}>
          <div>
            <label className="block font-semibold mb-1">Product Title</label>
            <input
              type="text"
              placeholder="Enter product title"
              className="w-full border rounded-lg p-3"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border rounded-lg p-3"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              value={formData.price}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              placeholder="Enter category"
              className="w-full border rounded-lg p-3"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={formData.category}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full border rounded-lg p-3"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              value={formData.image}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              rows="4"
              placeholder="Enter product description"
              className="w-full border rounded-lg p-3"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>

            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Add Product
            </button>
            <button
              type="reset"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
