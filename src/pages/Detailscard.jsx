import React, { useEffect, useState } from "react";
import "./DetailsCard.css";
import { formatPrice } from "../utils/helpers";
import { FaPlus,FaMinus } from "react-icons/fa";
import { useLocation } from "react-router-dom";



const Detailscard = () => {
  const location = useLocation();
  const [product, setProduct] = useState(location.state);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data.products[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);

  const addToCartHandler = () => {
   let totalPrice = quantity* discountedPrice;
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      existingCartItems[existingProductIndex].quantity += quantity;
    } else {
      existingCartItems.push({
        ...product,
        quantity: quantity,
        discountedPrice: discountedPrice,
        totalPrice : totalPrice,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

  };


  return (
    <main className=" bg-whitesmoke ">
      <div className="product-single px-10 ">
        <div className="container relative mt-24">
          <div className="product-single-content bg-white grid">
            <div className="product-single-l">
              <div className="product-img">
                <div className="product-img-zoom flex justify-center bg-gray-200 shadow-xl p-10">
                  <img
                    src={
                      product ? (product.images ? product.images[0] : "") : ""
                    }
                    alt=""
                    className="img-cover"
                  />
                </div>

                <div className=" flex items-center justify-center my-4 gap-4 border-2 shadow-xl p-4 rounded-md">
                  <div className=" ">
                    <img
                      src={
                        product ? (product.images ? product.images[1] : "") : ""
                      }
                      alt=""
                      className="img-cover object-cover hover:scale-90 transition ease-in"
                    />
                  </div>
                  <div className="thumb-item ">
                    <img
                      src={
                        product ? (product.images ? product.images[2] : "") : ""
                      }
                      alt=""
                      className="img-cover object-cover hover:scale-90 transition ease-in"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={
                        product ? (product.images ? product.images[3] : "") : ""
                      }
                      alt=""
                      className="img-cover object-cover hover:scale-90 transition ease-in"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={
                        product ? (product.images ? product.images[4] : "") : ""
                      }
                      alt=""
                      className="img-cover object-cover hover:scale-90 transition ease-in"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-single-r relative">
              <div className="product-details ">
                <div className="title text-xl font-semibold">{product?.title}</div>
                <div>
                  <p className="para font-bold text-xl">{product?.description}</p>
                </div>
                <div className="info flex items-center flex-wrap text-lg">
                  <div className="rating">
                    <span className="text-[#0077b6] font-medium">Rating:</span>
                    <span className="mx-1">{product?.rating}</span>
                  </div>
                  <div className=""></div>
                  <div className="brand">
                    <span className="text-[#0077b6] font-semibold">Brand:</span>
                    <span className="mx-1">{product?.brand}</span>
                  </div>
                  <div className=""></div>
                  <div className="brand">
                    <span className=" text-[#0077b6] font-medium">Category:</span>
                    <span className="mx-1 ">
                      {product?.category ? product.category.replace("-", " ") : ""}
                    </span>
                  </div>
                </div>

                <div className="price">
                  <div className="flex items-center">
                    <div className="old-price text-gray">
                      {formatPrice(product?.price)}
                    </div>
                    <span className="text-xl mx-2 text-black">
                      Inclusive of all taxes
                    </span>
                  </div>

                  <div className="flex items-center my-1">
                    <div className="new-price font-medium  text-[#0077b6]">
                      {formatPrice(discountedPrice)}
                    </div>
                    <div className="discount bg-orange text-lg  font-medium ">
                      {product?.discountPercentage} % OFF
                    </div>
                  </div>
                </div>

                <div className="qty flex items-center my-4">
                  <div className="qty-text">Quantity:</div>
                  <div className="qty-change flex justify-center mx-3 gap-8">
                    <button
                      type="button"
                      className="qty-decrease flex items-center justify-center" onClick={()=>setQuantity(Math.max(1,quantity-1))}
                    >
                      <FaMinus />
                    </button>
                    <div className="qty-value flex items-center justify-center">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      className="qty-increase flex items-center justify-center" onClick={()=>setQuantity(quantity+1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  {product?.stock === 0 ? (
                    <div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 font-medium">
                      out of stock
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="btns">
                  <button type="button" className="add-to-cart-btn btn ">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="btn-text mx-2" onClick={addToCartHandler}>add to cart</span>
                  </button>
                  <button type="button" className="buy-now btn mx-3">
                    <span className="btn-text">buy now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {cartMessageStatus && <CartMessage />} */}
    </main>
  );
};

export default Detailscard;
