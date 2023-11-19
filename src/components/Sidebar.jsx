import React from "react";
import SectionTile from "./SectionTile";

const Sidebar = ({ selected = 0, setSelected}) => {
  const sectionData = [
    {
      title: "details collection",
      description:
        "Collect information from Candidates on their education, work experience, contact no,etc",
    },
    {
      title: "Document Collection",
      description:
        "Save time and efforts: Explore this template to find a set of questions required for document collection ",
    },
    {
      title: "statement of purpose",
      description:
        "Start creating a new form with the wide options of fields available",
    },
    {
      title: "Interview Availability",
      description:
        "Start creating a new form with the wide options of fields available",
    },
  ];
  return (
    <div className=" w-2/6 bg-white absolute top-0 pt-20 pb-16 px-10">
      <SectionTile />
      <div className="py-4"> explore the following Templates:</div>
      <div className="flex flex-col gap-6">
        {sectionData.map((section, index) => {
          return (
            <SectionTile
              index= {index}
              isSelected={selected===index}
              setSelected = {setSelected}
              key={section.title}
              title={section.title}
              details={section.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
