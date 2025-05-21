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

    fetch(`http://localhost:3000/plants/${_id}`, {
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
          navigate("/plantDetails/"+_id);
        }
      });
  };

  return (
    <div className="w-full px-4">
      {/* Back Link */}
      <Link
        to="/"
        className="text-lg font-semibold text-[#374151] hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Update Form */}
      <div className="bg-[#F4F3F0] p-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">
          Update Plant Information
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Modify the details of your plant and update the database.
        </p>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Plant Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Care Level</label>
            <input
              type="text"
              name="careLevel"
              defaultValue={careLevel}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              defaultValue={wateringFrequency}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              defaultValue={healthStatus}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Last Watered Date</label>
            <input
              type="date"
              name="lastWatered"
              defaultValue={lastWatered}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Next Watering Date</label>
            <input
              type="date"
              name="nextWatering"
              defaultValue={nextWatering}
              className="p-2 rounded border"
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="p-2 rounded border"
              rows="4"
              required
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#4CAF50] hover:bg-[#3c9742] text-white font-bold py-2 px-6 rounded transition"
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
