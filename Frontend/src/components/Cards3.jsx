import React from "react";
import Verify from "./Verify";


function Cards3() {
  return (
      <>
           <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                          <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-1">
                      <img src="https://img.freepik.com/premium-vector/two-factor-authentication-concept-illustration_538492-58.jpg?w=740" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Verify Code!</h2>
                      <p>Click On <span className="font-bold text-blue-800 ">Go Now </span> And Verify Parking Code </p>
                      <div className="">
                <a
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  GO NOW
                </a>
                    
              </div>
                    </div>
                    
                </div>
                <Verify />
            </div>
        </div>
      </>
  );
}

export default Cards3;
