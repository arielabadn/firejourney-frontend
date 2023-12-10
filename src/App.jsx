import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import CalculateFIRENumber from "./components/CalculateYourFIRENumber";
import PageNotFound from "./pages/PageNotFound";
import StackedLayout from "./components/StackedLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const getUser = ()=>{
      fetch("http://localhost:3000/auth/login/success", {
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
       .then((resObject) => {
        setUser(resObject.user);
      })
       .catch((err) => {
        console.log(err);
      });
    };
    getUser();
  },[]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
          <Route path="/calculatefirenumber" element={user ? <Navigate to="/" /> : <CalculateFIRENumber />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<CalculateFIRENumber />} />
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      <main className="flex-grow"></main>
      <Footer />
    </div> 
  );
}

export default App;
