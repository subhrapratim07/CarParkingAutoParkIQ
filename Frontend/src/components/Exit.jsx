import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Exit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
        const userInfom = {
          carnumber: data.carnumber,
        };
    await axios
      .post("http://localhost:4001/exit/exiting", userInfom)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Exit Now!");
          document.getElementById("my_modal_8").close();
          // setTimeout(() => {
          //   window.location.reload();
          //   localStorage.setItem("Users", JSON.stringify(res.data.user));
          // }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div >
      <dialog id="my_modal_8" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/Help"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_8").close()}
            >
              ✕
            </Link>
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="card shrink-0 w-full max-w-sm bg-base-100">
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
            {/* <div className="mt-4 space-y-2">
              <span>Enter Exit date  
              </span>
              <br />
              <input
                type="text"
                placeholder="Exit Entry Date"
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
              <span>Enter Slot Number</span>
              <br />
              <input
                type="text"
                placeholder="Enter slot Number"
                className="input input-bordered input-info w-full max-w-xs"
                {...register("slot", { required: true })}
              />
              <br />
              {errors.slot && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div> */}
        <div className="form-control mt-6">
          <button className="input-info w-full max-w-xs btn btn-outline btn-success">Exit</button>
        </div>
        </div>
        </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Exit;
