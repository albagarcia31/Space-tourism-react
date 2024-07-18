import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* <p>Banner</p> */}
      <Outlet />
      {/* <p>Footer</p> */}
    </div>
  );
};

export default Layout;
