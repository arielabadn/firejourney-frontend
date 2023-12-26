import React from "react";

function ProgressBar() {
  return (
    <>
      <div className="bg-white rounded-lg shadow dark:bg-gray-800 md:p-4 md:pt-6">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">Your Goal</h1>
        </div>
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3 pt-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">FIRE Number</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">$1.2M</dd>
          </dl>
        </div>
        <div id="chart">
          <div className="flex">
            <div className="mx-auto flex flex-col items-center pt-4 pb-4">
              <div className="h-60 w-10 overflow-hidden rounded-md bg-green-600">
                <div className="h-full bg-gray-300" style={{height: "50%"}}></div>
              </div>
              <span className="mt-2 text-xs text-gray-600">50%</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between pb-5">
          <div className="flex justify-between items-center pt-11"></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;