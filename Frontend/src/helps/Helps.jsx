import React from "react";
import Navbar from "../components/Navbar";
import Help from "../components/Help";
import Footer from "../components/Footer";

function Halps() {
  return (
      <>
        <Navbar/>  
        <div className="min-h-screen ">
        <Help/>
        </div>
        <Footer/>
      
      </>
  );
}

export default Halps;
