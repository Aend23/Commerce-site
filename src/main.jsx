// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { AuthProvider } from "./utils/AuthContex.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider> 
    <Router>
      <Routes>
        <Route path="*" element={<PrivateRoute/>}>
          <Route path="*" element={<App/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </AuthProvider>
);
