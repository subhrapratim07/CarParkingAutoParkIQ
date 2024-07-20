import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
// import Location from "./Location";
// import Payment from "./Payment";

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const regInfo = {
      carnumber: data.carnumber,
      entrydate: data.entrydate,
      entrytime: data.entrytime,
      exitdate: data.exitdate,
      area: data.area,
      slot: data.slot,
      amount: data.amount,
      code: data.code,
    };

    setFormData(regInfo);

    await axios
      .post("http://localhost:4001/book/booking", regInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Registration Successfully");
          // document.getElementById("my_modal_4").close();
          // navigate("/", { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  const handleDownload = () => {
    const data = new Blob(
      [
        `Car Number: ${formData.carnumber}\n`,
        `Entry Date: ${formData.entrydate}\n`,
        `Entry Time: ${formData.entrytime}\n`,
        `Exit Date: ${formData.exitdate}\n`,
        `Parking Area: ${formData.area}\n`,
        `Slot Number: ${formData.slot}\n`,
        `Amount: ${formData.amount}\n`,
        `Token Number: ${formData.code}\n`,
      ],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = "booking_info.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/Help"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              ✕
            </Link>

            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm bg-base-100">
                {/* Car Number */}
                <div className="mt-4 space-y-2">
                  <span>Car Number</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Car Number"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("carnumber", { required: true })}
                  />
                  <br />
                  {errors.carnumber && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Entry Date */}
                <div className="mt-4 space-y-2">
                  <span>Entry Date</span>
                  <br />
                  <input
                    type="date"
                    placeholder="Enter your Entry Date"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("entrydate", { required: true })}
                  />
                  <br />
                  {errors.entrydate && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Entry Time */}
                <div className="mt-4 space-y-2">
                  <span>Entry Time</span>
                  <br />
                  <input
                    type="time"
                    placeholder="Enter your Entry Time"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("entrytime", { required: true })}
                  />
                  <br />
                  {errors.entrytime && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Exit Date */}
                <div className="mt-4 space-y-2">
                  <span>Exit Date</span>
                  <br />
                  <input
                    type="date"
                    placeholder="Enter your Exit Date"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("exitdate", { required: true })}
                  />
                  <br />
                  {errors.exitdate && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Parking Area</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter The Area"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("area", { required: true })}
                  />
                  <br />
                  {errors.area && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Parking Slot Number</span>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter The Slot Number"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("slot", { required: true })}
                  />
                  <br />
                  {errors.slot && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Amount</span>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter your Amount"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("amount", { required: true })}
                  />
                  <br />
                  {errors.amount && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>Tocken Number</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Tocken Number"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("code", { required: true })}
                  />
                  <br />
                  {errors.code && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="pt-5 flex flex-col space-y-2">
                  <button
                    className="input-info w-full max-w-xs btn btn-outline btn-success"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="input-info w-full max-w-xs btn btn-outline btn-info"
                    onClick={handleDownload}
                  >
                    Download
                  </button>
                </div>
                {/* <Location /> */}
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Booking;
