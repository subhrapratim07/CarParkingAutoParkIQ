import React from "react";
import Location from "./Location";


function Cards2() {
  return (
      <>
           <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                    <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-11">
                      <img src="https://img.freepik.com/free-vector/man-looking-through-loupe-car-route-mobile-map-app-persons-hand-holding-magnifying-glass-flat-vector-illustration-gps-service-location-concept-banner-website-design-landing-web-page_74855-24914.jpg?t=st=1716189411~exp=1716193011~hmac=ad546a499fb7f5844c1cabea92b900240a057e69faa0a8bc08e752200b01f85b&w=740" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Search Parking!</h2>
                      <p>Click On <span className="font-bold text-blue-800 ">Go Now </span>And Find Your Parking Area</p>
                      <div className="card-actions">
                      <div className="">
                <a
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_6").showModal()
                  }
                >
                  GO NOW
                </a>
              
                  </div>  
                   </div>
                    </div>
                </div>
            </div>
            <Location />
        </div>
      </>
  );
}

export default Cards2;
