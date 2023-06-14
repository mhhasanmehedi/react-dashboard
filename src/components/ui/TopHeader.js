import React from "react";
import { FaUserAlt, FaBars } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#F9FAFB] border-b sticky top-0 z-[100]">
      <div className="border p-2 cursor-pointer">
        <FaBars />
      </div>
      <div className="flex items-center gap-6">
        <BiExpand />
        <AiFillBell />
        <FaUserAlt />
      </div>
    </div>
  );
};

export default TopHeader;
