import { useRef, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

function Welcome() {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(true);

  const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

  const continueEmail = {email: "", subject: "firejourneyapp", message: "New access to demo dashboard"};
  const facebookEmail = {email: "", subject: "firejourneyapp_facebook", message: "User clicked facebook page button in welcome message"};
  const submitEmail = async (data) => {
    const mailerState = {
      email: data.email,
      subject: data.subject,
      message: data.message,
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

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen(false);
          submitEmail(continueEmail);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 h-10 w-10 xl:mb-3">
                    <InformationCircleIcon
                      className="h-10 w-10 text-blue-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        FIRE Journey App
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Hey there! We're thrilled to have you on board with
                          the FIRE Journey App. <br />
                          <br />
                          Feel free to explore the charts and sample data in the
                          demo dashboard. Once you're familiar with the app,
                          input your own data to customize the dashboard.
                          <br />
                          <br />
                          We'd love to hear your feedback about this tailored
                          app for the FI/FIRE Community. Click the facebook page
                          button to leave us your comments. Don't forget to like
                          and follow the facebook page to receive notifications
                          about the app's progress.
                          <br />
                          <br />
                          <a
                            href="https://www.facebook.com/firejourneyapp"
                            target="_blank"
                            className="inline-flex w-auto justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus:outline-none"
                            onClick={() => {
                              submitEmail(facebookEmail);
                            }}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Facebook page
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none"
                    onClick={() => {
                      setOpen(false);
                      submitEmail(continueEmail);
                    }}
                    ref={buttonRef}
                  >
                    Continue
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Welcome;
