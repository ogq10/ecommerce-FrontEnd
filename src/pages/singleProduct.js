import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/RTK/productsApi";
import { Navbar } from "../components";
import SingleProductUI from "../components/SingleProduct";
export default function SingleProduct() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log("the id >> ", id);
  const { data } = useGetProductByIdQuery(id);
  JSON.stringify(data);
  return (
    <>
      <Navbar />

      <SingleProductUI data={data} />
    
    </>
  );
}
