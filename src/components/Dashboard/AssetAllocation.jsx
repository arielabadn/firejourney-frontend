import React from "react";
import ReactApexChart from "react-apexcharts";

function AssetAllocation(props) {

  const investedTotal = props.userData.investedTotal != null ? props.userData.investedTotal : 541650;
  const cash = props.userData.cash != null ? props.userData.cash : 8350;
  const total = investedTotal + cash;
  const stocks = props.userData.stocks != null ? props.userData.stocks : 129400;
  const bonds = props.userData.bonds != null ? props.userData.bonds : 16250;
  const other = props.userData.other != null ? props.userData.other : 396000;
  const investedPercentage = props.userData.investedPercentage != null ? props.userData.investedPercentage : 80.8;
  
  const options = {
    series: [stocks, bonds, cash, other],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Stocks', 'Bonds', 'Cash', 'Other'],
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
      }],
      legend: {
        labels: {
          colors: '#777'
        }
      },
      tooltip: {
        y: {
          formatter: function(value) {
            return "$" + value.toLocaleString(undefined, {maximumFractionDigits: 2})
          }
        }
      },
    },
  };

  return (
    <>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">Asset Allocation</h1>
        </div>
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3 pt-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Total</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">${total.toLocaleString()}</dd>
          </dl>
          <div>
            <span className={investedPercentage >= 0 ? "bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-red-900 dark:text-red-300"}>
              {/* {props.userData.investedPercentage > 0 ?
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg> : null} */}
              {investedPercentage > 0 ? investedPercentage.toLocaleString(undefined, {maximumFractionDigits: 2})+"% invested" : "Zero"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 py-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Invested</dt>
            <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">${investedTotal.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Cash</dt>
            <dd className="leading-none text-xl font-bold text-gray-600 dark:text-gray-500">${cash.toLocaleString()}</dd>
          </dl>
        </div>
        <div id="chart">
          <ReactApexChart 
            options={options.options} 
            series={options.series} 
            type="pie" 
            width={351} />
        </div>
          <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <div className="flex justify-between items-center pt-5">
              {/* <!-- Button --> */}
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="lastDaysdropdown"
                data-dropdown-placement="bottom"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                type="button">
                Last 6 months
                <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 6 months</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last year</a>
                    </li>
                  </ul>
              </div>
              <a
                href="#"
                className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                Allocation Report
                <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default AssetAllocation;