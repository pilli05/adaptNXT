import React, { useContext, useState } from "react";
import menuList from "../../constants/MenuList";
import { Link, useLocation } from "react-router-dom";
import { MenuContext } from "../../App";

const MenuBar = () => {
  const { setMobileMenu } = useContext(MenuContext);

  const location = useLocation();
  const { pathname } = location;
  const [activeMenu, setActiveMenu] = useState(pathname);
  const handleMenu = (menuLink) => {
    setActiveMenu(menuLink);
    setMobileMenu(false);
  };

  return (
    <div className="bg-white h-screen px-1 py-2">
      <div className="mb-3 p-0">
        {menuList.map((menu, index) => (
          <div
            key={index}
            className={
              activeMenu === menu.link
                ? "bg-pink-100 px-2 py-2 rounded-lg text-violet-600"
                : "bg-transparent px-2 py-2 rounded-lg text-gray-700 hover:text-violet-600 "
            }
          >
            <Link
              to={menu.link}
              className=" font-medium"
              onClick={() => handleMenu(menu.link)}
            >
              {menu.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
