import { useState } from "react";
import Icon from "../Icon";

const ListItem = ({ id, src, title, showPatientHanlder }) => {
  return (
    <li
      onClick={showPatientHanlder.bind(this, id)}
      className={`focus:outline-none focus:ring focus:ring-violet-300 active:text-white active:bg-blue-600 cursor-pointer flex mb-4 mt-4 p-2 items-center`}
    >
      <Icon src={src} className="w-4 h-4" />
      <p className="text-sm font-bold ml-4">{title}</p>
    </li>
  );
};

export default ListItem;
