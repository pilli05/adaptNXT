import React, { useContext } from "react";
import MenuBar from "../../components/menu/MenuBar";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import { MenuContext } from "../../App";

const Channel = () => {
  const { mobileMenu } = useContext(MenuContext);

  return (
    <>
      <MobileMenu />
      <div className="grid grid-cols-12 gap-2">
        <div
          className={
            mobileMenu ? "col-span-10" : "hidden md:block md:col-span-2"
          }
        >
          <MenuBar />
        </div>
        <div className="col-span-10 p-3">Channel Content</div>
      </div>
    </>
  );
};

export default Channel;
