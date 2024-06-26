import React from "react";
import ReactApexChart from "react-apexcharts";
import { ArrowDownIcon } from '@heroicons/react/24/solid';

function NetWorth(props) {

  const assets_data = props.userData.assets != null ? [0, 0, 0, 0, props.userData.assets] : [400000, 410000, 490000, 500000, 550000];
  const liabilities_data = props.userData.liabilities != null ? [0, 0, 0, 0, props.userData.liabilities] : [245000, 235000, 220000, 200000, 160000];
  const netWorth_data = props.userData.netWorth != null ? [0, 0, 0, 0, props.userData.netWorth] : [155000, 175000, 270000, 300000, 390000]
  const netWorth = netWorth_data.slice(-1);
  const fireNumber = props.userData.fireNumber ? props.userData.fireNumber : 1000000;
  const fiPercentage = props.userData.fiPercentage ? props.userData.fiPercentage : Math.round((netWorth / fireNumber) * 100);
  const currencyFormatOptions = { 
    style: "currency", 
    currency: "USD", 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 3
  };

  var options = {
          
    series: [{
      name: 'Assets',
      type: 'column',
      data: assets_data,
      color: "#00E396", //green
    }, {
      name: 'Liabilities',
      type: 'column',
      data: liabilities_data,
      color: "#008FFB", //blue
    }, {
      name: 'Net Worth',
      type: 'line',
      data: netWorth_data
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      xaxis: {
        categories: [2019, 2020, 2021, 2022, 2023],
        labels: {
          style: {
            cssClass: 'text-xs font-normal fill-gray-500'
          }
        } 
      },
      yaxis: [
        {
          labels: {
            style: {
              cssClass: 'text-xs font-normal fill-gray-500'
            },
            formatter: function(value) {
              return "$" + value.toLocaleString(
                'en-US', {
                  maximumFractionDigits: 2,
                  notation: 'compact',
                  compactDisplay: 'short'
                })
            }
          },
        },
      ],
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
        labels: {
          colors: '#777'
        }
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20
        },
      },
    },
  
  };


  return (
    <>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">Net Worth</h1>
        </div>
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3 pt-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Net Worth</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">{netWorth.toLocaleString(undefined, currencyFormatOptions)}</dd>
          </dl>
          <div>
            <span className={netWorth >= 0 ? "bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
            : "bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-red-900 dark:text-red-300"}>
              {/* {props.userData.netWorth > 0 ?
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg> : null} */}
              {netWorth >= 0 ? netWorth > 0 ? fiPercentage+"% FIRE Number" : "Zero" : "Negative"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 py-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Assets</dt>
            <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">{assets_data.slice(-1).toLocaleString(undefined, currencyFormatOptions)}</dd>
          </dl>
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Liabilities</dt>
            <dd className="leading-none text-xl font-bold text-red-600 dark:text-red-500">{liabilities_data.slice(-1).toLocaleString(undefined, currencyFormatOptions)}</dd>
          </dl>
        </div>
        
        <div id="chart">
          <ReactApexChart
            options={options.options}
            series={options.series}
            type="line"
            width={340}
          />
          <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <div className="flex justify-between items-center pt-5">
              <button
                id="dropdownDefaultButton"
                data-dropdownd-oggle="lastDaysdropdown"
                data-dropdown-placement="bottom"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                type="button">
                Last 6 months
                <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
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
                Net Worth Report
                <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NetWorth;