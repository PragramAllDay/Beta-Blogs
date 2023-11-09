"use client";

import React, { useContext, useLayoutEffect } from "react";
import Catogary from "./catogary";
import { CategoryContext } from "../context/CategoryContext";

const Categories = ({ categories }) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[0].attributes.Title);
  }, []);
  return (
    <div className="flex gap-6 mb-8 flex-wrap ">
      {categories.data.map((category) => {
        return (
          <div key={category.id}>
            <Catogary cat={category} />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
