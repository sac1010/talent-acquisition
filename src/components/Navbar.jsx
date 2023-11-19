import React from "react";

const Navbar = ({ curSection = 0 }) => {
  const sections = ["Form selection", "Set up", "Form creation", "Review"];
  return (
    <div className="w-full h-14 shadow-lg flex items-center justify-center z-10 bg-white fixed top-0">
      <div className="flex">
        {sections.map((section, index) => {
          return (
            <div key={section} className="flex items-center justify-center">
              {
                <div
                  className={`w-6 mr-2 h-6 border border-gray-400 rounded-full text-white flex items-center justify-center ${
                    index <= curSection ? "bg-blue-400" : ""
                  }`}
                >
                  {index<=curSection && "✔"}
                </div>
              }
              <div className="font-medium">{section}</div>
              {index !== 3 && (
                <div className="w-32 h-0.5 bg-gray-400 mx-4"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute right-6">✖</div>
    </div>
  );
};

export default Navbar;
