"use client";
import React from "react";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';

const ECommerce: React.FC = () => {
  return (
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Billing Section */}
        <div className="col-span-12 bg-white text-black p-4">
          <h1 className="text-2xl font-extrabold">Billing</h1>
          <div className="mt-2">
            <span className="text-lg font-semibold">Billing Type</span>
            <span className="block mt-1 text-sm">Pay per Trip</span>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="col-span-12 bg-white text-black p-4">
          <h2 className="text-xl font-extrabold">Payment Method(s)</h2>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="block text-lg font-medium">Credit card ****7019</span>
              <span className="block text-sm text-gray-500">October 2026</span>
            </div>
            <button className="bg-green-100 text-green-600 font-bold py-2 px-4 rounded">Preffered</button>
          </div>
          <br />
          <hr />
          <br></br>
          <button
      className="bg-gray hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full flex items-center"
    >+Add Payment Method</button>
        </div>

        {/* Statements and Invoices Section */}
        <div className="col-span-12 bg-white text-black p-4">
          <h2 className="text-xl font-extrabold">Statements and Invoices</h2>
          <div className="mt-2">
            <p className="text-sm">Monthly statements received by users.</p>
            <br />
            <hr />
            <div className="mt-4 flex flex-col items-center justify-center py-8">
              <div className="text-center">
                <span className="block text-3xl font-bold"><ArticleOutlinedIcon/></span>
                <p className="mt-2 text-lg font-bold">No statements available</p>
                <p className="mt-1 text-sm text-gray-500">
                  A summary statement will be generated at the end of each month
                </p>
              </div>
            </div>
            <br />
            <hr />
          </div>
        </div>

        {/* Service Fees Section */}
        <div className="col-span-12 bg-white text-black p-4">
          <h2 className="text-xl font-extrabold">Service Fees</h2>
          <div className="mt-4 flex flex-col items-center justify-center py-8">
            <div className="text-center">
              <span className="block text-3xl font-bold"></span>
              <p className="mt-2 text-lg font-bold">No service fees charged</p>
              <p className="mt-1 text-sm text-gray-500">
                No service fees have been charged yet.
              </p>
            </div>
          </div>
          <br />
          <hr />
        </div>
      </div>
  );
};

export default ECommerce;
