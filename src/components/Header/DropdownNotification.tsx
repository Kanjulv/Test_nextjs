import { useState } from "react";

const DropdownNotification = () => {

  return (
    <button
      className="bg-gray hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full flex items-center"
    >
      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
      Active
    </button>
  );
};

export default DropdownNotification;