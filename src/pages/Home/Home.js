import React, { useContext, useState } from "react";
import MenuBar from "../../components/menu/MenuBar";
import { IoIosInformationCircleOutline } from "react-icons/io";
import BiAxialLineChart from "../../components/charts/BiAxialLineChart";
import PieCharts from "../../components/charts/PieCharts";
import { GoDotFill } from "react-icons/go";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import { MenuContext } from "../../App";

const Home = () => {
  const { mobileMenu } = useContext(MenuContext);

  return (
    <>
      <MobileMenu />
      <div className=" grid grid-cols-12 gap-2">
        <div
          className={
            mobileMenu ? "col-span-10" : "hidden md:block md:col-span-2"
          }
        >
          <MenuBar />
        </div>

        <div className="col-span-12 md:col-span-10 ">
          <div className="bg-slate-100 mr-2 p-1">
            <div className="hidden md:block bg-white w-[115px] px-2 py-1 m-1 rounded-t-xl ">
              <h1 className="text-xl font-semibold text-violet-600">
                Dashboard
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-2 my-3 overflow-y-auto h-[88vh]">
            <div className="p-3 col-span-10 lg:col-span-7 rounded-lg h-[88vh] bg-white">
              <div className=" flex items-center mb-6">
                <h1 className="text-xl font-semibold text-gray-700 mr-2">
                  Sales vs Orders
                </h1>

                <IoIosInformationCircleOutline size={20} className="mt-1" />
              </div>

              <BiAxialLineChart />
            </div>

            <div className="col-span-10 lg:col-span-3 rounded-lg h-[88vh] bg-white mr-2 flex flex-col justify-center items-cente">
              <div className=" flex items-center mb-6 p-3">
                <h1 className="text-xl font-semibold text-gray-700 mr-2">
                  Portion of Sales
                </h1>

                <IoIosInformationCircleOutline size={20} className="mt-1" />
              </div>

              <div className="relative flex justify-center items-center w-full h-full">
                <PieCharts />
                <div className="absolute flex items-center space-x-5 mt-20">
                  <span className="flex items-center">
                    <GoDotFill color="#ff8080" size={25} />
                    WooCommerce Store
                  </span>
                  <span className="flex items-center">
                    {" "}
                    <GoDotFill color="#00bfff" size={25} />
                    Shopify Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
