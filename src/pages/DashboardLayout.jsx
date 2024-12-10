import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { Outlet } from "react-router";
import { useState } from "react";
import NavItems from "../components/NavItems";

function DashboardLayout() {
  // const credential = localStorage.getItem("login");

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!credential) {
  //     return navigate("/");
  //   }
  // }, []);

  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Transfer",
      href: "/transfer",
    },
    {
      name: "Topup",
      href: "/topup",
    },
    {
      name: "Sign Out",
      href: "/signout",
    },
  ];
  return (
    <>
      <nav className="flex items-center w-screen justify-between bg-white py-4 px-4">
        <img src={logo} />
        <div className="flex gap-x-8">
          <NavItems menu={menu} />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
