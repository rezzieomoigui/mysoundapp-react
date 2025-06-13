import React from "react";
import { Outlet } from "react-router";      
import Navbar from "./components/Navbar"; // Adjust the path as necessary

function Layout() {
  return (<>
        <Navbar />
        <Outlet />
  </>
  );
}

export default Layout;
