import React from "react";
import logo from "../assets/logo.png";
import { Outlet } from "react-router";
import { useState } from "react";
import NavItems from "../components/NavItems";

function DashboardLayout() {
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
      href: "/login",
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
