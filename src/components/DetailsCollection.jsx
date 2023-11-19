import React from "react";

const DetailsCollection = () => {
  return (
    <div className="w-full h-full py-20 ">
      <div className="w-[80%] mx-auto bg-white ">
        <div className="w-full bg-blue-100 h-[150px] py-6 px-4 rounded-lg">
          <div className="font-medium text-lg">Candidate Details</div>
          <div className="text-sm py-4">
            Provide the following information to process your application
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-6">
        <div className="w-full my-4">
          <div >1. Email*</div>
          <input className="w-full border border-gray-300 h-10 rounded-lg" type="text" />
        </div>
        <div className="w-full my-4">
          <div >2. Location*</div>
          <input className="w-full border border-gray-300 h-10 rounded-lg" type="text" />
        </div>
        <div className="w-full my-4">
          <div >3. Interview Date</div>
          <input placeholder="dd" className="px-2 text-gray-300 w-full border border-gray-300 h-10 rounded-lg" type="date" />
        </div>
        <div className="w-full my-4">
          <div >4. Interview Time</div>
          <input className="px-2 text-gray-300 w-full border border-gray-300 h-10 rounded-lg" type="time" />
        </div>
        <div className="w-full my-4">
          <div >5. Timezone*</div>
          <input className="w-full border border-gray-300 h-10 rounded-lg" type="text" />
        </div>

        </div>

      </div>
    </div>
  );
};

export default DetailsCollection;
