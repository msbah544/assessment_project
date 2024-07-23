"use client";

import {
  MdArrowDropDown,
  MdDensityMedium,
  MdFilterList,
  MdOutlineSearch,
  MdOutlineViewColumn,
  MdViewColumn,
} from "react-icons/md";
import { BiExport } from "react-icons/bi";
import { useEffect, useState } from "react";
import ModalComponent from "./Modal";
import ConfirmationModal from "./ConfirmationModal";
import SuccessModal from "./SuccessModal";

const TableHeader = ({
  selectedDropDownOption,
  setSelectedDropDownOption,
  tableData,
  setTableData,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [modalState, setModalState] = useState("closed");

  const options = [
    { name: "Columns", icon: <MdOutlineViewColumn /> },
    { name: "Filters", icon: <MdFilterList /> },
    { name: "Density", icon: <MdDensityMedium /> },
    { name: "Export", icon: <BiExport /> },
  ];

  const dropdown_options = [
    { name: "Refund" },
    { name: "Merchant" },
    { name: "Delivery Company" },
  ];

  const merchant_data = {
    cols: [
      "Merchant Name",
      "Address",
      "Contacts",
      "Total Orders",
      "Total Settled",
      "Total Unsettled",
    ],
    data: [
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
      [
        "NyangMballow Creation",
        "C86R+CX Serrekunda",
        "7402446",
        "10",
        "6",
        "4",
      ],
    ],
  };

  const refund_data = {
    cols: [
      "Order Id",
      "Product",
      "Ordered By",
      "Ordered From",
      "Mer Phone",
      "Amount",
      "Order Date",
      "Payment Method",
      "Status",
    ],
    data: [
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Not Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Not Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
      [
        "#IQF3JVSJ",
        "Casual...",
        "Sainabou Sanyang",
        "Dan Tailoring Designs",
        "2204046",
        "GMD 700",
        "28th April, 2024",
        "Cash",
        "Refund",
      ],
    ],
  };

  useEffect(() => {
    setTableData(() => merchant_data);
  }, []);

  const handleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleDropOption = (option) => {
    setSelectedDropDownOption(() => option.name);
    setShowDropDown((prev) => !prev);
    switch (option.name) {
      case "Merchant":
        return setTableData(() => merchant_data);
      case "Refund":
        return setTableData(() => refund_data);
      case "Delivery Company":
        return setTableData(() => []);
      default:
        return setTableData((prev) => prev);
    }
  };

  return (
    <div className="relative ">
      <div className="p-5">
        <div className="flex justify-between items-center p-[10px]">
          <h1 className="font-bold text-2xl">{selectedDropDownOption}</h1>
          <div className="border-gray-400 border-2 flex items-center rounded-md">
            <MdOutlineSearch className="w-5 h-5 text-gray-400" />
            <input
              placeholder="search by name"
              className=" text-gray-600 font-light outline-none"
            />
          </div>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-5 rounded-lg">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 shadow-md border-[1px] border-gray-50 cursor-pointer"
              >
                {option.icon}
                <h5 className="font-semibold text-gray-500">{option.name}</h5>
              </div>
            ))}
          </div>
          <div>
            {selectedDropDownOption == "Refund" ? (
              <div className="flex items-center gap-10">
                <button
                  onClick={() => setModalState((prev) => "refund")}
                  className="bg-red-500 px-5 py-1 rounded-md font-medium text-white"
                >
                  Refund
                </button>
                <div className="flex items-center gap-3 px-4 py-1 shadow-md border-[1px] border-gray-50 cursor-pointer">
                  <BiExport />
                  <button>Export</button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleDropDown()}
                className="flex items-center gap-3 bg-green-500 px-5 py-2 rounded-md text-white"
              >
                <h5>{selectedDropDownOption}</h5>
                <MdArrowDropDown className="w-5 h-5" />
              </button>
            )}

            {showDropDown && (
              <div className="bg-gray-100 absolute m-5 top-30 right-0 rounded-md">
                <div className="flex flex-col justify-center items-center gap-3 ">
                  {dropdown_options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleDropOption(option)}
                      className="w-full border-b px-5 py-3 hover:bg-gray-300"
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {modalState == "refund" && (
          <ModalComponent
            setModalState={setModalState}
            modalState={modalState}
          />
        )}
        {modalState == "confirm" && (
          <ConfirmationModal
            setModalState={setModalState}
            modalState={modalState}
          />
        )}
        {modalState == "success" && (
          <SuccessModal setModalState={setModalState} modalState={modalState} />
        )}
      </div>
    </div>
  );
};

export default TableHeader;
