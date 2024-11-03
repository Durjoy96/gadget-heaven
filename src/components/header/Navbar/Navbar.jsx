import React, { useEffect, useState } from "react";
import NavPage from "./NavPage";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const NavPages = [
    { path: "/", name: "Home" },
    {
      path: "/statistics",
      name: "Statistics",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
  ];

  const location = useLocation();
  const [isHome, setHome] = useState(false);
  useEffect(() => {
    setHome(location.pathname === "/");
  }, [location]);

  return (
    <div className={`max-w-screen-xl mx-auto px-5 ${isHome ? "pt-10" : ""} `}>
      <div className={`navbar ${isHome ? "bg-primary" : "bg-base-100"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavPages.map((item, idx) => (
                <NavPage key={idx} item={item}></NavPage>
              ))}
            </ul>
          </div>
          <Link
            className={`text-xl font-bold ${
              isHome ? "text-banner-content" : "text-base-content"
            }`}
            to="/"
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavPages.map((item, idx) => (
              <NavPage key={idx} item={item} isHome={isHome}></NavPage>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn btn-circle">
            <IoCartOutline className="w-6 h-6 fill-base-content" />
          </a>
          <a className="btn btn-circle">
            <GoHeart className="w-6 h-6 fill-base-content" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
