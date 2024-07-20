import React from "react";
import  {Link} from "react-router-dom";

function About() {
  return (
    <>
     
    
     <div className=" dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            <span className=" underline text-pink-500"> About AutoParkIQ </span>
          </h1>
         
          <p className="mt-12">

            
                <hr />
    
         

                                      AutoParkIQ is your ultimate destination for affordable online parking solutions. Our platform is designed to offer parking areas at competitive prices, ensuring convenience and savings for drivers. With a commitment to simplicity and accessibility, we operate entirely online, allowing users to easily search, book, and manage parking spaces from the comfort of their devices. <br /><br /> <hr />

                                      One of the standout advantages of AutoParkIQ is our low GST charges, ensuring transparent pricing and minimal additional fees for our customers. Our user-friendly interface and intuitive booking process make finding and reserving parking a breeze, saving you time and hassle. <br /> <br /> <hr />

                                      At AutoParkIQ, we prioritize customer satisfaction and strive to provide a seamless parking experience tailored to your needs. Join us today and discover the convenience of affordable parking at your fingertips. <br /> <br /> <hr />
         
         
            </p>
      
          
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div> 
     </div> 

    </>
  );
}

export default About;
