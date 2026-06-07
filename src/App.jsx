import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Flip, ToastContainer } from "react-toastify";
import { useState } from "react";
import AddProduct from "./pages/AddProduct";
import Header from "./components/Header";
import EditProduct from "./pages/EditProduct";
import PNF from "./pages/PNF";

function App() {
  const [productData, setProductData] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home productData={productData} setProductData={setProductData} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              productData={productData}
              setProductData={setProductData}
            />
          }
        />
        <Route
          path="/addProduct"
          element={
            <AddProduct
              productData={productData}
              setProductData={setProductData}
            />
          }
        />
        <Route
          path="/product/:id/edit"
          element={
            <EditProduct
              productData={productData}
              setProductData={setProductData}
            />
          }
        />

        <Route path="/*" element={<PNF />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </>
  );
}

export default App;
