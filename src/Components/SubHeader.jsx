import React from "react";
import Icon from "./Icon";
import PrintIcon from "../assets/printer.png";
import EditIcon from "../assets/edit.png";
import ArrowRight from "../assets/arrow-point-to-right.png";

const SubHeader = ({ name = "" }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-gray-300">
      <div className="flex items-center">
        <p className="text-lg text-blue-600">Patient List</p>
        <Icon src={ArrowRight} className=" opacity-30 mx-2 h-4 w-4" />
        <p className="text-lg text-gray-300 font-semibold">{name}</p>
      </div>

      <div className="flex">
        <div className="bg-white mr-2 flex items-center p-2">
          <Icon src={PrintIcon} className="h-4 w-4" />
        </div>
        <div className="bg-white flex items-center p-2">
          <Icon src={EditIcon} className="h-4 w-4 mr-2" />
          <p>Edit Patient</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
