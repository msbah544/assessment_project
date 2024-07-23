"use client";
import Modal from "react-modal";
import React, { useState } from "react";
import { IoMdCloseCircle, IoMdArrowDropdown } from "react-icons/io";
import { BiShow, BiHide } from "react-icons/bi";
import ConfirmationModal from "./ConfirmationModal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    opacity: 2,
    width: "30%",
    borderRadius: "20px",
  },
};
const ModalComponent = ({ setModalState, modalState }) => {
  const [countryCode, setCountryCode] = useState("+220");
  const [openCodeDropDown, setOpenCodeDropDown] = useState(false);
  const [phone, setPhone] = useState("");
  const [hidePhone, setHidePhone] = useState(false);

  const countryCodes = ["+220", "+221", "+223"];

  const handleSettle = (phone) => {
    const numberRegex = /^\d+$/;
    //console.log(numberRegex.test(phone));
    if (numberRegex.test(phone) && phone.length >= 7) {
      //open confirm modal
      setModalState(() => "confirm");
      setPhone(() => "");
    } else {
      return alert("Invalid Phone Number!");
    }
  };
  return (
    <div className="w-[50%]">
      <Modal isOpen={modalState == "refund"} style={customStyles}>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Fill in your details</h1>
            <button onClick={() => setModalState((prev) => "closed")}>
              <IoMdCloseCircle className="w-5 h-5 text-red-700 rounded-lg" />
            </button>
          </div>
          <div className="py-5 flex flex-col gap-3">
            <h5 className="font-semibold text-gray-600">Phone</h5>
            <div className="flex gap-2 border-b-2 border-gray-400 w-full">
              <button
                onClick={() => setOpenCodeDropDown((prev) => !prev)}
                className="flex items-center gap-2"
              >
                <span>{countryCode}</span>
                <IoMdArrowDropdown className="w-5 h-5" />
              </button>
              <input
                type={`${hidePhone ? "password" : "tel"}`}
                placeholder="7786868"
                className="outline-none  w-full"
                onChange={(e) => setPhone(() => e.target.value)}
                value={phone}
              />
              <button onClick={() => setHidePhone((prev) => !prev)}>
                {hidePhone ? <BiShow /> : <BiHide />}
              </button>
            </div>
          </div>
          {openCodeDropDown && (
            <div className="absolute bottom-1 bg-gray-50 shadow-lg border-2 p-3">
              <ul className="flex flex-col gap-1">
                {countryCodes.map((code) => (
                  <li
                    key={code}
                    className="cursor-pointer hover:bg-gray-300"
                    onClick={() => {
                      setCountryCode(() => code),
                        setOpenCodeDropDown((prev) => !prev);
                    }}
                  >
                    {code}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex w-full py-5">
            <button
              onClick={() => handleSettle(phone)}
              className="bg-red-600 w-full p-1 rounded-lg text-white font-semibold"
            >
              Settle
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
