import { useEffect, useState } from "react";

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

export default function Stages() {
  const [stages, setStages] = useState(defaultStages);

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
    const currentStatus = "done";
    // Add logic to set the Status depending on the user status from DB
    return (
      currentStatus === "done" ?
        <li className="relative flex w-32 rounded-lg shadow items-center gap-2 pl-5 pt-3 pb-4 flex-none snap-always snap-center border dark:border-gray-600 bg-white dark:bg-gray-800">
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
      : currentStatus === "current" ? 
          <li className="relative flex w-32 rounded-md items-center gap-2 pl-5 pt-3 pb-4 border-b-4 border-b-green-600 bg-gray-800 dark:bg-gray-700 dark:border-gray-500 dark:border-b-green-600 p-5 flex-none snap-always snap-center border">
            <span className="circle flex h-5 w-5 items-center justify-center rounded-full border-2 border-green-600 bg-white dark:bg-gray-700">
              <span className="text-center text-sm text-gray-900 dark:text-gray-300">{details.id}</span>
            </span>
            <div>
              <span className="text-sm font-semibold text-white">Stage {details.name}</span>
              <p className="text-xs text-gray-300">Net Worth</p>
              <p className="text-xs text-gray-300">{details.description}</p>
            </div>
          </li>
        : 
          <li className="flex items-center w-32 rounded-md gap-2 pl-5 pt-3 pb-4 flex-none snap-always snap-center border dark:border-gray-700 dark:bg-gray-800">
            <span className="circle flex h-5 w-5 items-center justify-center rounded-full border bg-white dark:bg-gray-800 dark:border-gray-600">
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
    <div className="mx-auto max-w-full bg-white rounded-lg shadow dark:bg-gray-800 my-1 mx-1 p-4 md:p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">FIRE Stages</h1>
      </div>
      <div className="container mx-auto flex sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-3">
        <ul className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {stages.map((stage) => (
            <div key={stage.id}>
              {stageStatus(stage)}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}



// const stages = [
//   { id: 1, name: 'Negative', value: 'Stage 1', status: "done" },
//   { id: 2, name: 'Zero', value: 'Stage 2', status: "done" },
//   { id: 3, name: 'Positive', value: 'Stage 3', status: "done" },
//   { id: 4, name: '$10K', value: 'Stage 4', status: "done" },
//   { id: 5, name: '$50K', value: 'Stage 5', status: "done" },
//   { id: 6, name: '10% FI', value: 'Stage 6', status: "done" },
//   { id: 7, name: '25% FI', value: 'Stage 7', status: "current" },
//   { id: 8, name: '50% FI', value: 'Stage 8', status: "not started" },
//   { id: 9, name: '75% FI', value: 'Stage 9', status: "not started" },
//   { id: 10, name: '100% FI', value: 'Stage 10', status: "not started" },
// ]

// export default function Stages() {

//   function stageStatus(details) {
//     return (
//       details.status === "done" ?
//         <li className="relative flex w-32 rounded-mditems-center gap-2 pl-5 pt-3 pb-4 flex-none snap-always snap-center border">
//           <span className="circle flex h-5 w-5 flex-none items-center justify-center rounded-full bg-green-600 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="h-3 w-3">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//             </svg>
//           </span>
//           <div className="grow">
//             <span className="text-sm font-semibold">{details.value}</span>
//             <p className="text-xs text-gray-500">Net Worth</p>
//             <p className="text-xs text-gray-500">{details.name}</p>
//           </div>
//           <div className="absolute -right-2 z-10 h-4 w-4 flex-none rotate-45 border-t border-r bg-white"></div>
//         </li>
//       : details.status === "current" ? 
//           <li className="relative flex w-32 items-center gap-2 pl-5 pt-3 pb-4 border-b-4 border-b-green-600 bg-gray-800 p-5 flex-none snap-always snap-center border">
//             <span className="circle flex h-5 w-5 items-center justify-center rounded-full border-2 border-green-600 bg-white">
//               <span className="text-center text-sm text-gray-900">{details.id}</span>
//             </span>
//             <div>
//               <span className="text-sm font-semibold text-white">{details.value}</span>
//               <p className="text-xs text-gray-300">Net Worth</p>
//               <p className="text-xs text-gray-300">{details.name}</p>
//             </div>
//           </li>
//         : 
//           <li className="flex items-center w-32 gap-2 pl-5 pt-3 pb-4  flex-none snap-always snap-center border">
//             <span className="circle flex h-5 w-5 items-center justify-center rounded-full border bg-white">
//               <span className="text-center text-sm text-gray-400">{details.id}</span>
//             </span>
//             <div className="text-gray-400">
//               <span className="text-sm font-semibold">{details.value}</span>
//               <p className="text-xs">Net Worth</p>
//               <p className="text-xs">{details.name}</p>
//             </div>
//           </li>
//     );
//   }

//   // function stageStyle(stage) {
//   //   return (
//   //     stage.status === "done" ?
//   //       <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-indigo-200 hover:-translate-y-2 flex-none snap-always snap-center">
//   //         <div className="flex items-center mb-2">
//   //           <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-400">{stage.id}</p>
//   //           <p className="text-lg font-bold leading-5">{stage.name}</p>
//   //         </div>
//   //         <p className="text-sm text-gray-900">{stage.value}</p>
//   //         <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-indigo-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
//   //           <svg className="text-white w-7" stroke="currentColor" viewBox="0 0 24 24">
//   //             <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"/>
//   //           </svg>
//   //         </p>
//   //       </div>
//   //     : stage.status === "current" ?
//   //       <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-indigo-700 hover:-translate-y-2 flex-none snap-always snap-center">
//   //         <div className="flex items-center mb-2">
//   //           <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-400">{stage.id}</p>
//   //           <p className="text-lg font-bold leading-5">{stage.name}</p>
//   //         </div>
//   //         <p className="text-sm text-gray-900">{stage.value}</p>
//   //         <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 rounded-full bg-indigo-700 sm:-mt-5 sm:-mr-5 sm:w-40 sm:h-10 text-white">
//   //           {/* <svg className="text-white w-7" stroke="currentColor" viewBox="0 0 24 24">
//   //             <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"/>
//   //           </svg> */}
//   //           You are here!
//   //         </p>
//   //       </div>
//   //       : 
//   //         <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-gray-200 hover:-translate-y-2 flex-none snap-always snap-center">
//   //           <div className="flex items-center mb-2">
//   //             <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-gray-400">{stage.id}</p>
//   //             <p className="text-lg font-bold leading-5">{stage.name}</p>
//   //           </div>
//   //           <p className="text-sm text-gray-500">{stage.value}</p>
//   //         </div>
//   //   )
//   // }

//   return (
//     <>
//     <div className="mt-2">
//       <div className="container mx-auto flex sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
//       {/* <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 px-5"> */}
//         {/* <div className="w-10 flex-none"></div> */}
//         {/* <ul className="grid grow grid-flow-col divide-x"> */}
//         <ul className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory no-scrollbar">
//           {stages.map((stage) => (
//             <div key={stage.id}>
//               {stageStatus(stage)}
//             </div>
//           ))}
//         </ul>
//         {/* <div className="w-10 flex-none"></div> */}
//         </div>
//       {/* </div> */}
//     </div>
    
//     {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
//         <div>
//           <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
//             Make history
//           </p>
//         </div>
//         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
//           <span className="relative inline-block">
//             <svg
//               viewBox="0 0 52 24"
//               fill="currentColor"
//               className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
//             >
//               <defs>
//                 <pattern
//                   id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
//                   x="0"
//                   y="0"
//                   width=".135"
//                   height=".30"
//                 >
//                   <circle cx="1" cy="1" r=".7" />
//                 </pattern>
//               </defs>
//               <rect
//                 fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
//                 width="52"
//                 height="24"
//               />
//             </svg>
//             <span className="relative">Let's</span>
//           </span>{' '}
//           launch a rocket into outer space
//         </h2>
//         <p className="text-base text-gray-700 md:text-lg">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//           accusantium doloremque rem aperiam, eaque ipsa quae.
//         </p>
//       </div>
//       <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 px-5 no-scrollbar pb-5 pt-5">
//         {stages.map((stage) => (
//           <div key={stage.id}>
//             {stageStyle(stage)}
//           </div>
//         ))}
//       </div>
//     </div> */}
//     </>
//   );
// }



