import React from "react";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddPlant = () => {
  const { user } = use(AuthContext);

  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPlant = Object.fromEntries(new FormData(form));
    console.log(newPlant);

    fetch("https://plant-care-tracker-server-ten.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Plant added successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="md:px-10 md:py-14 px-5 py-5">
      <Helmet>
        <title>
          Add Plant || Plant Care
        </title>
      </Helmet>
      <div className="bg-[#f9f9f6] p-10 rounded-xl shadow-md text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
          Add a New Plant
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-8">
          Fill out the form below to register a new plant in your collection.
        </p>

        <form
          onSubmit={handleAddPlant}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Image URL */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              required
              className="p-2 rounded border bg-white"
            />
          </div>

          {/* Plant Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Plant Name</label>
            <input
              type="text"
              name="name"
              placeholder="Plant Name"
              required
              className="p-2 rounded border bg-white"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Category</label>
            <select
              name="category"
              required
              className="p-2 rounded border text-gray-700"
            >
              <option value="">Select Category</option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
              <option value="tropical">Tropical</option>
            </select>
          </div>

          {/* Care Level */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Care Level</label>
            <select
              name="careLevel"
              required
              className="p-2 rounded border text-gray-700"
            >
              <option value="">Select Care Level</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              required
              className="p-2 rounded border bg-white"
            />
          </div>

          {/* Health Status */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              placeholder="Health Status"
              required
              className="p-2 rounded border bg-white"
            />
          </div>

          {/* Last Watered Date */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Last Watered Date</label>
            <input
              type="date"
              name="lastWatered"
              required
              className="p-2 rounded border bg-white"
            />
          </div>

          {/* Next Watering Date */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Next Watering Date</label>
            <input
              type="date"
              name="nextWatering"
              required
              className="p-2 rounded border bg-white"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              required
              rows="3"
              className="p-2 rounded border bg-white"
            ></textarea>
          </div>

          {/* User Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">User Email</label>
            <input
              type="text"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="p-2 rounded border bg-gray-100"
            />
          </div>

          {/* User Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">User Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="p-2 rounded border bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition cursor-pointer"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
