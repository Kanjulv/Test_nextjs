import { useState } from "react";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const DropdownMessage = () => {

  return (
    <button
      className="bg-gray hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full flex items-center"
    >
      <HelpCenterIcon className="mr-2" />
      Help
    </button>
  );
};

export default DropdownMessage;
