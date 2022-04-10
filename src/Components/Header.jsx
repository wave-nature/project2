import React from "react";
import Icon from "./Icon";
import UserIcon from "../assets/user.png";
import menu from "../assets/menu.png";
import SearchIcon from "../assets/search-interface-symbol.png";
import NotificationIcon from "../assets/bell.png";
const Header = ({ name = "", showSideBar, showMenuHandler }) => {
  return (
    <header className="flex justify-between p-4 border-b-2 border-gray-300">
      <div className=" flex items-center">
        {!showSideBar && (
          <div onClick={showMenuHandler} className="cursor-pointer">
            <Icon src={menu} className={" h-8 w-8 mr-4"} />
          </div>
        )}
        <Icon src={UserIcon} className={" h-8 w-8"} />
        <h2 className=" ml-2">{name}</h2>
      </div>

      <div className="flex w-64 justify-between">
        <div className=" bg-gray-50 flex items-center border-2 rounded-3xl border-gray-200 mr-2 px-2">
          <Icon className={"h-4 w-4"} src={SearchIcon} />
          <input
            className=" bg-gray-50 pl-2 font-semibold w-32"
            type="search"
            placeholder="search"
          />
        </div>

        <div className=" bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
          <p className="text-white text-3xl mb-2">+</p>
        </div>

        <div className=" bg-white rounded-full w-8 h-8 flex items-center relative justify-center">
          <div className="bg-red-500 rounded-full w-2 h-2 absolute top-0 right-0"></div>
          <Icon src={NotificationIcon} className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
