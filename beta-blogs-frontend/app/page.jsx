import Image from "next/image";
import Categories from "./components/categories";
import Blogs from "./components/Blogs";

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    },
  };
  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories", options);
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    },
  };
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/blogs?populate=*",
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <>
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </>
  );
}
