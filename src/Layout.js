import React from "react";
import MainSidebar from "./components/ui/MainSidebar";
import TopHeader from "./components/ui/TopHeader";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className="">
          <MainSidebar />

          <div className="ml-72 ">
            <TopHeader />
            <div className="p-4 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
