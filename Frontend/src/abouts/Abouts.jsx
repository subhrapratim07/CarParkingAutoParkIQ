import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";



function Abouts() {
  return (
    <>
        <Navbar/>  
        <div className="min-h-screen ">
        <About/>
        </div>
    </>
  );
}

export default Abouts;
