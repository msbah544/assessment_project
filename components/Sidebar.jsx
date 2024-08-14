"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineShop,
  MdOutlineShop2,
} from "react-icons/md";
const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState("settlement");
  const router = useRouter();

  const sidebarMenu = [
    {
      name: "Settlement",
      icon: <MdOutlineConnectWithoutContact className="w-5 h-5 text-red-600" />,
      slug: "settlement",
    },
    {
      name: "Trade Fair",
      icon: <MdOutlineShop2 className="w-5 h-5" />,
      slug: "trade_fair",
    },
    {
      name: "Settings",
      icon: <MdOutlineSettings className="w-5 h-5" />,
      slug: "settings",
    },
  ];

  const handleMenu = (item) => {
    switch (item.slug) {
      case "settlement":
        return setCurrentMenu(() => "settlement");
      case "trade_fair":
        return setCurrentMenu(() => "trade_fair");
      case "settings":
        return setCurrentMenu(() => "settings");
      default:
        return setCurrentMenu(() => "settlement");
    }
  };
  return (
    <div className="py-5 h-full">
      <ul className="flex flex-col justify-center">
        {sidebarMenu?.map((item, index) => (
          <li
            className="flex items-center cursor-pointer"
            key={index}
            onClick={() => handleMenu(item)}
          >
            <div
              className={`${
                currentMenu == item.slug && `bg-red-500`
              } w-[6px] py-[22px] rounded-r-full`}
            ></div>
            <div
              className={`${currentMenu == item.slug && "bg-red-50"}  w-full`}
            >
              <div className="flex justify-start items-center gap-x-3 p-[10px]">
                {item.icon}
                <p
                  className={` ${
                    currentMenu == item.slug && "font-bold text-red-600"
                  } font-medium text-gray-700`}
                >
                  {item.name}
                </p>
              </div>
            </div>
          </li>
        ))}

        {/** <li className="bg-gray-50 flex justify-start items-center gap-3 p-[10px]">
          <MdOutlineShop2 className=" w-5 h-5" />
          <p className=" font-medium text-gray-700">Trade Fair</p>
        </li>
        <li className=" flex justify-start items-center gap-3 p-[10px]">
          <MdOutlineSettings className=" w-5 h-5" />
          <p className=" font-medium text-gray-700">Settings</p>
        </li>*/}
      </ul>
      <div className=" py-10 px-3">
        <div className="bg-red-500 w-full h-[1.5px]"></div>
      </div>
      <div className=" flex justify-start items-center gap-3 p-[7px]">
        <MdOutlineLogout className=" w-5 h-5" />
        <p className=" font-medium text-gray-700">Logout</p>
      </div>
      <div className=" divide-x-2 divide-red-500 w-full"></div>
    </div>
  );
};

export default Sidebar;
