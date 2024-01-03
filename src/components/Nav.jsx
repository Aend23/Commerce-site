import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContex";

export default function Nav() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState("");
  const [user, setUser] = useState([]);
  const { id,logout } = useAuth();

  const navigate = useNavigate();

  
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users/" + id);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("User Not Found" + err);
      }
    };
    const existingCartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(existingCartItems.length);
    
    getUser();
  }, []);

  window.onscroll=() => {
    const cart = document.getElementById('cart');
    const userInfo = document.getElementById("user");
    userInfo.classList.add("invisible");
    cart.classList.add("invisible");
    }
  
  const handleSearch = () => {
    navigate("/shop", { state: search });
  };

  const handleCart = () => {
    const cart = document.getElementById("cart");
    cart.classList.toggle("invisible");
  };

 const handleLogout=()=>{
  logout();
  }

  const handleUser = () => {
    const userInfo = document.getElementById("user");
    userInfo.classList.toggle("invisible");
  };

  return (
    <div className="bg-[#c1d3fe] text-[#13315c] fixed z-[99] w-full ">
      <div className="flex justify-between items-center text-2xl h-20 px-8  font-medium cursor-pointer shadow-lg">
        <div className="title ">
          <Link to="/">
            <h2>Build Inovation</h2>
          </Link>
        </div>

        <div className="flex list-none gap-8 text-xl mx-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <li>About</li>
        </div>

        <div className="flex gap-5 items-center">
          <div className=" bg-white flex items-center px-2 rounded-md shadow-2xl border-2">
            <div className="serach-form border-r-2 border-gray-400 mr-2">
              <input
                type="search"
                placeholder="Search..."
                className="outline-none w-full h-full text-xl font-medium px-1 my-1 text-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </div>
            <FiSearch
              className="icon"
              onClick={() => {
                handleSearch;
              }}
            />
          </div>
          <div className="relative flex">
            <FiShoppingCart className="icon text-3xl" onClick={handleCart} />
            <span className=" bg-white border-2 text-center rounded-full -top-3 left-4 text-sm absolute w-6 ">
              {cartCount}
            </span>
          </div>{" "}
          <div onClick={handleUser}>
            <MdPerson className="text-3xl"  />
          </div>
        </div>
      </div>
      <div>
        <div className="w-64 absolute top-20 right-0 rounded-md bg-white invisible " id="user">
          <div className="flex flex-col font-semibold p-5 h-full gap-2">
            <img
              src={user?.image}
              alt=""
              className="w-24 border-2 rounded-full bg-blue-400 self-center "
            />
            <span>userName : {user?.username}</span>
            <span>Name : {user?.firstName + " " + user?.lastName}</span>
            <span>Age: {user?.age}</span>
            <span>Gender : {user?.gender}</span>
            <span>Email : {user?.email}</span>
            <span>Phone No : {user?.phone}</span>
            <span>Address : {user?.address?.address}</span>
          </div>
          <div className="pb-4 text-center">
          <button type="button " className="bg-red-600  font-semibold text-lg rounded-md p-2 text-white" onClick={handleLogout}> Logout</button>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
}
