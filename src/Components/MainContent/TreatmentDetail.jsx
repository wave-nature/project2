import React from "react";
import WritingIcon from "../../assets/writing.png";
import Icon from "../Icon";

const TreatmentDetail = ({ data = {} }) => {
  return (
    <div className="bg-white py-2 px-4 flex justify-between items-center mb-4">
      <div>
        <h3>{data.Date}</h3>
        <p>{data.Time}</p>
      </div>
      <div>
        <p className=" text-gray-300 text-xs">Treatment</p>
        <p className="font-bold">{data.Treatment}</p>
      </div>
      <div>
        <p className=" text-gray-300 text-xs">Dentist</p>
        <p>{data.Dentist}</p>
      </div>
      <div>
        <p className=" text-gray-300 text-xs">Nurse</p>
        <p>{data.Nurse}</p>
      </div>
      <div className="flex items-center text-blue-600 font-bold">
        <Icon src={WritingIcon} className="w-4 h-4 mr-2" />
        <span>Note</span>
      </div>
    </div>
  );
};

export default TreatmentDetail;
