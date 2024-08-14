"use client";
import Modal from "react-modal";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";

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

const SuccessModal = ({ setModalState, modalState }) => {
  useEffect(() => {
    setTimeout(() => setModalState(() => "closed"), 2000);
  }, []);
  return (
    <div className="w-[50%]">
      <div className="w-full">
        <Modal isOpen={modalState == "success"} style={customStyles}>
          <div className="flex flex-col  items-center gap-7">
            <div>
              <FaCircleCheck className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-xl">Refund Successful</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SuccessModal;
