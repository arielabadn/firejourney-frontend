import Google from "../Img/google.svg";
import Header from "../components/Header";

function Login() {

  const google = () => {
      window.open("http://localhost:3000/auth/google", "_self");
  };

  const github = () => {
      window.open("http://localhost:3000/auth/github", "_self");
  };

  const facebook = () => {
      window.open("http://localhost:3000/auth/facebook", "_self");
  };
  return (
    <>
      {/* <Header title="FIRE Journey"/> */}
      <div className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">
            Sign in or sign up in seconds
          </h2>
          <p className="mt-6 leading-9 tracking-tight text-gray-900 dark:text-gray-300">
            Use your email or another service to continue with FIRE Journey (it's free)!
          </p>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-x-6">
            <div>
              <button 
                className="flex w-full justify-center rounded-md bg-white dark:bg-gray-700 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 hover:dark:bg-gray-600" //focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                onClick={google}  
              >
                <img className="h-5 w-5 mr-3" src={Google} alt="" />
                <span>Continue with Google</span>
              </button>
            </div>
        </div> */}

        <div className="text-center">
          <p className="text-base font-semibold text-gray-600 dark:text-gray-500">Fire Journey</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl">Sign in or sign up in seconds</h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Use your email or another service to continue with FIRE Journey (it's free)!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div>
              <button 
                className="flex w-full justify-center rounded-md bg-white dark:bg-gray-700 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 hover:dark:bg-gray-600" //focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                onClick={google}  
              >
                <img className="h-5 w-5 mr-3" src={Google} alt="" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;





/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

          {/* <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            {/* <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>              
            </div> */}

                      {/* </form> */}

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}