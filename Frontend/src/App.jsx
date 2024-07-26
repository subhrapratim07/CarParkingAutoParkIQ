import React from 'react';
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Helps from "./helps/Helps";
import Signup from "./components/Signup";
import Abouts from "./abouts/Abouts";
import Contacts from "./contacts/Contacts";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import CarParkingArea from "./components/CarParkingArea";
import Location from "./components/Location";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Help" element={authUser ? <Helps /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/About" element={<Abouts />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/location" element={<Location />} />
        <Route path="/carparkingarea" element={<CarParkingArea />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
