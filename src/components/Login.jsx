// src/components/Login.js
import React, { useState } from "react";
import { useAuth } from "../utils/AuthContex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const id = data.id;
        login(token,id);
        navigate("/");
      }
    } catch (error) {
      console.error("Error" + error);
    }
  };

  return (
    <div className=" w-full h-screen">
      <div className="bg-black/60 w-full h-screen top-0 left-0 fixed"></div>
      <div className="fixed w-full z-50 py-24 px-4">
        <div className="bg-[#a2d2ff]/75 max-w-[450px] h-[600px] mx-auto text-white rounded-lg max-md:max-w-[550px]">
          <div className="max-w-[320px] mx-auto py-16 max-md:px-8 max-md:max-w-[550px]">
            <h2 className="text-white text-3xl  font-medium text-center">
              Login
            </h2>
            <div className=" w-full flex flex-col py-6">
              <input
                className="bg-neutral-700 rounded p-3 my-2"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="bg-neutral-700 rounded p-3 my-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="py-3 mt-10 mb-1 bg-[#0077b6] font-bold rounded"
                onClick={handleLogin}
              >
                Login
              </button>

              <div className="flex justify-between mb-[4rem] text-gray-700 mt-4">
                <p>
                  <input type="checkbox" className="" /> Remember me
                </p>
                <span>Need help?</span>
              </div>
            </div>
            <span className="content-center text-lg font-semibold text-black ">Register</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
