import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    image,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
  } = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedPlant = Object.fromEntries(new FormData(form));

    fetch(`https://plant-care-tracker-server-ten.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Plant updated successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          navigate("/plantDetails/" + _id);
        }
      });
  };

  return (
    <div className="w-full px-4 py-10">
      {/* Back Link */}
      <Link
        to="/"
        className="text-lg font-semibold text-green-800 dark:text-green-300 hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Form */}
      <div className="bg-[#f9f9f6] dark:bg-gray-900 p-10 rounded-xl shadow-md text-gray-800 dark:text-gray-200">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-300 mb-4">
          Update Plant Information
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          Modify the details of your plant and update the database.
        </p>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Plant Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Image */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Care Level */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Care Level</label>
            <input
              type="text"
              name="careLevel"
              defaultValue={careLevel}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Watering Frequency */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              defaultValue={wateringFrequency}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Health Status */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              defaultValue={healthStatus}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Last Watered */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Last Watered Date</label>
            <input
              type="date"
              name="lastWatered"
              defaultValue={lastWatered}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Next Watering */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Next Watering Date</label>
            <input
              type="date"
              name="nextWatering"
              defaultValue={nextWatering}
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              rows="4"
              required
              className="p-2 rounded border bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition cursor-pointer"
            >
              Update Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
