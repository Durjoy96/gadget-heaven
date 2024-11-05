import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { addToCardContext } from "../../routes/Root";
import { wishlistContext } from "../../routes/Root";
import { toast } from "react-toastify";

const Details = () => {
  const data = useLoaderData();

  const params = useParams();

  const [newData, setNewData] = useState({});

  useEffect(() => {
    const filteredData = data.find(
      (item) => item.product_id == params.productId
    );
    setNewData(filteredData);
  }, [data, params.productId]);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = newData;

  const AddToCartBtn = useContext(addToCardContext);

  const AddToCardBtnHandler = (newData) => {
    AddToCartBtn(newData);
    toast.success("Added to the cart!");
  };

  const wishlistBtn = useContext(wishlistContext);

  const wishlistBtnHandler = (newData, event) => {
    wishlistBtn(newData);
    toast.success("Added to the wishlist!");
    event.target.parentElement.setAttribute("disabled", "true");
  };

  return (
    <div>
      <div className="bg-primary pt-8 pb-72 text-center relative">
        <h2 className="text-3xl font-bold text-banner-content">
          Product Details
        </h2>
        <p className="max-w-xl mx-auto text-base font-normal text-banner-content mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="bg-base-100 rounded-3xl absolute top-60 left-0 right-0 mx-auto max-w-screen-xl">
        <div className="p-8 grid gap-6 grid-cols-1 md:grid-cols-[.3fr_1fr]">
          <div>
            <img src={product_image} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-card-content">
              {product_title}
            </h3>
            <p className="mt-3 text-xl font-semibold text-card-content-secondary">
              Price: ${price}
            </p>
            <span
              className={`inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium ${
                availability
                  ? "bg-green-600/20 border border-green-600 text-green-600"
                  : "bg-red-600/10 border border-red-600 text-red-600"
              }`}
            >
              {availability ? "In Stock" : "Out Of Stock"}
            </span>
            <p className="text-lg font-normal text-card-content-secondary mt-4">
              {description}
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-card-content">
                Specification:
              </h4>
              <ol className="mt-3 list-decimal list-inside text-lg text-card-content-secondary">
                {Specification &&
                  Specification.map((item, idx) => <li key={idx}>{item}</li>)}
              </ol>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-card-content">Rating:</h4>
              <span className="flex items-center gap-6">
                <ReactStars
                  key={product_id}
                  value={rating}
                  isHalf={true}
                  edit={false}
                  size={26}
                />
                <span className="px-3 py-1 text-base font-medium text-card-content bg-base-300 rounded-full">
                  {rating}
                </span>
              </span>
            </div>
            <div className="flex gap-6 mt-4">
              <button
                onClick={() => AddToCardBtnHandler(newData)}
                className="flex items-center gap-2 px-6 py-1 rounded-full bg-primary text-lg font-bold text-primary-content border-2 border-primary hover:text-primary hover:bg-primary-content"
              >
                Add To Card <IoCartOutline />
              </button>
              <button
                onClick={() => wishlistBtnHandler(newData, event)}
                className="p-3 rounded-full border-2 bg-base-200 hover:bg-base-300 disabled:bg-base-300 disabled:cursor-no-drop"
              >
                <GoHeart className="w-6 h-6 stroke-card-content-secondary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
