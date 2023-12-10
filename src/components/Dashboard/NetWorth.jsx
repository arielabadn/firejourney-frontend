import React from "react";
import ReactApexChart from "react-apexcharts";

function NetWorth() {

  var options = {
          
    series: [{
      name: 'Liabilities',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
      name: 'Assets',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
      name: 'Net Worth',
      type: 'line',
      data: [-.3, 1, .6, 2.5, 1.6, 1.9, 2.7, 3.9]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      // title: {
      //   text: 'XYZ - Stock Analysis (2009 - 2016)',
      //   align: 'left',
      //   offsetX: 110
      // },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        labels: {
          style: {
            cssClass: 'text-xs font-normal fill-gray-500'
          }
        } 
      },
      yaxis: [
        {
      //     axisTicks: {
      //       show: true,
      //     },
      //     axisBorder: {
      //       show: true,
      //       color: '#008FFB'
      //     },
      //     labels: {
      //       style: {
      //         colors: '#008FFB',
      //       }
      //     },
      //     title: {
      //       text: "Income (thousand crores)",
      //       style: {
      //         color: '#008FFB',
      //       }
      //     },
      //     tooltip: {
      //       enabled: true
      //     }
      //   },
      //   {
      //     seriesName: 'Income',
      //     opposite: true,
      //     axisTicks: {
      //       show: true,
      //     },
      //     axisBorder: {
      //       show: true,
      //       color: '#00E396'
      //     },
          labels: {
            style: {
              cssClass: 'text-xs font-normal fill-gray-500'
            }
          },
      //     title: {
      //       text: "Operating Cashflow (thousand crores)",
      //       style: {
      //         color: '#00E396',
      //       }
      //     },
      //   },
      //   {
      //     seriesName: 'Revenue',
      //     opposite: true,
      //     axisTicks: {
      //       show: true,
      //     },
      //     axisBorder: {
      //       show: true,
      //       color: '#FEB019'
      //     },
      //     labels: {
      //       style: {
      //         colors: '#FEB019',
      //       },
      //     },
      //     title: {
      //       text: "Revenue (thousand crores)",
      //       style: {
      //         color: '#FEB019',
      //       }
      //     }
        },
      ],
      // tooltip: {
      //   fixed: {
      //     enabled: true,
      //     position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      //     offsetY: 30,
      //     offsetX: 60
      //   },
      // },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
        labels: {
          colors: '#777'
        }
      }
    },
  
  
  };


  return (
    <>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">Net Worth</h1>
        </div>
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3 pt-5">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Net Worth</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">$50,405</dd>
          </dl>
          <div>
            <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg>
              Positive
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 py-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Assets</dt>
            <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">$230,635</dd>
          </dl>
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Liabilities</dt>
            <dd className="leading-none text-xl font-bold text-red-600 dark:text-red-500">-$180,230</dd>
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
              {/* <!-- Button --> */}
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