import React from "react";

const SectionTile = ({
  title = "New Form",
  details = "start creating a new form with wide options of fields available",
  isSelected,
  setSelected,
  index,
}) => {
  const handleClick = () => {
    if (index>=0) setSelected(index);
  };
  return (
    <button
      onClick={handleClick}
      className={`w-full h-28 border rounded-xl flex gap-4 items-center p-4 hover:bg-[#F5F8FA] hover:cursor-pointer ${
        isSelected ? "border-blue-600 bg-[#F5F8FA]" : "border-black"
      }`}
    >
      <div className="w-20 h-full bg-gray-300 rounded-md"></div>
      <div className="w-9/12 h-full flex flex-col">
        <div className=" font-medium text-md">{title}</div>
        <div className="text-sm">{details}</div>
      </div>
    </button>
  );
};

export default SectionTile;
