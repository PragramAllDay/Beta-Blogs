"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "../context/CategoryContext";

const Blogs = ({ blogs }) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs?.data.filter((blog) => {
    return blog.attributes.categories.data.some(
      (cat) => cat.attributes.Title === category
    );
  });
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBlogs?.map((blog) => {
          return (
            <>
              <div key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
