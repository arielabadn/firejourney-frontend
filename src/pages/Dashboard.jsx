import Header from "../components/Header";
import Stages from "../components/Dashboard/Stages";
import CashFlow from "../components/Dashboard/Cashflow";
import AssetAllocation from "../components/Dashboard/AssetAllocation";
import NetWorth from "../components/Dashboard/NetWorth";
import OverlayWindow from "../components/overlays/OverlayWindow";
import { useState, useEffect } from "react";
import Disclaimer from "../components/overlays/Disclaimer";
import UserDashboardDataForm from "../components/overlays/UserDashboardDataForm";
import Welcome from "../components/overlays/Welcome";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCustomDashboardButton, setShowCustomDashboardButton] = useState(true);

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

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch(`${SERVER_URL}/auth/login/success`, {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

  return (
    <>
      <Welcome />      
      <Header title={user ? user.given_name + "'s FIRE Journey Dashboard" : "FIRE Journey Dashboard"}/>
      { showCustomDashboardButton ? 
        <>
          <div className="mx-auto max-w-7xl pb-4">
            <button
              type="button"
              className="inline-flex w-96 justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              onClick={() => {
                setShowCustomDashboardButton(false);
                setShowForm(true);
              }}
            >
              Customize Dashboard
            </button>
          </div>
        </>
        : <></>
      }
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
      { showForm ? 
        <>
          <Disclaimer setShowForm={setShowForm} />
          <UserDashboardDataForm user={user} userData={userData} showForm={showForm} setShowForm={setShowForm} setUserData={setUserData} setShowDashboard={setShowDashboard}/>
        </>
        : <></>
      }
      { showCustomDashboardButton ? 
        <div className="mx-auto max-w-7xl pt-4">
          {/* <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            onClick={() => {
              setShowCustomDashboardButton(false);
              setShowForm(true);
            }}
          >
            Customize Dashboard
          </button> */}
        </div>
        : 
        <>
          <div className="pt-4 text-center">
            <button
              type="button"
              className="w-96 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              onClick={() => {window.location.reload(false);}}
            >
              Start over
            </button>
          </div>
          <div className="pt-2 text-center">
            <button
              type="button"
              className="w-96 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              onClick={() => {setShowForm(true);}}
            >
              Update data
            </button>
          </div>
        </>
      }
    </>
  );
}

export default Dashboard;
