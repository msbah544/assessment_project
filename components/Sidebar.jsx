"use client";
import { useRouter } from "next/navigation";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineShop,
  MdOutlineShop2,
} from "react-icons/md";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="py-5 h-full">
      <ul className="flex flex-col justify-center">
        <li className="bg-red-50 flex justify-start items-center gap-3 p-[10px]  border-l-4 border-l-red-500">
          <MdOutlineConnectWithoutContact className=" w-5 h-5 text-red-600" />
          <p className=" font-bold text-red-600">Settlement</p>
        </li>
        <li className="bg-gray-50 flex justify-start items-center gap-3 p-[10px]  border-l-4">
          <MdOutlineShop2 className=" w-5 h-5" />
          <p className=" font-medium text-gray-700">Trade Fair</p>
        </li>
        <li className=" flex justify-start items-center gap-3 p-[10px]  border-l-4 ">
          <MdOutlineSettings className=" w-5 h-5" />
          <p className=" font-medium text-gray-700">Settings</p>
        </li>
      </ul>
      <div className=" py-10 px-3">
        <div className="bg-red-500 w-full h-[1.5px]"></div>
      </div>
      <div className=" flex justify-start items-center gap-3 p-[7px]  border-l-4 ">
        <MdOutlineLogout className=" w-5 h-5" />
        <p className=" font-medium text-gray-700">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
