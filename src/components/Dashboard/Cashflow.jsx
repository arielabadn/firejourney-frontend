import React from "react";
import ReactApexChart from "react-apexcharts";

function Cashflow(props) {

  const defaultValues = [0,0,0,0,0,0,0,0,0,0,0]
  const incomeData = props.userData.income != null ? defaultValues.concat(props.userData.income) : [3000, 3100, 2800, 4000, 3100, 2880, 3420, 3620, 3820, 3420, 3650, 4120];
  const expensesData = props.userData.expenses != null ? defaultValues.concat(props.userData.expenses) : [2600, 2700, 2800, 2900, 3000, 3100, 2788, 2810, 2866, 2788, 3100, 3200];
  const totalIncome = incomeData.reduce((a, b) => a + b, 0)
  const totalExpenses = expensesData.reduce((a, b) => a + b, 0)
  const cashFlow = props.userData.cashFlow != null ? props.userData.cashFlow : totalIncome - totalExpenses;
  const savingsRate = props.userData.savingsRate != null ? props.userData.savingsRate : (cashFlow / totalIncome) * 100;
  
  const currentMonth = new Date().getMonth();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const categories = months.slice(currentMonth + 1, 12).concat(months.slice(0, currentMonth + 1));

  var options = {
    series: [
      {
        name: "Income",
        data: incomeData,
        color: "#00E396", //green
      },
      {
        name: "Expense",
        data: expensesData,
        // color: "#FF4560", //red
        color: "#008FFB", //blue
      }
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: {
        show: false,
      }
    },
    // fill: {
    //   opacity: 1,
    // },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        borderRadiusApplication: "end",
        borderRadius: 1,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: '#777'
      }
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return "$" + value
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500'
        }
      },
      categories: categories,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500'
        },
        formatter: function(value) {
          return "$" + value.toLocaleString(undefined, {maximumFractionDigits: 2})
        }
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
  }

  return (
    <>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">Cash Flow</h1>
        </div>
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3 pt-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Cash Flow</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">${cashFlow.toLocaleString()}</dd>
          </dl>
          <div>
            <span className={savingsRate >= 0 ? "bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
            : "bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-red-900 dark:text-red-300"}>
              {/* {savingsRate > 0 ?
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg> : null} */}
              Savings rate {savingsRate >= 0 ? savingsRate.toLocaleString(undefined, {maximumFractionDigits: 2})+"%" : "negative"}
            </span>
            {/* <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg>
              Savings rate {savingsRate.toLocaleString(undefined, {maximumFractionDigits: 2})}%
            </span> */}
          </div>
        </div>

        <div className="grid grid-cols-2 py-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Income</dt>
            <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">${totalIncome.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Expense</dt>
            <dd className="leading-none text-xl font-bold text-red-600 dark:text-red-500">${totalExpenses.toLocaleString()}</dd>
          </dl>
        </div>
        
        <div id="bar-chart">
          <ReactApexChart
            options={options}
            series={options.series}
            type="bar"
            height={211}
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
                Cash Flow Report
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

export default Cashflow;