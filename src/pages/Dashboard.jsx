import Header from "../components/Header";
import Stages from "../components/Dashboard/Stages";
import NetCashFlow from "../components/Dashboard/Cashflow";
import AssetAllocation from "../components/Dashboard/AssetAllocation";
import ProgressBar from "../components/Dashboard/ProgressBar";
import NetWorth from "../components/Dashboard/NetWorth";
import DeactivateAccount from "../components/overlays/DectivateAccount";

// import MultiStep from "react-multistep"
// import StepOne from "../components/MultiStepForm/StepOne";
// import StepTwo from "../components/MultiStepForm/StepTwo";
// import StepThree from "../components/MultiStepForm/StepThree";
// import StepFour from "../components/MultiStepForm/StepFour";
// import { useEffect, useState } from "react";

function Dashboard() {

  return (
    <>
      <DeactivateAccount />
      <Header title="FIRE Journey Dashboard"/>
      {/* <div>
        <MultiStep activeStep={0} prevButton={{title: 'Back', style:{ borderColor: 'red', marginRight: "1rem" }}} >
          <StepOne title='Step 1'/>
          <StepTwo title='Step 2'/>
          <StepThree title='Step 3'/>
          <StepFour title='Step 4'/>
        </MultiStep>
        <div className='app-footer'>
          <h6>Use navigation buttons or click on progress bar for next step.</h6>
        </div>
      </div> */}
      <Stages />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 pt-3 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-center justify-between">
            {/* <div className="flex items-center gap-x-4 text-xs"> */}
              <NetWorth />
            {/* </div> */}
          </article>
          <article className="flex max-w-xl flex-col items-center justify-between">
            {/* <div className="flex items-center gap-x-4 text-xs"> */}
              <AssetAllocation />
            {/* </div> */}
          </article>
          {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"> */}
            <article className="flex max-w-xl flex-col items-center justify-between">
              {/* <div className="flex items-center gap-x-4 text-xs"> */}
                <NetCashFlow />
              {/* </div> */}
            </article>
            {/* <article className="flex max-w-xl flex-col items-center justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <ProgressBar />
              </div>
            </article> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;