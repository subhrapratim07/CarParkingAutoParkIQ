import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Location() {
  const [parkingData, setParkingData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:4001/area", { params: { Location: data.Location } });
      setParkingData(res.data);
      toast.success("Data fetched successfully");
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

  const handleRadioChange = (index) => {
    setSelectedRow(index);
    const selectedItem = parkingData[index];
    localStorage.setItem("selectedParking", JSON.stringify(selectedItem));
  };

  const handleViewDetails = (item) => {
    navigate("/carparkingarea", { state: { item } });
  };

  useEffect(() => {
    const fetchParkingStatus = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:4001/parking-status");
        setParkingData(res.data);
      } catch (err) {
        console.error("", err);
        setLoading(false);
      }
    };

    fetchParkingStatus();
  }, []);

  return (
    <div>
      <dialog id="my_modal_6" className="modal hero min-h-screen bg-base-200">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="pl-10 mb-10 text-4xl font-bold">Here Are The Parking Areas!</h1>
              {loading ? (
                <div>Loading...</div>
              ) : (
                parkingData.length > 0 && (
                  <div>
                    <table className="min-w-full bg-white border border-gray-300 overflow-x-auto">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="px-2 py-3 text-left text-sm font-bold">Select</th>
                          <th className="px-2 py-3 text-left text-sm font-bold">Road Name</th>
                          <th className="px-2 py-3 text-left text-sm font-bold">Parking Stretch</th>
                          <th className="px-2 py-3 text-left text-sm font-bold">Parking Side</th>
                          <th className="px-2 py-3 text-left text-sm font-bold">Remarks</th>
                          <th className="px-2 py-3 text-left text-sm font-bold">Cost</th>
                          <th className="px-2 py-3 text-left text-sm font-bold">View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parkingData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">
                              <input
                                type="radio"
                                name="radio-7"
                                className="radio radio-info"
                                checked={selectedRow === index}
                                onChange={() => handleRadioChange(index)}
                              />
                            </td>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">{item.RoadName}</td>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">{item.ParkingStretch}</td>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">{item.ParkingSide}</td>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">{item.Remarks}</td>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">{item.Cost}</td>
                            <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-700">
                              <button
                                className="btn btn-outline btn-info"
                                onClick={() => handleViewDetails(item)}
                                disabled={item.availableSlots.length === 0}
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              )}
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                <div className="modal-box pr-20 pl-20 pt-10 pb-10 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <button className="mt-5 mb-10 input-info w-full max-w-xs btn btn-outline btn-success">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Location;
