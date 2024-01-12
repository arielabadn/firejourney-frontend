// Products.js
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { request } from "graphql-request";
import Header from "../Header";
import BlogCard from "./BlogCard";

const Pages = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const { cocktails } = await request(
        "https://api-us-east-1.hygraph.com/v2/cl4ji8xe34tjp01yrexjifxnw/master",
        `
         {
            cocktails {
               id
               name
               slug
               info
               ingredients
               instructions
               image {
               url
               }
               category
            }
         }
      `
      );
      setProducts(cocktails);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header title="Resources" textAlign="text-center" />
      {/* <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 pt-4 mx-2 lg:max-w-none lg:grid-cols-3 md:grid-cols-2"> */}
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {products.map((product) => (
            <div key={product.id}>
              {/* <Link to={`/pages/${product.slug}`}> */}
                <BlogCard product={product} />
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pages;
