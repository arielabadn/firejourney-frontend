import React from "react";
import ReactApexChart from "react-apexcharts";

function ProgressBar() {

  const options = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 400,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">Your Goal</h1>
        </div>
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3 pt-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">FIRE Number</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">$1.2M</dd>
          </dl>
        </div>

        {/* <div className="grid grid-cols-2 py-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Income</dt>
            <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">$23,635</dd>
          </dl>
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Expense</dt>
            <dd className="leading-none text-xl font-bold text-red-600 dark:text-red-500">-$18,230</dd>
          </dl>
        </div> */}
        <div id="chart">
          <div className="flex">
            <div className="mx-auto flex flex-col items-center pt-4">
              <div className="h-72 w-10 overflow-hidden rounded-md bg-green-600">
                <div className="h-full bg-gray-300" style={{height: "50%"}}></div>
              </div>
              <span className="mt-2 text-xs text-gray-600">50%</span>
            </div>
          </div>
        </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default ProgressBar;