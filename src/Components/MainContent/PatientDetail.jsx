import React from "react";

const PatientDetail = ({ title, value }) => {
  return (
    <div className="flex flex-col items-start">
      <p className=" text-xs text-gray-400">{title}</p>
      <p className=" text-xs font-semibold text-gray-700">{value}</p>
    </div>
  );
};

export default PatientDetail;
