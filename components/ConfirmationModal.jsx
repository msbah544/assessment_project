"use client";
import Modal from "react-modal";
import { FaCircleInfo } from "react-icons/fa6";
import SuccessModal from "./SuccessModal";

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

const ConfirmationModal = ({ setModalState, modalState }) => {
  return (
    <div className="w-[50%]">
      <div className="w-full">
        <Modal isOpen={modalState == "confirm"} style={customStyles}>
          <div className="flex flex-col  items-center gap-7">
            <div>
              <FaCircleInfo className="w-7 h-7 text-red-700" />
            </div>
            <div>
              <p className="font-bold text-xl">Please confirm your refund</p>
            </div>
            <div className="flex justify-between items-center gap-10">
              <button
                onClick={() => {
                  setModalState(() => "success");
                }}
                className="px-10 py-1 bg-green-600 text-white font-medium rounded-lg w-full"
              >
                Confirm
              </button>
              <button
                onClick={() => setModalState(() => "closed")}
                className="px-10 py-1 bg-red-600 text-white font-medium rounded-lg w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ConfirmationModal;
