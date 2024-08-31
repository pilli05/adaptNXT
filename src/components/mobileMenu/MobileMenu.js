import React, { useState, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { MenuContext } from "../../App";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu } = useContext(MenuContext);

  const location = useLocation();
  const { pathname } = location;
  const menuName = pathname === "/" ? "Dashboard" : pathname.slice(1);
  const newMenuName = menuName.charAt(0).toUpperCase() + menuName.slice(1);

  const openSideBar = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className=" md:hidden flex justify-between items-center bg-white py-2 px-3">
      <IoMenu size={25} className="cursor-pointer" onClick={openSideBar} />
      <h1 className="text-lg font-semibold text-violet-600">{newMenuName}</h1>
    </div>
  );
};

export default MobileMenu;
