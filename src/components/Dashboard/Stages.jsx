import { useEffect, useState } from "react";
import ProgressBarHorizontal from "./ProgressBarHorizontal";

const defaultStages = [
  { id: 1, name: '1', description: 'Negative' },
  { id: 2, name: '2', description: 'Zero' },
  { id: 3, name: '3', description: 'Positive' },
  { id: 4, name: '4', description: '$10K' },
  { id: 5, name: '5', description: '$50K' },
  { id: 6, name: '6', description: '10% FI' },
  { id: 7, name: '7', description: '25% FI' },
  { id: 8, name: '8', description: '50% FI' },
  { id: 9, name: '9', description: '75% FI' },
  { id: 10, name: '10', description: '100% FI' }
]

export default function Stages(props) {
  const [stages, setStages] = useState(defaultStages);
  const stage = props.userData.stage ? props.userData.stage : 7; // 7 is the default sample data stage

  useEffect(() => {
    const getStages = () => {
      fetch("http://localhost:3000/dashboard/stages", {
        method:"GET", 
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
       .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has failed!");
       })
       .then((data) => {
        setStages(data.stages);
      })
       .catch((error) => {
        console.log(error);
      });
    };
    getStages();
  }, []);

  function stageStatus(details) {
    return (
      details.id < stage ?
        <li className="relative flex w-32 rounded-lg shadow items-center gap-2 pl-5 pt-3 pb-4 flex-none snap-always snap-center border dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
          <span className="circle flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="h-3 w-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <div className="grow">
            <span className="text-sm font-semibold dark:text-gray-200">Stage {details.name}</span>
            <p className="text-xs text-gray-500">Net Worth</p>
            <p className="text-xs text-gray-500">{details.description}</p>
          </div>
          <div className="absolute -right-2 z-10 h-4 w-4 flex-none rotate-45 border-t border-r bg-white dark:bg-gray-800 dark:border-gray-600"></div>
        </li>
      : details.id === stage ? 
          <li className="relative flex w-32 rounded-md items-center gap-2 pl-5 pt-3 pb-4 border-b-4 border-b-green-600 bg-gray-700 dark:bg-gray-700 dark:border-gray-500 dark:border-b-green-600 p-5 flex-none snap-always snap-center border">
            <span className="circle flex h-5 w-5 items-center justify-center rounded-full border-2 border-green-600 bg-white dark:bg-gray-700">
              <span className="text-center text-sm text-gray-900 dark:text-gray-300">{details.id}</span>
            </span>
            <div>
              <span className="text-sm font-semibold text-white dark:text-gray-100">Stage {details.name}</span>
              <p className="text-xs text-green-500 dark:text-gray-400">Net Worth</p>
              <p className="text-xs text-green-500 dark:text-gray-400">{details.description}</p>
            </div>
          </li>
        : 
          <li className="relative flex w-32 rounded-md items-center gap-2 pl-5 pt-3 pb-4 flex-none snap-always snap-center border dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <span className="circle flex h-5 w-5 items-center justify-center rounded-full border bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
              <span className="text-center text-sm text-gray-400 dark:text-gray-600">{details.id}</span>
            </span>
            <div className="text-gray-400 dark:text-gray-600">
              <span className="text-sm font-semibold">Stage {details.name}</span>
              <p className="text-xs">Net Worth</p>
              <p className="text-xs">{details.description}</p>
            </div>
          </li>
    );
  }

  return (
    <>
      <div className="xl:mx-auto xl:max-w-full bg-white rounded-lg shadow dark:bg-gray-800 my-1 mx-1 p-5 pb-3">
        {/* <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">FIRE Stages</h1>
        </div> */}
        <div className="container mx-auto flex sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <ul className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory xl:no-scrollbar light-scrollbar dark:dark-scrollbar">
            {stages.map((stage) => (
              <div key={stage.id}>
                {stageStatus(stage)}
              </div>
            ))}
          </ul>
        </div>
        <ProgressBarHorizontal userData={props.userData}/>
      </div>
    </>
  );
}
