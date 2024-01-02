import { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Tooltip } from '@mui/material';

function UserDashboardDataForm({user, userData, setShowForm, setUserData, setShowDashboard}) {
  
  const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
  
  const submitEmail = async (data) => {
    const mailerState = {
      email: "",
      subject: "firejourneyapp_dashboard",
      message: JSON.stringify(data),
    };
    // console.log(JSON.stringify({ mailerState }));
    const response = await fetch(`${SERVER_URL}/nodemailer/send`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        // // console.log(resData);
        // if (resData.status === "success") {
        //   // alert("Message Sent");
        //   console.log("Message Sent");
        // } else if (resData.status === "fail") {
        //   // alert("Message failed to send");
        //   console.log("Message failed to send");
        // }
      })
      .then(() => {
        // setMailerState({
        //   email: "",
        //   subject: "",
        //   message: "",
        // });
        null;
      });
  };

    const cancelButtonRef = useRef(null)
    const currencyFormatOptions = { 
      // style: "currency", 
      currency: "USD", 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 3
    };
    const [form, setForm] = useState(userData ? {
      income: userData.income != null ? userData.income.toLocaleString(undefined, currencyFormatOptions) : "0",
      expenses: userData.expenses != null ? userData.expenses.toLocaleString(undefined, currencyFormatOptions) : "0",
      assets: userData.assets != null ? userData.assets.toLocaleString(undefined, currencyFormatOptions) : "0",
      liabilities: userData.liabilities != null ? userData.liabilities.toLocaleString(undefined, currencyFormatOptions) : "0",
      stocks: userData.stocks != null ? userData.stocks.toLocaleString(undefined, currencyFormatOptions) : "0",
      bonds: userData.bonds != null ? userData.bonds.toLocaleString(undefined, currencyFormatOptions) : "0",
      cash: userData.cash != null ? userData.cash.toLocaleString(undefined, currencyFormatOptions) : "0",
      other: userData.other != null ? userData.other.toLocaleString(undefined, currencyFormatOptions) : "0",
      firetype: "Traditional",
      // retirementexpenses: userData.retirementexpenses != null ? userData.retirementexpenses : "0",
      firenumber: userData.fireNumber != null ? userData.fireNumber.toLocaleString(undefined, currencyFormatOptions) : "0",
    }: {
      income: "0",
      expenses: "0",
      assets: "0",
      liabilities: "0",
      stocks: "0",
      bonds: "0",
      cash: "0",
      other: "0",
      firetype: "Traditional",
      // retirementexpenses: "0",
      firenumber: "0",
    });
  
    const handleClose = (event) => {
      setShowForm(false);
      setShowDashboard(true);
    }
  
    const getAssetsValue = () => {
      return (Number(form.stocks.replaceAll(",","")) + Number(form.bonds.replaceAll(",","")) + Number(form.cash.replaceAll(",","")) + Number(form.other.replaceAll(",",""))).toLocaleString();
    }
  
    const handleChange = (event) => {
      if (event.target.id != "firetype" && isNaN(Number(event.target.value.replaceAll(",","")))) {
        null;
      } else {
        setForm({
          ...form,
          [event.target.id]: event.target.id != "firetype" ? Number(event.target.value.replaceAll(",","")).toLocaleString() : event.target.value,
          ["assets"]: Number(getAssetsValue().replaceAll(",","")),
        });
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setShowForm(false);
  
      // Calculate Net Worth, Cash Flow, FIRE number, stage, rates and update setUserData
      const income = Number(form.income.replaceAll(",",""));
      const expenses = Number(form.expenses.replaceAll(",",""));
      // const assets = Number(form.assets.replaceAll(",",""));
      const assets = form.assets;
      const liabilities = Number(form.liabilities.replaceAll(",",""));
      const fireNumber = Number(form.firenumber.replaceAll(",", ""));
      const stocks = Number(form.stocks.replaceAll(",",""));
      const bonds = Number(form.bonds.replaceAll(",",""));
      const other = Number(form.other.replaceAll(",",""));
      const cash = Number(form.cash.replaceAll(",",""));
      const cashFlow = income - expenses;
      const savingsRate = income > 0 ? (cashFlow / income) * 100 : 0;
      const netWorth = assets - liabilities;
      const fiPercentage = fireNumber > 0 ? Math.round((netWorth / fireNumber) * 100) : 0;
      const investedTotal = stocks + bonds + other;
      const investedPercentage = assets > 0 ? (investedTotal / assets) * 100 : 0;
  
      switch(true){
        case (netWorth < 0):
          var stage = 1;
          break;
        case (netWorth == 0):
          var stage = 2;
          break;
        case (netWorth < 10000):
          var stage = 3;
          break;
        case (netWorth < 50000):
          var stage = 4;
          break;
        case (fiPercentage < 10):
          var stage = 5;
          break;
        case (fiPercentage < 25):
          var stage = 6;
          break;
        case (fiPercentage < 50):
          var stage = 7;
          break;
        case (fiPercentage < 75):
          var stage = 8;
          break;
        case (fiPercentage < 100):
          var stage = 9;
          break;
        default:
          var stage = 10;
      }
      
      const newUserData = {
        stage: stage,
        netWorth: netWorth,
        assets: assets,
        liabilities: liabilities,
        investedTotal: investedTotal,
        stocks: stocks,
        bonds: bonds,
        cash: cash,
        other: other,
        investedPercentage: investedPercentage,
        cashFlow: cashFlow,
        income: income,
        expenses: expenses,
        savingsRate: savingsRate,
        fireNumber: fireNumber,
        fiPercentage: fiPercentage,
      };

      setUserData(newUserData);

      setShowDashboard(true);      

      submitEmail(newUserData);
    };
  
    return (
        <div className="relative z-10" onClose={handleClose}>  
            <Transition 
                show={true}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition
                        show={true}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="min-h-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <img
                                    className="h-8 w-8 rounded-full"
                                    src={ user != null ? userData.picture : "./favicon.svg" }
                                    alt=""
                                    />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold text-lg leading-6 text-gray-900 dark:text-gray-300">
                                    FIRE Journey Dashboard
                                    </h3>
                                    <div className="mt-2">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Fill out the following form to create a customized dashboard, otherwise the dashboard will use sample data.
                                    </p>
                                    </div>
                                    
                                    <div className="grid gap-8 grid-cols-1">
                                    <div className="flex flex-col">
                                        <form className="mt-4 mb-2 form">
            
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-800 dark:text-gray-300">Cash Flow</p>
                                        </div>
                                        <div className="mt-2 md:flex flex-row md:space-x-4 w-full text-xs">
                                            <div className="mb-3 space-y-2 w-full text-xs">
                                            <label htmlFor="income" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Average Monthly Income</label>
                                            <input id="income" name="income" type="text" required="required" placeholder="$ Income" value={form.income} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                            </div>
                                            <div className="mb-3 space-y-2 w-full text-xs">
                                            <label htmlFor="expenses" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Average Monthly Expenses</label>
                                            <input id="expenses" name="expenses" type="text" required="required" placeholder="$ Expenses" value={form.expenses} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-800 dark:text-gray-300">Asset Allocation</p>
                                        </div>
                                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">                         
                                            <div className="w-full flex flex-col mb-3">
                                            <label htmlFor="stocks" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Stocks</label>
                                            <input id="stocks" name="stocks" type="text" placeholder="$ Stocks" value={form.stocks} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            </div>
                                            <div className="w-full flex flex-col mb-3">
                                            <label htmlFor="bonds" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Bonds</label>
                                            <input id="bonds" name="bonds" type="text" placeholder="$ Bonds" value={form.bonds} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            </div>                                  
                                            <div className="w-full flex flex-col mb-3">
                                            <label htmlFor="cash" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Cash</label>
                                            <input id="cash" name="cash" type="text" placeholder="$ Cash" value={form.cash} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            </div>
                                            <div className="w-full flex flex-col mb-3">
                                            <label htmlFor="other" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Other</label>                        
                                            <Tooltip title="Real Estate, Gold, Art, Baseball Cards, etc." placement="top">
                                              <input id="other" name="other" type="text" placeholder="$ Other" value={form.other} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            </Tooltip>
                                            </div>
                                        </div>
            
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-800 dark:text-gray-300">Net Worth</p>
                                        </div>
                                        <div className="mt-2 md:flex flex-row md:space-x-4 w-full text-xs">
                                            <div className="mb-3 space-y-2 w-full text-xs">
                                            <label htmlFor="assets" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Assets</label>                                            
                                            <Tooltip title="Assets will be calculated automatically by adding stocks, bonds, cash and other in asset allocation." placement="top">
                                              <input disabled id="assets" name="assets" type="text" required="required" placeholder="$ Total Assets" value={getAssetsValue()} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            </Tooltip>
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                            </div>
                                            <div className="mb-3 space-y-2 w-full text-xs">                                            
                                            <label htmlFor="liabilities" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ Liabilities</label>
                                            <Tooltip title="Liabilities are all the things that you owe, like credit card balance, mortgage and loans." placement="top">                                       
                                              <input id="liabilities" name="liabilities" type="text" required="required" placeholder="$ Libilities" value={form.liabilities} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            </Tooltip>
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-800 dark:text-gray-300">FIRE Journey Info</p>
                                        </div>
                                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">                                                            
                                            <div className="w-full flex flex-col mb-3">
                                            <label htmlFor="firetype" className="font-semibold text-gray-800 dark:text-gray-300 py-2">FIRE Type</label>
                                            <Tooltip title="FIRE type helps you define the lifestyle that you want to have on retirement. For now, this value is only informational, it won't be considered for any calculation." placement="top">                                            
                                              <select id="firetype" name="firetype" required="required" onChange={handleChange} className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " >
                                                  <option value="Traditional">Traditional</option>
                                                  <option value="Lean">Lean</option>
                                                  <option value="Barista">Barista</option>
                                                  <option value="Coast">Coast</option>
                                                  <option value="Fat">Fat</option>
                                              </select>
                                            </Tooltip>
                                            <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                            </div>
                                            {/* <div className="mt-2 mb-3 space-y-2 w-full text-xs">
                                            <label htmlFor="retirementexpenses" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ RE Expenses<abbr title="required">*</abbr></label>
                                            <input id="retirementexpenses" name="retirementexpenses" type="text" required="required" placeholder="$ RE Expenses" value={form.retirementexpenses} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                            </div>           */}
                                            <div className="mt-2 mb-3 space-y-2 w-full text-xs">
                                            <label htmlFor="firenumber" className="font-semibold text-gray-600 dark:text-gray-500 py-2">$ FIRE number</label>
                                            <input id="firenumber" name="firenumber" type="text" required="required" placeholder="$ FIRE number" value={form.firenumber} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" />
                                            <p className="text-red text-xs hidden">Please fill out this field.</p>
                                            </div>                   
                                        </div>
                                        
                                        {/* <p className="text-xs text-red-600 text-right my-3">Required fields are marked with an asterisk <abbr title="Required field">*</abbr></p>    */}
                                        
                                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">                        
                                            <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                                            onClick={handleClose}
                                            ref={cancelButtonRef}
                                            >
                                            Back to current dashboard
                                            </button>
                                            <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                            onClick={handleSubmit}                                            
                                            >
                                            Update dashboard
                                            </button>
                                        </div>
            
                                        </form>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardDataForm;