import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Booking({ code }) {
  const location = useLocation();
  const selectedParking = JSON.parse(localStorage.getItem("selectedParking")) || {};
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([1, 2, 3, 4]); // All possible slots initially
  const [formData, setFormData] = useState({
    carnumber: "",
    entrydate: "",
    entrytime: "",
    exitdate: "",
    area: selectedParking.RoadName || "",
    slot: "",
    amount: selectedParking.Cost || "",
    code: code
  });

  useEffect(() => {
    setFormData({
      ...formData,
      area: selectedParking.RoadName || "",
      amount: selectedParking.Cost || ""
    });
  }, [selectedParking]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData
  });

  const checkSlotAvailability = async (area, slot) => {
    try {
      const res = await axios.get("http://localhost:4001/book/check-slot", { params: { area, slot } });
      return res.status === 200;
    } catch (err) {
      return false;
    }
  };

  const filterAvailableSlots = async () => {
    const slots = [1, 2, 3, 4];
    const filteredSlots = [];
    for (const slot of slots) {
      const isAvailable = await checkSlotAvailability(formData.area, slot);
      if (isAvailable) {
        filteredSlots.push(slot);
      }
    }
    setAvailableSlots(filteredSlots);
  };

  useEffect(() => {
    if (formData.area) {
      filterAvailableSlots();
    }
  }, [formData.area]);

  const handleDownload = (data) => {
    const downloadData = new Blob(
      [
        `Car Number: ${data.carnumber}\n`,
        `Entry Date: ${data.entrydate}\n`,
        `Entry Time: ${data.entrytime}\n`,
        `Exit Date: ${data.exitdate}\n`,
        `Parking Area: ${data.area}\n`,
        `Slot Number: ${data.slot}\n`,
        `Amount: ${data.amount}\n`,
        `Token Number: ${data.code}\n`,
      ],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(downloadData);
    const a = document.createElement("a");
    a.href = url;
    a.download = "booking_info.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const onSubmit = async (data) => {
    setLoading(true);
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

    try {
      const res = await axios.post("http://localhost:4001/book/booking", regInfo);
      if (res.data) {
        toast.success("Parking slot booked successful");
        document.getElementById("my_modal_4").close();
        document.getElementById("my_modal_7").close();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        handleDownload(data);  // Call handleDownload with form data
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
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
                  {errors.exitdate && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Parking Area */}
                <div className="mt-4 space-y-2">
                  <span>Parking Area</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter The Area"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("area", { required: true })}
                    defaultValue={formData.area}
                    disabled
                  />
                  {errors.area && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Parking Slot Number */}
                <div className="mt-4 space-y-2">
                  <span>Parking Slot Number</span>
                  <br />
                  <select
                    className="select select-bordered select-info w-full max-w-xs"
                    {...register("slot", { required: true })}
                  >
                    <option value="">Select a Slot</option>
                    {availableSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.slot && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Amount */}
                <div className="mt-4 space-y-2">
                  <span>Amount</span>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter your Amount"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("amount", { required: true })}
                    defaultValue={formData.amount}
                    disabled
                  />
                  {errors.amount && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Token Number */}
                <div className="mt-4 space-y-2">
                  <span>Token Number</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Token Number"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("code", { required: false })}
                    value={code}
                    disabled
                  />
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
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Booking;
