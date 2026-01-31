import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css'
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Footer = lazy(() => import("./components/Footer"));
const CalculateFIRENumber = lazy(() => import("./components/CalculateYourFIRENumber"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const StackedLayout = lazy(() => import("./components/StackedLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Page = lazy(() => import("./components/Blog/Page"));
const Pages = lazy(() => import("./components/Blog/Pages"));

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

function App() {
  const [user, setUser] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  // useEffect(()=>{
  //   const getUser = ()=>{
  //     fetch(`${SERVER_URL}/auth/login/success`, {
  //       method:"GET", 
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //      .then((response) => {
  //       if (response.status === 200) return response.json();
  //       throw new Error("authentication has failed!");
  //      })
  //      .then((resObject) => {
  //       setUser(resObject.user);
  //     })
  //      .catch((err) => {
  //       console.log(err);
  //     });
  //   };
  //   getUser();
  // },[]);

  // Set dark theme manually
  darkTheme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col min-h-screen">
      <Suspense fallback={<div className="container">Loading...</div>}>
        <BrowserRouter>
          <Navbar user={user} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/" element={<Dashboard user={user}/>} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
            <Route path="/calculatefirenumber" element={user ? <Navigate to="/" /> : <CalculateFIRENumber />} />
            <Route path="/dashboard" element={<Dashboard user={user}/>} />
            <Route path="/profile" element={<CalculateFIRENumber />} />
            <Route path='*' element={<PageNotFound />}/>
            <Route path='/pages' element={<Pages />}/>
            <Route path='/pages/:slug' element={<Page />}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <main className="flex-grow"></main>
      <Footer />
    </div> 
  );
}

export default App;
