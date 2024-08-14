import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const DropDownButton = ({ handleDropDown, selectedDropDownOption }) => {
  return (
    <button
      onClick={() => handleDropDown()}
      className="flex items-center gap-3 bg-green-500 px-5 py-2 rounded-md text-white"
    >
      <h5>{selectedDropDownOption}</h5>
      <MdArrowDropDown className="w-5 h-5" />
    </button>
  );
};

export default DropDownButton;
