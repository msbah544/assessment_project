"use client";
import React, { useState } from "react";
import TableHeader from "./TableHeader";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";
import money from "@/public/money.png";

const Table = () => {
  const [selectedDropDownOption, setSelectedDropDownOption] =
    useState("Merchant");
  const [tableData, setTableData] = useState({});
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [modalState, setModalState] = useState("closed");

  return (
    <div>
      <TableHeader
        selectedDropDownOption={selectedDropDownOption}
        setSelectedDropDownOption={setSelectedDropDownOption}
        tableData={tableData}
        setTableData={setTableData}
        modalState={modalState}
        setModalState={setModalState}
      />
      <div className="">
        <table className="w-full">
          <thead>
            <tr className="border-y">
              {tableData?.cols?.map((col) => (
                <td key={col} className="py-4 px-6 font-semibold">
                  {col}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.data?.map((data, index) => (
              <tr key={index} className=" hover:bg-red-50 border-b">
                {data?.map((item, index) => (
                  <td
                    key={index}
                    className={`${
                      selectedDropDownOption == "Merchant"
                        ? "py-3 px-4"
                        : "px-4"
                    } `}
                  >
                    {item == "Refund" || "Not Refund" ? (
                      <span
                        onClick={() =>
                          item == "Not Refund" && setModalState(() => "refund")
                        }
                        className={`${
                          item == "Refund" &&
                          " bg-green-100 py-1 px-2 border border-green-500 rounded-lg text-green-500 font-semibold"
                        } w-full`}
                      >
                        {item == "Casual..." ? (
                          <div className="flex flex-col gap-0">
                            {item}
                            <Image src={money} width={30} height={20} />
                          </div>
                        ) : (
                          <button
                            className={`
                               
                             ${
                               item == "Not Refund"
                                 ? "text-red-100 py-1 my-3 px-2 border cursor-pointer border-red-500 rounded-lg bg-red-500 font-semibold hover:cursor-pointer"
                                 : "cursor-text text-start "
                             }`}
                          >
                            {item}
                          </button>
                        )}
                      </span>
                    ) : (
                      <span>item</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-b flex justify-end items-center w-full py-3">
          <div className="bg-white shadow-md border border-gray-50 px-5 mr-5 py-2 flex items-center gap-2">
            <button>
              <GrFormPrevious
                className={`w-5 h-5 ${
                  currentPageIndex == 1 && `text-gray-400`
                }`}
              />
            </button>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((i, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPageIndex(() => index + 1)}
                  className={` ${
                    currentPageIndex == index + 1 && ` text-red-500`
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button>
              <GrFormNext
                className={`w-5 h-5 ${
                  currentPageIndex == 3 && `text-gray-400`
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
