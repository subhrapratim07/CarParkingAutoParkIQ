import React from "react";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";
function Help() {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Experience the future of parking with SmartPark{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-8">
          Our system ensures hassle-free, real-time slot availability, 
          seamless bookings, and secure payments.
          Say goodbye to parking stress and hello to convenience with SmartPark!


          </p>
          <Link to="/">
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
       
       
        </div>
       
           <div>
         <Slider {...settings}>
               <Cards2 />
               <Cards />
               <Cards3 />
               <Cards4 />
        </Slider> 
        </div>
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              <Cards/>
        </div> */}
      
{/*         
        <div className="flex justify-around  ">

        <div className="mt-4 my-3 p-8  container ">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                 <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Go Now</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        {/* second items */}
        {/* <div className="mt-4 my-3 p-8   container">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                          <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Go Now</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        </div>  */}
       
    
    </>
  );
}

export default Help;
