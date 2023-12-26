import Header from "../components/Header";
import Stages from "../components/Dashboard/Stages";
import CashFlow from "../components/Dashboard/Cashflow";
import AssetAllocation from "../components/Dashboard/AssetAllocation";
import NetWorth from "../components/Dashboard/NetWorth";
import ProgressBar from "../components/Dashboard/ProgressBar";
import OverlayWindow from "../components/overlays/OverlayWindow";
import { useState, useEffect } from "react";
import ProgressBarHorizontal from "../components/Dashboard/ProgressBarHorizontal";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    stage: null,
    netWorth: null,
    assets: null,
    liabilities: null,
    investedTotal: null,
    stocks: null,
    bonds: null,
    cash: null,
    other: null,
    investedPercentage: null,
    cashFlow: null,
    income: null,
    expenses: null,
    savingsRate: null,
    fireNumber: null,
    fiPercentage: null,
  });

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
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
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <OverlayWindow user={user} show={true} setUserData={setUserData} />
      <Header title={user ? user.given_name + "'s FIRE Journey Dashboard" : "FIRE Journey Dashboard"}/>

      {/* <Stages userData={userData}/>
      <div className="mx-auto max-w-7xl">        
        <div className="flex flex-wrap gap-x-2 gap-y-4 pt-2">          
          <div className="mx-auto xl:w-2/7">
            <NetWorth userData={userData}/>
          </div>
          <div className="mx-auto xl:w-2/7">
            <AssetAllocation userData={userData}/>
          </div>
          <div className="mx-auto xl:w-2/7">
            <CashFlow userData={userData}/>
          </div>
          <div className="mx-auto xl:w-1/7">
            <ProgressBar />
          </div>
        </div>
      </div> */}

      <Stages userData={userData} />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article>
            <NetWorth userData={userData} />
          </article>
          <article className="flex max-w-xl flex-col items-center justify-between">
            <AssetAllocation userData={userData} />
          </article>
          <article className="flex max-w-xl flex-col items-center justify-between">
            <CashFlow userData={userData} />
          </article>
        </div>
      </div>
    </>
  );
}

export default Dashboard;