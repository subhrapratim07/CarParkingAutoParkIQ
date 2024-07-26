import React from "react";
import Exit from "./Exit";

function Cards4() {
  return (
      <>
           <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                    <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-1">
                      <img src="https://img.freepik.com/premium-vector/exit-right-sign-symbol-icon-green-design-vector-illustration_685751-611.jpg?w=740" alt="Shoes" className="rounded-xl pt-6" />
                    </figure>
                    <div className="card-body items-center text-center mt-1">
                      <h2 className="card-title">Exit!</h2>
                      <p>Click On <span className="font-bold text-blue-800 ">Go Now </span> And Exit from parking space </p>
                      <div className="">
                <a
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_8").showModal()
                  }
                >
                  GO NOW
                </a>
                    
              </div>
                    </div>
                    
                </div>
                <Exit />
            </div>
        </div>
      </>
  );
}

export default Cards4;
