import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Location() {
  const [parkingData, setParkingData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // State to track selected row
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.get("http://localhost:4001/area", { params: { Location: data.Location } });
      setParkingData(res.data);
      toast.success("Data fetched successfully");
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  // Function to handle radio button selection
  const handleRadioChange = (index) => {
    setSelectedRow(index);
    // You can perform additional actions based on the selected row here
  };

  return (
    <div>
      <dialog id="my_modal_6" className="modal hero min-h-screen bg-base-200">
        
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className="modal-box pr-20 pl-20 pt-10 pb-10">
            <Link
              to="/Help"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_6").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg mb-4">Find Parking</h3>
            <select
              className="select select-info w-full max-w-xs mb-4"
              {...register("Location", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>Select Car Parking Areas</option>
              <option value="Hazra">Hazra</option>
              <option value="Kalighat">Kalighat</option>
              <option value="Rash Behari">Rash Behari</option>
              <option value="Park Street">Park Street</option>
              <option value="Dalhousie Square">Dalhousie Square</option>
              <option value="Esplaned">Esplaned</option>
              <option value="Howrah">Howrah</option>
              <option value="Sealdah">Sealdah</option>
              <option value="Shyambazar">Shyambazar</option>
            </select>
            {errors.Location && (
              <span className="text-sm text-red-500">
                <br />
                This field is required
              </span>
            )}
            <br />
            <button className="mt-5  mb-10 input-info w-full max-w-xs btn btn-outline btn-success">
              Search
            </button>
            </div>
            {parkingData.length > 0 && (
              <div className="">
                <table className="  min-w-full bg-white border border-gray-300">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold">Select</th>
                      <th className="px-6 py-3 text-left text-sm font-bold">Road Name</th>
                      <th className="px-6 py-3 text-left text-sm font-bold">Parking Stretch</th>
                      <th className="px-6 py-3 text-left text-sm font-bold">Parking Side</th>
                      <th className="px-6 py-3 text-left text-sm font-bold">Remarks</th>
                      <th className="px-6 py-3 text-left text-sm font-bold">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parkingData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <input
                            type="radio"
                            name="radio-7"
                            className="radio radio-info"
                            checked={selectedRow === index}
                            onChange={() => handleRadioChange(index)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.RoadName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.ParkingStretch}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.ParkingSide}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.Remarks}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.Cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </form>
       
      </dialog>
    </div>
  );
}

export default Location;

