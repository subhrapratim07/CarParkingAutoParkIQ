import React, { useState } from "react";
import { Link } from "react-router-dom";
import qr from "../../public/QR.png";
import Code from './Code';
import Booking from "./Booking";

function Payment() {
  const [showCode, setShowCode] = useState(false);
  const [upiAddress, setUpiAddress] = useState("");
  const [isPayClicked, setIsPayClicked] = useState(false);
  const [code, setCode] = useState("");

  const handlePayClick = (e) => {
    e.preventDefault();
    if (upiAddress) {
      setShowCode(true);
      setIsPayClicked(true);
      generateCode();
    }
  };

  const handleUpiChange = (e) => {
    setUpiAddress(e.target.value);
    setIsPayClicked(false); // Reset the pay click state if the UPI address is changed
  };

  const generateCode = () => {
    const newCode = generateRandomTenCharacterString();
    setCode(newCode);
  };

  const generateRandomTenCharacterString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  return (
    <>
      <div>
        <dialog id="my_modal_7" className="modal">
          <div className="modal-box">
            <Link
              to="/Help"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_7").close()}
            >
              ✕
            </Link>

            <div className="order-1 w-full mt-5 md:w-1/2 flex items-center">
              <img
                src={qr}
                className="md:w-[300px] md:h-[240px] md:ml-12 items-center"
                alt="it is an image"
              />
            </div>

            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm bg-base-100">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Enter UPI Address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="anshuman@okabi"
                      className="input input-bordered input-info w-full max-w-xs"
                      value={upiAddress}
                      onChange={handleUpiChange}
                      required
                      
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      className="input-info w-full max-w-xs btn btn-outline btn-primary"
                      onClick={handlePayClick}
                    >
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {showCode && (
              <div className="mt-2">
                <Code code={code} />
              </div>
            )}

            <div className="ml-6 pl-3 form-control mt-4">
              <button
                className={`input-info w-full max-w-xs btn btn-outline btn-success ${!isPayClicked ? 'btn-disabled' : ''}`}
                onClick={() => document.getElementById("my_modal_4").showModal()}
                disabled={!isPayClicked}
              >
                Go Next
              </button>
            </div>
            
            <Booking code={code} />
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Payment;
