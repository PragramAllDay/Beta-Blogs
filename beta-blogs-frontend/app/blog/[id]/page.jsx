import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

async function fetchBlog(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    },
  };
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

const page = async ({ params }) => {
  const blog = await fetchBlog(params.id);
  const imgUrl =
    "http://127.0.0.1:1337" + blog?.data.attributes.img.data.attributes.url;
  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <Link href={"/"}>{"< Back"}</Link>
        <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
          <Image layout="fill" objectFit="cover" src={imgUrl} alt="" />
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-semibold">
            {blog?.data.attributes.Title}
          </h1>
          <div className="text-gray-600 mt-2">
            <ReactMarkdown>{blog?.data.attributes.Description}</ReactMarkdown>
          </div>
          <div className="mt-4 flex items-center text-gray-400">
            <span className="text-sm">
              Published on{" "}
              {new Date(blog?.data.attributes.publishedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
