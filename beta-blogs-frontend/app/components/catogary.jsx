"use client";
import React, { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const Catogary = ({ cat }) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      className={`${
        cat.attributes.Title === category
          ? "bg-[#ffff] text-black"
          : "bg-[#af8533]"
      } p-4 rounded-lg shadow-md cursor-pointer`}
      onClick={() => changeCategory(cat.attributes.Title)}
    >
      {cat.attributes.Title}
    </div>
  );
};

export default Catogary;
