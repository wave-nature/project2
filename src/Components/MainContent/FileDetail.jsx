import React from "react";
import Icon from "../Icon";
import EditIcon from "../../assets/edit.png";
import DeleteIcon from "../../assets/delete.png";
import DownloadIcon from "../../assets/download.png";

const FileDetail = ({ data }) => {
  return (
    <div className="p-2 flex justify-between items-center shadow-sm mb-2">
      <div className="flex items-center">
        <Icon src={EditIcon} className="h-4 w-4" />
        <p className="ml-4 text-sm text-gray-400">{data}.pdf</p>
      </div>
      <div>
        {/* <div className="text-xs text-gray-300">123kb</div> */}
        <div className="flex opacity-50">
          <Icon src={DeleteIcon} className="h-4 w-4 mx-2" />
          <Icon src={DownloadIcon} className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default FileDetail;
