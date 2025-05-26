import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="flex items-center text-white bg-black hover:bg-white hover:text-black   duration-200 ease-out gap-2 py-1 px-3 sm:px-4 rounded-full text-[14px] sm:text-[16px]">
      {icon}
      {title}
    </div>
  );
};

export default Filter;
