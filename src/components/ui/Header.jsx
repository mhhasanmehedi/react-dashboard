import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mb-5">
      <h3 className="border p-3 text-xl font-bold bg-slate-100 rounded shadow-md text-gray-700 ">
        {title}
      </h3>
    </div>
  );
};

export default Header;
