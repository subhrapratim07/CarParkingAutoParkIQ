import React from "react";
import Payment from "./Payment";
// import Booking from "./Booking";
// import React, { useEffect } from "react";
// import { useState } from "react";

function Cards() {
  return (
      <>
        
           <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                          <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-9">
                      <img src="https://img.freepik.com/free-vector/parking-concept-illustration_114360-6644.jpg?t=st=1716189594~exp=1716193194~hmac=bda96a6b59037fd2b7efe2439765e23032b6cefdc9e088b4efd6d59818cc9a92&w=740" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Book Parking!</h2>
                      <p>Click On <span className="font-bold text-blue-800 ">Go Now </span> And Fill Up Parking Details</p>
                      <div className="card-actions">
                      <div className="">
                <a
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_7").showModal()
                  }
                >
                  GO NOW
                </a>
              
              </div>
                      </div>
                    </div>
                </div>
            </div>
            <Payment/>
        </div>
        
      </>
  );
}

export default Cards;
